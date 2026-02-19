import React, { useState } from 'react';
import { Terminal, BookOpen, Layers, Brain, Flame, Atom } from 'lucide-react';
import QuestionCard from '../QuestionCard';
import allData from './ReactData';

const data = [
  {
    label: 'All',
    icon: <Layers size={18} />,
    data: allData
  },
  {
    label: 'Beginner',
    icon: <BookOpen size={18} />,
    data: [
      {
        title: 'What is React, and what are its main features?',
        answer:
          'React is a JavaScript library developed by Facebook for creating user interfaces, particularly in single-page applications. It enables the use of reusable components that manage their own state. Key advantages include a component-driven architecture, optimized updates through the virtual DOM, a declarative approach for better readability, and robust community backing.',
      },
      {
        title: 'What is JSX and how does it work?',
        answer: `JSX, short for JavaScript XML, is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes building React components easier. JSX gets converted into JavaScript function calls, often by Babel. For instance, <div>Hello, world!</div> is transformed into React.createElement('div', null, 'Hello, world!').`,
        answer2: 'JSX is a syntax extension that compiles to React.createElement calls.',
      },
      {
        title: 'Explain the concept of the Virtual DOM in React.',
        answer:
          'The virtual DOM is a simplified version of the actual DOM used by React. It allows for efficient UI updates by comparing the virtual DOM to the real DOM and making only the necessary changes through a process known as reconciliation.',
      },
      {
        title: 'How does virtual DOM in React work? What are its benefits and downsides?',
        answer: `The virtual DOM in React is an in-memory representation of the real DOM. When state or props change, React creates a new virtual DOM tree, compares it to the previous one using a diffing algorithm, and efficiently updates only the parts of the real DOM that changed.

        Benefits: It improves performance by reducing costly direct DOM manipulations and makes UI updates declarative and predictable.
        Downsides: There's some overhead from diffing and extra memory usage, and in very dynamic UIs, it may not always outperform manual optimizations.`,
      },

      {
        title: 'What problem does React solve?',
        answer:
          'React efficiently updates the UI using a component-based and declarative approach.',
      },
      {
        title: 'Props vs State?',
        answer:
          'Props are read-only data passed to components, while state is internal and mutable data.',
      },
      {
        title: 'What is Virtual DOM?',
        answer: 'The Virtual DOM is a lightweight copy of the real DOM used for efficient updates.',
      },
      {
        title: 'What is useState?',
        answer: 'useState is a hook that allows functional components to manage local state.',
      },
      {
        title: 'What is useEffect?',
        answer: 'useEffect is used to perform side effects like API calls or subscriptions.',
      },
      {
        title: 'What is prop drilling?',
        answer: 'Passing props through multiple component levels unnecessarily.',
      },
      {
        title: 'How do you handle API calls in React?',
        answer: 'Using useEffect with loading and error state handling.',
      },
      {
        title: 'What is lifting state up?',
        answer: 'Moving shared state to the nearest common parent component.',
      },
      {
        title: 'What is conditional rendering?',
        answer: 'Rendering UI based on conditions using ternary or logical operators.',
      },
      {
        title: ' What are React Fragments used for?',
        answer: `React Fragments allow you to group multiple elements without adding extra nodes to the DOM. They are particularly useful when you need to return multiple elements from a component but don't want to wrap them in a container element. You can utilize shorthand syntax <>...</> or React.Fragment.`,
        code: `
        return (
          <>
            <ChildComponent1 />
            <ChildComponent2 />
          </>
        );
        `,
        answer2: 'Fragments group elements without adding extra DOM nodes.',
      },
      {
        title: 'Local state vs global state?',
        answer: 'Local state is component-specific, global state is shared across the app.',
      },
    ],
  },

  {
    label: 'Intermediate',
    icon: <Brain size={18} />,
    data: [
      {
        title: 'What are closures?',
        answer:
          'A closure is a function that remembers and accesses variables from its outer scope even after the outer function has executed.',
      },
      {
        title: 'Debounce vs Throttle?',
        answer:
          'Debounce delays function execution until inactivity, while throttle limits execution to once per time interval.',
      },
      {
        title: 'Why should state be immutable?',
        answer: 'Immutability allows React to detect changes and re-render components correctly.',
      },
      {
        title: 'What causes a component re-render?',
        answer: 'State changes, prop changes, or parent component re-renders.',
      },
      {
        title: 'Why are keys important in lists?',
        answer: 'Keys help React identify list items and prevent incorrect re-renders.',
      },
      {
        title: 'Why is dependency array important?',
        answer: 'It controls when useEffect runs and prevents unnecessary executions.',
      },
      {
        title: 'What is cleanup in useEffect?',
        answer: 'Cleanup prevents memory leaks like intervals or event listeners.',
      },
      {
        title: 'useRef vs useState?',
        answer: 'Updating useRef does not cause re-render, while useState does.',
      },
      {
        title: 'What is Context API?',
        answer: 'Context provides global data without passing props manually.',
      },
      {
        title: 'What is React.memo?',
        answer: 'React.memo prevents re-rendering when props have not changed.',
      },
      {
        title: 'Controlled vs uncontrolled components?',
        answer: 'Controlled components are managed by React state, uncontrolled use the DOM.',
      },
      {
        title: 'How do you design a reusable Button component?',
        answer:
          'By supporting props like variant, disabled, onClick, and accessibility attributes.',
      },
      {
        title: 'How do you handle forms and validation?',
        answer: 'Using controlled inputs or libraries like React Hook Form.',
      },
      {
        title: 'What are portals?',
        answer: 'Portals render components outside the parent DOM hierarchy.',
      },
      {
        title: 'What are Error Boundaries?',
        answer: 'Components that catch JavaScript errors during rendering.',
      },
      {
        title: 'What is React Strict Mode?',
        answer: 'A development tool that highlights potential problems in React apps.',
      },
    ],
  },

  {
    label: 'Advanced',
    icon: <Flame size={18} />,
    data: [
      {
        title: 'useMemo vs useCallback?',
        answer: 'useMemo memoizes values, while useCallback memoizes functions.',
      },
      {
        title: 'How do you optimize a React app?',
        answer: 'By memoization, code splitting, and avoiding unnecessary re-renders.',
      },
      {
        title: 'What if a component re-renders too often?',
        answer: 'Check state updates, props stability, and apply memoization.',
      },
      {
        title: 'What is derived state?',
        answer: 'State that can be calculated from existing state and should not be stored.',
      },
      {
        title: 'Redux vs Context?',
        answer: 'Redux is better for complex global state management.',
      },
      {
        title: 'What is reconciliation?',
        answer: 'React compares Virtual DOM trees to update the UI efficiently.',
      },
      {
        title: 'What is batching in React?',
        answer: 'Batching groups multiple state updates into a single render.',
      },
      {
        title: 'What is hydration?',
        answer: 'Hydration attaches event listeners to server-rendered HTML.',
      },
    ],
  },
  

];

