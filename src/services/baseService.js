import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

const apiLocal = axios.create({
  baseURL: 'http://localhost:3333/'
});

export const loadUsers = async () => await api.get('/users');
export const loadPosts = async () => await api.get('/posts');
export const loadAlbums = async () => await api.get('/albums');
export const loadPhotos = async () => await api.get('/photos');

export const loadWeekDays = async () => await apiLocal.get('/week-days');
export const loadRideInGroup = async () => await apiLocal.get('/ride-in-group');

const apis = {
  loadUsers: loadUsers,
  loadPosts: loadPosts,
  loadAlbums: loadAlbums,
  loadPhotos: loadPhotos,
  loadWeekDays: loadWeekDays,
  loadRideInGroup: loadRideInGroup
}

export default apis;

// json-server --watch db.json --port 3333