import { useEffect } from "react";
import MultiStepForm from "../../component/MultiStepForm";
import { useDispatch, useSelector } from "react-redux";
import { getuserdetails,userDetails } from "../../features/user/userSlice";


const UserDetails = () => {
  const user = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  console.log(user?.getUserInfo?.data);
  useEffect(() => {
    const email = user?.user?.email;
    dispatch(getuserdetails({ token, email }));
  }, [user?.user?.email, dispatch, token]);

  return (
    <div>
      <MultiStepForm
        storeData={user?.getUserInfo?.data ? user?.getUserInfo?.data : null}
        postMethod={userDetails}
      />
    </div>
  );
};

export default UserDetails;
