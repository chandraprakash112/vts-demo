import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const ChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [show, setShow] = useState({
    current: true,
    confirm: true,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }

    console.log('Password Updated:', form);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center items-start py-5">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md lg:max-w-[520px] bg-white rounded-2xl shadow-[1px_4px_10px_0px_#00000014] border border-[#D0D7D5] p-6 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-[#5E5E5E] mb-1">
              Enter Current Password<span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <input
                type={show.current ? 'text' : 'password'}
                name="currentPassword"
                placeholder="Enter current password"
                value={form.currentPassword}
                onChange={handleChange}
                required
                className="w-full bg-[#ECECEC] rounded-lg px-4 py-2 pr-10 outline-none"
              />

              <button
                type="button"
                onClick={() => setShow({ ...show, current: !show.current })}
                className="absolute right-3 top-3 text-gray-500"
              >
                {!show.current ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#5E5E5E] mb-1">
              Enter New Password<span className="text-red-500">*</span>
            </label>

            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              value={form.newPassword}
              onChange={handleChange}
              required
              className="w-full bg-[#ECECEC] rounded-lg px-4 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#5E5E5E] mb-1">
              Re-Enter New Password<span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <input
                type={show.confirm ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Re-Enter new password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full bg-[#ECECEC] rounded-lg px-4 py-2 pr-10 outline-none"
              />

              <button
                type="button"
                onClick={() => setShow({ ...show, confirm: !show.confirm })}
                className="absolute right-3 top-3 text-gray-500"
              >
                {!show.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-1 bg-[#D9231D] hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
