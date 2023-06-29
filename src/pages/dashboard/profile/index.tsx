import HelmetPage from '../../../components/generals/HelmetPage';
import {useAuth} from '../../../utils';
import {Fragment} from 'react';

const Profile = () => {
  useAuth();

  return (
    <Fragment>
      <HelmetPage
        title="Profile - Callbackin"
        description="Welcome to callbackin, a solution for all your needs"
        name="callbackin"
        type="website"
      />
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Profile</h1>
      </div>
    </Fragment>
  );
};

export default Profile;
