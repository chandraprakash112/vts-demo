import React, { useState } from 'react';
import {
  Copy,
  RefreshCw,
  Terminal,
  BookOpen,
  Cpu,
  Code,
  Zap,
  ShieldCheck,
  Flame,
} from 'lucide-react';
import CodeCard from '../CodeCard';
import QuestionCard from '../QuestionCard';

const data = [
  {
    title: 'What is JavaScript?',
    answer:
      'JavaScript is a lightweight, interpreted programming language used to create dynamic and interactive content on web pages.',
    level: 'Beginner',
  },
  {
    title: 'What is the difference between var, let, and const?',
    answer:
      'var has function scope and can be redeclared, let has block scope and can be updated but not redeclared, and const has block scope and cannot be reassigned.',
  },
  {
    title: 'What is hoisting in JavaScript?',
    answer:
      'Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their scope before code execution.',
    answer2:
      'Hoisting is JavaScript’s behavior of moving declarations to the top of the scope before code execution.',
  },
  {
    title: 'What are closures?',
    answer:
      'A closure is a function that remembers and can access variables from its outer scope even after the outer function has finished executing.',
    answer2:
      'A closure is a function that has access to its outer function’s variables even after the outer function has returned.',
  },
  {
    title: 'What is the difference between == and ===?',
    answer:
      '== compares values after type coercion, while === compares both value and type without type coercion.',
  },
  {
    title: 'What are promises in JavaScript?',
    answer:
      'Promises represent the eventual completion or failure of an asynchronous operation and allow handling async code more cleanly.',
    answer2:
      'Promises represent the eventual completion or failure of an asynchronous operation.',
  },
  {
    title: 'What is async/await?',
    answer:
      'async/await is syntax built on top of promises that allows writing asynchronous code in a synchronous-looking way.',
    answer2:
      'async/await is syntax that makes working with promises easier by allowing asynchronous code to look synchronous.',
  },
  {
    title: 'What is event bubbling?',
    answer:
      'Event bubbling is the process where an event propagates from the target element up through its parent elements.',
  },
  {
    title: 'What is the difference between null(not defined) and undefined?',
    answer:
      'undefined means a variable has been declared but not assigned a value, while null is an explicit assignment indicating no value.',
    answer2:
      'undefined means a variable exists but has no value, while not defined means the variable was never declared.',
  },
  {
    title: 'What are arrow functions?',
    answer:
      'Arrow functions are a shorter syntax for writing functions and do not have their own this, arguments, or prototype.',
  },
  {
    title: 'What is the event loop?',
    answer:
      'The event loop is a mechanism that allows JavaScript to perform non-blocking operations by handling asynchronous callbacks.',
  },
  {
    title: 'What is prototypal inheritance?',
    answer:
      'Prototypal inheritance allows objects to inherit properties and methods from other objects.',
  },
  {
    title: 'What is destructuring?',
    answer:
      'Destructuring allows unpacking values from arrays or properties from objects into distinct variables.',
  },
  {
    title: 'What is the spread operator?',
    answer: 'The spread operator (...) is used to expand elements of arrays or objects.',
  },
  {
    title: 'What is debouncing?',
    answer:
      'Debouncing limits the execution of a function until a specified delay has passed.',
  },
  {
    title: 'What is throttling?',
    answer: 'Throttling ensures a function is executed at most once in a given time interval.',
  },
  {
    title: 'What is event delegation?',
    answer:
      'Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements.',
  },
  {
    title: 'What is the this keyword?',
    answer:
      'The this keyword refers to the object that is currently executing the function, and its value depends on how the function is called.',
  },
  {
    title: 'What are call(), apply(), and bind()?',
    answer:
      'call() and apply() invoke a function immediately with a specified this value, while bind() returns a new function with bound this.',
  },
  {
    title: 'What is the difference between synchronous and asynchronous code?',
    answer:
      'Synchronous code executes line by line, blocking further execution, while asynchronous code allows non-blocking operations.',
  },
  {
    title: 'What is a callback function?',
    answer:
      'A callback is a function passed as an argument to another function and executed later.',
  },
  {
    title: 'What is the difference between map(), filter(), and reduce()?',
    answer:
      'map() transforms array elements, filter() selects elements based on a condition, and reduce() reduces the array to a single value.',
  },
  {
    title: 'What is JSON?',
    answer:
      'JSON (JavaScript Object Notation) is a lightweight data-interchange format used to store and transmit data.',
  },
  {
    title: 'What is strict mode?',
    answer:
      'Strict mode enforces stricter parsing and error handling to prevent common JavaScript mistakes.',
  },
  {
    title: 'What is NaN?',
    answer:
      'NaN stands for Not-a-Number and represents an invalid or undefined numeric result.',
  },
];

