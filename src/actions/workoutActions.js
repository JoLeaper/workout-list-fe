export const SET_WORKOUTS = 'SET_WORKOUTS';
export const setWorkouts = (workouts) => ({
  type: SET_WORKOUTS,
  payload: workouts
});

export const SET_NEW_WORKOUT = 'SET_NEW_WORKOUT';
export const setNewWorkout = (workout) => ({
  type: SET_NEW_WORKOUT,
  payload: workout
});

