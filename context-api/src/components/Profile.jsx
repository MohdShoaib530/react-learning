import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login first</div>;

  return (
    <div className='mt-2 w-1/2 flex flex-col items-center justify-center'>
      Username is {user.username} and password is {user.password}
    </div>
  );
}
export default Profile;
