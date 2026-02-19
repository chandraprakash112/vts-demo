import NameIcon from '../../shared-components/NameIcon';
import {
  Dashbord,
  Menu,
  BusFront,
  Billing,
  CarMark,
  DeadVeh,
  MDITruck,
  Inspection,
} from '../../styles/icons';
import {
  Home,
  Info,
  Search,
  Settings,
  LogOut,
  ChevronRight,
  Move3DIcon,
  LayoutDashboard,
  User,
  MessageSquare,
  HelpCircle,
  Lock,
  Activity,
  FileBarChart,
  BarChart,
  Key,
  Shield,
  Users,
  FileText,
  Layers,
  Tag,
  ScrollText,
  ToggleLeft,
  Radio,
  Mic2,
  Library,
  Music4,
  Flame,
} from 'lucide-react';

const MenuItems = () => [
  {
    label: 'Home',
    nav: [
      {
        title: 'DashCore',
        path: '/',
        icon: <LayoutDashboard className="w-full h-full" />,
      },
    ],
  },
  {
    label: 'Content',
    nav: [
      {
        title: 'Hub Dashboard',
        path: '/hub',
        icon: <Dashbord className="w-full h-full" />,
      },
      {
        title: 'Posts',
        path: '/posts',
        icon: <FileText className="w-full h-full" />,
      },
    ],
  },
  {
    label: 'Docs',
    nav: [
      {
        title: 'React',
        icon: <NameIcon name={'React'} />,
        nav: [
          {
            title: 'ReactCore',
            path: '/react',
            icon: <NameIcon name={'React Core'} />,
          },
          {
            title: 'React Sniped',
            path: '/react-sniped',
            icon: <NameIcon name={'React Sniped'} />,
          },
          {
            title: 'React Comonents',
            path: '/react-components',
            icon: <NameIcon name={'React Comonents'} />,
          },
        ],
      },
      {
        title: 'Angular',
        icon: <NameIcon name={'A'} />,
        nav: [
          {
            title: 'AngularCore',
            path: '/angular',
            icon: <NameIcon name={'Angular Core'} />,
          },
          {
            title: 'Angular Sniped',
            path: '/angular-sniped',
            icon: <NameIcon name={'Angular Sniped'} />,
          },
        ],
      },
      {
        title: 'JavaScript',
        icon: <NameIcon name={'J S'} />,
        nav: [
          {
            title: 'Core',
            path: '/javascript',
            icon: <NameIcon name={'Core'} />,
          },
          {
            title: 'Javascript code',
            path: '/javascript-code',
            icon: <NameIcon name={'J c'} />,
          },
        ],
      },
      {
        title: 'HTML',
        icon: <NameIcon name={'J S'} />,
        nav: [
          {
            title: 'HTML Core',
            path: '/html',
            icon: <NameIcon name={'H'} />,
          },
          {
            title: 'HTML code',
            path: '/html-code',
            icon: <NameIcon name={'H code'} />,
          },
        ],
      },
    ],
  },
  {
    label: 'Users',
    nav: [
      {
        title: 'All Users',
        // title: 'User Hub',
        path: '/users',
        icon: <Users className="w-full h-full" />,
      },
      {
        title: 'Roles',
        path: '/roles',
        icon: <Shield className="w-full h-full" />,
      },
      {
        title: 'Permissions',
        path: '/permission',
        icon: <Key className="w-full h-full" />,
      },
    ],
  },
  {
    label: 'Media',
    nav: [
      {
        title: 'Story',
        path: '/story',
        icon: <Flame className="w-full h-full" />,
      },
      {
        title: 'Status',
        path: '/status',
        icon: <Flame className="w-full h-full" />,
      },
      {
        title: 'Music Hub',
        inActiveHead: true,
        // path: '/music',
        icon: <Music4 className="w-full h-full" />,
        nav: [
          {
            title: 'Discover',
            path: '/music/discover',
            icon: <Radio className="w-full h-full" />,
          },
          {
            title: 'Artists',
            path: '/music/artists',
            icon: <Mic2 className="w-full h-full" />,
          },
          {
            title: 'Library',
            path: '/music/library',
            icon: <Library className="w-full h-full" />,
          },
        ],
      },
      {
        title: 'Categories',
        path: '/categories',
        icon: <Tag className="w-full h-full" />,
      },
    ],
  },
  {
    label: 'Analytics',
    nav: [
      {
        title: 'Overview',
        path: '/analytics/overview',
        icon: <BarChart className="w-full h-full" />,
      },
      {
        title: 'Reports',
        // path: '/analytics/reports',
        icon: <FileBarChart className="w-full h-full" />,
      },
      {
        title: 'Real-time',
        // path: '/analytics/realtime',
        icon: <Activity className="w-full h-full" />,
      },
    ],
  },
  {
    label: 'Settings',
    nav: [
      {
        title: 'General',
        path: '/settings/general',
        icon: <Settings className="w-full h-full" />,
      },
      {
        title: 'Profile',
        path: '/settings/profile',
        icon: <User className="w-full h-full" />,
      },
      {
        title: 'Security',
        path: '/settings/security',
        icon: <Lock className="w-full h-full" />,
      },
    ],
  },
  {
    label: 'Support',
    nav: [
      {
        title: 'Help Center',
        // path: '/support/help',
        icon: <HelpCircle className="w-full h-full" />,
      },
      {
        title: 'Feedback',
        // path: '/support/feedback',
        icon: <MessageSquare className="w-full h-full" />,
      },
    ],
  },
  {
    label: 'Admin',
    nav: [
      {
        title: 'System Logs',
        // path: '/admin/logs',
        icon: <ScrollText className="w-full h-full" />,
      },
      {
        title: 'Feature Flags',
        // path: '/admin/features',
        icon: <ToggleLeft className="w-full h-full" />,
      },
    ],
  },

  {
    label: 'Operations',
    nav: [
      {
        title: 'Yard Operations',
        icon: <Layers className="w-full h-full" />,
        nav: [
          {
            title: 'Dashboard Yard',
            path: '/yard',
          },
          {
            title: 'SRN',
            path: '/srn',
            // icon: <Inspection className='w-full h-full' />,
          },
          {
            title: 'EPOD Vehicles',
            path: '/epod',
            // icon: <Home className='w-full h-full' />,
          },
        ],
      },
      {
        title: 'Advance search',
        path: '/advance-search',
        icon: <Search className="w-full h-full" />,
      },
    ],
  },
];

export { MenuItems };
