import LandingPage from "./landingPage/LandingPage";
import SignupPage from "./signup/SignUp";
import SignInPage from "./signin/SignIn";
import TemplatesPage from "./templete/Templete";
import ProfessionSelectionPage from './selectprofession/ProfessionSelectionPage'
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

const PageIndex = () => {
    const location = useParams();
    // console.log(location());
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/signin" element={<SignInPage/>}/>
          <Route path="/selectprofession" element={<ProfessionSelectionPage/>}/>
          <Route path="/templete" element={<TemplatesPage/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default PageIndex;
