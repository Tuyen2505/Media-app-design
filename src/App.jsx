import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  const currectUser = true;

  const Layout = () => {
    return (
      <div className="layout">
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
            <Outlet/> 
          </div>
          <RightBar/>
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({ children }) => {
    if(!currectUser){
      return <Navigate to="/login"/>
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: 
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile/>,
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
