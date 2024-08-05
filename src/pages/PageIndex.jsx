import LandingPage from "./landingPage/LandingPage";
import SignupPage from "./signup/SignUp";
import SignInPage from "./signin/SignIn";
import TemplatesPage from "./templete/Templete";
import ProfessionSelectionPage from './selectprofession/ProfessionSelectionPage'
import MultiStepForm from "../component/MultiStepForm";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Templete from "../templete/softwareEngineer/templete1/Templete";

const PageIndex = () => {
    // const location = useParams();
    // console.log(location());
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/signin" element={<SignInPage/>}/>
          <Route path="/selectprofession" element={<ProfessionSelectionPage/>}/>
          <Route path="/templates" element={<TemplatesPage/>}/>

          <Route path="/userdestails" element={<MultiStepForm/>}/>
          <Route path="/prof/temp" element={<Templete/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default PageIndex;
