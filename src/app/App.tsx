import { RouterProvider } from 'react-router-dom';
import { router } from './provider/routerProvider';
import { StoreProvider } from './provider/storeProvider';

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
