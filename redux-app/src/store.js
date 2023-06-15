// import creatstore function from redux

import { createStore } from "redux"; // store
import reducer from "./reducer"; // store
import { bugAdded, bugRemoved, bugResolved } from "./actions";

//import * as actions from "./actionType";
//    state = reducer(state, action);
//     notify the subscriber.

const Store = () => {
  const log = console.log;
  // Call createStore and pass function reference reducer  as an argument.
  // createStore his higher order function which takes function as an argument.
  const store = createStore(reducer); // store
  // To change the state i have to dispatch the action.

  /** Subscrbing to the store */
  // So this function when the state has changed in store.
  // We will be doing in the UI layer.
  // * subscribe method returns a function for unsubscribing from
  // * store
  // * ITS IMPORTANT THAT THE USER NAVIGATES AWAY FROM THE CURRENT
  // * PAGE T0 THE NEW PAGE WE ARE NOT GOING TO HAVE THAT UI
  // * COMPONENT SO WE DONT HAVE SUBSCRPTION THE STORE BEACUSE
  // *  SUBSCRIPTION CAN CREATE MEMORY LEAK SO IF THE CURRENT UI
  // *  IS NOT GOING TO VISIBLE  SHOULD UNSUBSCRIBE FROM THE STORE

  const unsubscribe = store.subscribe(() => {
    log("Store changed!", store.getState());
  });
  // Bug Added.
  store.dispatch(bugAdded("Bug 1"));

  // Bug Resolved.
  store.dispatch(bugResolved(1));

  // THE SECOND TIME THE STORE GOT CHANGED WE DID NOT GET NOTIFIED
  // BECAUSE WE HAD UNSUBSCRIBED BEFORE.
  unsubscribe();

  // Remove the bug.

  // store.dispatch(bugRemoved(1));

  // store.dispatch(bugRemoved(true));

  // With the getState() we will be fetching the current state of the store.
  log(store.getState());
};
export default Store;