const intermediateData = [
  {
    title: 'What is a higher-order function?',
    answer:
      'A higher-order function is a function that takes another function as an argument or returns a function.',
  },
  {
    title: 'What is type coercion?',
    answer:
      'Type coercion is JavaScript’s automatic or implicit conversion of values from one data type to another.',
  },
  {
    title: 'What is event bubbling and event capturing?',
    answer:
      'Event bubbling moves from the target element up to the DOM tree, while event capturing moves from the root down to the target.',
    level: 'Advanced',
  },
  {
    title: 'What is the difference between setTimeout and setInterval?',
    answer:
      'setTimeout executes a function once after a delay, while setInterval executes a function repeatedly at fixed intervals.',
  },
  {
    title: 'What is the temporal dead zone?',
    answer:
      'The temporal dead zone is the time between entering a scope and declaring a let or const variable, where access causes an error.',
  },
  {
  title: 'What is the difference between deep copy and shallow copy?',
  answer:
    'A shallow copy copies references to objects, while a deep copy duplicates all nested objects.',
  },
  {
    title: 'What is the difference between Object.freeze() and Object.seal()?',
    answer:
      'Object.freeze() prevents adding, removing, or modifying properties, while Object.seal() allows modifying existing properties only.',
  },
  {
    title: 'What is currying?',
    answer:
      'Currying is the process of transforming a function with multiple arguments into a sequence of functions with a single argument.',
  },
  {
    title: 'What is a pure function?',
    answer:
      'A pure function always returns the same output for the same input and has no side effects.',
  },
  {
    title: 'What is the difference between slice() and splice()?',
    answer:
      'slice() returns a new array without modifying the original, while splice() modifies the original array.',
  },
  {
    title: 'What is an IIFE?',
    answer: 'An Immediately Invoked Function Expression (IIFE) runs as soon as it is defined.',
  },
  {
    title: 'What is the difference between for...in and for...of?',
    answer:
      'for...in iterates over object keys, while for...of iterates over iterable values.',
  },
  {
    title: 'What is optional chaining?',
    answer:
      'Optional chaining (?.) allows safe access to nested object properties without throwing errors.',
  },
  {
    title: 'What is event.preventDefault()?',
    answer: 'preventDefault() stops the browser’s default behavior for an event.',
  },
  {
    title: 'What is event.stopPropagation()?',
    answer:
      'stopPropagation() prevents an event from bubbling up or capturing down the DOM tree.',
  },
  {
    title: 'What is the difference between debouncing and throttling?',
    answer:
      'Debouncing delays execution until activity stops, while throttling limits execution to a fixed rate.',
  },
]

