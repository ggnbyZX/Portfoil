import React, { useState, useEffect } from 'react';
import { Employee, TodoItem } from '../../types/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { EmployeeCard } from '../ui/EmployeeCard';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const Team: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isTodosModalOpen, setIsTodosModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loadingTodos, setLoadingTodos] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    city: '',
    company: '',
    website: ''
  });
  const [submittingAdd, setSubmittingAdd] = useState(false);

  // Toast notification state
  const [toast, setToast] = useState<{ show: boolean; title: string; body: string; isSuccess: boolean }>({
    show: false,
    title: '',
    body: '',
    isSuccess: true
  });

  const showToast = (title: string, body: string, isSuccess = true) => {
    setToast({ show: true, title, body, isSuccess });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  // GET /users: Fetch employee list
  const fetchEmployees = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: Employee[] = await res.json();
      setEmployees(data);
    } catch (err: any) {
      setError(err.message || 'ვერ მოხერხდა მონაცემების მიღება');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Filtered employees
  const filteredEmployees = employees.filter((emp) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      emp.name.toLowerCase().includes(q) ||
      (emp.username || '').toLowerCase().includes(q) ||
      emp.email.toLowerCase().includes(q) ||
      (emp.company?.name || '').toLowerCase().includes(q) ||
      (emp.address?.city || '').toLowerCase().includes(q)
    );
  });

  // GET /users/{id}/todos: View todos
  const handleViewTodos = async (emp: Employee) => {
    setSelectedEmployee(emp);
    setIsTodosModalOpen(true);
    setLoadingTodos(true);
    setTodos([]);

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${emp.id}/todos`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: TodoItem[] = await res.json();
      setTodos(data);
    } catch (err: any) {
      showToast('შეცდომა', `დავალებების ჩატვირთვა ვერ მოხერხდა: ${err.message}`, false);
    } finally {
      setLoadingTodos(false);
    }
  };

  // DELETE /users/{id}: Delete employee
  const handleDelete = async (id: number, name: string) => {
    if (!window.confirm(`ნამდვილად გსურთ თანამშრომლის „${name}“ წაშლა?`)) {
      return;
    }

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setEmployees((prev) => prev.filter((e) => e.id !== id));
      showToast('DELETE 200 OK', `თანამშრომელი „${name}“ წარმატებით წაიშალა.`);
    } catch (err: any) {
      showToast('შეცდომა', `წაშლა ჩაიშალა: ${err.message}`, false);
    }
  };

  // POST /users: Add employee
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmittingAdd(true);
    const newEmpData: Partial<Employee> = {
      name: formData.name,
      username: formData.username || 'user',
      email: formData.email,
      phone: formData.phone || '+995 555 12 34 56',
      website: formData.website || 'example.com',
      address: {
        city: formData.city || 'თბილისი',
        street: 'რუსთაველის გამზ.'
      },
      company: {
        name: formData.company || 'Tech Freelance',
        catchPhrase: 'Clean Code & High Performance'
      }
    };

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(newEmpData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const created: Employee = await res.json();
      created.id = Date.now() % 1000 + 11; // Unique id for React key

      setEmployees((prev) => [created, ...prev]);
      setIsAddModalOpen(false);
      setFormData({
        name: '',
        username: '',
        email: '',
        phone: '',
        city: '',
        company: '',
        website: ''
      });
      showToast('POST 201 Created!', `თანამშრომელი „${created.name}“ წარმატებით დაემატა.`);
    } catch (err: any) {
      showToast('შეცდომა', `დამატება ჩაიშალა: ${err.message}`, false);
    } finally {
      setSubmittingAdd(false);
    }
  };

  return (
    <section id="team" className="mb-14 sm:mb-20">
      <SectionHeader
        badgeText="REST API & JSONPlaceholder"
        badgeIcon="fa-solid fa-cloud-arrow-down"
        badgeVariant="emerald"
        title="თანამშრომლები & გუნდი"
        subtitle="მონაცემები დინამიურად იტვირთება JSONPlaceholder API-დან. ინტეგრირებულია POST, GET /todos და DELETE მეთოდები."
        action={
          <Button
            variant="primary"
            size="md"
            onClick={() => setIsAddModalOpen(true)}
            icon="fa-solid fa-user-plus"
          >
            თანამშრომლის დამატება (POST)
          </Button>
        }
      />

      {/* Control bar: Search & Count */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="მოძებნეთ თანამშრომელი სახელით, კომპანიით ან ქალაქით..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-2xs"
          />
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs sm:text-sm">
          <span className="font-bold text-slate-700 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs inline-flex items-center gap-1.5">
            <i className="fa-solid fa-users text-blue-600"></i>
            <span>სულ: {filteredEmployees.length} თანამშრომელი</span>
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              fetchEmployees();
            }}
            icon="fa-solid fa-rotate-right"
          >
            განახლება
          </Button>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs animate-pulse space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-200 rounded-2xl"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
                  <div className="h-3 bg-slate-200 rounded-md w-1/2"></div>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <div className="h-3 bg-slate-200 rounded-md w-full"></div>
                <div className="h-3 bg-slate-200 rounded-md w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-3xl p-6 text-center my-6">
          <i className="fa-solid fa-triangle-exclamation text-2xl text-rose-600 mb-2"></i>
          <h3 className="font-bold text-base mb-1">მონაცემების ჩატვირთვა ვერ მოხერხდა</h3>
          <p className="text-xs sm:text-sm text-rose-600 mb-4">{error}</p>
          <Button variant="danger" size="sm" onClick={fetchEmployees} icon="fa-solid fa-rotate-right">
            ხელახლა ცდა
          </Button>
        </div>
      )}

      {/* Grid of reusable EmployeeCards */}
      {!loading && !error && filteredEmployees.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredEmployees.map((emp) => (
            <EmployeeCard
              key={emp.id}
              employee={emp}
              onViewTodos={handleViewTodos}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredEmployees.length === 0 && (
        <div className="bg-white border border-slate-200/80 rounded-3xl p-10 text-center my-6">
          <i className="fa-solid fa-user-slash text-3xl text-slate-300 mb-3"></i>
          <h3 className="font-bold text-slate-800 text-base mb-1">თანამშრომელი ვერ მოიძებნა</h3>
          <p className="text-xs sm:text-sm text-slate-500">
            სცადეთ სხვა საძიებო სიტყვა ან გაასუფთავეთ საძიებო ველი.
          </p>
        </div>
      )}

      {/* Reusable Modal for POST /users (Add Employee) */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="თანამშრომლის დამატება"
        subtitle="გაგზავნის POST მოთხოვნას /users ენდფოინთზე"
        icon="fa-solid fa-user-plus"
      >
        <form onSubmit={handleAddSubmit} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block font-bold text-slate-700 mb-1">სახელი და გვარი *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="მაგ. ნინო ბერიძე"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">მომხმარებელი (@user) *</label>
              <input
                type="text"
                required
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="nino.beridze"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">ელ-ფოსტა *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="nino@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">ტელეფონი</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+995 555 00 11 22"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">ქალაქი</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="თბილისი"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">კომპანია</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="GeoLab Tech"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setIsAddModalOpen(false)}
            >
              გაუქმება
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={submittingAdd}
              icon="fa-solid fa-paper-plane"
            >
              {submittingAdd ? 'იგზავნება...' : 'დამატება (POST)'}
            </Button>
          </div>
        </form>
      </Modal>

      {/* Reusable Modal for GET /users/{id}/todos */}
      <Modal
        isOpen={isTodosModalOpen}
        onClose={() => setIsTodosModalOpen(false)}
        title={selectedEmployee ? `${selectedEmployee.name} — დავალებები` : 'დავალებები'}
        subtitle={selectedEmployee ? `GET /users/${selectedEmployee.id}/todos` : ''}
        icon="fa-solid fa-list-check"
      >
        {loadingTodos ? (
          <div className="py-8 text-center text-slate-500">
            <i className="fa-solid fa-spinner fa-spin text-2xl text-blue-600 mb-2"></i>
            <p className="text-xs">დავალებები იტვირთება სერვერიდან...</p>
          </div>
        ) : (
          <div className="space-y-2 pr-1">
            {todos.length === 0 ? (
              <p className="text-center text-slate-500 text-xs py-4">დავალებები არ არის.</p>
            ) : (
              todos.map((t) => (
                <div
                  key={t.id}
                  className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm ${
                    t.completed
                      ? 'bg-emerald-50/50 border-emerald-200/70 text-emerald-900'
                      : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <i
                    className={`fa-solid ${
                      t.completed ? 'fa-circle-check text-emerald-600' : 'fa-circle text-slate-300'
                    } text-sm mt-0.5`}
                  ></i>
                  <span className={t.completed ? 'line-through text-slate-500 flex-1' : 'flex-1 font-medium'}>
                    {t.title}
                  </span>
                </div>
              ))
            )}
          </div>
        )}
      </Modal>

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <div className="bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-800 text-xs sm:text-sm max-w-md">
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                toast.isSuccess ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
              }`}
            >
              <i className={`fa-solid ${toast.isSuccess ? 'fa-check' : 'fa-circle-exclamation'}`}></i>
            </div>
            <div>
              <h4 className="font-bold text-white text-xs sm:text-sm">{toast.title}</h4>
              <p className="text-slate-300 text-xs mt-0.5">{toast.body}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
