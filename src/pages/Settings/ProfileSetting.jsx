import React, { useState } from 'react';
import { Camera, Mail, Lock, Link as LinkIcon, Twitter, Instagram, Github, Save } from 'lucide-react';

export default function ProfileSetting() {
  return (
    <main className="max-w-4xl mx-auto pb-32">
      {/* HEADER SECTION */}
      <div className="mb-10">
        <h1 className="text-4xl font-black italic tracking-tighter text-white">Profile Settings</h1>
        <p className="text-slate-400 text-sm mt-2">Customize your public presence and security.</p>
      </div>

      <div className="space-y-8">
        {/* AVATAR UPLOAD SECTION */}
        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-4 border-white/10 overflow-hidden shadow-2xl">
              {/* This would be the user's uploaded image */}
              <div className="w-full h-full flex items-center justify-center text-3xl font-black text-white">JD</div>
            </div>
            <button className="absolute bottom-0 right-0 bg-indigo-600 p-3 rounded-full border-4 border-[#0f172a] hover:scale-110 transition-transform shadow-xl">
              <Camera size={18} className="text-white" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Your Profile Picture</h3>
            <p className="text-sm text-slate-500 max-w-xs mb-4">We support PNG, JPG or GIF. Max size of 1MB.</p>
            <div className="flex gap-3 justify-center md:justify-start">
              <button className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-colors">Upload New</button>
              <button className="px-5 py-2 text-rose-500 hover:bg-rose-500/10 rounded-xl text-xs font-bold transition-colors">Remove</button>
            </div>
          </div>
        </section>

        {/* PERSONAL INFORMATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 space-y-6 shadow-2xl">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-2">Personal Info</h3>
            
            <div className="space-y-4">
              <ProfileInput label="Full Name" placeholder="John Doe" icon={<LinkIcon size={14}/>} />
              <ProfileInput label="Email Address" placeholder="john@sonic.com" icon={<Mail size={14}/>} />
            </div>
          </section>

          <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 space-y-6 shadow-2xl">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-2">Security</h3>
            
            <div className="space-y-4">
              <ProfileInput label="Current Password" type="password" placeholder="••••••••" icon={<Lock size={14}/>} />
              <button className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors mt-2">Change Password</button>
            </div>
          </section>
        </div>

        {/* SOCIAL CONNECTIONS */}
        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-6">Social Connections</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <SocialButton icon={<Twitter size={18} />} label="Twitter" connected color="text-sky-400" />
            <SocialButton icon={<Instagram size={18} />} label="Instagram" color="text-pink-400" />
            <SocialButton icon={<Github size={18} />} label="GitHub" color="text-white" />
          </div>
        </section>
      </div>

      <div className="mt-10 flex justify-end">
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-black shadow-lg shadow-indigo-600/20 transition-all active:scale-95">
          <Save size={18} /> Update Profile
        </button>
      </div>
    </main>
  );
}

/**
 * Reusable Input Component
 */
function ProfileInput({ label, placeholder, type = "text", icon }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase text-slate-500 ml-1">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">{icon}</div>
        <input 
          type={type}
          placeholder={placeholder}
          className="w-full bg-black/20 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm font-medium focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-700"
        />
      </div>
    </div>
  );
}

/**
 * Reusable Social Link Button
 */
function SocialButton({ icon, label, connected = false, color }) {
  return (
    <button className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${connected ? 'bg-white/10 border-indigo-500/30' : 'bg-black/20 border-white/5 hover:border-white/20'}`}>
      <div className={`flex items-center gap-3 ${connected ? 'text-white' : 'text-slate-400'}`}>
        <span className={connected ? color : ''}>{icon}</span>
        <span className="text-xs font-bold">{label}</span>
      </div>
      <div className={`w-2 h-2 rounded-full ${connected ? 'bg-indigo-500 animate-pulse' : 'bg-slate-700'}`} />
    </button>
  );
}