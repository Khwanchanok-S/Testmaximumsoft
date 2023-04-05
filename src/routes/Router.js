import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Createpage from '../pages/Createpage';
import Employeepage from '../pages/Employeepage';
import Editpage from '../pages/Editpage';

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/create', element: <Createpage /> },
  { path: 'employee/:id', element: <Employeepage /> },
  { path: '/edit/:id', element: <Editpage /> },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
