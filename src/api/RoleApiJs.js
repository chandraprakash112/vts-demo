import userData from '../apiDatabase/UserData';

let users = [...userData];
const loadUsers = async (fileName) => {
  const module = await import(`./${fileName}`);
  return module.default;
};

const response = (status, message, data = null) => ({
  response: 200,
  status,
  message,
  data,
});

/* GET */
const GET_IDS = () => response(true, 'Users fetched', users);

const GET_ID = (id) =>
  response(
    !!users.find((u) => u.id === id),
    users.find((u) => u.id === id) ? 'User fetched' : 'User not found',
    users.find((u) => u.id === id),
  );

/* ADD */
const ADD = (data) => {
  const user = { id: Date.now(), ...data };
  users.push(user);
  return response(true, 'User added', user);
};

/* UPDATE */
const UPDATE_ID = (id, data) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return response(false, 'User not found');

  users[index] = { ...users[index], ...data };
  return response(true, 'User updated', users[index]);
};

/* DELETE */
const DELETE_ID = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return response(false, 'User not found');

  const deleted = users.splice(index, 1)[0];
  return response(true, 'User deleted', deleted);
};

export { GET_IDS, GET_ID, ADD, UPDATE_ID, DELETE_ID };
