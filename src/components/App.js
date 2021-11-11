import { useSelector } from 'react-redux';
import Todo from './Todo';
import Form from './Form';
import Edit from './Edit';

function App() {
  const edit_mode = useSelector((state) => state.reducer.edit_mode);
  const is_same = useSelector((state) => state.reducer.is_same);
  const is_blank = useSelector((state) => state.reducer.is_blank);

  return (
    <div className='d-flex flex-column align-items-center p-3'>
      <h1 className='h1'>Todos</h1>
      {edit_mode ? <Edit/> : <Form/>}
      {is_blank ? <sub className='mb-3 mt-2' style={{color: 'red'}}>Пустое поле недопустимо!</sub> : null}
      {is_same ? <sub className='mb-3 mt-2' style={{color: 'red'}}>Такой Todo уже существует!</sub> : null}
      <Todo/>
    </div>
  );
}

export default App;