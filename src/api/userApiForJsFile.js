import userData, { RoleList, DeveloperList } from '../apiDatabase/UserData';

class UserService {
  constructor() {
    this.users = [...userData];
    this.developerList = DeveloperList;
    this.roleList = RoleList;
  }

  response(status, message, data = null) {
    return {
      response: 200,
      status,
      message,
      data,
    };
  }

  /* GET ALL */
  GET_ALL(api) {
    return this.response(true, 'Users fetched', this[api]);
  }

  /* GET ONE */
  GET_ID(id) {
    const user = this.users.find((u) => u.id === id);
    return this.response(
      !!user,
      user ? 'User fetched' : 'User not found',
      user,
    );
  }

  /* ADD */
  ADD(data) {
    const user = { id: Date.now(), ...data };
    this.users.push(user);
    return this.response(true, 'User added', user);
  }

  /* UPDATE */
  UPDATE_ID(id, data) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return this.response(false, 'User not found');

    this.users[index] = { ...this.users[index], ...data };
    return this.response(true, 'User updated', this.users[index]);
  }

  /* DELETE */
  DELETE_ID(id) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return this.response(false, 'User not found');

    const deleted = this.users.splice(index, 1)[0];
    return this.response(true, 'User deleted', deleted);
  }
}

export default new UserService();

// // const loadUsers = async (fileName) => {
// //   const module = await import(`./${fileName}`);
// //   return module.default;
// // };

// const response = (status, message, data = null) => ({
//   response: 200,
//   status,
//   message,
//   data,
// });

// /* GET */
// const GET_IDS = (api) =>{
//   return response(true, 'Users fetched', users)
// };

// const GET_ID = (id) =>
//   response(
//     !!users.find((u) => u.id === id),
//     users.find((u) => u.id === id) ? 'User fetched' : 'User not found',
//     users.find((u) => u.id === id),
//   );

// /* ADD */
// const ADD = (data) => {
//   const user = { id: Date.now(), ...data };
//   users.push(user);
//   return response(true, 'User added', user);
// };

// /* UPDATE */
// const UPDATE_ID = (id, data) => {
//   const index = users.findIndex((u) => u.id === id);
//   if (index === -1) return response(false, 'User not found');

//   users[index] = { ...users[index], ...data };
//   return response(true, 'User updated', users[index]);
// };

// /* DELETE */
// const DELETE_ID = (id) => {
//   const index = users.findIndex((u) => u.id === id);
//   if (index === -1) return response(false, 'User not found');

//   const deleted = users.splice(index, 1)[0];
//   return response(true, 'User deleted', deleted);
// };

// export { GET_IDS, GET_ID, ADD, UPDATE_ID, DELETE_ID };
