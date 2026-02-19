import userData from '../apiDatabase/UserData';

const GetUser = (value, type = 'email') =>
  userData.find((u) => u[type]?.toLowerCase() === value.toLowerCase());

const LOGIN = (email, password = '') => {
  const user = GetUser(email);

  return user
    ? { response: 200, status: true, message: 'Login successful', data: user }
    : { response: 200, status: false, message: 'Invalid email' };
};

export { LOGIN };
