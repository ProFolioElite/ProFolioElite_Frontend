import { useEffect } from "react";
import MultiStepForm from "../../component/MultiStepForm";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../features/user/userSlice";

const UserDetails = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const inputuserDetails = useSelector(
    (state) => state.user.inputUserDetialsInForm
  );
  console.log(JSON.stringify(inputuserDetails));
  console.log(token);
  const formInputDetails = inputuserDetails;
//   const formInputDetails = JSON.stringify(inputuserDetails);

  useEffect(() => {
    if (token && formInputDetails) {
      //   const parsedUserDetails = JSON.parse(inputuserDetails);
      console.log(formInputDetails);
      
      dispatch(userDetails({token:token, inputuserDetails:formInputDetails}));
    }
  }, [token, formInputDetails]);

  return (
    <div>
      <MultiStepForm />
    </div>
  );
};

export default UserDetails;
