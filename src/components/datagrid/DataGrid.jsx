import React, { useState, useRef, useEffect } from 'react';
import { flexRender, Subscribe } from '@tanstack/react-table';

/**
 * Helper to download CSV
 */
function downloadCSV(data, filename = 'botanical-data.csv') {
  if (!data || !data.length) return;
  const headers = Object.keys(data[0]);
  const rows = data.map((item) =>
    headers
      .map((header) => {
        const val = item[header] ?? '';
        const escaped = String(val).replace(/"/g, '""');
        return `"${escaped}"`;
      })
      .join(',')
  );
  const csvContent = [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * TanStack Table V9 Headless Data Grid Component
 *
 * Renders accessible, semantic HTML table elements with fine-grained
 * reactive reads backed by TanStack Store.
 */
export default function DataGrid({
  table,
  title = 'ตารางข้อมูลพรรณไม้',
  subtitle = 'ทะเบียนพืชศึกษาตามแบบบันทึก ก.7-003',
  isLoading = false,
  showToolbar = true,
  showPagination = true,
  density: externalDensity = 'comfortable',
  onRowClick,
  className = '',
}) {
  const [density, setDensity] = useState(externalDensity);
  const [isColMenuOpen, setIsColMenuOpen] = useState(false);
  const colMenuRef = useRef(null);

  // Close column visibility popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (colMenuRef.current && !colMenuRef.current.contains(event.target)) {
        setIsColMenuOpen(false);
      }
    }
    if (isColMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isColMenuOpen]);

  const densityPadding = {
    compact: 'py-2 px-3 text-xs',
    comfortable: 'py-3.5 px-4 text-sm',
  }[density];

  // Helper for exporting rows
  const handleExport = (exportSelectedOnly = false) => {
    const rowsToExport = exportSelectedOnly
      ? table.getSelectedRowModel().rows.map((r) => r.original)
      : table.getFilteredRowModel().rows.map((r) => r.original);

    if (!rowsToExport.length) return;

    // Flatten botanical plant records for CSV
    const cleanData = rowsToExport.map((p) => ({
      รหัสพรรณไม้: p.plantCode || '',
      ชื่อไทย: p.nameTh || '',
      ชื่อพื้นเมือง: p.nameLocal || '',
      ชื่อวิทยาศาสตร์: p.scientificName || '',
      วงศ์: p.family || '',
      หมวดหมู่: p.categoryLabel || p.category || '',
      สถานะ: p.status || '',
      พิกัดโซน: p.zone || '',
    }));

    downloadCSV(
      cleanData,
      `botanical-udvc-export-${new Date().toISOString().slice(0, 10)}.csv`
    );
  };

  const leafColumns = table.getAllLeafColumns();
  const visibleLeafColumns = table.getVisibleLeafColumns();
  const rowModel = table.getRowModel();
  const rows = rowModel.rows;

  return (
    <div className={`flex flex-col bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden ${className}`}>
      {/* 1. Header & Reactive Toolbar */}
      {showToolbar && (
        <div className="p-4 sm:p-5 border-b border-outline-variant/20 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">table_chart</span>
                <span>{title}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-normal">
                  v9 Grid
                </span>
              </h3>
              {subtitle && (
                <p className="font-body-md text-xs text-on-surface-variant mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Reactive Selection Actions Banner */}
            <Subscribe
              source={table.store}
              selector={(state) => Object.keys(state.rowSelection || {}).length}
            >
              {(selectedCount) => (
                <div className="flex items-center gap-2">
                  {selectedCount > 0 ? (
                    <div className="flex items-center gap-2 bg-secondary-container/70 border border-secondary/30 px-3 py-1.5 rounded-xl animate-fade-in">
                      <span className="text-xs font-semibold text-on-secondary-container">
                        เลือกแล้ว <strong>{selectedCount}</strong> รายการ
                      </span>
                      <button
                        type="button"
                        onClick={() => handleExport(true)}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">download</span>
                        <span>ส่งออกที่เลือก</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => table.resetRowSelection()}
                        className="text-xs text-on-surface-variant hover:text-primary px-1.5 py-1 rounded transition-colors"
                        title="ล้างการเลือกทั้งหมด"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleExport(false)}
                        className="px-3 py-1.5 rounded-xl border border-outline-variant/40 hover:bg-surface-container text-xs font-medium text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                        title="ส่งออกตารางเป็นไฟล์ CSV"
                      >
                        <span className="material-symbols-outlined text-[16px] text-secondary">file_download</span>
                        <span>ส่งออก CSV</span>
                      </button>
                    </div>
                  )}

                  {/* Density toggle */}
                  <div className="inline-flex rounded-xl border border-outline-variant/30 p-0.5 bg-surface-container-low">
                    <button
                      type="button"
                      onClick={() => setDensity('compact')}
                      title="ความกระชับ: กะทัดรัด (Compact)"
                      className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                        density === 'compact'
                          ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold'
                          : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">density_small</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDensity('comfortable')}
                      title="ความกระชับ: โปร่งสบาย (Comfortable)"
                      className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                        density === 'comfortable'
                          ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold'
                          : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">density_medium</span>
                    </button>
                  </div>

                  {/* Column Visibility Menu */}
                  <div className="relative" ref={colMenuRef}>
                    <button
                      type="button"
                      onClick={() => setIsColMenuOpen((prev) => !prev)}
                      className={`p-2 rounded-xl border transition-colors cursor-pointer flex items-center gap-1 text-xs font-medium ${
                        isColMenuOpen
                          ? 'bg-secondary-container text-on-secondary-container border-secondary/40'
                          : 'border-outline-variant/40 hover:bg-surface-container text-on-surface-variant'
                      }`}
                      title="ซ่อน/แสดงคอลัมน์"
                    >
                      <span className="material-symbols-outlined text-[18px]">view_column</span>
                      <span className="hidden sm:inline">คอลัมน์</span>
                    </button>

                    {isColMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-56 p-3 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-xl z-30 animate-in fade-in zoom-in-95">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-outline-variant/20">
                          <span className="text-xs font-bold text-primary">แสดงคอลัมน์</span>
                          <button
                            type="button"
                            onClick={() => table.toggleAllColumnsVisible(true)}
                            className="text-[11px] text-secondary hover:underline cursor-pointer"
                          >
                            แสดงทั้งหมด
                          </button>
                        </div>
                        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                          {leafColumns
                            .filter((c) => c.id !== 'select' && c.id !== 'actions')
                            .map((column) => {
                              const isVisible = column.getIsVisible();
                              const headerTitle =
                                typeof column.columnDef.header === 'string'
                                  ? column.columnDef.header
                                  : column.id;
                              return (
                                <label
                                  key={column.id}
                                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface-container text-xs cursor-pointer select-none text-on-surface"
                                >
                                  <input
                                    type="checkbox"
                                    checked={isVisible}
                                    onChange={column.getToggleVisibilityHandler()}
                                    className="w-3.5 h-3.5 rounded border-outline-variant text-secondary focus:ring-secondary/40 accent-secondary"
                                  />
                                  <span className="truncate">{headerTitle}</span>
                                </label>
                              );
                            })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Subscribe>
          </div>

          {/* Quick Search Bar within Data Grid */}
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg pointer-events-none">
              search
            </span>
            <Subscribe
              source={table.store}
              selector={(state) => state.globalFilter || ''}
            >
              {(globalFilter) => (
                <div className="relative w-full">
                  <input
                    type="text"
                    value={globalFilter}
                    onChange={(e) => table.setGlobalFilter(e.target.value)}
                    placeholder="กรองในตาราง (รหัส, ชื่อไทย, ชื่อวิทย์, วงศ์)..."
                    aria-label="Filter grid rows"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl py-2 pl-10 pr-9 text-xs font-body-md focus:border-secondary focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary/30 transition-all outline-hidden"
                  />
                  {globalFilter && (
                    <button
                      type="button"
                      onClick={() => table.setGlobalFilter('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-primary p-0.5 rounded transition-colors"
                      title="ล้างคำค้น"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  )}
                </div>
              )}
            </Subscribe>
          </div>
        </div>
      )}

      {/* 2. Semantic Table Element Container */}
      <div
        className="relative overflow-x-auto focus:outline-hidden"
        role="region"
        aria-label={title}
        tabIndex={0}
      >
        <table
          role="grid"
          aria-colcount={visibleLeafColumns.length}
          aria-rowcount={rows.length}
          className="w-full text-left border-collapse select-text"
          style={{ width: '100%', tableLayout: 'auto' }}
        >
          {/* Semantic Table Header */}
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                role="row"
                className="border-b border-outline-variant/20 bg-surface-container-low/90 text-on-surface-variant text-xs font-label-md"
              >
                {headerGroup.headers.map((header) => {
                  const isSortable = header.column.getCanSort();
                  const isSorted = header.column.getIsSorted(); // 'asc' | 'desc' | false
                  const isResizing = header.column.getIsResizing();

                  return (
                    <th
                      key={header.id}
                      scope="col"
                      role="columnheader"
                      aria-sort={
                        isSorted === 'asc'
                          ? 'ascending'
                          : isSorted === 'desc'
                          ? 'descending'
                          : 'none'
                      }
                      style={{
                        width: header.getSize(),
                        position: 'relative',
                      }}
                      className={`${densityPadding} font-semibold transition-colors relative group select-none`}
                    >
                      {header.isPlaceholder ? null : (
                        <div className="flex items-center justify-between gap-1">
                          <div
                            onClick={
                              isSortable
                                ? header.column.getToggleSortingHandler()
                                : undefined
                            }
                            className={`flex items-center gap-1.5 flex-1 min-w-0 ${
                              isSortable
                                ? 'cursor-pointer hover:text-primary transition-colors'
                                : ''
                            }`}
                          >
                            <span className="truncate">
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </span>

                            {/* Sort Arrow Indicators */}
                            {isSortable && (
                              <span className="inline-flex items-center">
                                {isSorted === 'asc' ? (
                                  <span className="material-symbols-outlined text-[16px] text-secondary font-bold">
                                    arrow_upward
                                  </span>
                                ) : isSorted === 'desc' ? (
                                  <span className="material-symbols-outlined text-[16px] text-secondary font-bold">
                                    arrow_downward
                                  </span>
                                ) : (
                                  <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-40 transition-opacity">
                                    unfold_more
                                  </span>
                                )}
                              </span>
                            )}
                          </div>

                          {/* Column Resizer Handle */}
                          {header.column.getCanResize() && (
                            <div
                              onMouseDown={header.getResizeHandler()}
                              onTouchStart={header.getResizeHandler()}
                              className={`absolute right-0 top-0 h-full w-2 cursor-col-resize user-select-none touch-none hover:bg-secondary/40 transition-colors ${
                                isResizing ? 'bg-secondary w-1' : ''
                              }`}
                              style={{ transform: 'translateX(50%)' }}
                              title="ลากเพื่อปรับขนาดคอลัมน์"
                            />
                          )}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          {/* Semantic Table Body */}
          <tbody className="divide-y divide-outline-variant/15 font-body-md text-on-surface">
            {isLoading ? (
              <tr>
                <td
                  colSpan={visibleLeafColumns.length}
                  className="py-16 text-center text-on-surface-variant text-sm"
                >
                  <div className="inline-flex items-center gap-3">
                    <span className="material-symbols-outlined animate-spin text-secondary text-2xl">
                      progress_activity
                    </span>
                    <span>กำลังโหลดข้อมูลในตาราง...</span>
                  </div>
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td
                  colSpan={visibleLeafColumns.length}
                  className="py-16 text-center text-on-surface-variant text-sm"
                >
                  <div className="max-w-sm mx-auto flex flex-col items-center">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant/40 mb-2">
                      search_off
                    </span>
                    <p className="font-semibold text-primary">ไม่พบข้อมูลที่ตรงกับเงื่อนไข</p>
                    <p className="text-xs text-on-surface-variant/70 mt-1">
                      ลองเปลี่ยนคำค้นหาหรือล้างตัวกรองเพื่อดูข้อมูลทั้งหมด
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        table.resetGlobalFilter();
                        table.resetColumnFilters();
                      }}
                      className="mt-4 px-4 py-1.5 rounded-full bg-secondary text-on-secondary text-xs font-semibold hover:bg-secondary/90 transition-colors cursor-pointer"
                    >
                      ล้างตัวกรอง
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              rows.map((row, rowIndex) => {
                const isSelected = row.getIsSelected();

                return (
                  <tr
                    key={row.id}
                    role="row"
                    aria-selected={isSelected}
                    onClick={() => onRowClick && onRowClick(row.original)}
                    className={`transition-colors group ${
                      onRowClick ? 'cursor-pointer' : ''
                    } ${
                      isSelected
                        ? 'bg-secondary-container/25 hover:bg-secondary-container/40'
                        : rowIndex % 2 === 1
                        ? 'bg-surface-container-low/30 hover:bg-surface-container-high/40'
                        : 'hover:bg-surface-container-high/40'
                    }`}
                  >
                    {row.getVisibleCells().map((cell, colIndex) => (
                      <td
                        key={cell.id}
                        role="gridcell"
                        aria-colindex={colIndex + 1}
                        style={{ width: cell.column.getSize() }}
                        className={`${densityPadding} align-middle`}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* 3. Reactive Pagination Footer with TanStack Store Subscription */}
      {showPagination && (
        <Subscribe
          source={table.store}
          selector={(state) => ({
            pagination: state.pagination,
            filteredRowsCount: table.getFilteredRowModel().rows.length,
          })}
        >
          {({ pagination, filteredRowsCount }) => {
            const pageIndex = pagination.pageIndex;
            const pageSize = pagination.pageSize;
            const pageCount = table.getPageCount();
            const startItem = filteredRowsCount === 0 ? 0 : pageIndex * pageSize + 1;
            const endItem = Math.min((pageIndex + 1) * pageSize, filteredRowsCount);

            return (
              <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant font-label-md">
                {/* Left: Row Count & Page Size Selector */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span>
                    แสดง <strong>{startItem}</strong> - <strong>{endItem}</strong> จาก{' '}
                    <strong>{filteredRowsCount}</strong> รายการ
                  </span>

                  <div className="flex items-center gap-1.5 pl-2 border-l border-outline-variant/30">
                    <span>แถวต่อหน้า:</span>
                    <select
                      value={pageSize}
                      onChange={(e) => table.setPageSize(Number(e.target.value))}
                      aria-label="Rows per page"
                      className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg py-1 px-2 text-xs font-semibold text-primary focus:border-secondary outline-hidden cursor-pointer"
                    >
                      {[5, 10, 15, 20, 50].map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Right: Pagination Navigation Buttons */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                    aria-label="First page"
                    className="p-1.5 rounded-lg border border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:bg-surface-container hover:enabled:text-primary transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">first_page</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    aria-label="Previous page"
                    className="p-1.5 rounded-lg border border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:bg-surface-container hover:enabled:text-primary transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                  </button>

                  <span className="px-3 py-1 font-semibold text-primary">
                    หน้า {pageIndex + 1} จาก {Math.max(1, pageCount)}
                  </span>

                  <button
                    type="button"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    aria-label="Next page"
                    className="p-1.5 rounded-lg border border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:bg-surface-container hover:enabled:text-primary transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => table.setPageIndex(pageCount - 1)}
                    disabled={!table.getCanNextPage()}
                    aria-label="Last page"
                    className="p-1.5 rounded-lg border border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:bg-surface-container hover:enabled:text-primary transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">last_page</span>
                  </button>
                </div>
              </div>
            );
          }}
        </Subscribe>
      )}
    </div>
  );
}
