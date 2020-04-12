// export const UPDATE_BOUNDS = 'UPDATE_BOUNDS'; 

// export const updateBounds = (bounds) => {
//     return{
//         type: UPDATE_BOUNDS,
//         bounds 
//     }
// }



import { fetchRestaurants } from './restaurants_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    //debugger
    return fetchRestaurants(getState().ui.filters[filter])(dispatch);//used to be return fetchRestaurants(getState().ui.filters.bounds)(dispatch);
};