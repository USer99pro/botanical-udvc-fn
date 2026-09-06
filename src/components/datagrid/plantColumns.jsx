import React from 'react';
import { createColumnHelper, Subscribe } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

/**
 * Factory for botanical plant columns
 * @param {Object} options
 * @param {(plantId: string) => void} options.onSelectPlant - Callback when viewing plant details
 * @param {(text: string) => void} options.onCopyCode - Callback when copying plant code
 */
export function getPlantColumns({ onSelectPlant, onCopyCode } = {}) {
  return [
    // Row selection checkbox column with isolated reactive subscription
    columnHelper.display({
      id: 'select',
      size: 48,
      minSize: 40,
      maxSize: 60,
      enableResizing: false,
      header: ({ table }) => (
        <div className="flex items-center justify-center">
          <Subscribe
            source={table.store}
            selector={(state) => {
              const isAll = table.getIsAllRowsSelected();
              const isSome = table.getIsSomeRowsSelected();
              return { isAll, isSome };
            }}
          >
            {({ isAll, isSome }) => (
              <input
                type="checkbox"
                checked={isAll}
                ref={(el) => {
                  if (el) el.indeterminate = isSome && !isAll;
                }}
                onChange={table.getToggleAllRowsSelectedHandler()}
                aria-label="Select all rows"
                className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary/40 cursor-pointer accent-secondary transition-colors"
              />
            )}
          </Subscribe>
        </div>
      ),
      cell: ({ row, table }) => (
        <div className="flex items-center justify-center">
          <Subscribe
            source={table.atoms.rowSelection}
            selector={(selection) => !!selection?.[row.id]}
          >
            {(isSelected) => (
              <input
                type="checkbox"
                checked={isSelected}
                disabled={!row.getCanSelect()}
                onChange={row.getToggleSelectedHandler()}
                aria-label={`Select plant ${row.original.nameTh}`}
                className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary/40 cursor-pointer accent-secondary transition-colors"
              />
            )}
          </Subscribe>
        </div>
      ),
    }),

    // Plant Code (ก.7-003)
    columnHelper.accessor('plantCode', {
      header: 'รหัสพรรณไม้',
      size: 150,
      minSize: 120,
      cell: (info) => {
        const code = info.getValue() || '-';
        return (
          <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-secondary">
            <span className="bg-secondary-container/50 px-2 py-0.5 rounded border border-secondary/20">
              {code}
            </span>
            {onCopyCode && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onCopyCode(code);
                }}
                title="คัดลอกรหัส"
                className="text-on-surface-variant/60 hover:text-primary p-0.5 rounded transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">content_copy</span>
              </button>
            )}
          </div>
        );
      },
    }),

    // Thai Name & Thumbnail
    columnHelper.accessor('nameTh', {
      header: 'ชื่อพรรณไม้ / ชื่อพื้นเมือง',
      size: 260,
      minSize: 200,
      sortingFn: 'thaiAlphanumeric',
      filterFn: 'fuzzySearch',
      cell: (info) => {
        const plant = info.row.original;
        return (
          <div className="flex items-center gap-3 py-1">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-surface-container shrink-0 border border-outline-variant/30 shadow-xs">
              <img
                src={plant.imageUrl}
                alt={plant.nameTh}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-primary text-sm truncate flex items-center gap-1">
                <span>{plant.nameTh}</span>
              </div>
              {plant.nameLocal && (
                <div className="text-[11px] text-on-surface-variant/80 truncate">
                  ชื่อพื้นเมือง: {plant.nameLocal}
                </div>
              )}
            </div>
          </div>
        );
      },
    }),

    // Scientific Name
    columnHelper.accessor('scientificName', {
      header: 'ชื่อวิทยาศาสตร์',
      size: 220,
      minSize: 180,
      filterFn: 'fuzzySearch',
      cell: (info) => (
        <span className="italic text-xs font-medium text-on-surface-variant font-serif">
          {info.getValue() || '-'}
        </span>
      ),
    }),

    // Family (วงศ์)
    columnHelper.accessor('family', {
      header: 'วงศ์ (Family)',
      size: 180,
      minSize: 140,
      filterFn: 'fuzzySearch',
      cell: (info) => (
        <span className="text-xs text-on-surface-variant">
          {info.getValue() || '-'}
        </span>
      ),
    }),

    // Category
    columnHelper.accessor('categoryLabel', {
      id: 'category',
      header: 'หมวดหมู่',
      size: 160,
      minSize: 130,
      filterFn: 'fuzzySearch',
      cell: (info) => {
        const cat = info.getValue() || info.row.original.category || '-';
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span className="truncate">{cat}</span>
          </span>
        );
      },
    }),

    // Location / Zone
    columnHelper.accessor('zone', {
      header: 'พิกัด / โซนเรียนรู้',
      size: 200,
      minSize: 150,
      cell: (info) => (
        <div className="flex items-center gap-1 text-xs text-on-surface-variant">
          <span className="material-symbols-outlined text-[15px] text-secondary shrink-0">
            location_on
          </span>
          <span className="truncate">{info.getValue() || 'แปลงศึกษา UDVC'}</span>
        </div>
      ),
    }),

    // Registration Status
    columnHelper.accessor('status', {
      header: 'สถานะบันทึก',
      size: 150,
      minSize: 120,
      cell: (info) => {
        const status = info.getValue() || 'บันทึกแล้ว';
        const isComplete = status.includes('สมบูรณ์');
        return (
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              isComplete
                ? 'bg-secondary-container text-on-secondary-container border border-secondary/20'
                : 'bg-surface-container-highest text-on-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined text-xs">
              {isComplete ? 'verified' : 'pending'}
            </span>
            <span>{status}</span>
          </span>
        );
      },
    }),

    // Management Actions
    columnHelper.display({
      id: 'actions',
      header: () => <div className="text-right">จัดการ</div>,
      size: 110,
      minSize: 90,
      enableResizing: false,
      cell: ({ row }) => (
        <div className="text-right">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onSelectPlant) onSelectPlant(row.original.id);
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-high text-primary hover:bg-secondary hover:text-on-secondary text-xs font-semibold transition-all cursor-pointer shadow-2xs"
          >
            <span>ดูข้อมูล</span>
            <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </button>
        </div>
      ),
    }),
  ];
}
