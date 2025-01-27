import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
// import
import { BiCheckbox, BiCheckSquare, BiSave, BiSelection } from "react-icons/bi";
import { FiSave } from "react-icons/fi";
import { updateTemplateUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ImageCard = ({
  imageUrl,
  title,
  priview,
  highLight,
  email,
  OnSelect,
}) => {
  const user = useSelector((state) => state.user);
  const [currentToken, setToken] = useState();

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const _id = user?.user?.data?._id || {};
  // Destructure token directly from user state

  useEffect(() => {
    setToken(token);
  }, [token]);

  const handleOnSelect = (templateName, email) => {
    dispatch(
      updateTemplateUser({ templateName, token: currentToken, _id, email })
    );

    console.log(currentToken);
    console.log(templateName);
  };

  console.log(token);
  // const userDetails = useSelector((state) => state.user);
  return (
    <div
      className={`transform transition-transform duration-300 hover:scale-105 `}
    >
      <div
        className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg ${
          highLight ? `border-4 border-purple-500 rounded-lg` : null
        }`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
        <div className="p-4 flex justify-between align-middle">
          <div>
            <h2 className="text-lg font-bold text-white">{title}</h2>
          </div>
          <div className="flex gap-10">
            <span className="flex pt-2 -mr-7">
              <Link to={priview ? priview : null}>
                <FaEye />
              </Link>
            </span>
            <span className="flex pt-2">
              {highLight ? (
                <Link>
                  <BiCheckSquare />
                </Link>
              ) : (
                <Link>
                  <BiCheckbox
                    onClick={() => {
                      handleOnSelect(title, email), OnSelect();
                    }}
                    alt="Select the template"
                  />
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
