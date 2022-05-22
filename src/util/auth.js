import axiosSetup from './axios-setup';

export const isLoggedIn = async () => {
  const token = localStorage.getItem('authToken');
  return await axiosSetup
    .get('/auth/check', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.status === 200);
};
