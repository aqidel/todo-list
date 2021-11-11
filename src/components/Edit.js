import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, editTodo } from '../slice';

function Edit() {
  const index = useSelector((state) => state.reducer.todo_edit_index);
  const input_value = useSelector(state => state.reducer.input_value);
  const dispatch = useDispatch();

  return (
    <form onSubmit={e => {dispatch(editTodo(index)); e.preventDefault()}}>
      <div className='input-group input-group-lg'>
        <input className='form-control' 
               type='text' 
               placeholder='Edit Todo...'
               value={input_value}
               onChange={e => dispatch(setInputValue(e.target.value))}>
        </input>
      </div>
    </form>
  )
};

export default Edit;