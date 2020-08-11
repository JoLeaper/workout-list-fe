import { SET_WORKOUTS, SET_NEW_WORKOUT } from '../actions/workoutActions';
export const initialState = {
  workouts: [],
  newWorkout: {}
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_WORKOUTS:
      return { ...state, workouts: action.payload };
    case SET_NEW_WORKOUT:
      return { ...state, newWorkout: action.payload };
    default:
      return state;
  }
}
