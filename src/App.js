import logo from './logo.svg';
import './App.css';
import {RouterProvider} from 'react-router-dom';
import { route } from './Routes/Routes/Routes';
function App() {
  return (
    <RouterProvider router={route}></RouterProvider>
  );
}

export default App;
