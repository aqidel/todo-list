import { createSlice } from '@reduxjs/toolkit';

function getTime() {
  let time = new Date().toString();
  return time.slice(16, 25);
};

export const slice = createSlice({
  name: 'mySlice',
  initialState: {
    todos: [],           // Массив со всеми объектами todo
    headers: [],         // Только сами todo, для упрощенной проверки на наличие такого же todo
    input_value: '',     // Содержимое input'а, для передачи в form
    todo_edit_index: '', // Номер todo в массиве, чтобы знать, что удалять/менять
    edit_mode: false,    // Тогглер добавления/редактирования todo
    is_same: false,      // Вкл/выкл предупреждение о наличии такого же todo
    is_blank: false,     // Вкл/выкл предупреждение о пустом поле input
  },
  reducers: {
    createTodo: (state) => {
      const checkout = (header) => header === state.input_value;

      if (state.headers.some(checkout)) {
        state.is_same = true;
        return;
      }
      if (state.input_value.length === 0) {
        state.is_blank = true;
        return;
      } 
      else {
        let new_todo = {
          todo: state.input_value,
          time: getTime(),
          done: false
        };
        state.todos.push(new_todo);
        state.headers.push(state.input_value);
        state.input_value = '';
        state.is_same = false;
        state.is_blank = false;
      };
    },

    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      state.headers.splice(action.payload, 1);
    },

    setInputValue: (state, action) => {
      state.input_value = action.payload;
    },

    isDone: (state, action) => {
      state.todos[action.payload].done = !state.todos[action.payload].done;
    },

    editMode: (state, action) => {
      state.todo_edit_index = action.payload;
      state.edit_mode = !state.edit_mode;
    },

    editTodo: (state, action) => {
      const checkout = (header) => header === state.input_value;

      if (state.headers.some(checkout)) {
        state.is_same = true;
        return;
      }
      if (state.input_value.length === 0) {
        state.is_blank = true;
        return;
      }
      else {
        state.todos[action.payload].todo = state.input_value;
        state.headers[action.payload] = state.input_value;
        state.input_value = '';
        state.edit_mode = false;
        state.is_same = false;
        state.is_blank = false;
      };
    },
  },
})

export const { createTodo, removeTodo, setInputValue, isDone, editMode, editTodo } = slice.actions;

export default slice.reducer;