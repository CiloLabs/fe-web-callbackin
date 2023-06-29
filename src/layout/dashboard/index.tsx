import {Outlet} from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="px-12">
      <div className="fixed left-12 right-12 top-5 lg:left-60">
        <Header />
      </div>

      <div className="h-full w-full pt-24 lg:pl-60 lg:pt-20">
        <div className="w-full bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
