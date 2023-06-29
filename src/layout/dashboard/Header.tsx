export default function Header() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.replace('/');
  };
  return (
    <header className="h-16 w-full rounded-lg bg-gray-100">
      <div className="flex h-full w-full items-center justify-between px-8">
        <div>
          <a href="/">
            <h1 className="font-mono text-xl font-semibold">Callbackin.id</h1>
          </a>
        </div>
        <ul className="flex list-none space-x-8 font-serif font-medium tracking-normal text-gray-800">
          <a href="/dashboard" className="underline-offset-8 hover:underline">
            Overview
          </a>
          <a href="/settings" className="underline-offset-8 hover:underline">
            Settings
          </a>
          <a href="/profile" className="underline-offset-8 hover:underline">
            Profile
          </a>
        </ul>
        <button onClick={handleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
