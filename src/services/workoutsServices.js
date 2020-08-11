export const fetchWorkouts = () => {
  return fetch('http://localhost:27017/workout-list/')
    .then(res => res.json());

};

export const postWorkout = (workout) => {
  return fetch('http://localhost:27017/workout-list/', {
    method: 'POST',
    body: JSON.stringify(workout)
  });
};


export const deleteWorkout = (workout_id) => {
  return fetch(`http://localhost:27017/workout-list/${workout_id}`, {
    method: 'DELETE'
  });
};


export const updateWorkout = (workout) => {
  return fetch(`http://localhost:27017/workout-list/${workout.id}`, {
    method: 'PATCH',
    body: JSON.stringify(workout)
  });
};