export default function ReactCore() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex flex-col items-center text-center mb-10 group">
          {/* Flex container for Icon + Heading */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-3xl font-black text-slate-900 tracking-tight">
            <div className="p-3 bg-cyan-500/20 rounded-2xl animate-[spin_10s_linear_infinite]">
              <Atom className="text-cyan-400" size={32} />
            </div>

            <h1>React Knowledge Base</h1>
          </div>

          <p className="text-slate-500 mt-4">
            Master the core concepts from basics to advanced patterns.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="relative mb-8">
          <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:pb-0 gap-2 scrollbar-none bg-slate-200/50 rounded-2xl backdrop-blur-sm">
            <div className="flex p-1 gap-1 w-max md:w-full">
              {data.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 py-2 px-4 rounded-xl text-sm font-bold transition-all duration-200 pointer whitespace-nowrap ${
                    activeTab === i
                      ? 'bg-white text shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                  }`}
                >
                  <span className="shrink-0 scale-90 md:scale-100">{tab.icon}</span>
                  <span className="text-xs md:text-sm">{tab.label}</span>

                  <span
                    className={`ml-1 text-[9px] md:text-[10px] px-1.5 py-0.5 rounded-full ${
                      activeTab === i ? 'bg-blue-100 text' : 'bg-slate-300 text-slate-600'
                    }`}
                  >
                    {tab?.data?.length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          <div className="grid gap-5">
            {data[activeTab]?.data?.map((item, i) => (
              <QuestionCard key={i} item={item} index={i + 1} />
            ))}
          </div>
        </div>

        <footer className="mt-12 text-center text-slate-400 text-sm pb-8">
          End of Interview Guide • Keep practicing!
        </footer>
      </div>
    </div>
  );
}
