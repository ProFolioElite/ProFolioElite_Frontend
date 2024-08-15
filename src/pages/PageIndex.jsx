import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "../component/Spinner";
import Dashboard from "./dashboard/DashBoard";

// Lazy load your components
const LandingPage = lazy(() => import("./landingPage/LandingPage"));
const SignupPage = lazy(() => import("./signup/SignUp"));
const SignInPage = lazy(() => import("./signin/SignIn"));
const TemplatesPage = lazy(() => import("./templete/Templete"));
const ProfessionSelectionPage = lazy(() =>
  import("./selectprofession/ProfessionSelectionPage")
);
const MultiStepForm = lazy(() => import("../component/MultiStepForm"));
const Templete = lazy(() =>
  import("../templete/softwareEngineer/templete1/Templete")
);

const PageIndex = () => {
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
          <Route
            path="/selectprofession"
            element={<ProfessionSelectionPage />}
          />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/:id/userdetails" element={<MultiStepForm />} />
          {/* <Route path="/prof/temp" element={<Templete />} /> */}
          <Route path="/dashboard/*" element={<Dashboard />} />

        </Routes>
      </Suspense>
    </Router>
  );
};

export default PageIndex;
