import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useCommon } from '../../context/CommonContext';
import SocailLogin from './SocailLogin';
import { LOGIN } from '../../api/AuthApi';

// --- Reusable FormControl Component ---
const FormControl = ({ label, children, error, className = '' }) => (
  <div className={`flex flex-col space-y-2 ${className}`}>
    {label && <label className="block text-sm text-white/80 ml-1 font-medium">{label}</label>}
    <div className="relative">{children}</div>
    {error && <span className="text-red-400 text-xs ml-1">{error}</span>}
  </div>
);

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { detail,UpdateDetail } = useCommon();

  // Shared login logic
  const processLogin = (loginData) => {
    UpdateDetail(loginData);
    navigate('/');
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email && password) {
      const res = LOGIN(email, password);

      if (res?.status) {
        processLogin(res.data);
      } else {
        console.log(res.message);
      }
    }
  };

  const handleGuestLogin = () => {
    const guestData = {
      // name: 'Guest User',
      // email: 'guest@gmail.com',
      // password: '123456'
      id: 1,
      name: 'CP Sikarwar',
      email: 'cpsikarwar@gmail.com',
      role: 'Frontend Developer',
      userRole: 'Admin',
      company: 'Sampark Pvt Ltd',
      location: 'Gurugram, Haryana',
      package: '4.2',
      experience: '5',
      banner: '/public/images/user.jpg',
      image: '/public/images/user.jpg',
    };
    
    processLogin(guestData);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center md:p-4 
        bg-[url('/public/images/nature.avif')] 
        bg-no-repeat bg-cover bg-center
        relative overflow-hidden"
    >
      {/* Dark Overlay for better contrast against nature image */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Glassmorphism Card */}
      <div className="relative w-full max-w-[450px] bg-white/10 backdrop-blur-lg border border-white/20 md:rounded-xl lg:rounded-3xl p-3 md:p-8 shadow-2xl z-10">
        <div className="text-center mb-8">
          <h3 className="text-white text-xl font-medium opacity-90">Your logo</h3>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input wrapped in FormControl */}
          <FormControl label="Email">
            <input
              type="email"
              placeholder="username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              required
            />
          </FormControl>

          {/* Password Input wrapped in FormControl */}
          <FormControl label="Password">
            <input
              type={show ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {show ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </FormControl>

          {/* <div className="flex justify-end !mt-2">
            <button
              type="button"
              className="text-sm text-blue-200 hover:text-white transition-colors"
            >
              Forgot Password?
            </button>
          </div> */}
          <div className="flex items-center justify-between !mt-2 px-1">
            {/* Remember Me Toggle */}
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
                Remember me
              </span>
            </label>

            {/* Forgot Password Link */}
            <button
              type="button"
              className="text-sm text-blue-200 hover:text-white transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          {/* <button
            type="submit"
            className="w-full bg-[#002855] hover:bg-[#001f44] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg active:scale-[0.98] pointer"
          >
            Sign in
          </button> */}

          <div className="flex items-center gap-1 bg-white/10 p-1 rounded-2xl border border-white/20 backdrop-blur-md">
            {/* Sign In - Main Action (The "Large" Half) */}
            <button
              type="submit"
              className="flex-[4] bg-[#002855] hover:bg-[#001f44] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Sign in
            </button>

            {/* Guest Access - Quick Action (The "Small" Half) */}
            <button
              type="button"
              onClick={handleGuestLogin}
              className="flex-1 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition-all active:scale-[0.95] cursor-pointer group"
              title="Continue as Guest"
            >
              <UserCircleIcon className="h-6 w-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center py-6">
          <div className="flex-grow border-t border-white/20"></div>
          <span className="mx-3 text-[10px] uppercase tracking-widest text-white/40 font-bold">
            or continue with
          </span>
          <div className="flex-grow border-t border-white/20"></div>
        </div>

        <SocailLogin />

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-white/70">
          Don't have an account yet?{' '}
          <button
            className="text-blue-200 hover:text-white font-semibold transition-colors underline decoration-transparent hover:decoration-blue-200"
            onClick={() => navigate('/signup')}
          >
            Register for free
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
