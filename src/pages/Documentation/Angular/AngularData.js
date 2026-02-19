const allData = [
  /* ================= BASIC (1–30) ================= */

  { title: 'What is Angular?', answer: 'Angular is a TypeScript-based front-end framework developed by Google for building scalable single-page applications.' },

  { title: 'What are the main features of Angular?', answer: 'Component-based architecture, two-way data binding, dependency injection, RxJS, Angular CLI, and routing.' },

  { title: 'What is TypeScript?', answer: 'TypeScript is a superset of JavaScript that adds static typing and modern features.' },

  { title: 'What is a component?', answer: 'A component controls a part of the UI using a template, class, and metadata.' },

  { title: 'What is a module?', answer: 'A module groups related components, directives, pipes, and services.' },

  { title: 'What is AppModule?', answer: 'AppModule is the root module that bootstraps the Angular application.' },

  { title: 'What is data binding?', answer: 'It synchronizes data between component and view.' },

  { title: 'Types of data binding?', answer: 'Interpolation, property binding, event binding, and two-way binding.' },

  { title: 'What is interpolation?', answer: 'Displays data using {{ expression }} in templates.' },

  { title: 'What is property binding?', answer: 'Binds component property to DOM property using [property].' },

  { title: 'What is event binding?', answer: 'Binds DOM events to component methods using (event).' },

  { title: 'What is two-way binding?', answer: 'Synchronizes data using [(ngModel)].' },

  { title: 'What are directives?', answer: 'Instructions that manipulate the DOM.' },

  { title: 'Types of directives?', answer: 'Component, structural, and attribute directives.' },

  { title: 'What is *ngIf?', answer: 'Conditionally adds or removes elements from the DOM.' },

  { title: 'What is *ngFor?', answer: 'Loops through collections and renders elements.' },

  { title: 'What is *ngSwitch?', answer: 'Displays elements based on matching conditions.' },

  { title: 'What is Angular CLI?', answer: 'A command-line tool for creating and managing Angular projects.' },

  { title: 'What is a service?', answer: 'A reusable class that contains business logic.' },

  { title: 'What is dependency injection?', answer: 'Angular provides required dependencies automatically.' },

  { title: 'What is ngOnInit?', answer: 'Lifecycle hook executed after component initialization.' },

  { title: 'Difference between constructor and ngOnInit?', answer: 'Constructor injects dependencies; ngOnInit runs initialization logic.' },

  { title: 'What are lifecycle hooks?', answer: 'Methods triggered during component lifecycle stages.' },

  { title: 'What is a template?', answer: 'HTML view of a component.' },

  { title: 'What is metadata?', answer: 'Defines how a class behaves using decorators.' },

  { title: 'What is decorator?', answer: 'A function that adds metadata, like @Component.' },

  { title: 'What is @Component?', answer: 'Decorator that defines a component.' },

  { title: 'What is @NgModule?', answer: 'Decorator that defines a module.' },

  { title: 'What is @Input?', answer: 'Passes data from parent to child component.' },

  { title: 'What is @Output?', answer: 'Emits events from child to parent component.' },

  /* ================= INTERMEDIATE (31–70) ================= */

  { title: 'What is routing?', answer: 'Allows navigation between different views.' },

  { title: 'What is router-outlet?', answer: 'Placeholder where routed components render.' },

  { title: 'What is lazy loading?', answer: 'Loads modules on demand for better performance.' },

  { title: 'What is HttpClient?', answer: 'Service for making HTTP requests.' },

  { title: 'What is RxJS?', answer: 'Library for reactive programming using observables.' },

  { title: 'What is an Observable?', answer: 'A stream of asynchronous data.' },

  { title: 'Observable vs Promise?', answer: 'Observable emits multiple values; Promise emits one.' },

  { title: 'What is subscribe?', answer: 'Executes observable and receives data.' },

  { title: 'What is async pipe?', answer: 'Automatically subscribes and unsubscribes from observables.' },

  { title: 'What is change detection?', answer: 'Process of updating the view when data changes.' },

  { title: 'What is OnPush strategy?', answer: 'Optimized change detection based on reference changes.' },

  { title: 'What is a pipe?', answer: 'Transforms data in templates.' },

  { title: 'Built-in pipes?', answer: 'date, uppercase, lowercase, currency, async.' },

  { title: 'What is custom pipe?', answer: 'User-defined data transformation.' },

  { title: 'What is ViewChild?', answer: 'Accesses child components or DOM elements.' },

  { title: 'What is ContentChild?', answer: 'Accesses projected content.' },

  { title: 'What is ng-content?', answer: 'Used for content projection.' },

  { title: 'What is form?', answer: 'Collects and validates user input.' },

  { title: 'Types of forms?', answer: 'Template-driven and reactive forms.' },

  { title: 'What is reactive form?', answer: 'Form controlled by component model.' },

  { title: 'What is FormControl?', answer: 'Tracks value and validation status.' },

  { title: 'What is FormGroup?', answer: 'Group of form controls.' },

  { title: 'What is FormBuilder?', answer: 'Service to create forms easily.' },

  { title: 'What is validation?', answer: 'Ensures input correctness.' },

  { title: 'What is trackBy?', answer: 'Optimizes ngFor rendering.' },

  { title: 'What is resolver?', answer: 'Fetches data before route loads.' },

  { title: 'What is guard?', answer: 'Controls route access.' },

  { title: 'Types of guards?', answer: 'CanActivate, CanDeactivate, CanLoad.' },

  { title: 'What is environment file?', answer: 'Stores environment-specific configuration.' },

  { title: 'What is SSR?', answer: 'Server-side rendering for better SEO.' },

  /* ================= ADVANCED (71–100) ================= */

  { title: 'What is AOT?', answer: 'Compiles templates at build time.' },

  { title: 'What is JIT?', answer: 'Compiles templates at runtime.' },

  { title: 'AOT vs JIT?', answer: 'AOT is faster and secure; JIT is flexible.' },

  { title: 'What is Ivy?', answer: 'Angular’s rendering engine.' },

  { title: 'What is Zone.js?', answer: 'Detects async operations for change detection.' },

  { title: 'What is state management?', answer: 'Managing shared application state.' },

  { title: 'What is NgRx?', answer: 'Redux-based state management for Angular.' },

  { title: 'NgRx store?', answer: 'Centralized immutable state container.' },

  { title: 'What is action?', answer: 'Describes state change event.' },

  { title: 'What is reducer?', answer: 'Pure function that updates state.' },

  { title: 'What is selector?', answer: 'Retrieves data from store.' },

  { title: 'What is effect?', answer: 'Handles side effects like API calls.' },

  { title: 'What is immutability?', answer: 'State cannot be modified directly.' },

  { title: 'What is tree shaking?', answer: 'Removes unused code during build.' },

  { title: 'What is bundle optimization?', answer: 'Reducing JS size for performance.' },

  { title: 'What is preloading?', answer: 'Loads lazy modules in background.' },

  { title: 'What is custom directive?', answer: 'User-defined DOM behavior.' },

  { title: 'What is dynamic component loading?', answer: 'Loading components at runtime.' },

  { title: 'What is micro frontend?', answer: 'Splitting frontend into independent apps.' },

  { title: 'How to optimize Angular app?', answer: 'Lazy loading, OnPush, trackBy, AOT, caching.' },
];

export default allData;