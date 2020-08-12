import React from 'react';
import { useCurrentUser } from '../../hooks/authContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const AuthLinks = () => (
    <>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </>
  );

  const currentUser = useCurrentUser();
  return (
    <>
      {currentUser 
        ? <img src={currentUser.profileImage} />
        : <AuthLinks /> }
    </>
  );
}
