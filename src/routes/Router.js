import { lazy } from "react";
import { Navigate } from "react-router-dom";
import AllHotels from "../hotels/AllHotels/AllHotels.js";
import AllBookings from "../hotels/AllBookings/AllBookings.js";
import Transaction from "../hotels/Transaction/Transaction.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Employees = lazy(() => import("../hotels/Employees/Employees.js"));
const HotelDetails = lazy(() => import("../hotels/AllHotels/HotelDetails.js"));
const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/starter" />
      },
      {
        path: "/starter",
        exact: true,
        element: <Starter />
      },
      {
        path: "/booking",
        exact: true,
        element: <AllBookings />
      },
      {
        path: "/hotels",
        exact: true,
        element: <AllHotels />
      },
      {
        path: "/employees",
        exact: true,
        element: <Employees />
      },
      {
        path: "/about",
        exact: true,
        element: <About />
      },
      {
        path: "hotel/:id",
        exact: true,
        element: <HotelDetails />
      },
      {
        path: "/transactions",
        exact: true,
        element: <Transaction/>
      }
    ],
  },
];

export default ThemeRoutes;
