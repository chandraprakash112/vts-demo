import { ArrowLeft, MapPin, Package, Truck, BarChart2, DollarSign } from 'lucide-react';
import React from 'react';

const data = [
  {
    name: 'Emoji Text',
    location: 'https://emojidb.org/file-emojis',
    icon: '👉',
    capacity: 2000,
  },
  {
    name: 'Bootstrap Icons',
    location: 'https://icons.getbootstrap.com/',
    icon: '👉',
    capacity: 2000,
  },
  {
    name: 'Google Font',
    location: 'https://fonts.google.com/icons?icon.size=24&icon.color=%231f1f1f',
    icon: '🏳️',
    capacity: 2000,
  },
  {
    name: 'Font Awesome Icons',
    location: 'https://fontawesome.com/v4/icons/',
    icon: '🏳️',
    capacity: 2000,
  },
  {
    name: 'Swiper JS',
    location: 'https://swiperjs.com/demos#centered-auto',
    icon: '🏳️',
    capacity: 200,
  },
  {
    name: 'Mat Icons List',
    location: 'https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/',
    icon: '🏳️',
    // capacity: 2000,
  },
  {
    name: 'Flat Icon',
    location: 'https://www.flaticon.com/search?word=sound',
    icon: '👉',
    capacity: 2000,
  },
  {
    name: 'Spinners',
    location: 'https://changelog.com/news/a-collection-of-free-svg-loading-spinners-AX0y',
    icon: '👉',
  },
  {
    name: 'Favicon Creator',
    location: 'https://favicon.io/',
    icon: '👉',
  },
  {
    name: 'CSS Scan',
    location: 'https://getcssscan.com/css-buttons-examples',
    icon: '🏳️',
  },
  {
    name: 'CSS Buttons',
    location: 'https://uiverse.io/buttons',
    icon: '🏳️',
  },
  {
    name: 'Material MUI Icon',
    location: 'https://mui.com/material-ui/react-button/',
    icon: '🏳️',
  },
  {
    name: 'W3Schools',
    location: 'https://www.w3schools.com/cssref/playdemo.php?filename=playcss_border-style',
    icon: '🏳️',
  },
  {
    name: '',
    location: '',
    icon: '🏳️',
  },
  {
    name: '',
    location: '',
    icon: '🏳️',
  },
  {
    name: '',
    location: '',
    icon: '🏳️',
  },
  {
    name: '',
    location: '',
    icon: '🏳️',
  },
];

export default function HubDashboard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 w-full"
          >
            {/* Header */}
            <h2 className="text-lg font-bold text-slate-800 group-hover:text transition-colors truncate">
              {item?.name}
            </h2>{' '}
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
              <span>{item?.icon}</span>
              <a
                href={item?.location}
                target="_blank"
                className="text-xs font-medium hover:text-blue-500 hover:underline transition-all truncate max-w-[150px]"
              >
                {item?.location?.replace(/^https?:\/\//, '')}
              </a>
            </div>
            <hr className="my-4 border-gray-200" />
            {/* Stats */}
            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Package size={18} className="text-gray-400" /> Total
                </span>
                <span className="font-semibold">{item?.capacity?.toLocaleString()}+</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
