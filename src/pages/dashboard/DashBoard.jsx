import { useReducer, useState, Suspense, lazy } from "react";
// import { useSelector, useDispatch } from "react-redux";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaInfoCircle,
  FaRocket,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { FaCog, FaQuestionCircle } from "react-icons/fa";
import Spinner from "../../component/Spinner";
import { useNavigate } from "react-router-dom";

const PortfolioGallery = lazy(() =>
  import("../templeteGallery/Portfoliogallery")
);
const Welcome = lazy(() => import("../welcomePage/Welcome"));
const UserDetails = lazy(() => import("../userDetails/UserDetails"));
const PortfolioPreview = lazy(() =>
  import("../portfolioPreview/PortfolioPreview")
);
const Setting = lazy(() => import("../setting/Setting"));
const Help = lazy(() => import("../help/Help"));

const initialState = {
  templete: false,
  yourDetails: false,
  liveProject: false,
  setting: false,
  help: false,
};
const handleToNavigate = (state, action) => {
  switch (action.type) {
    case "Templates":
      return {
        templete: (state.templete = true),
        yourDetails: (state.yourDetails = false),
        liveProject: (state.liveProject = false),
        setting: (state.setting = false),
        help: (state.help = false),
      };
    case "Your Details":
      return {
        templete: (state.templete = false),
        yourDetails: (state.yourDetails = true),
        liveProject: (state.liveProject = false),
        setting: (state.setting = false),
        help: (state.help = false),
      };
    case "Live PortFolio":
      return {
        templete: (state.templete = false),
        yourDetails: (state.yourDetails = false),
        liveProject: (state.liveProject = true),
        setting: (state.setting = false),
        help: (state.help = false),
      };
    case "Settings":
      return {
        templete: (state.templete = false),
        yourDetails: (state.yourDetails = false),
        liveProject: (state.liveProject = false),
        setting: (state.setting = true),
        help: (state.help = false),
      };

    case "Help":
      return {
        templete: (state.templete = false),
        yourDetails: (state.yourDetails = false),
        liveProject: (state.liveProject = false),
        setting: (state.setting = false),
        help: (state.help = true),
      };

    default:
      return state;
  }
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [state, dispatch] = useReducer(handleToNavigate, initialState);
  const token = localStorage.getItem("userDetails");
  const data = JSON.parse(token);

  const navigation = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleToLogout = () => {
    console.log("it's click logout");

    localStorage.setItem("token", "");
    navigation("/signin");
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-black via-black to-gray-900">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 shadow-md transition-transform duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        } overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <h1
            className={`text-2x1.5 font-bold text-white transition-opacity duration-300 ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {sidebarOpen ? `{(</>)} ProFolioElite` : null}
          </h1>
          <button onClick={toggleSidebar} className="focus:outline-none">
            {sidebarOpen ? (
              <FaChevronLeft className="text-white w-6 h-6" />
            ) : (
              <FaChevronRight
                size={30}
                className="text-white w-7 h-7 mt-5 mr-3"
              />
            )}
          </button>
        </div>
        <nav className="mt-10">
          {sidebarOpen ? (
            <ul>
              {[
                "Templates",
                "Your Details",
                "Live PortFolio",
                "Settings",
                "Help",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center py-2 px-4 text-white hover:bg-purple-500 transition-colors duration-300`}
                  onClick={() => {
                    dispatch({ type: item });
                  }}
                >
                  <span className={`${sidebarOpen ? "block" : "hidden"}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {[
                { name: "Templates", icon: <FaFileAlt size={`30px`} /> },
                { name: "Your Details", icon: <FaInfoCircle size={`30px`} /> },
                { name: "Live PortFolio", icon: <FaRocket size={`30px`} /> },
                { name: "Settings", icon: <FaCog size={`30px`} /> },
                { name: "Help", icon: <FaQuestionCircle size={`30px`} /> },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center py-2 px-6 text-white  hover:bg-purple-500 transition-colors duration-300`}
                  onClick={() => {
                    dispatch({ type: item.name });
                  }}
                >
                  <span>{item.icon}</span>
                </li>
              ))}
            </ul>
          )}
        </nav>
        {sidebarOpen ? (
          <div
            className={`mt-60 flex justify-between p-4 ${
              sidebarOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-white">
              <h2 className="text-lg font-bold">{data?.name.toUpperCase()}</h2>
              <p className="text-sm">{data?.profession}</p>
            </div>
            <div className="text-white pt-2 mr-3 flex justify-around">
              <FaSignOutAlt onClick={handleToLogout} size={"30px"} />{" "}
            </div>
          </div>
        ) : (
          <div
            className={`flex items-center mt-52 py-2 px-6 text-white  hover:bg-purple-500 transition-colors duration-300`}
          >
            <FaUser onClick={handleToLogout} size={`30px`} />
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 text-white">
        <header>
          <h1 className="text-3xl font-semibold">
            {state.liveProject ? `Your Live Portfolio` : null}
            {state.templete ? "Templetes" : null}
          </h1>
        </header>
        {/* <h2 className="text-2xl font-bold mb-4">{`Your Live Portfolio`}</h2> */}
        <Suspense
          fallback={
            <div>
              <Spinner />
            </div>
          }
        >
          {state.templete ||
          state.yourDetails ||
          state.liveProject ||
          state.setting ||
          state.help ? null : (
            <Welcome />
          )}
          {state.templete ? <PortfolioGallery /> : null}
          {state.yourDetails ? <UserDetails /> : null}
          {state.liveProject ? <PortfolioPreview /> : null}
          {state.setting ? <Setting /> : null}
          {state.help ? <Help /> : null}
        </Suspense>

        {/* Analytics Section */}
      </main>
    </div>
  );
};

export default Dashboard;
