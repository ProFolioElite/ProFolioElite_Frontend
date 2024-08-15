import { FaCopy, FaEye } from "react-icons/fa";

const LivePortFolio = ({ imageUrl, title }) => {
  return (
    <div className="transform transition-transform duration-300 hover:scale-105">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-96 object-cover transition-transform duration-300"
        />
        <div className="p-4 flex justify-between align-middle">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <span className="flex pt-2">
            <FaEye />
            <span className="flex ml-3" aria-label="copyLink" >
              <FaCopy/>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LivePortFolio;
