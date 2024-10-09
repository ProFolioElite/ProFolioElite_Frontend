import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Spinner from "../component/Spinner";
// import Dashboard from "./dashboard/DashBoard";
import FrontendDeveloperT1 from "../templete/frontendDeveloper/t1/FrontendDeveloperT1";
// import PrivateRoute from "../utils/PrivateRoute";
import SoftwareTemplete from '../templete/softwareEngineer/templete1/Templete'

// Lazy load your components
const LandingPage = lazy(() => import("./landingPage/LandingPage"));
const SignupPage = lazy(() => import("./signup/SignUp"));
const SignInPage = lazy(() => import("./signin/SignIn"));
const Dashboard = lazy(() => import("./dashboard/DashBoard"));
const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

// Wrapper component to protect routes



const PageIndex = () => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/signin" replace />;
  };
  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SignInPage />} />
          {/* <Route path="/:id/dashboard/*" element={<Dashboard />} /> */}
          <Route path=":id/t1" element={<FrontendDeveloperT1 />} />
          <Route path="/:id/t2" element={<SoftwareTemplete />} />

          <Route
            path="/:id/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default PageIndex;
