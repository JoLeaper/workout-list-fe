import React, { useState } from 'react';
import { useSignup } from '../../hooks/authContext';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const signup = useSignup();
  const history = useHistory();
  
  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'profileImage') setProfileImage(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const signup = useSignup();
    signup(email, password, profileImage);
  };
  return (
    <div>
      <form handleSubmit={handleSubmit}>
        <input name='email' onChange={handleChange}/>
        <input name='password' onChange={handleChange}/>
        <input name='profileImage' onChange={handleChange}/>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
