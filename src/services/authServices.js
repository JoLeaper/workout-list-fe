import { post, get } from './request';

export const fetchSignup = (email, password, profileImage) => {
  return post('/api/v1/auth/signup', { email, password, profileImage });
};

export const fetchLogin = (email, password) => {
  return post('/api/v1/auth/login', { email, password });
};

export const fetchVerify = () => {
  return get('/api/v1/auth/verify');
};
