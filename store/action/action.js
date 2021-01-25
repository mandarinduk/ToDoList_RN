// 액션 정의
export const actions = {
  ADD: "toDo/ADD",
  MOVE_DONE: "toDo/MOVE_DONE",
  MOVE_TODO: "done/MOVE_TODO",
  REMOVE_TODO: "toDo/REMOVE_TODO",
  REMOVE_DONE: "done/REMOVE_DONE",
};

// 액션 생성 함수 정의
export const addToDo = (id, toDo) => ({ type: actions.ADD, id, toDo });
export const moveDone = (id) => ({ type: actions.MOVE_DONE, id });
export const moveTodo = (id) => ({ type: actions.MOVE_TODO, id });
export const removeToDo = (id) => ({
  type: actions.REMOVE_TODO,
  id,
});
export const removeDone = (id) => ({
  type: actions.REMOVE_DONE,
  id,
});
