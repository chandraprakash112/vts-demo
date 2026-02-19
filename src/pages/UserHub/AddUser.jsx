import { useEffect, useState } from 'react';
import Search from '../../shared-components/Search';
import IDCard from './IDCard';
import { useNavigate } from 'react-router-dom';
import { Plus, X, UserPlus, Briefcase, MapPin, DollarSign, Shield } from 'lucide-react';
import InputField from '../../shared-components/InputField';
import { SelectField } from '../../shared-components/FieldType';
import userService from '../../api/userApiForJsFile';

function AddUser({ setShowForm }) {
  const [developerList, setDeveloperList] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    userRole: 'User',
    company: '',
    location: '',
    package: '',
    experience: '',
    image: 'https://i.pravatar.cc/150',
  });

  // const navigate = useNavigate();

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    const res = userService.GET_ALL('developerList');
    if (res?.status) setDeveloperList(res.data);
  };
  console.log(developerList);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, id: Date.now() });

    const res = userService.ADD({ ...formData });

    if (res?.status) {
      setShowForm({result:true});
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-2xl shadow-2xl relative my-auto animate-in fade-in zoom-in duration-300">
          <button
            onClick={setShowForm}
            className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full text-slate-400"
          >
            <X size={24} />
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
              <UserPlus size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800">Add New User</h2>
              <p className="text-slate-500 text-sm">Fill in the professional details below.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
              label="Full Name"
              name="name"
              placeholder="e.g. Shyam"
              value={formData.name}
              onChange={handleInputChange}
              icon={<UserPlus size={16} />}
            />
            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="shyam@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              icon={<Plus size={16} />}
            />
            <InputField
              label="Designation"
              name="role"
              placeholder="Microsoft Developer"
              value={formData.role}
              onChange={handleInputChange}
              icon={<Briefcase size={16} />}
            />
            <InputField
              label="Company"
              name="company"
              placeholder="Sampark Pvt Ltd"
              value={formData.company}
              onChange={handleInputChange}
              icon={<Briefcase size={16} />}
            />
            <InputField
              label="Location"
              name="location"
              placeholder="Gurugram, Haryana"
              value={formData.location}
              onChange={handleInputChange}
              icon={<MapPin size={16} />}
            />
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="LPA"
                name="package"
                placeholder="20"
                value={formData.package}
                onChange={handleInputChange}
                icon={<DollarSign size={16} />}
              />
              <InputField
                label="Years Exp"
                name="experience"
                placeholder="10"
                value={formData.experience}
                onChange={handleInputChange}
                icon={<Briefcase size={16} />}
              />
            </div>

            <SelectField
              label="User Role"
              icon={<Shield size={18} />}
              options={[
                { label: 'Admin', value: 'admin' },
                { label: 'Editor', value: 'editor' },
                { label: 'Viewer', value: 'viewer' },
              ]}
              onChange={(e) => console.log(e.target.value)}
            />

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-black transition-all shadow-xl"
              >
                Save User Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
