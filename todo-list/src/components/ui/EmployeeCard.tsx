import React from 'react';
import { Employee } from '../../types/portfolio';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export interface EmployeeCardProps {
  employee: Employee;
  onViewTodos: (employee: Employee) => void;
  onDelete: (id: number, name: string) => void;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  onViewTodos,
  onDelete,
}) => {
  const initials = employee.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const gradients = [
    'from-blue-600 to-indigo-600',
    'from-purple-600 to-pink-600',
    'from-emerald-500 to-teal-700',
    'from-amber-500 to-orange-600',
    'from-cyan-600 to-blue-600',
    'from-rose-500 to-red-600',
  ];
  const grad = gradients[(employee.id || 0) % gradients.length];

  return (
    <Card hoverable className="flex flex-col justify-between group">
      <div>
        {/* Header: Avatar, Name, Username */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${grad} text-white font-extrabold flex items-center justify-center text-sm shadow-md shrink-0 group-hover:scale-105 transition-transform`}
            >
              {initials}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition">
                {employee.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium">@{employee.username || 'user'}</p>
            </div>
          </div>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
            #{employee.id}
          </span>
        </div>

        {/* Catchphrase */}
        {employee.company?.catchPhrase && (
          <div className="mb-4 bg-blue-50/60 border-l-2 border-blue-500 px-3 py-1.5 rounded-r-xl text-[11px] text-blue-900 italic">
            „{employee.company.catchPhrase}“
          </div>
        )}

        {/* Contact details */}
        <ul className="space-y-2 text-xs text-slate-600 mb-5">
          <li className="flex items-center gap-2.5">
            <i className="fa-solid fa-building text-slate-400 w-4 text-center"></i>
            <span className="font-semibold text-slate-800">{employee.company?.name || 'კომპანია მითითებული არაა'}</span>
          </li>
          <li className="flex items-center gap-2.5">
            <i className="fa-solid fa-envelope text-blue-500 w-4 text-center"></i>
            <a href={`mailto:${employee.email}`} className="hover:text-blue-600 transition truncate">
              {employee.email}
            </a>
          </li>
          <li className="flex items-center gap-2.5">
            <i className="fa-solid fa-phone text-emerald-500 w-4 text-center"></i>
            <a href={`tel:${employee.phone}`} className="hover:text-emerald-600 transition">
              {employee.phone}
            </a>
          </li>
          <li className="flex items-center gap-2.5">
            <i className="fa-solid fa-location-dot text-rose-500 w-4 text-center"></i>
            <span className="truncate">
              {employee.address?.city}
              {employee.address?.street ? `, ${employee.address.street}` : ''}
            </span>
          </li>
          {employee.website && (
            <li className="flex items-center gap-2.5">
              <i className="fa-solid fa-globe text-indigo-500 w-4 text-center"></i>
              <a
                href={`http://${employee.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition truncate"
              >
                {employee.website}
              </a>
            </li>
          )}
        </ul>
      </div>

      {/* Action buttons */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewTodos(employee)}
          icon="fa-solid fa-list-check"
          className="flex-1 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700"
        >
          დავალებები
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(employee.id, employee.name)}
          icon="fa-solid fa-trash-can"
          title="თანამშრომლის წაშლა (DELETE)"
        >
          {''}
        </Button>
      </div>
    </Card>
  );
};
