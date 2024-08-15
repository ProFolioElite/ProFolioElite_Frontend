import { useReducer, useState, Suspense, lazy } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import {
  FaHome,
  FaProjectDiagram,
  FaChartLine,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import Spinner from "../../component/Spinner";
const PortfolioGallery = lazy(() =>
  import("../templeteGallery/Portfoliogallery")
);
const MultiStepForm = lazy(() => import("../../component/MultiStepForm"));
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
    case "Templetes":
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const user = {
    name: "John Doe",
    profession: "Web Developer",
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
                "Templetes",
                "Your Details",
                "Live PortFolio",
                "Settings",
                "Help",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center py-2 px-4 text-white hover:bg-purple-500 transition-colors duration-300`}
                >
                  {sidebarOpen && (
                    <span className="mr-2">{/* Add your icon here */}</span>
                  )}
                  <span
                    className={`${sidebarOpen ? "block" : "hidden"}`}
                    onClick={() => {
                      dispatch({ type: item });
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {[
                <FaHome size={`30px`} />,
                <FaProjectDiagram size={`30px`} />,
                <FaChartLine size={`30px`} />,
                <FaCog size={`30px`} />,
                <FaQuestionCircle size={`30px`} />,
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center py-2 px-6 text-white  hover:bg-purple-500 transition-colors duration-300`}
                >
                  {sidebarOpen && (
                    <span className="mr-2">{/* Add your icon here */}</span>
                  )}
                  <span>{item}</span>
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
              <h2 className="text-lg font-bold">{user.name}</h2>
              <p className="text-sm">{user.profession}</p>
            </div>
            <div className="text-white pt-2 mr-3 flex justify-around">
              <FaSignOutAlt size={"30px"} />{" "}
            </div>
          </div>
        ) : (
          <div
            className={`flex items-center mt-52 py-2 px-6 text-white  hover:bg-purple-500 transition-colors duration-300`}
          >
            <FaUser size={`30px`} />
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 text-white">
        <header>
          <h1 className="text-3xl font-semibold">
            {state.liveProject ? `Your Live Portfolio` : null}
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
          {state.templete ? <PortfolioGallery /> : null}
          {state.yourDetails ? <MultiStepForm /> : null}
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
