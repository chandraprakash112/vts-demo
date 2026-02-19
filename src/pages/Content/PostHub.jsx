import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Play, Repeat2 } from 'lucide-react';
import { tracks } from '../../apiDatabase/StoryData';

export default function PostHub() {
  const posts = [
    {
      id: 1,
      user: "Alex Rivera",
      avatar: "AR",
      content: "Finally caught the new M83 album. This track specifically feels like traveling through space. 🌌 #ElectronicMusic",
      track: tracks[0], // Linked to your data
      likes: 124,
      comments: 18,
      time: "2h ago",
      isLiked: true
    },
    {
      id: 2,
      user: "Sarah Chen",
      avatar: "SC",
      content: "Morning vibes with some classic Weeknd. Can't believe this album is already a few years old.",
      track: tracks[3],
      likes: 89,
      comments: 5,
      time: "5h ago",
      isLiked: false
    }
  ];

  return (
    <main className="max-w-2xl mx-auto pb-32">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white italic tracking-tighter">Community</h1>
        <p className="text-slate-400 text-sm">See what your friends are vibing to.</p>
      </div>

      {/* POST LIST */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 shadow-xl">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center border border-white/20">
                  <span className="text-xs font-bold text-white">{post.avatar}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{post.user}</h4>
                  <p className="text-[10px] text-slate-500 font-medium">{post.time}</p>
                </div>
              </div>
              <button className="text-slate-500 hover:text-white transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Post Content */}
            <p className="text-slate-200 text-sm leading-relaxed mb-4">
              {post.content}
            </p>

            {/* SHARED MUSIC CARD (The "Embedded" Track) */}
            <div className="bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center gap-4 mb-4 group cursor-pointer hover:bg-black/60 transition-colors">
              <div className="relative shrink-0">
                <img src={post.track.cover} className="w-16 h-16 rounded-xl object-cover" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                  <Play size={20} fill="white" className="text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-bold text-white truncate">{post.track.title}</h5>
                <p className="text-xs text-slate-400 truncate">{post.track.artist}</p>
              </div>
              <button className="p-2 text-slate-400 hover:text-indigo-400">
                <Repeat2 size={18} />
              </button>
            </div>

            {/* Post Actions */}
            <div className="flex items-center gap-6 pt-2 border-t border-white/5">
              <button className={`flex items-center gap-2 text-sm transition-colors ${post.isLiked ? 'text-rose-500' : 'text-slate-400 hover:text-rose-500'}`}>
                <Heart size={18} fill={post.isLiked ? "currentColor" : "none"} />
                <span className="font-bold">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 text-sm transition-colors">
                <MessageCircle size={18} />
                <span className="font-bold">{post.comments}</span>
              </button>
              <button className="text-slate-400 hover:text-white transition-colors ml-auto">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}