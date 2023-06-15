//  Here actions is an object we have properties like bugadded &
// bugremoved in this actions object.

import * as actions from "./actionType";

// * Reducer is a pure function with two parameters the current state
// * and an action.
// * The job of the reducer is to return the new state based on
// * action.

// * WE CAN IMPLEMENT LOGIC WITH SWITCH AND CASE.

/** PURE FUNCTIONS ALWAYS RETURNS SAME RESULT WITH SAME ARGUMENT
 *  AND IS FREE FROM SIDE EFFECT
 *  SO IN PURE FUNCTIONS WE ARE NOT GOING  TO TOUCH DOM
 *  ELEMENTS , GLOBAL STATE , NOT GOING MAKE ANY API CALLS
 *
 *  SO ALL THESE CAN CHANGE THE STATE OF THE APPLICATION
 *  IN THAT CASE IF YOU CALL FUNCTIONS MULTIPLE TIMES WE
 *  WILL NOT GET THE SAME RESULT SO PURE FUNCTIONS SHOULD
 *
 *  BE SMALL FUNCTION IN AN ISOLATED WORLD ALL IT NEEDS
 *  SHOULD BE PASSED AS ARGUMENTS THESE ARE ONLY DEPENDENCIES
 *  OF PURE FUNCTIONS
 *
 * SO REDUCER FUNCTIONS TAKES TWO ARGUMENTS AND RETURNS THE
 * NEW STATE THAT ALL IT DOES NOW THIS PROPERITES MAKE
 * IT REALLY EASY TO TEST REDUCER  WE DONT HAVE TO SET
 * THE SAME GLOBAL STATE BEFORE CALLING THIS FUNCTION.
 */

let lastId = 0;

// Initial state is empty array.
export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED)
    //  If the user adds a bug we want to return an new array
    //  In this array we have to first copy all the bugs in the
    //  current state ...state

    //  Next a new bug object should have few properties
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: true,
      },
    ];
  else if (action.type === actions.BUG_REMOVED)
    return state.filter((bug) => bug.id !== action.payload.id);
  else if (action.type === actions.BUG_RESOLVED)
    // Mapping the array to new array by map method.
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );

  // Return current state if we dispatch an action that
  //  doesnt exist we dont.
  return state;
}
