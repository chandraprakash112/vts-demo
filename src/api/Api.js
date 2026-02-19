import axios from 'axios';
import apiAddress from './apiAddress';

const api = `${apiAddress}/api/v1`;
const auth = (token) => ({ Authorization: `Bearer ${token}` });

const handleSessionExpiration = (error) => {
  const data = error?.response?.data;

  if (
    data?.response === 401 &&
    data?.status === false &&
    data?.message === 'Session expired. Please log in again.'
  ) {
    console.error(data.message);
    return { sessionExpired: true, message: data.message };
  }

  throw error;
};

const request = async (config) => {
  try {
    const { data } = await axios(config);
    return data;
  } catch (error) {
    return handleSessionExpiration(error);
  }
};

const GET = (endPoint) =>
  request({
    method: 'get',
    url: `${api}/${endPoint}`,
  });

const POST = (token, endPoint, data, contentType = 'multipart/form-data') =>
  request({
    method: 'post',
    url: `${api}/${endPoint}`,
    headers: { ...auth(token), 'Content-Type': contentType },
    data,
  });

const ADD = (token, endPoint, data) => POST(token, endPoint, data);
const UPDATE = (token, endPoint, data) => POST(token, endPoint, data);
// const DELETE = (token, endPoint, data) => POST(token, endPoint, data, 'application/json');
const DELETE = (token, endPoint, data) =>
  request({
    method: 'delete',
    url: `${api}/${endPoint}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data, // axios allows body in DELETE
  });


const UPLOAD = (token, url, data) =>
  request({
    method: 'post',
    url,
    headers: { ...auth(token), 'Content-Type': 'multipart/form-data' },
    data,
  });

export { GET, ADD, UPDATE, DELETE, UPLOAD };