const moreAdvancedData = [
  {
    title: 'What is localStorage, sessionStorage, and cookies?',
    answer:
      'localStorage persists data with no expiration, sessionStorage lasts for the session, and cookies are used for client-server communication.',
  },
  {
    title: 'What is memoization?',
    answer:
      'Memoization is an optimization technique that stores function results to avoid redundant computations.',
  },
  {
    title: 'What are web workers?',
    answer:
      'Web workers allow JavaScript to run scripts in background threads without blocking the main thread.',
  },
  {
    title: 'What is garbage collection?',
    answer:
      'Garbage collection is the process of automatically freeing memory that is no longer in use.',
  },
  {
    title: 'What is the difference between mutable and immutable data?',
    answer:
      'Mutable data can be changed after creation, while immutable data cannot be altered.',
  },
  {
    title: 'What is nullish coalescing?',
    answer:
      'The nullish coalescing operator (??) returns the right-hand value only if the left-hand value is null or undefined.',
  },
  {
    title: 'What is a Symbol?',
    answer:
      'A Symbol is a unique and immutable primitive value often used as object property keys.',
  },
  {
    title: 'What is the difference between microtasks and macrotasks?',
    answer:
      'Microtasks (like Promises) run before macrotasks (like setTimeout) in the event loop.',
  },
  {
    title: 'What happens when you use the new keyword?',
    answer:
      'The new keyword creates a new object, sets its prototype, binds this to the object, and returns it.',
  },
  {
    title: 'What is the difference between Object.create() and new?',
    answer:
      'Object.create() creates an object with a specified prototype, while new uses a constructor function.',
  },
  {
    title: 'What is a memory leak in JavaScript?',
    answer:
      'A memory leak occurs when unused memory is not released, often due to global variables or unremoved event listeners.',
  },
  {
    title: 'What is lazy loading?',
    answer:
      'Lazy loading delays loading of resources until they are actually needed, improving performance.',
  },
  {
    title: 'What is the difference between innerHTML and textContent?',
    answer: 'innerHTML parses HTML content, while textContent inserts plain text only.',
  },
  {
    title: 'What is the difference between window.onload and DOMContentLoaded?',
    answer:
      'DOMContentLoaded fires when HTML is parsed, while window.onload waits for all resources to load.',
  },
  {
    title: 'What is the purpose of the fetch API?',
    answer: 'The fetch API is used to make HTTP requests and handle responses using promises.',
  },
  {
    title: 'What is CORS?',
    answer:
      'CORS (Cross-Origin Resource Sharing) controls how resources are shared between different origins.',
  },
  {
    title: 'What is tree shaking?',
    answer: 'Tree shaking removes unused code during the build process to reduce bundle size.',
  },
  {
    title: 'What is shadow DOM?',
    answer: 'Shadow DOM allows encapsulation of HTML, CSS, and JavaScript to avoid conflicts.',
  },
  {
    title: 'What is the difference between imperative and declarative programming?',
    answer:
      'Imperative programming describes how to do things step by step, while declarative programming describes what should be done.',
  },
];

const seniorLevelData = [
  {
    title: 'Why does typeof null return "object"?',
    answer:
      'This is a long-standing bug in JavaScript where null was incorrectly identified as an object.',
  },
  {
    title: 'What will happen if you modify an object inside a function?',
    answer:
      'Objects are passed by reference, so changes inside the function affect the original object.',
  },
  {
    title: 'What is the difference between == null and === null?',
    answer: '== null checks for both null and undefined, while === null checks only for null.',
  },
  {
    title: 'What happens if you forget to use await inside an async function?',
    answer: 'The function returns a pending promise instead of the resolved value.',
  },
  {
    title: 'Why should you avoid using setInterval for long-running tasks?',
    answer:
      'setInterval can cause overlapping executions if the task takes longer than the interval.',
  },
  {
    title: 'What is the difference between weakMap and Map?',
    answer:
      'WeakMap keys must be objects and are weakly referenced, allowing garbage collection.',
  },
  {
    title: 'What is the purpose of requestAnimationFrame?',
    answer:
      'requestAnimationFrame synchronizes animations with the browser’s repaint cycle for smoother performance.',
  },
  {
    title: 'What is the difference between debounce and throttle in scroll events?',
    answer:
      'Debounce triggers after scrolling stops, while throttle triggers at fixed intervals during scrolling.',
  },
  {
    title: 'What happens when you clone an object using JSON.stringify?',
    answer:
      'It removes functions, undefined values, symbols, and fails on circular references.',
  },
  {
    title: 'What is the difference between microtask queue and callback queue?',
    answer: 'Microtasks (Promises) are executed before callback queue tasks (setTimeout).',
  },
  {
    title: 'What is the impact of reflow and repaint?',
    answer:
      'Reflow recalculates layout and repaint updates visuals, both affecting performance.',
  },
  {
    title: 'What is the difference between Object.assign() and spread operator?',
    answer: 'Both perform shallow copies, but spread is more concise and readable.',
  },
  {
    title: 'Why should you avoid using eval()?',
    answer: 'eval() poses security risks and negatively impacts performance.',
  },
  {
    title: 'What is the difference between synchronous XHR and fetch?',
    answer:
      'Synchronous XHR blocks the main thread, while fetch is promise-based and non-blocking.',
  },
  {
    title: 'What is the difference between class and function constructor?',
    answer: 'Classes provide cleaner syntax and enforce strict mode by default.',
  },
];

