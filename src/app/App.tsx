import { RouterProvider } from 'react-router-dom';
import { router } from './provider/routerProvider';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
