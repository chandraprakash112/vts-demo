import { Mail, Phone } from 'lucide-react';

const OblHelpdesk = () => {
  const helpdeskData = [
    {
      name: 'Atul Singh',
      responsibility: 'Dispatch & Delivery Status',
      email: 'oblhelpdesk@vecv.in',
      phone: '9827605683',
    },
    {
      name: 'Manish Kesharwani',
      responsibility: 'CNG Certificates',
      email: 'zzmkesharwani@VECV.IN',
      phone: '8982934775',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-[#D0D7D5]">
        <h2 className="text-center font-semibold text-lg py-4">OBL Help</h2>

        <div className="overflow-x-auto p-2">
          <table className="w-full text-sm">
            <thead className="text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Responsibility</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">E-Mail ID</th>
                <th className="px-4 py-3 text-left">Contact No.</th>
              </tr>
            </thead>
            <tbody>
              {helpdeskData.map((item, index) => (
                <tr key={index} className="border-t border-[#D0D7D533] hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-medium">{item.name}</td>
                  <td className="px-4 py-3 font-medium">{item.responsibility}</td>
                  <td className="px-4 py-3 font-medium">{item.email}</td>
                  <td className="px-4 py-3 font-medium">{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#D0D7D5] p-5">
          <div className="flex items-center gap-2 mb-4 font-semibold">
            <Mail size={18} className="text-gray-500" />
            Write to Us
          </div>

          <ul className="space-y-2 text-blue-600 font-semibold text-sm">
            <li>asbhadoriya@VECV.IN</li>
            <li>schouhan@VECV.IN</li>
            <li>akumar58@vecv.in</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-[#D0D7D5] p-5">
          <div className="flex items-center gap-2 mb-4 font-semibold">
            <Phone size={18} className="text-gray-500" />
            OBL CALL CENTER
          </div>

          <div className="space-y-3 text-sm font-semibold">
            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center gap-2">
                <Phone size={18} className="text-gray-500" />
                Call
              </span>
              <span className="font-semibold">18002035911</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center gap-2">
                <Mail size={18} className="text-gray-500" />
                Email
              </span>
              <span className="font-semibold">kajal.kumari@cogentservices.com</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center gap-2">
                <Mail size={18} className="text-gray-500" />
                Email
              </span>
              <span className="font-semibold">rupesh.singh@cogentservices.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OblHelpdesk;
