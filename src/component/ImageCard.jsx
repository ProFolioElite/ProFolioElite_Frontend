import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
// import 
  import { BiCheckbox, BiSave } from "react-icons/bi";
import { FiSave } from "react-icons/fi";
import { updateTemplateUser } from "../features/user/userSlice";

const ImageCard = ({ imageUrl, title, priview }) => {
  const handleOnSelcet =(title)=>{
    updateTemplateUser(title)
  }
  return (
    <div onClick={handleOnSelcet(title)} className="transform transition-transform duration-300 hover:scale-105">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
        <div className="p-4 flex justify-between align-middle">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <span className="flex pt-2 -mr-7">
            <Link to={priview ? priview : null}>
              <FaEye />
            </Link>
          </span>
          <span className="flex pt-2">
             {/* <Link to={priview ? priview : null}> */}
              <BiCheckbox alt="Slect the template"/>
            {/* </Link> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
