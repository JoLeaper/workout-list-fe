import React from 'react';
import PropTypes from 'prop-types';

export default function Workout({ id, name, muscles, description, reps, weight }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

Workout.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  muscles: PropTypes.string,
  description: PropTypes.string,
  reps: PropTypes.number,
  weight: PropTypes.number
};


