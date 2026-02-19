import React, { useState } from 'react';
import { Terminal, BookOpen, Layers, Brain, Flame } from 'lucide-react';
import QuestionCard from '../QuestionCard';
import allData from './AngularData';

const data = [
  {
    label: 'All',
    icon: <Layers size={18} />,
    data: allData,
  },

  /* ===================== BEGINNER ===================== */
  {
    label: 'Beginner',
    icon: <BookOpen size={18} />,
    data: [
      {
        title: 'What is Angular?',
        answer:
          'Angular is a TypeScript-based front-end framework developed by Google for building scalable single-page applications using components, services, and dependency injection.',
      },
      {
        title: 'What are the key features of Angular?',
        answer:
          'Key features include two-way data binding, component-based architecture, dependency injection, RxJS, directives, and a powerful CLI.',
      },
      {
        title: 'What is a component in Angular?',
        answer:
          'A component is a building block of an Angular application. It consists of a template, a class, and metadata that controls how the view is rendered.',
      },
      {
        title: 'What is a module in Angular?',
        answer:
          'A module is a container for related components, directives, pipes, and services. The root module is AppModule.',
      },
      {
        title: 'What is data binding?',
        answer:
          'Data binding connects the component class and the template. Angular supports interpolation, property binding, event binding, and two-way binding.',
      },
      {
        title: 'What is two-way data binding?',
        answer:
          'Two-way data binding synchronizes data between the component and the view using [(ngModel)].',
        code: `
<input [(ngModel)]="name" />
<p>{{ name }}</p>
        `,
      },
      {
        title: 'What are directives?',
        answer:
          'Directives are instructions in the DOM. Types include component directives, structural directives, and attribute directives.',
      },
      {
        title: 'What is *ngIf?',
        answer:
          '*ngIf conditionally adds or removes elements from the DOM.',
        code: `
<div *ngIf="isLoggedIn">Welcome</div>
        `,
      },
      {
        title: 'What is *ngFor?',
        answer:
          '*ngFor iterates over a collection and renders elements dynamically.',
      },
      {
        title: 'What is interpolation?',
        answer:
          'Interpolation displays component data in the template using {{ }}.',
      },
      {
        title: 'What is Angular CLI?',
        answer:
          'Angular CLI is a command-line tool used to create, build, test, and deploy Angular applications.',
      },
      {
        title: 'What is a service in Angular?',
        answer:
          'A service is a class used to share logic or data across components.',
      },
      {
        title: 'What is dependency injection?',
        answer:
          'Dependency Injection allows Angular to provide required dependencies to a class automatically.',
      },
      {
        title: 'What is lifecycle hook?',
        answer:
          'Lifecycle hooks are methods like ngOnInit that run at specific points in a component’s lifecycle.',
      },
    ],
  },

  /* ===================== INTERMEDIATE ===================== */
  {
    label: 'Intermediate',
    icon: <Brain size={18} />,
    data: [
      {
        title: 'What is ngOnInit?',
        answer:
          'ngOnInit is a lifecycle hook that runs once after component initialization.',
      },
      {
        title: 'Difference between ngOnInit and constructor?',
        answer:
          'Constructor initializes dependencies, while ngOnInit handles component initialization logic.',
      },
      {
        title: 'What is RxJS?',
        answer:
          'RxJS is a reactive programming library used in Angular for handling asynchronous operations.',
      },
      {
        title: 'What are Observables?',
        answer:
          'Observables represent a stream of data that can be observed over time.',
      },
      {
        title: 'Observable vs Promise?',
        answer:
          'Observables handle multiple values over time, while Promises resolve once.',
      },
      {
        title: 'What is HttpClient?',
        answer:
          'HttpClient is Angular’s service for making HTTP requests.',
      },
      {
        title: 'What is async pipe?',
        answer:
          'Async pipe subscribes to observables automatically and unsubscribes when the component is destroyed.',
      },
      {
        title: 'What is change detection?',
        answer:
          'Change detection updates the view when component data changes.',
      },
      {
        title: 'What is OnPush change detection?',
        answer:
          'OnPush improves performance by checking changes only when input references change.',
      },
      {
        title: 'What is a pipe?',
        answer:
          'Pipes transform data in templates, such as date or uppercase.',
      },
      {
        title: 'What is router-outlet?',
        answer:
          'router-outlet acts as a placeholder where routed components are displayed.',
      },
      {
        title: 'What is lazy loading?',
        answer:
          'Lazy loading loads modules only when required, improving performance.',
      },
      {
        title: 'What is ViewChild?',
        answer:
          'ViewChild allows access to a child component or DOM element.',
      },
    ],
  },

  /* ===================== ADVANCED ===================== */
  {
    label: 'Advanced',
    icon: <Flame size={18} />,
    data: [
      {
        title: 'What is AOT compilation?',
        answer:
          'Ahead-of-Time compilation converts Angular templates into JavaScript during build time for faster rendering.',
      },
      {
        title: 'What is Ivy?',
        answer:
          'Ivy is Angular’s rendering engine that improves performance and bundle size.',
      },
      {
        title: 'What is Zone.js?',
        answer:
          'Zone.js tracks asynchronous operations to trigger change detection.',
      },
      {
        title: 'What is state management in Angular?',
        answer:
          'State management handles application-wide data using services or libraries like NgRx.',
      },
      {
        title: 'NgRx vs services?',
        answer:
          'NgRx is suitable for complex state, while services are enough for simple apps.',
      },
      {
        title: 'What is trackBy in ngFor?',
        answer:
          'trackBy improves performance by tracking list items by unique identifiers.',
      },
      {
        title: 'What are resolvers?',
        answer:
          'Resolvers fetch data before a route is activated.',
      },
      {
        title: 'How do you optimize Angular performance?',
        answer:
          'Using OnPush, lazy loading, trackBy, AOT, and avoiding unnecessary change detection.',
      },
    ],
  },
];


export default function AngularCore() {
  const [activeTab, setActiveTab] = useState(0);

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

            <h1>Angular Knowledge Base</h1>
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
