import React from 'react';
import { fetchWorkouts } from '../../services/workoutsServices';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setWorkouts } from '../../actions/workoutActions';
import Workouts from '../Workouts/Workouts';

export default function WorkoutList() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWorkouts()
      .then(workouts => {
        dispatch(setWorkouts(workouts));
      });
  }, []);

  return (
    <div>
      <Workouts />
    </div>
  );
}
