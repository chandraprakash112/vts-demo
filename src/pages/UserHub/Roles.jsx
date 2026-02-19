import React, { useEffect, useState } from 'react';
import { ShieldCheck, Plus, Pencil, Trash2, X, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { useCommon } from '../../context/CommonContext';
import userService from '../../api/userApiForJsFile';

const RoleAccess = () => {
  const { isMobile, user } = useCommon();
  const [data, setData] = useState([]);
  const [expandedRole, setExpandedRole] = useState(null); // For Mobile Accordion
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleName, setRoleName] = useState('');
  const [currentRole, setCurrentRole] = useState(null);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    const res = userService.GET_ALL('roleList');
    if (res?.status) setData(res.data);
  };

  const toggleRoleMobile = (id) => setExpandedRole(expandedRole === id ? null : id);

  const onChangeRoleAccess = (roleId, moduleIndex, action) => {
    const keyMap = { View: 'view', Edit: 'edit', Delete: 'delete' };
    const key = keyMap[action];
    setData(
      data.map((role) => {
        if (role.id === roleId) {
          const updatedModules = [...role.modules];
          updatedModules[moduleIndex][key] =
            updatedModules[moduleIndex][key] === 'Yes' ? 'No' : 'Yes';
          return { ...role, modules: updatedModules };
        }
        return role;
      }),
    );
  };

  const DesktopAction = ({ active, icon, onClick }) =>
    user?.role ? (
      <button
        onClick={onClick}
        className={`p-sm r-sm border transition-all hover:scale-110 active:scale-90 ${active ? 'bg-emerald-50 border-emerald-100 text-emerald-600 shadow-sm' : 'bg-white border-slate-100 text-red-300 '} pointer`}
      >
        {icon}
      </button>
    ) : (
      <div
        onClick={onClick}
        className={`p-sm r-sm border transition-all ${active ? 'bg-emerald-50 text-emerald-200' : 'text-slate-300 '} border-slate-100`}
      >
        {icon}
      </div>
    );

  return (
    <div className="p-2 bg-slate-50">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-2">
            <ShieldCheck className="text-blue-600" /> Role Access
          </h1>
          <p className="text-slate-500 text-xs md:text-sm font-medium">
            Manage permissions per role
          </p>
        </div>
        <button
          onClick={() => {
            setCurrentRole(null);
            setRoleName('');
            setIsModalOpen(true);
          }}
          className="w-full md:w-auto bg-blue-600 text-white px-5 py-3 r-sm font-bold flex items-center justify-center gap-2 shadow-lg"
        >
          <Plus size={18} /> Create Role
        </button>
      </div>

      {isMobile ? (
        <div className="space-y-4">
          {data.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <div
                onClick={() => toggleRoleMobile(role.id)}
                className="p-4 flex justify-between items-center cursor-pointer bg-white"
              >
                <span className="font-bold text-slate-800">{role.title}</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setData(data.filter((r) => r.id !== role.id));
                    }}
                    className="text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                  {expandedRole === role.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              {expandedRole === role.id && (
                <div className="p-4 pt-0 border-t border-slate-50 space-y-3">
                  {role.modules.map((module, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0"
                    >
                      <span className="text-xs font-semibold text-slate-500">{module.title}</span>
                      <div className="flex gap-2">
                        <MobileAction
                          active={module.status === 'Yes'}
                          icon={<Eye size={14} />}
                          onClick={() => onChangeRoleAccess(role.id, j, 'View')}
                        />
                        <MobileAction
                          active={module.edit === 'Yes'}
                          icon={<Pencil size={14} />}
                          onClick={() => onChangeRoleAccess(role.id, j, 'Edit')}
                        />
                        <MobileAction
                          active={module.delete === 'Yes'}
                          icon={<Trash2 size={14} />}
                          onClick={() => onChangeRoleAccess(role.id, j, 'Delete')}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white r-md border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-auto scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 sticky left-0 bg-slate-50 z-20">
                    Role Name
                  </th>
                  {data?.[0]?.modules.map((m, i) => (
                    <th
                      key={i}
                      className="p-5 text-xs font-black uppercase tracking-widest text-blue-600 border-b border-slate-100 text-center"
                    >
                      {m.title}
                    </th>
                  ))}
                </tr>
                <tr className="bg-white">
                  <th className="sticky left-0 z-10 bg-white border-b border-slate-100"></th>
                  {data?.[0]?.modules.map((_, idx) => (
                    <th
                      key={idx}
                      className="p-2 text-[10px] font-medium text-slate-400 border-b border-slate-100 text-center"
                    >
                      View / Edit / Delete
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((role, i) => (
                  <tr key={role.id} className="hover:bg-slate-50/50 group transition-colors">
                    <th className="p-4 border-b border-slate-100 sticky left-0 bg-white group-hover:bg-slate-50 z-10">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-bold text-slate-700">{role.title}</span>
                        {user?.role === 'admin' ? (
                          <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => {
                                setCurrentRole(role);
                                setRoleName(role.title);
                                setIsModalOpen(true);
                              }}
                              className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg"
                            >
                              <Pencil size={14} />
                            </button>
                            <button
                              onClick={() => setData(data.filter((r) => r.id !== role.id))}
                              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </th>
                    {role.modules.map((module, j) => (
                      <td key={j} className="p-4 border-b border-slate-100 text-center">
                        <div className="flex justify-center gap-2">
                          <DesktopAction
                            active={module.status === 'Yes'}
                            icon={<Eye size={14} />}
                            onClick={() => onChangeRoleAccess(role.id, j, 'View')}
                          />
                          <DesktopAction
                            active={module.edit === 'Yes'}
                            icon={<Pencil size={14} />}
                            onClick={() => onChangeRoleAccess(role.id, j, 'Edit')}
                          />
                          <DesktopAction
                            active={module.delete === 'Yes'}
                            icon={<Trash2 size={14} />}
                            onClick={() => onChangeRoleAccess(role.id, j, 'Delete')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL - Simplified */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[2rem] w-full max-w-sm p-6 shadow-2xl">
            <h2 className="text-lg font-black mb-4">{currentRole ? 'Edit Role' : 'New Role'}</h2>
            <input
              className="w-full bg-slate-50 border border-slate-200 p-4 r-sm outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              placeholder="Role Name"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 font-bold text-slate-500"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (currentRole) {
                    setData(
                      data.map((r) => (r.id === currentRole.id ? { ...r, title: roleName } : r)),
                    );
                  } else {
                    setData([
                      ...data,
                      {
                        id: Date.now(),
                        title: roleName,
                        modules: data[0].modules.map((m) => ({
                          ...m,
                          status: 'No',
                          edit: 'No',
                          delete: 'No',
                        })),
                      },
                    ]);
                  }
                  setIsModalOpen(false);
                }}
                className="flex-[2] bg-slate-900 text-white py-3 r-sm font-bold shadow-lg"
              >
                Save Role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// HELPER COMPONENTS
const MobileAction = ({ active, icon, onClick }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-lg border transition-all ${active ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-slate-50 border-slate-100 text-slate-300'}`}
  >
    {icon}
  </button>
);

export default RoleAccess;
