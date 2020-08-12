import React, { useState } from 'react';
import { useLogin } from '../../../hooks/authContext';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const history = useHistory();
  
  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password)
      .then(() => history.push('/workouts'));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} onChange={handleChange}/>
        <input type="password" name='password' value={password} onChange={handleChange}/>
        <button>Log In</button>
      </form>
    </div>
  );
}
