import { Eye, EyeOff, Terminal, MessageCircle } from 'lucide-react';
import CodeCard from './CodeCard';
import { useState } from 'react';
import MyButton from '../../shared-components/MyButton';

const QuestionCard = ({ item, index }) => {
  const [viewA, setViewA] = useState(false);

  return (
    <section className="group relative bg-white border border-slate-200 r-lg p-md transition-all duration-300 hover:shadow-lg hover:border-blue-100">
      {/* TOP SECTION: Meta and Copy Action */}
      <div className="flex justify-between items-start mb-3">
        <span className="text-[10px] font-black tracking-widest px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md uppercase">
          Question {index < 10 ? `0${index}` : index}
        </span>

        {/* Your existing CodeCard logic for copy functionality at top-right */}
        <div className="opacity-40 group-hover:opacity-100 transition-opacity">
          <CodeCard
            data={{
              title: `Q.${index} ${item?.title}`,
              desc: `Ans. ${item?.answer}`,
              code: `${item?.code}`,
              desc2: item?.answer2 ? `Ans. ${item?.answer2}` : '',
            }}
          />
        </div>
      </div>

      {/* QUESTION TITLE */}
      <h3 className="text-lg font-bold text-slate-800 leading-snug mb-4">{item.title}</h3>

      {/* REVEALED CONTENT */}
      {viewA && (
        <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-top-1 duration-200">
          {/* Answer Text */}
          <div className="flex gap-3 p-4 bg-slate-50 rounded-xl border-l-4 custom-b">
            <MessageCircle size={18} className="text shrink-0 mt-0.5" />
            <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
          </div>

          {/* Code Block */}
          {item?.code && (
            <div className="rounded-xl overflow-hidden border border-slate-800">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 text-slate-400 text-[10px] font-mono border-b border-slate-700">
                <Terminal size={12} /> index.js
              </div>
              <pre className="bg-slate-900 text-emerald-400 p-4 text-xs font-mono overflow-x-auto">
                <code>{item?.code}</code>
              </pre>
            </div>
          )}

          {/* Secondary Answer */}
          {item.answer2 && (
            <div className="p-3 bg-indigo-50/50 rounded-lg border border-indigo-100">
              <p className="text-indigo-900/70 text-xs italic leading-relaxed">{item.answer2}</p>
            </div>
          )}
        </div>
      )}

      {/* BOTTOM RIGHT TOGGLE: Small and discreet */}
      <div className="absolute bottom-4 right-4">
        <MyButton
          onClick={() => setViewA(!viewA)}
          textVar="--primary"
          bgVar="--surface"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
            viewA ? 'text hover:bg-slate-100' : ''
          } shadow-md`}
        >
          {viewA ? (
            <>
              <EyeOff size={14} /> Hide Answer
            </>
          ) : (
            <>
              <Eye size={14} /> Show Answer
            </>
          )}
        </MyButton>
      </div>
    </section>
  );

  //   return (
  //     <section className="group relative bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
  //       <CodeCard
  //         data={{
  //           title: `Q.${index} ${item?.title}`,
  //           desc: `Ans. ${item?.answer}`,
  //           code: `${item?.code}`,
  //           desc2: item?.answer2 ? `Ans. ${item?.answer2}` : '',
  //         }}
  //       />

  //       <div className="mb-2">
  //         <span className="text-[11px] md:text-[14px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-400 rounded-md">
  //           QUESTION {index < 10 ? `0${index}` : index}
  //         </span>
  //       </div>

  //       <h3 className="text-lg font-bold text-slate-800 mb-4 pr-24 leading-snug">{item.title}</h3>
  //       {viewA ? (
  //         <>
  //           <div className="border-l-4 border-gray-300 pl-4 py-2 mb-4 bg-slate-50">
  //             <p className="text-slate-600 leading-relaxed text-sm">{item.answer}</p>
  //           </div>

  //           {item?.code ? (
  //             <pre className="bg-gray-900 text-green-400 p-4 r-md overflow-x-auto">
  //               <code>{item?.code}</code>
  //             </pre>
  //           ) : (
  //             ''
  //           )}

  //           {item.answer2 && (
  //             <div className="mt-3 bg-slate-50 border-l-4 border-indigo-200 p-4 rounded-r-lg">
  //               <p className="text-slate-500 leading-relaxed text-sm italic">{item.answer2}</p>
  //             </div>
  //           )}
  //         </>
  //       ) : (
  //         <div className='pointer'  onClick={()=> setViewA(!viewA)}>

  //         <Eye className='size-4'/>
  //         </div>
  //       )}
  //     </section>
  //   );
};

export default QuestionCard;
