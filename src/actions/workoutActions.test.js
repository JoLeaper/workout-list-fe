import { setWorkouts, SET_WORKOUTS } from './workoutActions';

describe('workout actions', () => {
  it('creates a SET_WORKOUTS action', () => {
    const action = setWorkouts([{
      name: 'Bench Press',
      muscles: 'Chest and Tris',
      description: 'Lift the bar',
      reps: 25,
      weight: 155,
    }]);

    expect(action).toEqual({
      type: SET_WORKOUTS,
      payload: [{
        name: 'Bench Press',
        muscles: 'Chest and Tris',
        description: 'Lift the bar',
        reps: 25,
        weight: 155,
      }]
    });
  });

  it('creates a SET_NEW_WORKOUT action', () => {
    const action = setNewWorkout({
      name: 'Bench Press',
      muscles: 'Chest and Tris',
      description: 'Lift the bar',
      reps: 25,
      weight: 155,
    });

    expect(action).toEqual({
      type: SET_NEW_WORKOUT,
      payload: {
        name: 'Bench Press',
        muscles: 'Chest and Tris',
        description: 'Lift the bar',
        reps: 25,
        weight: 155,
      }
    });
  });
});
