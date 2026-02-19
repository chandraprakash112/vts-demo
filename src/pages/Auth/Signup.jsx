import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon, UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useCommon } from '../../context/CommonContext';
import SocailLogin from './SocailLogin';

// --- Reusable FormControl Component (Keep this consistent with Login) ---
const FormControl = ({ label, children, error, className = '' }) => (
  <div className={`flex flex-col space-y-2 ${className}`}>
    {label && <label className="block text-sm text-white/80 ml-1 font-medium">{label}</label>}
    <div className="relative">{children}</div>
    {error && <span className="text-red-400 text-xs ml-1">{error}</span>}
  </div>
);

function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate();
  const { detail } = useCommon();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for registration
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Registering User:', formData);
    // processRegistration(formData);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center md:p-4 
        bg-[url('/public/images/banner.jpg')] 
        bg-no-repeat bg-cover bg-center
        relative overflow-hidden"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Glassmorphism Card */}
      <div className="relative w-full max-w-[500px] bg-white/10 backdrop-blur-lg border border-white/20 md:rounded-xl lg:rounded-3xl p-6 md:p-10 shadow-2xl z-10 my-10">
        <div className="text-center mb-6">
          <h3 className="text-white text-xl font-medium opacity-90 tracking-tight">Your logo</h3>
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-white/60 text-sm mb-8">Join our community and start your journey.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <FormControl label="Full Name">
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              required
            />
          </FormControl>

          {/* Email */}
          <FormControl label="Email Address">
            <input
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              required
            />
          </FormControl>

          {/* Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormControl label="Password">
              <input
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPass ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </FormControl>

            <FormControl label="Confirm">
              <input
                name="confirmPassword"
                type={showPass ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-white rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
            </FormControl>
          </div>

          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative">
              <input type="checkbox" className="peer sr-only" />
              <div className="w-4 h-4 border border-white/30 rounded bg-white/10 peer-checked:bg-blue-400 peer-checked:border-blue-400 transition-all"></div>
              <svg
                className="absolute top-0.5 left-0.5 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-white/70 group-hover:text-white transition-colors selection:bg-none">
              I agree to the{' '}
              <span className="text-blue-200 cursor-pointer">Terms & Conditions</span>
            </span>
          </label>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#002855] hover:bg-[#001f44] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center py-6">
          <div className="flex-grow border-t border-white/20"></div>
          <span className="mx-3 text-[10px] uppercase tracking-widest text-white/40 font-bold">
            Or Sign up with
          </span>
          <div className="flex-grow border-t border-white/20"></div>
        </div>

        <SocailLogin />

        {/* Back to Login Link */}
        <p className="mt-8 text-center text-sm text-white/70">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-blue-200 hover:text-white font-bold transition-colors underline decoration-transparent hover:decoration-blue-200"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}



export default Signup;