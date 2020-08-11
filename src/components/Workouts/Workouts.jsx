import React from 'react';
import Workout from '../Workout/Workout';
import { useSelector } from 'react-redux';
import { getWorkouts } from '../../selectors/workoutSelectors';

export default function Workouts() {
  const workouts = useSelector(getWorkouts);
  return (
    <div>
      {workouts.map(workout => 
        <li key={workout.id}>
          <Workout {...workout} />
        </li>
      )}
    </div>
  );
}
