import { useDispatch, useSelector } from 'react-redux';
import { createTodo, setInputValue } from '../slice';

function Form() {
  const input_value = useSelector(state => state.reducer.input_value);
  const dispatch = useDispatch();

  return (
    <form onSubmit={e => {dispatch(createTodo()); e.preventDefault()}}>
      <div className='input-group input-group-lg'>
        <input className='form-control' 
               type='text' 
               placeholder='Add Todo...'
               value={input_value}
               onChange={e => dispatch(setInputValue(e.target.value))}>
        </input>
      </div>
    </form>
  )
};

export default Form;