const expertLevelData = [
  {
    title: 'What happens when JavaScript runs out of memory?',
    answer:
      'The browser or Node.js throws an out-of-memory error, often caused by memory leaks or infinite data retention.',
  },
  {
    title: 'What is lexical scoping?',
    answer:
      'Lexical scoping means a variable’s scope is determined by its position in the source code.',
  },
  {
    title: 'What is the difference between stack and heap?',
    answer:
      'The stack stores primitive values and function calls, while the heap stores objects and reference types.',
  },
  {
    title: 'Why are promises immutable?',
    answer:
      'Once a promise is fulfilled or rejected, its state cannot be changed to ensure predictable async behavior.',
  },
  {
    title: 'What is the difference between async and defer?',
    answer:
      'async loads scripts asynchronously and executes immediately, while defer executes scripts after HTML parsing.',
  },
  {
    title: 'What is tail call optimization?',
    answer:
      'Tail call optimization reduces stack usage when a function returns another function call.',
  },
  {
    title: 'Why is JSON.stringify sometimes unsafe?',
    answer:
      'It fails on circular references and removes functions, undefined values, and symbols.',
  },
  {
    title: 'What is the difference between blocking and non-blocking code?',
    answer:
      'Blocking code stops execution until completion, while non-blocking code allows other tasks to run.',
  },
  {
    title: 'What is monkey patching?',
    answer:
      'Monkey patching modifies existing objects or prototypes at runtime, which can lead to maintenance issues.',
  },
  {
    title: 'What is the difference between deep equality and shallow equality?',
    answer:
      'Shallow equality compares references, while deep equality compares nested values.',
  },
  {
    title: 'What is hydration in web applications?',
    answer: 'Hydration attaches event listeners to server-rendered HTML on the client side.',
  },
  {
    title: 'What is the difference between structuredClone and JSON clone?',
    answer:
      'structuredClone supports circular references and more data types, unlike JSON cloning.',
  },
  {
    title: 'What is time complexity?',
    answer: 'Time complexity measures how execution time grows relative to input size.',
  },
  {
    title: 'What is space complexity?',
    answer: 'Space complexity measures how much memory an algorithm requires.',
  },
  {
    title: 'Why is JavaScript single-threaded?',
    answer: 'JavaScript is single-threaded to avoid race conditions and simplify concurrency.',
  },
];

