import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { setUser } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    setUser({ username, password });
    setPassword('');
    setUsername('');
  }
  return (
    <form
      onSubmit={handleSubmit}
      action=''
      className='flex flex-col gap-2 border border-gray-400 items-center justify-center rounded-2xl px-2 py-4'
    >
      <h1 className='text-4xl'>Login</h1>
      <div className='gap-2 flex flex-row '>
        <label htmlFor='username'>username</label>
        <input
          type='username'
          name='username'
          id='username'
          className='bg-gray-400'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className='gap-2 flex flex-row'>
        <label htmlFor='password'>password</label>
        <input
          value={password}
          type='password'
          name='password'
          id='passwowrd'
          className='bg-gray-400'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='btn btn-active btn-primary'>Submit</button>
    </form>
  );
}
export default Login;
