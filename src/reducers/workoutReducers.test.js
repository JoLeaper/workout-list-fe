const { setWorkouts, setNewWorkout } = require('../actions/workoutActions');
const { default: reducer } = require('./workoutsReducer');

describe('characters reducers', () => {
  it('handles the SET_WORKOUTS action', () => {
    const state = {
      workouts: [],
      newWorkout: {}
    };

    const action = setWorkouts([{
      name: 'Bench Press',
      muscles: 'Chest and Tris',
      description: 'Lift the bar',
      reps: 25,
      weight: 155,
    }]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      workouts: [{
        name: 'Bench Press',
        muscles: 'Chest and Tris',
        description: 'Lift the bar',
        reps: 25,
        weight: 155,
      }],
      newWorkout: {}
    });
  });

  it('handles the SET_NEW_WORKOUT action', () => {
    const state = {
      workouts: [],
      newWorkout: {}
    };

    const action = setNewWorkout({
      name: 'Bench Press',
      muscles: 'Chest and Tris',
      description: 'Lift the bar',
      reps: 25,
      weight: 155,
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      workouts: [],
      newWorkout: {
        name: 'Bench Press',
        muscles: 'Chest and Tris',
        description: 'Lift the bar',
        reps: 25,
        weight: 155,
      }
    });
  });
});
