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
import { Home, Info, Search, Settings, LogOut, ChevronRight, LineChart, User, Lock, CircleQuestionMark, Clock } from 'lucide-react';

const MenuItems = () => [
  {
    lablel: 'Home',
    nav: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <Dashbord className="size-5" />,
      },
    ],
  },
  {
    lablel: 'Plant Operations',
    nav: [
      {
        title: 'Dashboard - Plants',
        path: '/plants',
        icon: <MDITruck className="size-5" />,
      },
      {
        title: 'Plant Management',
        path: '/plant-management',
        icon: <MDITruck className="size-5" />,
      },
    ],
  },
  {
    lablel: 'Yard Operations',
    nav: [
      {
        title: 'Yard Operations',
        icon: <MDITruck className="size-5" />,
        nav: [
          {
            title: 'Dashboard Yard',
            path: '/yard',
          },
          {
            title: 'Yards Management',
            path: '/yards-management',
          },
        ],
      },
      {
        title: 'QC Inspection',
        path: '/qc-inspection',
        icon: <Inspection className="size-5" />,
      },
      {
        title: 'RGP',
        path: '/rgp',
        icon: <Inspection className="size-5" />,
      },
      {
        title: 'PRN',
        path: '/prn',
        icon: <Inspection className="size-5" />,
      },
      {
        title: 'SRN',
        path: '/srn',
        icon: <Inspection className="size-5" />,
      },
      {
        title: 'POP',
        path: '/pop',
        icon: <Inspection className="size-5" />,
      },
      {
        title: 'EPOD',
        icon: <Menu className="size-4" />,
        nav: [
          {
            title: 'EPOD Vehicles',
            path: '/epod',
            // icon: <Home className="size-5" />,
          },
        ],
      },
      {
        title: 'Defective Vehicles',
        path: '/defective-vehicles',
        icon: <BusFront className="size-4" />,
      },
      {
        title: 'Mark No Movement',
        path: '/mark-no-movemenet',
        icon: <CarMark className="size-5" />,
      },
      {
        title: 'Secondary Movement',
        path: '/secondary-movemenet',
        icon: <CarMark className="size-5" />,
      },
      {
        title: 'Dead Vehicles',
        path: '/dead-vehicles',
        icon: <DeadVeh className="size-4" />,
      },
    ],
  },
  {
    lablel: 'Vehicle Management',
    nav: [
      {
        title: 'Vehicle Assignment',
        path: '/vehicle-assignment',
        icon: <MDITruck className="size-5" />,
      },
      {
        title: 'Advance Vehicle Search',
        path: '/advance-vehicle-search',
        icon: <Search className="size-5" />,
      },
      {
        title: 'Vehicle Search',
        path: '/vehicle-search',
        icon: <Search className="size-5" />,
      },
      {
        title: 'Accident Management',
        path: '/accident-management',
        icon: <CarMark className="size-5" />,
      },
    ],
  },
  {
    lablel: 'Billing & Finance',
    nav: [
      {
        title: 'Freight Billing',
        icon: <Billing className="size-5" />,
        nav: [
          {
            title: 'Dashboard - Billing',
            path: '/dashboard-billing',
            // icon: <Home className="size-5" />,
          },
          {
            title: 'Billing Details',
            path: '/billing-detail',
            // icon: <Home className="size-5" />,
          },
        ],
      },
      {
        title: 'Invoiced Vehicles',
        path: '/invoiced-vehicles',
        icon: <Billing className="size-5" />,
      },
    ],
  },
  {
    lablel: 'Transport & Dealers',
    nav: [
      {
        title: 'Admin Control',
        icon: <Home className="size-5" />,
        nav: [
          {
            title: 'Hold Vehicle Updates',
            path: '/hold-vehicle-updates',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Gate Exit Control',
            path: '/gate-exit-control',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Manual Intransit',
            path: '/manual-intransit',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Mark Manual Intransit',
            path: '/mark-manual-intransit',
            icon: <Home className="size-5" />,
          },
        ],
      },
      {
        title: 'Master',
        nav: [
          {
            title: 'Dealers',
            path: '/dealers',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Transporter',
            path: '/transporters',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Driver Master',
            path: '/driver-master',
            icon: <Home className="size-5" />,
          },
        ],
      },
      {
        title: 'Priority Vehicles',
        path: '/priority-vehicles',
        icon: <Home className="size-5" />,
      },
    ],
  },
  {
    lablel: 'Tracking & Monitoring',
    nav: [
      {
        title: 'Live Tracking',
        path: '/live-tracking',
        icon: <BusFront className="size-5" />,
      },
      {
        title: 'Gate Entry - HERE-MAP',
        path: '/gate-entry',
        icon: <BusFront className="size-5" />,
        hideFilter: true,
        hideExport: true
      },
      {
        title: 'Reports',
        icon: <LineChart className="size-5" />,
        nav: [
          {
            title: 'Secondary Movement Vehicles',
            path: '/secondary-movement-vehicles',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Daily Performance',
            path: '/daily-performance',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Ageing Report',
            path: '/ageing-report',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Dispatch Ageing Report',
            path: '/dispatch-ageing-report',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Yard Delay Report',
            path: '/yard-delay-report',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Billing Allocation',
            path: '/billing-allocation',
            icon: <Home className="size-5" />,
          },
          {
            title: 'Accident & Breakdown',
            path: '/accident-breakdown',
            icon: <Home className="size-5" />,
          },
        ],
      },
      {
        title: 'FKRT Blank Vehicles',
        path: '/fkrt-blank-vehicles',
        icon: <BusFront className="size-5" />,
      },
    ],
  },
  {
    lablel: 'Admin',
    nav: [
      {
        title: 'User Management',
        path: '/user-management',
        icon: <User className="size-5" />,
      },
      {
        title: 'Login Logs',
        path: '/login-logs',
        icon: <Clock className="size-5" />,
      },
      {
        title: 'OBL Help Desk',
        path: '/obl-helpdesk',
        icon: <CircleQuestionMark className="size-5" />,
        hideFilter: true
      },
      {
        title: 'Change Password',
        path: '/change-password',
        icon: <Lock className="size-5" />,
        hideFilter: true,
        hideExport: true
      },
    ],
  },
];

export { MenuItems };
