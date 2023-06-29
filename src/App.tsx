import {Route, Routes} from 'react-router-dom';
import {allRoute} from './routes';

import UnmatchPage from './pages/UnmatchPage';

function App() {
  return (
    <Routes>
      {allRoute.map((item, key) =>
        item.children ? (
          <Route key={key} path="/" element={<item.component />}>
            {item.children.map((child, keyChild) => (
              <Route
                key={keyChild}
                element={<child.component />}
                path={child.path}
              />
            ))}
          </Route>
        ) : (
          <Route key={key} element={<item.component />} path={item.path} />
        ),
      )}

      <Route path="*" element={<UnmatchPage />} />
    </Routes>
  );
}

export default App;
