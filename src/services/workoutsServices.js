const backEndLink = 'http://localhost:7890/api/v1/workouts';

export const fetchWorkouts = () => {
  return fetch(backEndLink)
    .then(res => res.json());

};

export const postWorkout = (workout) => {
  return fetch(backEndLink, {
    method: 'POST',
    body: JSON.stringify(workout)
  });
};


export const deleteWorkout = (workout_id) => {
  return fetch(`${backEndLink}${workout_id}`, {
    method: 'DELETE'
  });
};


export const updateWorkout = (workout) => {
  return fetch(`${backEndLink}${workout.id}`, {
    method: 'PATCH',
    body: JSON.stringify(workout)
  });
};

