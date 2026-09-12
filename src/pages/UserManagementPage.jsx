import React, { useCallback, useEffect, useState } from 'react';
import { createUser, deleteUser, getUsers, updateUser } from '../services/api';

const emptyForm = {
  name: '',
  email: '',
  password: '',
  role: 'Viewer',
  status: 'active',
};

const roleLabels = {
  Admin: 'ผู้ดูแลระบบ',
  Editor: 'ผู้แก้ไขข้อมูล',
  Staff: 'เจ้าหน้าที่',
  Viewer: 'ผู้ดูข้อมูล',
};

const statusLabels = {
  active: 'ใช้งานอยู่',
  inactive: 'ระงับการใช้งาน',
};

function userId(user) {
  return user?.id || user?._id || '';
}

export default function UserManagementPage({ onNavigate, currentUser }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState('');

  const loadUsers = useCallback(async () => {
    setLoading(true);
    const result = await getUsers({
      search,
      role: roleFilter,
      status: statusFilter,
    });
    setLoading(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    setError('');
    setUsers(result.data?.users || []);
  }, [roleFilter, search, statusFilter]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      loadUsers();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [loadUsers]);

  const openCreateModal = () => {
    setEditingUser(null);
    setForm(emptyForm);
    setFormError('');
    setIsModalOpen(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setForm({
      name: user.name || '',
      email: user.email || '',
      password: '',
      role: user.role || 'Viewer',
      status: user.status || 'active',
    });
    setFormError('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (!actionId) setIsModalOpen(false);
  };

  const updateForm = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError('');
    setNotice('');

    if (!form.name.trim() || !form.email.trim()) {
      setFormError('กรุณากรอกชื่อและอีเมล');
      return;
    }
    if (!editingUser && form.password.length < 6) {
      setFormError('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร');
      return;
    }
    if (editingUser && form.password && form.password.length < 6) {
      setFormError('รหัสผ่านใหม่ต้องมีอย่างน้อย 6 ตัวอักษร');
      return;
    }

    setActionId(editingUser ? userId(editingUser) : 'create');
    const result = editingUser
      ? await updateUser(userId(editingUser), form)
      : await createUser(form);
    setActionId('');

    if (result.error) {
      setFormError(result.error);
      return;
    }

    setIsModalOpen(false);
    setNotice(editingUser ? 'แก้ไขข้อมูลผู้ใช้งานสำเร็จ' : 'เพิ่มผู้ใช้งานสำเร็จ');
    await loadUsers();
  };

  const handleDelete = async (user) => {
    const id = userId(user);
    if (String(id) === String(userId(currentUser))) {
      setError('ไม่สามารถลบบัญชีที่กำลังใช้งานอยู่ได้');
      return;
    }
    if (!window.confirm(`ต้องการลบผู้ใช้งาน ${user.name || user.email} ใช่หรือไม่?`)) return;

    setError('');
    setNotice('');
    setActionId(id);
    const result = await deleteUser(id);
    setActionId('');

    if (result.error) {
      setError(result.error);
      return;
    }

    setNotice('ลบผู้ใช้งานสำเร็จ');
    await loadUsers();
  };

  return (
    <div className="min-h-screen bg-background text-on-background">
      <main className="mx-auto w-full max-w-container-max px-margin-mobile py-8 md:px-margin-desktop md:py-12">
        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-secondary">
              ระบบจัดการผู้ดูแล
            </span>
            <h1 className="font-display-lg text-3xl font-bold text-primary md:text-4xl">
              จัดการผู้ใช้งาน (User Management)
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-on-surface-variant">
              เพิ่ม แก้ไข ระงับ หรือลบสมาชิกที่มีสิทธิ์เข้าถึงระบบจัดการสวนพฤกษศาสตร์
            </p>
          </div>
          <button
            type="button"
            onClick={openCreateModal}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary shadow-sm transition-colors hover:bg-secondary"
          >
            <span className="material-symbols-outlined text-lg">person_add</span>
            เพิ่มผู้ใช้งาน
          </button>
        </header>

        {(error || notice) && (
          <div
            className={`mb-6 flex items-center gap-2 rounded-xl border p-3 text-sm ${
              error
                ? 'border-error/30 bg-error-container/60 text-on-error-container'
                : 'border-secondary/30 bg-secondary-container/50 text-on-secondary-container'
            }`}
            role="alert"
          >
            <span className="material-symbols-outlined text-lg">{error ? 'error' : 'check_circle'}</span>
            <span>{error || notice}</span>
            <button
              type="button"
              onClick={() => {
                setError('');
                setNotice('');
              }}
              className="ml-auto rounded-full p-1 hover:bg-black/5"
              aria-label="ปิดข้อความ"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>
        )}

        <section className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-4 shadow-sm md:p-6">
          <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_180px_180px]">
            <label className="relative">
              <span className="sr-only">ค้นหาผู้ใช้งาน</span>
              <span className="material-symbols-outlined pointer-events-none absolute inset-y-0 left-3 flex items-center text-lg text-on-surface-variant">
                search
              </span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="ค้นหาชื่อหรืออีเมล"
                className="w-full rounded-xl border border-outline-variant/40 bg-surface-container-low py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-secondary"
              />
            </label>
            <select
              value={roleFilter}
              onChange={(event) => setRoleFilter(event.target.value)}
              className="rounded-xl border border-outline-variant/40 bg-surface-container-low px-3 py-2.5 text-sm outline-none focus:border-secondary"
              aria-label="กรองตามสิทธิ์"
            >
              <option value="">สิทธิ์ทั้งหมด</option>
              {Object.keys(roleLabels).map((role) => (
                <option key={role} value={role}>{roleLabels[role]}</option>
              ))}
            </select>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-xl border border-outline-variant/40 bg-surface-container-low px-3 py-2.5 text-sm outline-none focus:border-secondary"
              aria-label="กรองตามสถานะ"
            >
              <option value="">สถานะทั้งหมด</option>
              {Object.keys(statusLabels).map((status) => (
                <option key={status} value={status}>{statusLabels[status]}</option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-outline-variant/30 text-xs text-on-surface-variant">
                  <th className="px-3 py-3 font-semibold">ผู้ใช้งาน</th>
                  <th className="px-3 py-3 font-semibold">สิทธิ์</th>
                  <th className="px-3 py-3 font-semibold">สถานะ</th>
                  <th className="px-3 py-3 text-right font-semibold">การดำเนินการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {loading ? (
                  <tr>
                    <td colSpan="4" className="px-3 py-12 text-center text-sm text-on-surface-variant">
                      กำลังโหลดข้อมูล...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-3 py-12 text-center text-sm text-on-surface-variant">
                      ไม่พบผู้ใช้งาน
                    </td>
                  </tr>
                ) : (
                  users.map((user) => {
                    const id = userId(user);
                    const isCurrentUser = String(id) === String(userId(currentUser));
                    return (
                      <tr key={id} className="transition-colors hover:bg-surface-container-low">
                        <td className="px-3 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container font-bold text-on-primary">
                              {(user.name || user.email || '?').charAt(0).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-on-surface">{user.name}</p>
                              <p className="truncate text-xs text-on-surface-variant">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4">
                          <span className="rounded-full bg-secondary-container/60 px-2.5 py-1 text-xs font-semibold text-on-secondary-container">
                            {roleLabels[user.role] || user.role}
                          </span>
                        </td>
                        <td className="px-3 py-4">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${user.status === 'active' ? 'text-secondary' : 'text-error'}`}>
                            <span className={`h-2 w-2 rounded-full ${user.status === 'active' ? 'bg-secondary' : 'bg-error'}`} />
                            {statusLabels[user.status] || user.status}
                          </span>
                        </td>
                        <td className="px-3 py-4">
                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => openEditModal(user)}
                              className="inline-flex items-center gap-1 rounded-lg border border-outline-variant/40 px-3 py-2 text-xs font-semibold text-on-surface-variant transition-colors hover:border-secondary hover:text-secondary"
                            >
                              <span className="material-symbols-outlined text-base">edit</span>
                              แก้ไข
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(user)}
                              disabled={isCurrentUser || actionId === id}
                              title={isCurrentUser ? 'ไม่สามารถลบบัญชีที่กำลังใช้งานอยู่ได้' : 'ลบผู้ใช้งาน'}
                              className="inline-flex items-center gap-1 rounded-lg border border-error/30 px-3 py-2 text-xs font-semibold text-error transition-colors hover:bg-error-container/40 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                              <span className="material-symbols-outlined text-base">delete</span>
                              ลบ
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>

        <button
          type="button"
          onClick={() => onNavigate?.('dashboard')}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          กลับสู่แผงควบคุม
        </button>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={closeModal}>
          <div
            className="w-full max-w-lg rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-2xl md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="user-form-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 id="user-form-title" className="text-xl font-bold text-primary">
                  {editingUser ? 'แก้ไขผู้ใช้งาน' : 'เพิ่มผู้ใช้งานใหม่'}
                </h2>
                <p className="mt-1 text-xs text-on-surface-variant">
                  {editingUser ? 'เว้นช่องรหัสผ่านไว้หากไม่ต้องการเปลี่ยน' : 'กำหนดข้อมูลและสิทธิ์สำหรับบัญชีใหม่'}
                </p>
              </div>
              <button type="button" onClick={closeModal} className="rounded-full p-2 text-on-surface-variant hover:bg-surface-container" aria-label="ปิด">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {formError && (
              <div className="mb-4 flex items-center gap-2 rounded-xl border border-error/30 bg-error-container/60 p-3 text-xs text-on-error-container" role="alert">
                <span className="material-symbols-outlined text-base">error</span>
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="user-name" className="mb-1.5 block text-xs font-semibold text-on-surface">ชื่อ-นามสกุล *</label>
                <input id="user-name" required value={form.name} onChange={(event) => updateForm('name', event.target.value)} className="w-full rounded-xl border border-outline-variant/40 bg-surface-container-low px-4 py-2.5 text-sm outline-none focus:border-secondary" />
              </div>
              <div>
                <label htmlFor="user-email" className="mb-1.5 block text-xs font-semibold text-on-surface">อีเมล *</label>
                <input id="user-email" required type="email" value={form.email} onChange={(event) => updateForm('email', event.target.value)} className="w-full rounded-xl border border-outline-variant/40 bg-surface-container-low px-4 py-2.5 text-sm outline-none focus:border-secondary" />
              </div>
              <div>
                <label htmlFor="user-password" className="mb-1.5 block text-xs font-semibold text-on-surface">
                  {editingUser ? 'รหัสผ่านใหม่' : 'รหัสผ่าน *'}
                </label>
                <input id="user-password" required={!editingUser} minLength="6" type="password" value={form.password} onChange={(event) => updateForm('password', event.target.value)} placeholder={editingUser ? 'ไม่เปลี่ยนรหัสผ่าน' : 'อย่างน้อย 6 ตัวอักษร'} className="w-full rounded-xl border border-outline-variant/40 bg-surface-container-low px-4 py-2.5 text-sm outline-none focus:border-secondary" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="user-role" className="mb-1.5 block text-xs font-semibold text-on-surface">สิทธิ์ผู้ใช้งาน</label>
                  <select id="user-role" value={form.role} onChange={(event) => updateForm('role', event.target.value)} className="w-full rounded-xl border border-outline-variant/40 bg-surface-container-low px-3 py-2.5 text-sm outline-none focus:border-secondary">
                    {Object.keys(roleLabels).map((role) => <option key={role} value={role}>{roleLabels[role]}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="user-status" className="mb-1.5 block text-xs font-semibold text-on-surface">สถานะ</label>
                  <select id="user-status" value={form.status} onChange={(event) => updateForm('status', event.target.value)} className="w-full rounded-xl border border-outline-variant/40 bg-surface-container-low px-3 py-2.5 text-sm outline-none focus:border-secondary">
                    {Object.keys(statusLabels).map((status) => <option key={status} value={status}>{statusLabels[status]}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
                <button type="button" onClick={closeModal} className="rounded-full border border-outline-variant/50 px-5 py-2.5 text-sm font-semibold text-on-surface-variant hover:bg-surface-container">
                  ยกเลิก
                </button>
                <button type="submit" disabled={Boolean(actionId)} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50">
                  {actionId ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
