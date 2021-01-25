import { actions } from "../action/action";

const { ADD, REMOVE_TODO, REMOVE_DONE } = { ...actions };

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: state.toDos.push({ id: state.toDos.length, desc: toDo }),
      };
    case REMOVE_TODO:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.id),
      };
    case REMOVE_DONE:
      return {
        ...state,
        dones: state.dones.filter((done) => done.id !== action.id),
      };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  toDos: [],
  dones: [],
};
