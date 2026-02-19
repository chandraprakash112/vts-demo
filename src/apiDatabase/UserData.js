const userData = [
  {
    id: 1,
    name: 'CP Sikarwar',
    email: 'cpsikarwar@gmail.com',
    role: 'Frontend Developer',
    userRole: 'Admin',
    company: 'Sampark Pvt Ltd',
    location: 'Gurugram, Haryana',
    package: '4.2',
    experience: '5',
    banner: '/public/images/user.jpg',
    image: '/public/images/user.jpg',
  },
  {
    id: 2,
    name: 'Ajay Rao',
    email: 'ajayrao@gmail.com',
    role: 'Backend Developer',
    userRole: 'User',
    company: 'Sampark Pvt Ltd',
    location: 'Gurugram, Haryana',
    package: '8',
    experience: '5',
    image: '/public/images/nature.avif',
  },
  {
    id: 3,
    name: 'Shyam',
    email: 'shyam@gmail.com',
    role: 'Microsoft Developer',
    userRole: 'User',
    company: 'Sampark Pvt Ltd',
    location: 'Gurugram, Haryana',
    package: '20',
    experience: '10',
    image: '/public/images/user-1.jpg',
  },
  {
    id: 4,
    name: 'Shizuka Minamoto',
    email: 'shizuka@gmail.com',
    role: 'UI/UX Designer',
    userRole: 'User',
    phone: '+91 2333332423',
    company: 'Ideal Pvt Ltd',
    location: 'Jaipur, Rajasthan',
    dob: 'Jul 23, 2008',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/fir-angular-pro-47fd2.appspot.com/o/userProfile%2Fj3EpMxEsPkScQce3bFRJXj8HTus2%2F3U-1736268335726-jpg?alt=media&token=e5e93f79-db1d-410f-9369-3df8768e9458',
    image: '/public/images/user-1.jpg',
  },
];

export default userData;

const RoleList = [
  {
    id: 'r1',
    title: 'Super Admin',
    modules: [
      { id: 'm1', title: 'Dashboard', view: 'Yes', edit: 'Yes', delete: 'Yes' },
      { id: 'm2', title: 'User Management', view: 'Yes', edit: 'Yes', delete: 'Yes' },
      { id: 'm3', title: 'Inventory', view: 'Yes', edit: 'Yes', delete: 'Yes' },
      { id: 'm4', title: 'Financial Reports', view: 'Yes', edit: 'Yes', delete: 'Yes' },
      { id: 'm5', title: 'Settings', view: 'Yes', edit: 'Yes', delete: 'Yes' },
    ]
  },
  {
    id: 'r2',
    title: 'Manager',
    modules: [
      { id: 'm1', title: 'Dashboard', view: 'Yes', edit: 'No', delete: 'No' },
      { id: 'm2', title: 'User Management', view: 'No', edit: 'No', delete: 'No' },
      { id: 'm3', title: 'Inventory', view: 'Yes', edit: 'Yes', delete: 'No' },
      { id: 'm4', title: 'Financial Reports', view: 'Yes', edit: 'No', delete: 'No' },
      { id: 'm5', title: 'Settings', view: 'No', edit: 'No', delete: 'No' },
    ]
  },
  {
    id: 'r3',
    title: 'Sales Associate',
    modules: [
      { id: 'm1', title: 'Dashboard', view: 'Yes', edit: 'No', delete: 'No' },
      { id: 'm2', title: 'User Management', view: 'No', edit: 'No', delete: 'No' },
      { id: 'm3', title: 'Inventory', view: 'Yes', edit: 'No', delete: 'No' },
      { id: 'm4', title: 'Financial Reports', view: 'No', edit: 'No', delete: 'No' },
      { id: 'm5', title: 'Settings', view: 'No', edit: 'No', delete: 'No' },
    ]
  },
  {
    id: 'r4',
    title: 'Content Editor',
    modules: [
      { id: 'm1', title: 'Dashboard', view: 'Yes', edit: 'Yes', delete: 'No' },
      { id: 'm2', title: 'User Management', view: 'No', edit: 'No', delete: 'No' },
      { id: 'm3', title: 'Inventory', view: 'No', edit: 'No', delete: 'No' },
      { id: 'm4', title: 'Financial Reports', view: 'No', edit: 'No', delete: 'No' },
      { id: 'm5', title: 'Settings', view: 'Yes', edit: 'Yes', delete: 'No' },
    ]
  }
];

const DeveloperList = [
  { id: 'd1', name: 'Frontend Developer' },
  { id: 'd2', name: 'Backend Developer' },
  { id: 'd3', name: 'Full Stack Developer' },
  { id: 'd4', name: 'UI/UX Designer' },
  { id: 'd5', name: 'DevOps Engineer' },
  { id: 'd6', name: 'Data Scientist' },
  { id: 'd7', name: 'Mobile App Developer' },
  { id: 'd8', name: 'Microsoft Developer' },
];


export { RoleList, DeveloperList };