import React, { useState } from 'react';
import { useSignup } from '../../../hooks/authContext';
import { useHistory } from 'react-router-dom';

export default function Login() {
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
    signup(email, password, profileImage)
      .then(() => history.push('/workouts'));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Email: <input type="email" name="email" value={email} onChange={handleChange}/>
        password<input type="password" name='password' value={password} onChange={handleChange}/>
        profile image<input type="url" name='profileImage' value={profileImage} onChange={handleChange}/>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
