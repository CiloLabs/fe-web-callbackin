import { Fragment } from "react";
import { useAuth } from "../../utils";
import HelmetPage from "../../components/generals/HelmetPage";

const Dashboard = () => {
  useAuth();

  return (
    <Fragment>
      <HelmetPage
        title="Overview - Callbackin"
        description="Welcome to callbackin, a solution for all your needs"
        name="callbackin"
        type="website"
      />
      <div>
        <h1 className="text-4xl text-gray-800 font-bold">Overview</h1>
      </div>
    </Fragment>
  );
};

export default Dashboard;
