// 액션 정의
export const actions = {
  ADD: "toDo/ADD",
  REMOVE_TODO: "toDo/REMOVE_TODO",
  REMOVE_DONE: "done/REMOVE_DONE",
};

// 액션 생성 함수 정의
export const addToDo = (toDo) => ({ type: actions.ADD, toDo });
export const removeToDo = (toDo) => ({ type: actions.REMOVE_TODO, toDo });
export const removeDone = (done) => ({ type: actions.REMOVE_DONE, done });
