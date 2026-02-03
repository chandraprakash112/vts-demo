import {
  FileText,
  Send,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function DashboardBilling() {
  const navigate = useNavigate();

  const KPI = ({ label, value, width, color }) => (
    <div>
      <div className="flex justify-between mb-2">
        <p className="font-medium">{label}</p>
        <span
          className={`text-${color}-600 border border-${color}-500 rounded-full px-3 py-0.5 text-sm`}
        >
          {value}
        </span>
      </div>

      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-black" style={{ width }}></div>
      </div>
    </div>
  );

  return (
    <>
      <div className="mt-5 bg-gray-50 min-h-screen space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Pending Bills</p>
              <span className="text-green-600"><TrendingUp size={16} /></span>
            </div>

            <p className="text-3xl font-bold mt-4">23</p>
            <p className="text-orange-600 font-semibold mt-1">₹2,85,000</p>
            <p className="text-sm text-orange-600 mt-2">+5 from last month</p>
            <p className="text-xs text-gray-500 mt-1">Updated 2 hours ago</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Approved Bills</p>
              <span className="text-green-600"><TrendingUp size={16} /></span>
            </div>

            <p className="text-3xl font-bold mt-4">156</p>
            <p className="text-green-600 font-semibold mt-1">₹18,45,000</p>
            <p className="text-sm text-green-600 mt-2">+12 from last month</p>
            <p className="text-xs text-gray-500 mt-1">Updated 1 hour ago</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Rejected Bills</p>
              <span className="text-red-600"><TrendingDown size={16} /></span>
            </div>

            <p className="text-3xl font-bold mt-4">8</p>
            <p className="text-red-600 font-semibold mt-1">₹95,000</p>
            <p className="text-sm text-red-600 mt-2">-2 from last month</p>
            <p className="text-xs text-gray-500 mt-1">Updated 30 mins ago</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Payment Pending</p>
              <span className="text-green-600"><TrendingUp size={16} /></span>
            </div>

            <p className="text-3xl font-bold mt-4">45</p>
            <p className="text-blue-600 font-semibold mt-1">₹5,25,000</p>
            <p className="text-sm text-blue-600 mt-2">+8% from last month</p>
            <p className="text-xs text-gray-500 mt-1">Updated just now</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-lg mb-4">₹ Payment Status Tracker</h2>

            <div className="space-y-4">
              {[
                {
                  label: 'Payment Initiated',
                  bills: 15,
                  amount: '₹2,45,000',
                  color: 'bg-blue-500',
                },
                {
                  label: 'Under Processing',
                  bills: 12,
                  amount: '₹1,85,000',
                  color: 'bg-yellow-500',
                },
                { label: 'Cleared', bills: 8, amount: '₹95,000', color: 'bg-green-500' },
                { label: 'Failed / Rejected', bills: 3, amount: '₹35,000', color: 'bg-red-500' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.bills} bills</p>
                    </div>
                  </div>
                  <p className="font-semibold">{item.amount}</p>
                </div>
              ))}
            </div>

            <button
            type="button"
            className="flex items-center justify-center gap-3 px-4 py-2 mt-5 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-100 w-full cursor-pointer"
          >
            <FileText size={18} />
            View Payment History
          </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-lg mb-6">Performance KPIs</h2>

            <div className="space-y-6">
              <KPI label="On-time Submission %" value="87%" width="87%" color="green" />
              <KPI label="First-time Approval %" value="73%" width="73%" color="blue" />
              <KPI label="Avg. Processing Time" value="2.3 days" width="65%" color="orange" />
              <KPI label="Payment Cycle Time" value="5.8 days" width="45%" color="purple" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
