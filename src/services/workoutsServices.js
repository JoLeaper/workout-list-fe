export const fetchWorkouts = () => {
  return fetch('http://localhost:7890/api/v1/workouts')
    .then(res => res.json());

};

export const postWorkout = (workout) => {
  return fetch('http://localhost:7890/api/v1/workouts', {
    method: 'POST',
    body: JSON.stringify(workout)
  });
};


export const deleteWorkout = (workout_id) => {
  return fetch(`http://localhost:7890/api/v1/workouts/${workout_id}`, {
    method: 'DELETE'
  });
};


export const updateWorkout = (workout) => {
  return fetch(`http://localhost:7890/api/v1/workouts/${workout.id}`, {
    method: 'PATCH',
    body: JSON.stringify(workout)
  });
};

