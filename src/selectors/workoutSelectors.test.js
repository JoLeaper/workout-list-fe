import { getWorkouts, getNewWorkout } from './workoutSelectors';

describe('workout selectors', () => {
  it('grabs the workouts array from state', () => {
    const state = {
      newWorkout: {
        name: 'Back Squat',
        muscles: 'Quads and Glutes',
        description: 'Squat the Bar',
        reps: 25,
        weight: 225,
      },
      workouts: [{
        name: 'Bench Press',
        muscles: 'Chest and Tris',
        description: 'Lift the bar',
        reps: 25,
        weight: 155,
      }]
    };

    const workouts = getWorkouts(state);

    expect(workouts).toEqual([{
      name: 'Bench Press',
      muscles: 'Chest and Tris',
      description: 'Lift the bar',
      reps: 25,
      weight: 155,
    }]);
  });

  it('grabs the workout you want to add to the DB from state', () => {

    const state = {
      newWorkout: {
        name: 'Back Squat',
        muscles: 'Quads and Glutes',
        description: 'Squat the Bar',
        reps: 25,
        weight: 225,
      },
      workouts: [{
        name: 'Bench Press',
        muscles: 'Chest and Tris',
        description: 'Lift the bar',
        reps: 25,
        weight: 155,
      }]
    };

    
    const newWorkout = getNewWorkout(state);

    expect(newWorkout).toEqual({
      name: 'Back Squat',
      muscles: 'Quads and Glutes',
      description: 'Squat the Bar',
      reps: 25,
      weight: 225,
    });
  });
});
