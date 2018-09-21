// Import the TagAction Creators and TagActionTypes

import * as TagActions from '../actions/tagActions'



// We are dividing the reducers using a technique called Reducer composition.
// By doing this we are seperating the reducer for the Collection and the Individual Item


//The collection Reducer, It handles only the collection

export function TagListReducer(state = [], action) {
    switch (action.type) {

        // The cases ordered in CRUD order.

        // Create
        case TagActions.CREATE_TAG_SUCCESS: {
                return [
                    ...state,
                    action.tag
                ];
        }
            
        //Read    
        case TagActions.GET_TAGS_SUCCESS: {
            return action.tags.data
        }
        case TagActions.GET_TAGS_ERROR: {
            
            return state.map(s => tag(s, action))

        }
        default:
            return state
        
    }
}


//The individual Reducer. It handles only one Tag Object.


const tag = (state, action) => {

    // If the mapped tag of the previous state matches with the new ID of the action, 
    // Only then proceed to the Reducer Switch case

    switch (action.type) {

        // Edit/modifies the individual Tags using ES6 spread operator. The cases are self explanatory.

        case TagActions.GET_TAGS_ERROR:
            {
                // console.log(state, action);
            }
        default:
            {
                return state;
            }
    }
}