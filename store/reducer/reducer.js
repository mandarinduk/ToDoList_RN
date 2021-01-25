import { actions } from "../action/action";

const { ADD, MOVE_DONE, MOVE_TODO, REMOVE_TODO, REMOVE_DONE } = { ...actions };

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { id: action.id, desc: action.toDo }],
      };
    case MOVE_DONE:
      return {
        ...state,
        dones: [
          ...state.dones,
          state.toDos.find((todo) => todo.id === action.id),
        ],
        toDos: state.toDos.filter((todo) => todo.id !== action.id),
      };
    case MOVE_TODO:
      return {
        ...state,
        toDos: [
          ...state.toDos,
          state.dones.find((done) => done.id === action.id),
        ],
        dones: state.dones.filter((done) => done.id !== action.id),
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
