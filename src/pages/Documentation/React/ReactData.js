const allData = [
  {
    title: 'What is React, and what are its main features?',
    answer:
      'React is a JavaScript library developed by Facebook for creating user interfaces, particularly in single-page applications. It enables the use of reusable components that manage their own state. Key advantages include a component-driven architecture, optimized updates through the virtual DOM, a declarative approach for better readability, and robust community backing.',
  },
  {
    title: 'What is JSX and how does it work?',
    answer:
      "JSX, short for JavaScript XML, is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes building React components easier. JSX gets converted into JavaScript function calls, often by Babel. For instance, <div>Hello, world!</div> is transformed into React.createElement('div', null, 'Hello, world!').",
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
    title: 'What is the difference Between React Node, React Element, and React Component?',
    answer: `A React Node refers to any unit that can be rendered in React, such as an element, string, number, or null. A React Element is an immutable object that defines what should be rendered, typically created using JSX or React.createElement. A React Component is either a function or class that returns React Elements, enabling the creation of reusable UI components.`,
  },
  {
    title: 'What are React Fragments used for?',
    answer:
      "React Fragments allow you to group multiple elements without adding extra nodes to the DOM. They are particularly useful when you need to return multiple elements from a component but don't want to wrap them in a container element. You can utilize shorthand syntax <>...</> or React.Fragment.",
    code: `
  return (
    <>
      <ChildComponent1 />
      <ChildComponent2 />
    </>
  );
  `,
  },
  {
    title: 'What is the purpose of the key prop in React?',
    answer:
      'In React, the key prop is used to uniquely identify elements in a list, allowing React to optimize rendering by updating and reordering items more efficiently. Without unique keys, React might re-render elements unnecessarily, causing performance problems and potential bugs.',
    code: `
  const items = [
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' },
  ];

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} value={item.value} />
      ))}
    </ul>
  );
  `,
  },
  {
    title: 'What is the consequence of using array indices as keys in React?',
    answer:
      'Using array indices as keys can lead to performance issues and unexpected behavior, especially when reordering or deleting items. React relies on keys to identify elements uniquely, and using indices can cause components to be re-rendered unnecessarily or display incorrect data.',
  },
  {
    title: 'What are props in React? How are they different from state?',
    answer:
      'Props (short for properties) are inputs to React components that allow you to pass data from a parent component to a child component. They are immutable and are used to configure a component. In contrast, state is internal to a component and can change over time, typically due to user interactions or other events.',
  },

  {
    title: "What is the difference between React's class components and functional components?",
    answer:
      'Class components are ES6 classes that extend React.Component and can hold state, lifecycle methods, and other features. Functional components are simpler, functional JavaScript components that take props as input and return JSX. With the introduction of hooks, functional components can now manage state and lifecycle methods, making them more versatile.',
  },

  {
    title: 'When should you use a class component over a function component?',
    answer:
      'Class components are useful when you need to manage state, use lifecycle methods, or optimize performance through shouldComponentUpdate. However, with the introduction of hooks, functional components can now handle state and lifecycle methods, making them a preferred choice for most use cases due to their simplicity and readability.',
  },

  {
    title: 'What is React Fiber?',
    answer:
      'React Fiber is a complete rewrite of the React core algorithm, designed to improve performance and enable new features like async rendering, error boundaries, and incremental rendering. It breaks down the rendering process into smaller chunks, allowing React to pause, abort, or prioritize updates as needed.',
  },

  {
    title: 'What is reconciliation?',
    answer:
      'Reconciliation is the process by which React updates the DOM to match the virtual DOM efficiently. It involves comparing the new virtual DOM tree with the previous one and determining the minimum number of changes required to update the actual DOM. This process ensures optimal performance by avoiding unnecessary re-renders.',
  },

  {
    title: 'What is the difference between Shadow DOM and Virtual DOM?',
    answer: `The Shadow DOM is a web standard that encapsulates a part of the DOM, isolating it from the rest of the document. It's used for creating reusable, self-contained components without affecting the global styles or scripts.

The Virtual DOM is an in-memory representation of the actual DOM used to optimize rendering. It compares the current and previous states of the UI, updating only the necessary parts of the DOM, which improves performance.`,
  },

  {
    title: 'What is the difference between Controlled and Uncontrolled React components?',
    answer:
      "In controlled components, form data is managed through the component's state, making it the definitive source of truth. Input value changes are handled by event handlers. In uncontrolled components, the form state is managed internally and accessed via refs. Controlled components provide more control and are easier to test, while uncontrolled components are simpler for basic use cases.",

    code: `
Example of a controlled component:


function ControlledInput() {
  const [value, setValue] = React.useState('');
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
Example of an uncontrolled component:


function UncontrolledInput() {
  const inputRef = React.useRef();
  return <input type="text" ref={inputRef} />;
}}
`,
  },

  {
    title: 'How would you lift the state up in a React application, and why is it necessary?',
    answer:
      "Lifting state up in React involves moving the state from child components to their nearest common ancestor. This pattern is used to share state between components that don't have a direct parent-child relationship. By lifting state up, you can avoid prop drilling and simplify the management of shared data.",
    code: `
// Lifting state up
const Parent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Child1 counter={counter} />
      <Child2 setCounter={setCounter} />
    </div>
  );
};

const Child1 = ({ counter }) => <h1>{counter}</h1>;
const Child2 = ({ setCounter }) => (
  <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
);
In this example, the state is managed in the Parent component, and both child components access it via props.`,
  },

  {
    title: 'What are Pure Components?',
    answer:
      'Pure Components in React are components that only re-render when their props or state change. They use shallow comparison to check if the props or state have changed, preventing unnecessary re-renders and improving performance.',
    code: `
Class components can extend React.PureComponent to become pure
Functional components can use React.memo for the same effect

const PureFunctionalExample = React.memo(function ({ value }) {
  return <div>{value}</div>;
});
`,
  },

  {
    title: 'What is the difference between createElement and cloneElement?',
    answer: `The difference between createElement and cloneElement in React is as follows:

createElement:
Used to create a new React element.
It takes the type of the element (e.g., 'div', a React component), props, and children, and returns a new React element.
Commonly used internally by JSX or when dynamically creating elements. Example:

React.createElement('div', { className: 'container' }, 'Hello World');
cloneElement:
Used to clone an existing React element and optionally modify its props.
It allows you to clone a React element and pass new props or override the existing ones, keeping the original element's children and state.
Useful when you want to manipulate an element without recreating it. Example:

const element = <button className="btn">Click Me</button>;
const clonedElement = React.cloneElement(element, { className: 'btn-primary' });`,
  },

  {
    title: 'What is the role of PropTypes in React?',
    answer:
      'PropTypes in React is used for type-checking props passed to components, ensuring the correct data types are used and warning developers during development.',
    code: `


import PropTypes from 'prop-types';

function MyComponent({ name, age }) {
  return (
    <div>
      {name} is {age} years old
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
It helps catch errors early, improving code However, modern React components tend to 
be written in TypeScript and prop type mismatches can be caught at compile time rather than at runtime.`,
  },

  {
    title: 'What are stateless components?',
    answer: `Stateless components in React are components that do not manage or hold any internal state. They simply receive data via props and render UI based on that data. These components are often functional components and are used for presentational purposes.

Key points:
Do not use this.state
Render UI based on props
Focused on displaying information, not managing behavior`,
    code: `

function StatelessComponent({ message }) {
  return <div>{message}</div>;
}
Stateless components are simpler, easier to test, and often more reusable. 
With the introduction of hooks, React components are mostly written using functions and 
can contain state via the useState hook.`,
  },

  {
    title: 'What are stateful components?',
    answer: `Stateful components in React are components that manage and hold their own internal state. They can modify their state in response to user interactions or other events and re-render themselves when the state changes.

Key points:
Use this.state (in class components) or useState (in functional components)
Can update state using event handlers or lifecycle methods
Handle logic and data management

function StatefulComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
Stateful components are essential for handling dynamic and interactive UIs.`,
  },

  {
    title: 'What are the recommended ways for type checking of React component props?',
    answer: `The recommended ways for static type checking in React are:

TypeScript: A superset of JavaScript that adds optional static typing. 
It provides strong type checking, autocompletion, and other benefits at development time.`,
    code: `

interface MyComponentProps {
  name: string;
  age: number;
}

function MyComponent({ name, age }: MyComponentProps) {
  return <div>{name} is {age} years old</div>;
}
PropTypes: A runtime type-checking tool for React props, primarily for development purposes. 
It helps catch errors by checking prop types during development but doesn't offer full static analysis like TypeScript.


import PropTypes from 'prop-types';

function MyComponent({ name, age }) {
  return (
    <div>
      {name} is {age} years old
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
TypeScript is the preferred choice for static type checking due to its integration with the build process and comprehensive tooling, 
whereas PropTypes is useful for smaller projects or when you need runtime checks.`,
  },

  {
    title: 'Why does React recommend against mutating state?',
    answer:
      'React advises against mutating state as it can lead to unexpected behaviors and bugs. State immutability helps efficiently determine when components need re-rendering; direct mutations may prevent React from detecting changes.',
  },

  // React Hooks
  // Mastering React hooks is important in front end interviews because hooks are the standard way to manage state, side effects, and component lifecycle in modern React. Demonstrating a solid understanding of hooks shows you can write clean, functional components and solve complex problems without relying on outdated class patterns."},

  {
    title: 'What are the benefits of using hooks in React?',
    answer: `Hooks enable the use of state and other React features in functional components, replacing the need for class components. They streamline code by reducing the reliance on lifecycle methods, enhance readability, and facilitate the reuse of stateful logic across components.

Popular hooks like useState and useEffect are used for managing state and side effects.`,
  },

  {
    title: 'What are the rules of React hooks?',
    answer:
      'React hooks should be called at the top level of a function, not inside loops, conditions, or nested functions. They must only be used within React function components or custom hooks. These guidelines ensure proper state management and lifecycle behavior.',
  },

  {
    title: 'What is the difference between useEffect and useLayoutEffect in React?',
    answer: `useEffect and useLayoutEffect both handle side effects in React functional components but differ in when they run:

useEffect runs asynchronously after the DOM has rendered, making it suitable for tasks like data fetching or subscriptions.
useLayoutEffect runs synchronously after DOM updates but before the browser paints, ideal for tasks like measuring DOM elements or aligning the UI with the DOM. Example:`,
    code: `
import React, { useEffect, useLayoutEffect, useRef } from 'react';

function Example() {
  const ref = useRef();

  useEffect(() => {
    console.log('useEffect: Runs after DOM paint');
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect: Runs before DOM paint');
    console.log('Element width:', ref.current.offsetWidth);
  });

  return <div ref={ref}>Hello</div>;
}}
  `,
  },

  {
    title: 'What does the dependency array of useEffect affect?',
    answer: `The dependency array of useEffect controls when the effect re-runs:

If it's empty, the effect runs only once after the initial render.
If it contains variables, the effect re-runs whenever any of those variables change.
If omitted, the effect runs after every render.`,
  },

  {
    title: 'What is the useRef hook in React and when should it be used?',
    answer: `The useRef hook creates a mutable object that persists through renders, allowing direct access to DOM elements, storing mutable values without causing re-renders, and maintaining references to values.

For instance, useRef can be utilized to focus on an input element:`,
    code: `
import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  return <input ref={inputEl} type="text" />;
}}`,
  },

  {
    title:
      'What is the purpose of callback function argument format of setState() in React class components and when should it be used?',
    answer: `The callback function format of setState() in React ensures that state updates are based on the most current state and props. This is essential when the new state depends on the previous state. Instead of passing an object directly to setState(), you provide a function that takes the previous state and props as arguments, returning the updated state.`,
    code: `
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment,
}));
Using this approach helps avoid issues related to asynchronous updates, ensuring that your state reflects the latest values accurately.`,
  },

  {
    title: 'What is the useCallback hook in React and when should it be used?',
    answer:
      'The useCallback hook memoizes functions to prevent their recreation on every render. This is especially beneficial when passing callbacks to optimized child components that depend on reference equality to avoid unnecessary renders. Use it when a function is passed as a prop to a child component.',
    code: `
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);}
`,
  },

  {
    title: 'What is the useMemo hook in React and when should it be used?',
    answer:
      "The useMemo hook memoizes costly calculations, recomputing them only when dependencies change. This enhances performance by avoiding unnecessary recalculations. It should be used for computationally intensive functions that don't need to run on every render.",
    code: `

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);}
`,
  },
  {
    title: 'What is the useReducer hook in React and when should it be used?',
    answer: `The useReducer hook manages complex state logic in functional components, serving as an alternative to useState. It's ideal when state has multiple fields (and there are constraints around how they should be mutated), or when the next state relies on the previous one.

The useReducer hook accepts a reducer function + an initial state. The reducer function is passed the current state and action and returns a new state.`,
    code: `
const [state, dispatch] = useReducer(reducer, initialState);}
`,
  },

  {
    title: 'What is the useId hook in React and when should it be used?',
    answer:
      'The useId hook generates unique IDs for elements within a component, which is crucial for accessibility by dynamically creating ids that can be used for linking form inputs and labels. It guarantees unique IDs across the application even if the component renders multiple times.',
    code: `
import { useId } from 'react';

function MyComponent() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" />
    </div>
  );
}}`,
  },

  {
    title: 'Can you explain how to create and use custom hooks in React?',
    answer: `To create and use custom hooks in React:

Create a function that starts with use and uses built-in hooks like useState or useEffect
Return the values or functions you want to share.
Example:`,
    code: `
function useForm(initialState) {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return [formData, handleChange];
}
Use the Hook:


function MyForm() {
  const [formData, handleChange] = useForm({ name: '', email: '' });
  return <input name="name" value={formData.name} onChange={handleChange} />;
}
Custom hooks let you reuse logic across components, keeping your code clean.
`,
  },

  // Advanced concepts
  // Mastering React's advanced concepts like Suspense, forwardRef(), and context demonstrates that you can handle performance optimization, code splitting, and complex component patterns. In interviews, this shows you're prepared to build scalable, maintainable applications beyond just basic component logic.

  {
    title: 'What does re-rendering mean in React?',
    answer: `In React, re-rendering refers to the process of updating the user interface (UI) in response to changes in the component's state or props. When the state or props of a component change, React re-renders the component to reflect the updated data in the UI.

This involves:

Recalculating the JSX returned by the component
Comparing the new JSX with the previous one (using the Virtual DOM)
Updating the real DOM with only the differences (efficient rendering)
Re-rendering ensures that the UI stays in sync with the component's state and props
Virtual DOM vs Browser DOM`,
  },

  {
    title: 'What is forwardRef() in React used for?',
    answer:
      "forwardRef() allows passing a ref through a component to one of its children. This is useful for accessing a DOM element or child component's instance directly from a parent.",
    code: `
import React, { forwardRef } from 'react';

const MyComponent = forwardRef((props, ref) => <input ref={ref} {...props} />);
`,
  },

  {
    title: 'What are error boundaries in React for?',
    answer:
      'Error boundaries catch JavaScript errors in their child components, log them, and display fallback UI instead of crashing the application. They utilize componentDidCatch and static getDerivedStateFromError methods but do not catch errors in event handlers or asynchronous code.',
  },

  {
    title: 'What is React Suspense?',
    answer:
      'React Suspense allows handling asynchronous operations more elegantly within components. It provides fallback content while waiting for resources like data or code to load. You can use it alongside React.lazy() for code splitting.',
    code: `
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}}`,
  },

  {
    title: 'Explain what React hydration is?',
    answer:
      'Hydration involves attaching event listeners and making server-rendered HTML interactive on the client side. After server-side rendering, React initializes dynamic behavior by attaching event handlers.',
    code: `
React Hydration`,
  },

  {
    title: 'What are React Portals used for?',
    answer:
      "React Portals allow rendering children into a DOM node outside the parent component's hierarchy. This is useful for modals or tooltips that need to escape parent overflow or z-index constraints.",
  },

  {
    title: 'What is React strict mode and what are its benefits?',
    answer: `React Strict Mode is a development feature in React that activates extra checks and warnings to help identify potential issues in your app.

Detects unsafe lifecycles: Warns about deprecated lifecycle methods
Identifies side effects: Highlights components with side effects in render methods
Warns about unexpected state changes: Catches unexpected state mutations
Enforces best practices: Flags potential problems, encouraging modern practices`,
    code: `
<React.StrictMode>
  <App />
</React.StrictMode>
Wrapping components in <React.StrictMode> activates these development checks without affecting production builds.`,
  },

  {
    title: 'What is code splitting in a React application?',
    answer:
      "Code splitting enhances performance by dividing code into smaller chunks loaded on demand, thereby reducing initial load times. This can be achieved through dynamic import() statements or using React's React.lazy and Suspense.",
    code: `
// Using React.lazy and Suspense
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}}`,
  },

  {
    title: 'How would one optimize the performance of React contexts to reduce rerenders?',
    answer:
      'Optimizing context performance involves memoizing context values with useMemo, splitting contexts for isolated state changes, and employing selectors to rerender only necessary components.',
    code: `
const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);`,
  },

  {
    title: 'What is the Flux pattern?',
    answer:
      'The Flux pattern manages application state through unidirectional data flow, simplifying debugging and enhancing maintainability with clear separation of concerns between Dispatcher, Stores, Actions, and Views.',
    code: `
Flux pattern`,
  },

  {
    title: 'Explain one-way data flow of React',
    answer: `In React, one-way data flow means data moves from parent to child components through props.

Parent to child: The parent passes data to the child
State updates: To change data, the child calls a function passed down by the parent
Example:`,
    code: `
function Parent() {
  const [count, setCount] = React.useState(0);
  return <Child count={count} increment={() => setCount(count + 1)} />;
}

function Child({ count, increment }) {
  return <button onClick={increment}>Count: {count}</button>;
}
This ensures data flows in one direction, making the app more predictable.

React data flow`,
  },

  {
    title: 'What are some pitfalls of using context in React?',
    answer:
      "Context in React can lead to performance issues if not handled carefully, causing unnecessary re-renders of components that consume the context, even if only part of the context changes. Overusing context for state management can also make the code harder to maintain and understand. It's best to use context sparingly and consider other state management solutions like Redux or Zustand for more complex scenarios.",
  },

  {
    title: 'What are some React anti-patterns?',
    answer: `React anti-patterns are practices that can lead to inefficient or hard-to-maintain code. Common examples include:

Directly mutating state instead of using setState
Using componentWillMount for data fetching
Overusing componentWillReceiveProps
Not using keys in lists or using array index for keys
Excessive inline functions in render
Deeply nested state`,
  },

  {
    title: 'How do you decide between using React state, context, and external state managers?',
    answer:
      "Choosing between React state, context, and external state managers depends on your application's complexity. Use React state for local component state, context for global state shared across multiple components, and external managers like Redux or MobX for complex state management requiring advanced features like optimizing re-renders.",
  },

  {
    title: 'Explain what happens when setState is called in React?',
    answer: `When setState is called in React:

State update: It updates the component's state, triggering a re-render of the component
Batching: React may batch multiple setState calls into a single update for performance optimization
Re-render: React re-renders the component (and its child components if needed) with the new state
Asynchronous: State updates may be asynchronous, meaning React doesn't immediately apply the state change; it schedules it for later to optimize performance
Example:`,
    code: `
function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1); // Calls setState to update state
  };

  return <button onClick={increment}>Count: {count}</button>;
}
In this example, calling setState (via setCount) triggers a re-render with the updated count.`,
  },

  {
    title: 'Explain prop drilling',
    answer: `Prop drilling is when you pass data from a parent component to a deeply nested child component through props, even if intermediate components don't use it.

Example:`,
    code: `
function Grandparent() {
  const data = 'Hello from Grandparent';
  return <Parent data={data} />;
}

function Parent({ data }) {
  return <Child data={data} />;
}

function Child({ data }) {
  return <p>{data}</p>;
}`,
answer2:`
In this example, data is passed through multiple components, even though only the Child component uses it. Prop drilling is acceptable for small applications where the component hierarchy is shallow. When global state is needed to be accessed in deeper levels of the app, using context and/or external state managers might be better.`,
  },

  {
    title: 'Describe lazy loading in React',
    answer: `Lazy loading in React is a technique where components are loaded only when they are needed, rather than at the initial page load. This helps reduce the initial load time and improve performance by splitting the code into smaller chunks.

Example:`,
    code: `
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
In this example, LazyComponent is loaded only when it's rendered, and while loading, a fallback UI (Loading...) is displayed.`,
  },

  {
    title: 'Discuss synthetic events in React',
    answer: `Synthetic events in React are a wrapper around native DOM events that ensure consistent behavior across browsers. They normalize the way events are handled, providing a unified API for React applications.

These events are wrapped in the SyntheticEvent object and offer methods like preventDefault() and stopPropagation() to control event behavior. React uses event pooling to reuse event objects, which helps optimize performance.

Example:`,
    code: `
function MyComponent() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('Button clicked');
  };

  return <button onClick={handleClick}>Click me</button>;
}
In this example, handleClick handles the click event consistently across all browsers using a synthetic event.`,
  },

  {
    title: 'Explain the React component lifecycle methods in class components.',
    answer: `React class components have lifecycle methods for different phases:`,
    code: `
Mounting:
constructor: Initializes state or binds methods
componentDidMount: Runs after the component mounts, useful for API calls or subscriptions

componentDidMount() {
  console.log('Component mounted');
}
Updating:
shouldComponentUpdate: Determines if the component should re-render
componentDidUpdate: Runs after updates, useful for side effects
Unmounting:
componentWillUnmount: Cleans up (e.g., removing event listeners).

componentWillUnmount() {
  console.log('Component will unmount');
}
These methods allow you to manage component behavior throughout its lifecycle.`,
  },

  {
    title: 'What is Concurrent Mode in React, and how does it improve rendering performance?',
    answer:
      'Concurrent Mode allows React to work on multiple tasks simultaneously without blocking the main UI thread. It enables React to prioritize updates and provide smoother rendering for complex applications.',
  },

  {
    title: 'How does React handle concurrent rendering with multiple updates and prioritize them?',
    answer:
      'React uses the priority system in Concurrent Mode to schedule updates. It can break up large updates into smaller chunks and give priority to user interactions (like clicks or input) to ensure the app remains responsive.',
  },

  {
    title:
      'How would you handle long-running tasks or expensive computations in React applications without blocking the UI?',
    answer: `To avoid blocking the UI, use Web Workers, setTimeout, or requestIdleCallback for offloading heavy computations. Alternatively, break tasks into smaller parts and use React's Suspense or useMemo to only recompute when necessary.

Example using setTimeout for deferring computation:`,
    code: `
const [data, setData] = useState(null);

useEffect(() => {
  setTimeout(() => {
    const result = computeExpensiveData();
    setData(result);
  }, 0);}
}, []);`,
  },
  {
    title: 'Explain server-side rendering of React applications and its benefits',
    answer:
      'Server-side rendering (SSR) involves rendering components on the server before sending fully rendered HTML to clients, improving initial load times and SEO through efficient hydration processes.',
    code: `
Server side rendering
`,
  },

  {
    title: 'Explain static generation of React applications',
    answer:
      'Static generation pre-renders HTML at build time instead of runtime; this approach enhances performance by delivering static content quickly while improving SEO outcomes.',
  },

  {
    title: 'What are higher-order components in React?',
    answer:
      'Higher-order components (HOCs) are functions that take a component and return a new one with added props or behavior, facilitating logic reuse across components.',
    code: `
const withExtraProps = (WrappedComponent) => {
  return (props) => <WrappedComponent {...props} extraProp="value" />;
};
}
const EnhancedComponent = withExtraProps(MyComponent);`,
  },
  {
    title: 'Explain the presentational vs container component pattern in React',
    answer:
      'In React, the presentational vs container component pattern distinguishes between components that focus on appearance (presentational components) and those that manage logic and state (container components). Presentational components render HTML and CSS, while container components handle data and behavior. This separation leads to a cleaner and more organized codebase.',
  },

  {
    title: 'What are render props in React?',
    answer:
      'Render props in React allow code sharing between components through a prop that is a function. This function returns a React element, enabling data to be passed to child components. This technique facilitates logic reuse without relying on higher-order components or hooks.',
    code: `
class DataFetcher extends React.Component {
  state = { data: null };

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

// Usage
<DataFetcher
  url="/api/data"
  render={(data) => <div>{data ? data.name : 'Loading...'}</div>}
/>;`,
  },

  {
    title: 'Explain the composition pattern in React.',
    answer:
      'The composition pattern in React involves building components by combining smaller, reusable ones instead of using inheritance. This encourages creating complex UIs by passing components as children or props.',
    code: `
function WelcomeDialog() {
  return (
    <Dialog>
      <h1>Welcome</h1>
      <p>Thank you for visiting our spacecraft!</p>
    </Dialog>
  );
}

function Dialog(props) {
  return <div className="dialog">{props.children}</div>;
}`,
  },

  {
    title: 'How do you re-render the view when the browser is resized?',
    answer: `To re-render the view on browser resize, use the useEffect hook to listen for the resize event and update state.

Example:`,
    code: `
import React, { useState, useEffect } from 'react';

function ResizeComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>Window width: {windowWidth}px</div>;
}

export default ResizeComponent;
This updates the state and re-renders the component whenever the window is resized.`,
  },

  {
    title: 'How do you handle asynchronous data loading in React applications?',
    answer:
      'Asynchronous data loading uses useEffect alongside useState hooks; fetching data inside useEffect updates state with fetched results ensuring re-renders occur with new data.',
    code: `
import React, { useState, useEffect } from 'react';

const FetchAndDisplayData = () => {
  const [info, updateInfo] = useState(null);
  const [isLoading, toggleLoading] = useState(true);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const res = await fetch('https://api.example.com/data');
        const data = await res.json();
        updateInfo(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        toggleLoading(false);
      }
    };

    retrieveData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Fetching data, please wait...</p>
      ) : (
        <pre>{JSON.stringify(info, null, 2)}</pre>
      )}
    </div>
  );
};

export default FetchAndDisplayData;`,
  },

  {
    title: 'What are some common pitfalls when doing data fetching in React?',
    answer:
      'Common pitfalls in data fetching with React include failing to handle loading and error states, neglecting to clean up subscriptions which can cause memory leaks, and improperly using lifecycle methods or hooks. Always ensure proper handling of these states, clean up after components, and utilize useEffect for side effects in functional components.',
  },

  // React Router
  // Understanding React Router is important in front end interviews because most real-world applications need client-side routing to handle navigation, dynamic URLs, and nested layouts. Proficiency with routing shows you can structure applications effectively and provide a seamless user experience."},

  {
    title: 'What is a React Router?',
    answer:
      'React Router is a popular routing library for React applications that enables navigation between different components based on the URL. It provides declarative routing, allowing you to define routes and their corresponding components in a straightforward manner.',
  },

  {
    title: 'How does React Router work, and how do you implement dynamic routing?',
    answer:
      'React Router maps URL paths to components, enabling navigation in single-page apps. Dynamic routing allows you to use URL parameters to render components based on dynamic values.',
    code: `
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function UserPage() {
  const { id } = useParams(); // Access dynamic parameter
  return <h1>User ID: {id}</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<UserPage />} /> {/* Dynamic path */}
      </Routes>
    </BrowserRouter>
  );
}
Key features:

Dynamic Segments: :id captures dynamic data from the URL.
useParams Hook: Accesses these dynamic values for rendering.`,
  },

  {
    title: 'How do you handle nested routes and route parameters in React Router?',
    answer: `Nested routes allow you to create hierarchies of components, and useParams helps access dynamic route parameters.

Key techniques:

<Outlet>: Renders child routes within a parent layout
useParams: Retrieves route parameters for dynamic routing`,
    code: `
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useParams,
} from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <h2>User ID: {userId}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="user/:userId" element={<Outlet />}>
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`,
  },

  {
    title: 'What is the difference between BrowserRouter and HashRouter?',
    answer: `BrowserRouter: Uses the HTML5 History API to manage navigation, enabling clean URLs without the hash (#). It requires server-side configuration to handle routes correctly, especially for deep linking.

HashRouter: Uses the hash (#) portion of the URL to simulate navigation. It doesn't require server-side configuration, as the hash is never sent to the server. This makes it suitable for environments where server-side routing isn't possible (e.g., static hosting).`,
  },

  {
    title: 'How React Router is different from the history library?',
    answer: `React Router is a routing library for React that provides a declarative API for defining routes and handling navigation. It manages components and URLs.

History library is a lower-level utility that only manages browser history (e.g., pushing and popping history entries). It doesn't handle UI rendering or routing, making it more generic and not React-specific.

React Router uses the history library internally but adds additional features like routing and component management.`,
  },

  {
    title: 'What are the <Router> components of React Router v6?',
    answer: `In React Router v6, the key <Router> components are:

<BrowserRouter>: Uses the HTML5 history API to keep the UI in sync with the URL. It's commonly used for web applications.
<HashRouter>: Uses URL hash fragments (#) to manage routing, making it suitable for static file hosting or legacy browsers that don't support the HTML5 history API.
<MemoryRouter>: Keeps the URL in memory (no address bar changes), useful for non-browser environments like tests or embedded apps.
<StaticRouter>: Used for server-side rendering (SSR), where routing is handled without a browser, typically in Node.js environments.
Each of these routers serves different use cases but provides the same routing functionality within a React app.`,
  },

  {
    title: 'What is the purpose of the push and replace methods of history?',
    answer: `The push and replace methods of the history library are used to manage the browser's history stack and control navigation.

push:
Adds a new entry to the history stack, which means the user can navigate back to it using the browser's back button.
Example: history.push('/new-page')
replace:
Replaces the current entry in the history stack with a new one, meaning the user cannot go back to the previous page using the back button.
Example: history.replace('/new-page')`,
  },

  {
    title: 'How do you navigate programmatically in React Router?',
    answer: `In React Router v6, you can navigate programmatically by using the useNavigate hook. First, import useNavigate from react-router-dom and call it to get the navigate function. Then, you can use navigate('/new-page') to navigate to a different route.

For example:`,
    code: `
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  const goToPage = () => navigate('/new-page');
  return <button onClick={goToPage}>Go to New Page</button>;
}
In React Router v5, the useHistory hook provides access to the history object, 
which you can use to push a new route. For example, 
history.push('/new-page') will navigate to the specified route.

For example:


import { useHistory } from 'react-router-dom';

function MyComponent() {
  const history = useHistory();
  const goToPage = () => history.push('/new-page');
  return <button onClick={goToPage}>Go to New Page</button>;
}
Both methods allow you to navigate programmatically in React Router.`,
  },

  {
    title: 'How would you implement route guards or private routes in React?',
    answer: `To implement private routes, create a component that checks if the user is authenticated before rendering the desired route.

Example:


import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}
PrivateRoute: Checks authentication and either renders the children (protected routes) or redirects to the login page.
<Navigate>: Replaces the deprecated <Redirect> for redirecting in React Router v6+.`,
  },

  {
    title: 'How do you manage the active route state in a multi-page React application?',
    answer: `Use the useLocation hook to get the current route, and conditionally apply styles for the active state.

Example:


import { useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  return (
    <nav>
      <ul>
        <li className={location.pathname === '/home' ? 'active' : ''}>Home</li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          About
        </li>
      </ul>
    </nav>
  );
}`,
  },

  {
    title: 'How do you handle 404 errors or page not found in React Router?',
    answer: `To handle 404 errors or page not found in React Router, create a catch-all route at the end of your route configuration that renders a custom 404 component.

Example:`,
    code: `
import { Routes, Route } from 'react-router-dom';

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
In this example, the NotFound component is rendered when no other routes match the URL, indicating a 404 error.`,
  },

  {
    title: 'How to get query parameters in React Router?',
    answer: `In React Router v6, you can use the useSearchParams hook to access query parameters from the URL.

Example:


import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('paramName');
  return <div>Query Param: {queryParam}</div>;
}
This hook allows you to retrieve and manipulate query parameters in React Router v6.`,
  },

  {
    title: 'How do you perform an automatic redirect after login in React Router?',
    answer: `To perform an automatic redirect after login in React Router, use the useNavigate hook to navigate to the desired route after successful authentication.

Example:


import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    navigate('/dashboard');
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
In this example, the handleLogin function navigates to the /dashboard route after successful login.`,
  },

  {
    title: 'How do you pass props to a route component in React Router?',
    answer: `In React Router v6, you can pass props to a route component using the element prop in the <Route> component.

Example:


import { Routes, Route } from 'react-router-dom';

function MyComponent({ propValue }) {
  return <div>Prop Value: {propValue}</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/my-route" element={<MyComponent propValue="Hello" />} />
    </Routes>
  );
}
In this example, the propValue prop is passed to the MyComponent component when rendering the /my-route route.

React Internationalization
Understanding internationalization (i18n) in React is important in front end interviews because many products serve global audiences and must support multiple languages and locales. Showing you can implement i18n demonstrates attention to accessibility, user experience, and readiness to build applications for diverse users.`,
  },

  {
    title: 'How do you localize React applications?',
    answer: `Localization typically involves libraries like react-i18next or react-intl. Set up translation files for different languages and configure the library within your app using provided hooks or components.`,
    code: `
// Example using react-i18next
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <p>{t('welcome_message')}</p>;
};`,
  },

  {
    title: 'What is react-intl?',
    answer: `react-intl is a library that provides internationalization (i18n) support for React applications. It helps in formatting numbers, dates, strings, and handling translation/localization. It integrates with the Intl API in JavaScript to provide locale-specific data and translation management.`,
  },

  {
    title: 'What are the main features of react-intl?',
    answer: `Formatted text: Helps in formatting messages and strings with placeholders.
Number formatting: Allows for formatting numbers, currencies, and percentages according to the locale.
Date and time formatting: Helps in formatting dates and times in various formats based on the locale.
Plural and gender support: Provides plural and gender-aware string formatting.`,
  },

  {
    title: 'What are the two ways of formatting in react-intl?',
    answer: `Component-based formatting: Using React components like <FormattedMessage />, <FormattedNumber />, <FormattedDate />, etc., to format content.
Hook-based formatting: Using hooks like useIntl for formatting messages, numbers, or dates imperatively within components.`,
  },

  {
    title: 'How to use FormattedMessage as a placeholder using react-intl?',
    answer: `You can use the FormattedMessage component to handle placeholders within strings. Placeholders are replaced dynamically with variables in the translated string.


import { FormattedMessage } from 'react-intl';

function WelcomeMessage() {
  return (
    <FormattedMessage
      id="welcome"
      defaultMessage="Hello, {name}!"
      values={{ name: 'John' }}
    />
  );
}
Here, {name} is a placeholder, and John will replace it.`,
  },

  {
    title: 'How to access the current locale with React Intl?',
    answer: `You can access the current locale using the useIntl hook or the IntlProvider's locale prop.

Using useIntl:


import { useIntl } from 'react-intl';

function LocaleDisplay() {
  const intl = useIntl();
  return <div>Current locale: {intl.locale}</div>;
}
Using IntlProvider:


<IntlProvider locale="en" messages={messages}>
  <MyComponent />
</IntlProvider>
Here, locale="en" defines the current locale.`,
  },

  {
    title: 'How to format date using react-intl?',
    answer: `You can format dates using the <FormattedDate /> component or the useIntl hook's formatDate method.

Using <FormattedDate /> component:


import { FormattedDate } from 'react-intl';

function DateComponent() {
  return (
    <FormattedDate
      value={new Date()}
      year="numeric"
      month="long"
      day="2-digit"
    />
  );
}
Using useIntl hook:


import { useIntl } from 'react-intl';

function DateComponent() {
  const intl = useIntl();
  const formattedDate = intl.formatDate(new Date(), {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  return <div>{formattedDate}</div>;
}
These methods allow you to format the date in a locale-sensitive manner.

React Testing
Understanding testing in React is important in front end interviews because it shows you can write reliable, maintainable code and catch bugs early through unit, integration, and UI tests. Proficiency with tools like Jest and React Testing Library signals that you prioritize code quality and can work effectively in team environments with CI/CD workflows.`,
  },

  {
    title: 'How do you test React applications?',
    answer: `Testing React applications can be done using Jest and React Testing Library. Jest serves as the testing framework while React Testing Library provides utilities for testing components similarly to user interactions.`,
  },

  {
    title: 'What is Jest and how is it used for testing React applications?',
    answer: `Jest is a JavaScript testing framework that provides a test runner, assertion library, and mocking support. It's commonly used for testing React applications due to its simplicity and integration with tools like React Testing Library.`,
  },

  {
    title: 'What is React Testing Library and how is it used for testing React components?',
    answer: `React Testing Library is a testing utility for React that helps test components in a way that resembles how users interact with the application. It provides functions to render components, interact with them, and assert on the rendered output.`,
  },

  {
    title: 'How do you test React components using React Testing Library?',
    answer: `To test React components using React Testing Library, you can:

Render the component using render.
Interact with the component (e.g., clicking buttons, entering text).
Assert on the rendered output using queries like getByText, queryByRole, etc.
Example:


import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders component', () => {
  render(<MyComponent />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('Clicked!')).toBeInTheDocument();
});
In this example, the test renders MyComponent, clicks a button, and asserts that the text 'Clicked!' is present.`,
  },

  {
    title: 'How do you test asynchronous code in React components?',
    answer: `To test asynchronous code in React components, you can use async/await with waitFor from React Testing Library to handle asynchronous operations like data fetching or API calls.

Example:


import { render, screen, waitFor } from '@testing-library/react';
import MyComponent from './MyComponent';

test('fetches data and renders it', async () => {
  render(<MyComponent />);
  await waitFor(() => {
    expect(screen.getByText('Data loaded')).toBeInTheDocument();
  });
});
In this example, the test waits for the data to be loaded before asserting that the text 'Data loaded' is present.`,
  },

  {
    title: 'How do you mock API calls in React component tests?',
    answer: `To mock API calls in React component tests, you can use Jest's jest.mock to mock the API module and return mock data. This allows you to simulate API responses without making actual network requests.

Example:


import { render, screen } from '@testing-library/react';

jest.mock('./api', () => ({
  fetchData: jest.fn(() => Promise.resolve('mocked data')),
}));

import MyComponent from './MyComponent';

test('fetches data and renders it', async () => {
  render(<MyComponent />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('mocked data')).toBeInTheDocument();
});
In this example, the fetchData function from the api module is mocked to return 'mocked data' for testing purposes.`,
  },

  {
    title: 'How do you test React hooks in functional components?',
    answer: `To test React hooks in functional components, you can use the renderHook function from @testing-library/react-hooks to render the hook and test its behavior.

Example:


import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('increments counter', () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
In this example, the useCounter hook is tested by rendering it with renderHook and asserting that the counter increments correctly.`,
  },

  {
    title: 'How do you test custom hooks in React?',
    answer: `To test custom hooks in React, you can use the renderHook function from @testing-library/react-hooks to render the hook and test its behavior.

Example:


import { renderHook, act } from '@testing-library/react-hooks';
import useCustomHook from './useCustomHook';

test('hook behavior', () => {
  const { result } = renderHook(() => useCustomHook());
  act(() => {
    result.current.doSomething();
  });
  expect(result.current.value).toBe('expected value');
});
In this example, the useCustomHook hook is tested by rendering it with renderHook and asserting its behavior.`,
  },

  {
    title: 'What is Shallow Renderer in React testing?',
    answer: `The Shallow Renderer in React testing is a technique that allows you to render a React component without rendering its child components. This helps isolate the component being tested, focusing only on its logic, behavior, and output, without interference from its dependencies. It is useful for testing component states, event handling, and props in isolation.

Here's an example of using Shallow Renderer with Enzyme:


import React from 'react';
import { shallow } from 'enzyme';

// Example Component
function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

// Test using Shallow Renderer
describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    const wrapper = shallow(<Button label="Click Me" />);
    expect(wrapper.text()).toBe('Click Me'); // Test the button label
  });

  it('calls onClick when the button is clicked', () => {
    const onClickMock = jest.fn(); // Mock function
    const wrapper = shallow(<Button label="Click Me" onClick={onClickMock} />);
    wrapper.simulate('click'); // Simulate click event
    expect(onClickMock).toHaveBeenCalledTimes(1); // Verify onClick was called
  });
});
Shallow Rendering renders the component without its children, making tests simpler and faster. The shallow function is used to test the component's output, props, and event handling. In the example, the label of the button and the click event handler are tested in isolation, ensuring the component behaves as expected.`,
  },

  {
    title: 'What is Snapshot Testing in React?',
    answer: `Snapshot Testing in React is a testing technique that captures the rendered output of a component and saves it as a snapshot. Subsequent test runs compare the current output with the saved snapshot to detect any unexpected changes. If the output differs from the snapshot, the test fails, indicating that the component's output has changed.

Here's an example of using Snapshot Testing with Jest:


import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from './MyComponent';

test('renders correctly', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
In this example, the renderer.create function renders the MyComponent and converts it to a JSON tree. The toMatchSnapshot function saves the snapshot of the component's output. Subsequent test runs compare the current output with the saved snapshot, ensuring the component's output remains consistent.`,
  },

  {
    title: 'How do you test React components that use context?',
    answer: `To test React components that use context, you can wrap the component in a context provider with the desired context values for testing. This allows you to simulate the context values and test the component's behavior based on those values.

Example:


import { render } from '@testing-library/react';
import { MyContextProvider } from './MyContextProvider';
import MyComponent from './MyComponent';

test('renders correctly with context', () => {
  const { getByText } = render(
    <MyContextProvider value="test value">
      <MyComponent />
    </MyContextProvider>,
  );
  expect(getByText('test value')).toBeInTheDocument();
});
In this example, the MyComponent is wrapped in a MyContextProvider with a specific context value for testing. The test verifies that the component renders correctly with the provided context value.`,
  },

  {
    title: 'How do you test React components that use Redux?',
    answer: `To test React components that use Redux, you can use the redux-mock-store library to create a mock store with the desired state for testing. This allows you to simulate the Redux store and test the component's behavior based on the state.

Example:


import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MyComponent from './MyComponent';

const mockStore = configureStore([]);

test('renders correctly with Redux state', () => {
  const store = mockStore({ counter: 0 });
  const { getByText } = render(
    <Provider store={store}>
      <MyComponent />
    </Provider>,
  );
  expect(getByText('Counter: 0')).toBeInTheDocument();
});
In this example, the MyComponent is wrapped in a Provider with a mock Redux store containing the initial state { counter: 0 } for testing. The test verifies that the component renders correctly with the provided Redux state.`,
  },

  {
    title:
      'What are the key differences between shallow rendering and full DOM rendering in React tests?',
    answer: `Shallow Rendering: Renders only the component being tested, without rendering its child components. Useful for isolated unit testing.
Full DOM Rendering: Mounts the entire component tree, including children, providing a complete DOM structure. Ideal for integration tests.`,
  },

  {
    title: 'What is the TestRenderer package in React?',
    answer: `The TestRenderer package in React is a utility for rendering components and capturing their output for testing purposes. It provides a simple API for rendering components and inspecting their rendered output, making it easier to write tests for React components.

Example:


import TestRenderer from 'react-test-renderer';
import MyComponent from './MyComponent';

const renderer = TestRenderer.create(<MyComponent />);
const tree = renderer.toJSON();
expect(tree).toMatchSnapshot();
In this example, the TestRenderer.create function renders the MyComponent and converts it to a JSON tree. The toMatchSnapshot function saves the snapshot of the component's output for testing.`,
  },
];

export default allData;
