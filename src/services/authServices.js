const backEndLink = 'http://localhost:7890/api/v1/auth';

export const fetchSignup = () => {
  return fetch(`${backEndLink}/signup`)
    .then(res => res.json());

};

export const fetchLogin = () => {
  return fetch(`${backEndLink}/login`, {
    method: 'POST',
    body: JSON.stringify()
  });
};

export const fetchVerify = () => {
  return fetch(`${backEndLink}/verify`, {
    method: 'DELETE'
  });
};
