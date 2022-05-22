import axiosSetup from './axios-setup';

export const isLoggedIn = async () => {
  const token = localStorage.getItem('authToken');
  const headers = {};
  if (token) headers.Authorization = `Bearer ${token}`;
  try {
    return await axiosSetup.get('/auth/check', { headers }).then(res => res.status === 200);
  } catch (err) {
    console.error(err.response.data);
    return false;
  }
};
