export const isLoggedIn = async () => {
  const token = localStorage.getItem('authToken');
  return await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/check`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.ok);
};
