import { useEffect, useState } from 'react';
import Search from '../../shared-components/Search';
import IDCard from './IDCard';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import userService from '../../api/userApiForJsFile';
import AddUser from './AddUser';

function UserHub() {
  const [searchEvent, setSearchEvent] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchList();
  }, []);
  
  const fetchList = () => {
    const res = userService.GET_ALL('users');
    if (res?.status) setUserData(res.data);
  };

  useEffect(() => {
    searchEvent ? onSearch(searchEvent) : setFilterData(userData);
  }, [searchEvent, userData]);


  const onSearch = (search) => {
    const filtered = userData?.filter((row) =>
      Object.values(row)?.some((value) =>
        String(value)?.toLowerCase().includes(search?.toLowerCase())
      )
    );
    setFilterData(filtered);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log({ ...formData, id: Date.now() });

    // const res = userService.ADD({ ...formData });

    // if (res?.status) {
    //   fetchList();
    //   setShowForm(false)
    // }
  };

  return (
    <>
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-2 mb-8">
        <div className="flex-1 w-full">
          <Search setSearchEvent={setSearchEvent} />
        </div>

        {/* REPLACED BUTTON: Elevated Action Button */}
        <button
          onClick={() => setShowForm(true)}
          className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-5 rounded-2xl font-bold transition-all shadow-lg shadow-blue-200 active:scale-95 pointer"
        >
          <div className="bg-white/20 p-1 rounded-lg group-hover:rotate-90 transition-transform">
            <Plus size={18} />
          </div>
          <span>User</span>
        </button>
      </div>

      {/* FULL DETAILS FORM MODAL */}
      {showForm && (
        <AddUser
          setShowForm={(el) => {
            el?.result ? fetchList() : '';
            setShowForm(false);
          }}
        />
      )}

      {/* USER GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filterData?.map((item, i) => (
          <div
            key={item.id || i}
            onClick={() => navigate(`/users/${item.id || i + 1}`)}
            className="cursor-pointer"
          >
            <IDCard data={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default UserHub;