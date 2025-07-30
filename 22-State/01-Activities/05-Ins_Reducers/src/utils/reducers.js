import createId from './createId';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CAR': {
      // pure functions

      // create an id from the index value of the array
      const newID = createId(state.cars);
      // action.payload has the make and model
      // copy and paste the make and model to the new car
      // attach the new id to the new car
      const newCar = { ...action.payload, id: newID };

      return {
        ...state, // copying the original state into the new state
        // setting the cars property to an array that has all the original cars and adding the new car
        cars: [...state.cars, newCar], // changing the cars value ONLY for this reducer
      };
    }
    case 'REMOVE_CAR': {
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
