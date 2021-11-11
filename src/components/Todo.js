import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, isDone, editMode } from '../slice';
import { MdDelete } from 'react-icons/md';
import { BsFillPencilFill } from 'react-icons/bs';

function Todo() {
  const todos = useSelector(state => state.reducer.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((item, i) => {
        return (
          <div className='d-flex justify-content-between align-items-center w-50 h-50 p-3 mb-2 mt-2 border' key={i}>
              <div className='d-flex'>
                <input className='form-check-input' 
                       type='checkbox' 
                       onChange={() => dispatch(isDone(i))}>
                </input>
                <p className={item.done ? 'text-decoration-line-through my-0 ms-3' : 'my-0 ms-3'}>
                  {item.todo}
                </p>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='my-0'>
                {item.time}
              </p>
              <BsFillPencilFill className='mx-3'
                                onClick={() => dispatch(editMode(i))}/>
              <MdDelete onClick={() => dispatch(removeTodo(i))}/>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Todo;