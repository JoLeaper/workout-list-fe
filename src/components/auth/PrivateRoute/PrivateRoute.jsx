import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCurrentUser, useAuthLoading } from '../../../hooks/authContext';

export default function PrivateRoute(props) {
  const currentUser = useCurrentUser();
  const loading = useAuthLoading();

  if(loading) return null;
  if(!loading && !currentUser) return <Redirect to="/login" />;
  return <Route {...props} />;
}
