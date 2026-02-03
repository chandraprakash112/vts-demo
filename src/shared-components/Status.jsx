import {
  Calendar,
  CheckCircle,
  CloudDownload,
  Eye,
  MapPin,
  Package,
  Shield,
  ShieldAlert,
  TriangleAlert,
  Truck,
  Wrench,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const getColor = (v) => {
  let el = {
    color: 'text-white',
  };
  
  // PRN status ===
  if (v === 'gr completed') {
    el.bg = 'bg-[#DCFCE7]';
    el.color = 'text-[#008236]';
    el.border = 'border-[#0000001A]';
  }else if (v === 'gr pending') {
    el.bg = 'bg-gray-200';
    el.color = 'text-gray-600';
    el.border = 'border-gray-300';
  }else if (v === 'failed' || v === 'rejected' || v === 'gr not done') {
    el.bg = 'bg-[#FFEDD4]';
    el.color = 'text-[#CA3500]';
    el.border = 'border-[#0000001A]';
  }
  // SRN status ===
  else if (v === 'driver assigned' || v === 'gr check' || v === 'available') {
    el.color = 'text-[#1447E6]';
    
    if (v === 'available') {
      el.icon = <MapPin size={14} />;
    }else{
      el.bg = 'bg-[#EFF6FF]';
      el.border = 'border-[#BEDBFF]';
    }
  } else if (v === 'location pending' || v === 'pending') {
    el.color = 'text-[#F54900]';
    
    if (v === 'pending') {
      el.icon = <TriangleAlert size={14} />;
    }else {
      el.bg = 'bg-[#D9231D4D]';
      el.border = 'border-[#FFD6A7]';
    }
  } else if (v === 'verified') {
    el.color = 'text-[#00A63E]';
    el.icon = <CheckCircle size={14} />;
  } 
  
  // Accident Management status ===
  else if (v === 'pending driver' || v === 'no movement' || v === 'move to plant') {
    el.bg = 'bg-[#FEFCE8]';
    el.color = 'text-[#A65F00]';
    el.border = 'border-[#FFF085]';
  } else if (v === 'high') {
    el.bg = 'bg-[#ffe3e666]';
    el.color = 'text-red-500';
    el.border = 'border-[#f2b5bb]';
    el.icon = <TriangleAlert size={13} />;
  } else if (v === 'critical') {
    el.bg = 'bg-[#ffcdd2a3]';
    el.color = 'text-red-700';
    el.border = 'border-red-600';
    el.icon = <Shield size={13} />;
  } else if (v === 'medium') {
    el.bg = 'bg-[#fffcf4]';
    el.color = 'text-red-700';
    el.border = 'border-[#f3b80e]';
    el.icon = <TriangleAlert size={13} />;
  } else if (v === 'repair') {
    el.bg = 'bg-blue-500';
    el.icon = <Wrench size={13} />;
  } else if (v === 'replace') {
    el.bg = 'bg-red-600';
    el.icon = <ShieldAlert size={13} />;
  } else if (v === 'assessment needed') {
    el.bg = 'bg-orange-600';
    el.icon = <Eye size={13} />;
  } else if (v === 'pending qc') {
    el.bg = 'bg-orange-400';
  } else if (v === 'case closed') {
    el.bg = 'bg-gray-500';
  } else if (v === 'pending verification') {
    el.bg = 'bg-[#f3b80e]';
    el.border = 'border-[#f3b80e]';
  } else if (v === 'cleared') {
    el.bg = 'bg-green-500';
  }

  return el;
};

export default function Status({ title, data }) {
  const val = data?.[title];
  const res = getColor(val?.toLowerCase());
  // const [res, setRes] = useState(null);

  // useEffect(() => {
  //   if (val) {
  //     (async () => {
  //       const result = getColor(val);
  //       console.log(result);

  //       setRes(result);
  //     })();
  //   }
  // }, [val]);

  if (!res) return '';

  return (
    <button
      className={`flex items-center gap-2 ${res.bg} ${res.color} ${res.border ? 'border ' + res.border : ''} px-3 py-0.5 rounded-md text-[12px] capitalize`}
    >
      {res.icon}
      {val}
    </button>
  );
}
