import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, ExternalLink, ChevronRight } from 'lucide-react';

export default function AngularSnippet() {
  const [copiedId, setCopiedId] = useState(null);

  const snippets = [
    {
      id: 1,
      title: "Audio Visualizer Component",
      description: "A logic-heavy component using Web Audio API to render real-time bars.",
      language: "TypeScript",
      code: `@Component({
  selector: 'app-visualizer',
  template: '<canvas #canvas></canvas>',
  styles: ['canvas { width: 100%; height: 200px; }']
})
export class VisualizerComponent implements AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef;
  // Audio context logic here...
}`
    },
    {
      id: 2,
      title: "Music Player Service",
      description: "Global state management for play/pause and track indexing.",
      language: "RxJS / Service",
      code: `@Injectable({ providedIn: 'root' })
export class PlayerService {
  private trackSubject = new BehaviorSubject<Track | null>(null);
  currentTrack$ = this.trackSubject.asObservable();

  playTrack(track: Track) {
    this.trackSubject.next(track);
  }
}`
    }
  ];

  const copyToClipboard = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="flex flex-col lg:flex-row gap-8 pb-32">
      {/* LEFT: Snippet Explorer */}
      <div className="w-full lg:w-1/3 space-y-4">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <Code2 className="text-red-500" size={24} />
            </div>
            <h1 className="text-2xl font-black italic tracking-tighter text-white">Angular Snippets</h1>
          </div>
          <p className="text-slate-400 text-sm">Reusable blocks for the Sonic Framework.</p>
        </header>

        {snippets.map((item) => (
          <div 
            key={item.id} 
            className="group p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer shadow-xl"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{item.language}</span>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-white mb-2">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* RIGHT: Code Preview Area */}
      <div className="flex-1 space-y-6">
        {snippets.map((item) => (
          <div key={item.id} className="relative group">
            {/* Window Controls Decorator */}
            <div className="bg-slate-900 border border-white/10 rounded-t-2xl px-4 py-3 flex justify-between items-center">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <button 
                onClick={() => copyToClipboard(item.id, item.code)}
                className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 hover:text-white transition-colors"
              >
                {copiedId === item.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                {copiedId === item.id ? "Copied!" : "Copy Code"}
              </button>
            </div>
            
            {/* Code Block */}
            <div className="bg-black/60 backdrop-blur-md border-x border-b border-white/10 rounded-b-2xl p-6 overflow-x-auto custom-scrollbar">
              <pre className="text-sm font-mono leading-relaxed text-indigo-100">
                <code>{item.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}