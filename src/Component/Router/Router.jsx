import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Main/Root";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Home from "../page/Home/Home";
import JobsDetails from "../page/JobsDetails/JobsDetails";
import Addjobs from "../page/AddJobs/Addjobs";
import ErrorPage from "../page/ErrorPage";
import Mypostjob from "../page/Mypostjob";
import Update from "../page/Update";
import PrivateRoute from "../page/PrivateRoute/PrivateRoute";
import MyBids from "../page/MyBids/MyBids";
import BidRequst from "../page/BidRequest/BidRequst";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><JobsDetails></JobsDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: '/addjobs',
        element: <PrivateRoute><Addjobs></Addjobs></PrivateRoute>
      },
      {
        path: "/myjob",
        element: <PrivateRoute><Mypostjob></Mypostjob></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: '/mybits',
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path: '/bidrequest',
        element: <PrivateRoute><BidRequst></BidRequst></PrivateRoute>
      }
    ]
  },
]);

export default router;
