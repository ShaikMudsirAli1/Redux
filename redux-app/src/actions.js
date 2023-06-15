import * as actions from "./actionType";

// * Action creator

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug1",
//     },
//   };
// }

// Arrow function has concise syntax.
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});

// export const bugRemoved = (id) => ({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});
