import React from 'react';
import { useCurrentUser } from '../../hooks/authContext';
import { Link } from 'react-router-dom';

const AuthLinks = () => (
  <>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
  </>
);

export default function Header() {
  const currentUser = useCurrentUser();
  return (
    <>
      <h1>Header</h1>
      {currentUser 
        ? <img src={currentUser.profileImage} />
        : <AuthLinks /> }
    </>
  );
}
