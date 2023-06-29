import {Fragment} from 'react';
import HelmetPage from '../../components/generals/HelmetPage';

const Landing = () => {
  const token = localStorage.getItem('token');
  const handleLogin = () => {
    if (!token) {
      localStorage.setItem('token', '87y832uhfibi-ew81=ifui');
      window.location.replace('/dashboard');
    } else {
      window.location.replace('/dashboard');
    }
  };

  return (
    <Fragment>
      <HelmetPage
        title="Callbackin"
        description="Welcome to callbackin, a solution for all your needs"
        name="callbackin"
        type="website"
      />
      <section className="min-h-screen bg-white py-10 lg:py-24 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-5xl font-bold leading-tight text-black lg:text-5xl sm:text-4xl">
              Welcome to Callbackin
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <ul className="mx-auto mt-16 max-w-md space-y-12">
            <li className="relative flex items-start">
              <div
                className="absolute left-8 top-14 -ml-0.5 mt-0.5 h-full w-px border-l-4 border-dotted border-gray-300"
                aria-hidden="true"></div>

              <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                <svg
                  className="h-10 w-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3
                  className="cursor-pointer text-lg font-semibold text-black underline-offset-8 hover:underline"
                  onClick={handleLogin}>
                  {!token ? 'Create a free account 😁' : 'Back to dashboard 😁'}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>

            <li className="relative flex items-start">
              <div
                className="absolute left-8 top-14 -ml-0.5 mt-0.5 h-full w-px border-l-4 border-dotted border-gray-300"
                aria-hidden="true"></div>

              <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                <svg
                  className="h-10 w-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-black">
                  Build callback url 🥶
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>

            <li className="relative flex items-start">
              <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                <svg
                  className="h-10 w-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-black">
                  You happy now 🤖
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