const hardcoreInterviewData = [
  {
    title: 'What is the execution context?',
    answer:
      'An execution context is the environment in which JavaScript code is evaluated, including variables, functions, and the value of this.',
  },
  {
    title: 'What is the call stack?',
    answer:
      'The call stack keeps track of function calls and executes them in a last-in-first-out (LIFO) order.',
  },
  {
    title: 'What is variable shadowing?',
    answer:
      'Variable shadowing occurs when a variable declared in an inner scope has the same name as one in an outer scope.',
  },
  {
    title: 'What is the difference between runtime and compile time?',
    answer:
      'Compile time checks syntax and structure, while runtime executes the code and handles logic errors.',
  },
  {
    title: 'What is short-circuit evaluation?',
    answer:
      'Short-circuit evaluation stops expression evaluation as soon as the result is determined.',
  },
  {
    title: 'What is the difference between Object.keys(), Object.values(), and Object.entries()?',
    answer: 'They return an array of keys, values, and key-value pairs respectively.',
  },
  {
    title: 'What is a race condition?',
    answer:
      'A race condition occurs when the output depends on the timing of asynchronous operations.',
  },
  {
    title: 'What is function composition?',
    answer: 'Function composition combines multiple functions into a single function call.',
  },
  {
    title: 'What is the difference between isNaN and Number.isNaN?',
    answer: 'isNaN performs type coercion, while Number.isNaN checks strictly for NaN.',
  },
  {
    title: 'What is the purpose of try...catch?',
    answer: 'try...catch handles runtime errors and prevents application crashes.',
  },
  {
    title: 'What is the difference between arguments and rest parameters?',
    answer:
      'arguments is an array-like object, while rest parameters (...) create a real array.',
  },
  {
    title: 'What is the difference between default parameters and logical OR?',
    answer:
      'Default parameters apply only when arguments are undefined, while logical OR applies for all falsy values.',
  },
  {
    title: 'What is idempotency?',
    answer: 'An operation is idempotent if repeating it produces the same result.',
  },
  {
    title: 'What is the difference between window and document?',
    answer: 'window represents the browser, while document represents the DOM.',
  },
  {
    title: 'What is the difference between map() and forEach()?',
    answer: 'map() returns a new array, while forEach() does not return anything.',
  },
];

export default function Javascript() {
  const tabs = [
    { id: 'essential', label: 'Basics', icon: <BookOpen size={18} />, data: data },
    { id: 'intermediate', label: 'Intermediate', icon: <Code size={18} />, data: intermediateData },
    // { id: 'patterns', label: 'Patterns', icon: <Zap size={18} />, data: evenMoreData },
    { id: 'advanced', label: 'Advanced', icon: <Cpu size={18} />, data: moreAdvancedData },
    { id: 'senior', label: 'Senior', icon: <Terminal size={18} />, data: seniorLevelData },
    {
      id: 'expert',
      label: 'Expert',
      icon: <ShieldCheck size={18} />,
      data: expertLevelData,
    },
    {
      id: 'hardcore',
      label: 'Hardcore',
      icon: <Flame size={18} />,
      data: hardcoreInterviewData,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex flex-col items-center text-center mb-10 group">
          {/* Flex container for Icon + Heading */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-3xl font-black text-slate-900 tracking-tight">
            <div className="relative inline-flex">
              <div className="absolute -inset-1 bg-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative inline-flex items-center justify-center p-4 bg-yellow-400 rounded-2xl shadow-xl shadow-yellow-200/50">
                <Terminal size={32} className="text-white" />
              </div>
            </div>

            <h1>JS Knowledge Base</h1>
          </div>

          <p className="text-slate-500 mt-4">
            Master the core concepts from basics to advanced patterns.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="relative mb-8">
          <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:pb-0 gap-2 scrollbar-none bg-slate-200/50 rounded-2xl backdrop-blur-sm">
            <div className="flex p-1 gap-1 w-max md:w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 py-2 px-4 rounded-xl text-sm font-bold transition-all duration-200 pointer whitespace-nowrap ${
                    activeTab.id === tab.id
                      ? 'bg-white text shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                  }`}
                >
                  <span className="shrink-0 scale-90 md:scale-100">{tab.icon}</span>
                  <span className="text-xs md:text-sm">{tab.label}</span>

                  <span
                    className={`ml-1 text-[9px] md:text-[10px] px-1.5 py-0.5 rounded-full ${
                      activeTab.id === tab.id
                        ? 'bg-blue-100 text'
                        : 'bg-slate-300 text-slate-600'
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
            {activeTab?.data?.map((item, i) => (
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
