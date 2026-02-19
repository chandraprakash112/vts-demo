import { Check, Copy, RefreshCw } from 'lucide-react';
import React, { useState } from 'react';

export default function CodeCard({ data }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${data?.title || ''}\n${data?.desc || ''}\n${data?.code || ''}\n\n${data?.desc2 || ''}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <div className="absolute top-4 right-4 flex gap-2 transition-opacity duration-200 z-20">
        <button
          className="p-1 md:p-2 hover:bg-slate-100 rounded md:rounded-lg text-slate-500 hover:text-slate-900  transition-all pointer active:scale-95"
          title={copied ? 'Copied!' : 'Copy'}
          onClick={handleCopy}
        >
          {copied ? <Check className="size-3 md:size-4" /> :<Copy className="size-3 md:size-4" />}
        </button>
        {/* <button className="p-1 md:p-2 hover:bg-slate-100 rounded md:rounded-lg text-slate-500 hover:text-slate-900  transition-all pointer active:scale-95">
        <RefreshCw className="size-3 md:size-4" />
      </button> */}
      </div>
      {/* <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-sm bg-primary px-3 py-1 rounded hover:bg-blue-700"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button> */}
    </>
  );
}
