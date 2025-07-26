// src/services/authService.js

const login = (username, password) => {
  // For now, any username/password is accepted
  // In a real app, you would make an API call here
  if (username && password) {
    localStorage.setItem('userToken', 'fake-jwt-token');
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem('userToken');
};

const isAuthenticated = () => {
  return localStorage.getItem('userToken') !== null;
};

const authService = {
  login,
  logout,
  isAuthenticated,
};

export default authService; 