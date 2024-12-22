// import ImageCard from "../../component/ImageCard";
import { useEffect, useState } from "react";
import LivePortFolio from "../../component/LivePortFolio";
import Visionary from "../../assets/software.png";
import Pioneer from "../../assets/tem2.png";
import Catalyst from "../../assets/tem3.png";
import Innovator from "../../assets/tem5.png";
import AvantGarde from "../../assets/temp6.png";
import Trailblazer from "../../assets/temp7.png";
import Challenger from "../../assets/snip4.png";
import { useSelector } from "react-redux";



const PortfolioPreview = () => {
  const user = useSelector((state) => state.user);
  // const { template } = user?.user || {};
  // const I  = localStorage.getItem('userDetail')
  const userDetails = localStorage.getItem("userDetails");
// 
const initialUserDetails = JSON.parse(userDetails);
const { template } = initialUserDetails;

  console.log(template);

  const projects = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300", // Replace with your image URL
      title: "Project 1",
    },
  ];
  const [templatePics, setTemplatePics] = useState();

  useEffect(() => {
    if (template === "Visionary") {
      setTemplatePics(Visionary);
    }
    if (template === "Pioneer") {
      setTemplatePics(Pioneer);
    }
    if (template === "Catalyst") {
      setTemplatePics(Catalyst);
    }
    if (template === "Innovator") {
      setTemplatePics(Innovator);
    }
    if (template === "AvantGarde") {
      setTemplatePics(AvantGarde);
    }
  }, [template]);
  console.log(templatePics);

  return (
    <section
      className="mt-10 p-3 flex justify-center "
      style={{
        scrollbarWidth: "none" /* For Firefox */,
      }}
    >
      {/* {projects.map((project) => ( */}
      <LivePortFolio
        // key={}
        imageUrl={templatePics}
        title={template}
      />
      {/* ))} */}
    </section>
  );
};

export default PortfolioPreview;
