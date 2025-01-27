import { FaCopy, FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const LivePortFolio = ({ imageUrl, title }) => {
  const user = useSelector((state) => state.user);
  // const userDetails = useSelector((state) => state.user);
  console.log(user);

  // const { token } = user?.user || {}; // Destructure token directly from user state
  const { _id } = user?.user || {};
  console.log(_id);
  const navigate = useNavigate();

  const handleOnClick = (url, _id) => {
    console.log(_id);
    console.log(url);
    
    
    console.log("hi thi sis to navigate");
    navigate(`/${_id}/${url}/`);
  };
  return (
    <div className="transform transition-transform duration-300  hover:scale-105">
      <div className="bg-gray-800 rounded-lg overflow-hidden border-4 border-purple-500 shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-96 object-cover transition-transform duration-300"
        />
        <div className="p-4 flex justify-between align-middle">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <span className="flex pt-2">
            <FaEye onClick={() => handleOnClick(title, _id)} />
            <span className="flex ml-3" aria-label="copyLink">
              <FaCopy />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LivePortFolio;
