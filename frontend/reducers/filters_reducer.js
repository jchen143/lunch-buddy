import { UPDATE_FILTER } from "../actions/filter_actions"


// const filterReducer = (state = {}, action) => {

//     Object.freeze(state);

//     switch (action.type) {
//         case UPDATE_BOUNDS:
//             return Object.assign({}, state, action.bounds)
//         default:
//             return state
//     }


// }
const defaultFilters = Object.freeze({
    bounds: {},
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    if (action.type === UPDATE_FILTER) {
        const newFilter = {
            [action.filter]: action.value
        };
        return Object.assign({}, state, newFilter);
    } else {
        return state;
    }
};

export default filtersReducer