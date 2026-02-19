import React, { useEffect, useState } from 'react';
import { ShieldAlert, Eye, Pencil, Trash2, CheckCircle, XCircle } from 'lucide-react';
import userService from '../../api/userApiForJsFile';

const Permission = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    const res = userService.GET_ALL('roleList');
    if (res?.status) setData(res.data);
  };

  const onChangePermission = (params, roleIndex, moduleIndex, action) => {
    console.log(`Updating ${action} for ${params.title}`, params);
  };

  return (
    <>
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-1">
          <div className="overflow-x-auto">
            {false ? (
              /* EMPTY / LOADING STATE */
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="bg-slate-100 p-4 rounded-full mb-4">
                  <ShieldAlert className="size-10 text-slate-400" />
                </div>
                <h6 className="text-lg font-bold text-slate-800">No Role Access Found</h6>
                <p className="text-slate-500 max-w-xs mx-auto text-sm">
                  Role permissions are not configured for this user yet.
                </p>
              </div>
            ) : (
              /* PERMISSIONS TABLE */
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="sticky left-0 z-10 bg-white p-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 min-w-[200px]">
                      Role Name
                    </th>
                    {data?.[0]?.modules.map((module, idx) => (
                      <th
                        key={idx}
                        className="p-4 text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-100 text-center min-w-[150px]"
                      >
                        {module.title}
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
                <tbody className="divide-y divide-slate-50">
                  {data.map((role, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition-colors group">
                      <th className="sticky left-0 z-10 bg-white group-hover:bg-slate-50 p-4 text-sm font-bold text-slate-700 border-r border-slate-50">
                        {role?.title}
                      </th>

                      {role.modules.map((module, j) => (
                        <td key={j} className="p-4 text-center">
                          <div className="flex items-center justify-center gap-4">
                            {/* View Icon */}
                            <button
                              onClick={() => onChangePermission(module, i, j, 'View')}
                              className={`transition-transform active:scale-90 p-1 rounded-md hover:bg-white shadow-sm border border-transparent hover:border-slate-200 ${
                                module.status === 'Yes' ? 'text-emerald-500' : 'text-rose-400'
                              }`}
                              title="View Access"
                            >
                              <Eye size={18} />
                            </button>

                            {/* Edit Icon */}
                            <button
                              onClick={() => onChangePermission(module, i, j, 'Edit')}
                              className={`transition-transform active:scale-90 p-1 rounded-md hover:bg-white shadow-sm border border-transparent hover:border-slate-200 ${
                                module.edit === 'Yes' ? 'text-emerald-500' : 'text-rose-400'
                              }`}
                              title="Edit Access"
                            >
                              <Pencil size={16} />
                            </button>

                            {/* Delete Icon */}
                            <button
                              onClick={() => onChangePermission(module, i, j, 'Delete')}
                              className={`transition-transform active:scale-90 p-1 rounded-md hover:bg-white shadow-sm border border-transparent hover:border-slate-200 ${
                                module.delete === 'Yes' ? 'text-emerald-500' : 'text-rose-400'
                              }`}
                              title="Delete Access"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Permission;
