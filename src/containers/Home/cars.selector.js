import {createSelector} from 'reselect';

const selectCars = state => state.cars;

export const SelectCars = createSelector(
    [selectCars],
    (cars) => cars
)
