export function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      localStorage.setItem(
        "todoList",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case "delete":
      let delData = state.filter((e, i) => i != action.payload);
      localStorage.setItem("todoList", JSON.stringify(delData));
      return delData;
    case "edit":
      let editData = state.map((e, i) => {
        if (i == action.payload.index) {
          return action.payload.task;
        } else {
          return e;
        }
      });
      localStorage.setItem("todoList", JSON.stringify(editData));
      return editData;
    default:
      state;
  }
}
