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
  const [templatePics, setTemplatePics] = useState();
  const [tittle, setTittle] = useState("");

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user?.template) {
      switch (user?.user?.template) {
        case "Avant-Garde":
          setTemplatePics(AvantGarde);
          setTittle("Avant-Garde");
          break;

        case "Visionary":
          setTemplatePics(Visionary);
          setTittle("Visionary");

          break;
        case "Trailblazer":
          setTemplatePics(Trailblazer);
          setTittle("Trailblazer");

          break;
        case "Innovator":
          setTemplatePics(Innovator);
          setTittle("Innovator");

          break;
        case "Catalyst":
          setTemplatePics(Catalyst);
          setTittle("Catalyst");

          break;
        case "Challenger":
          setTemplatePics(Challenger);
          setTittle("Challenger");

          break;
        case "Pioneer":
          setTemplatePics(Pioneer);
          setTittle("Pioneer");

          break;

        default:
          break;
      }
    }
    if (user?.template) {
      switch (user?.template?.data?.template) {
        case "Avant-Garde":
          setTemplatePics(AvantGarde);
          setTittle("Avant-Garde");
          break;

        case "Visionary":
          setTemplatePics(Visionary);
          setTittle("Visionary");

          break;
        case "Trailblazer":
          setTemplatePics(Trailblazer);
          setTittle("Trailblazer");

          break;
        case "Innovator":
          setTemplatePics(Innovator);
          setTittle("Innovator");

          break;
        case "Catalyst":
          setTemplatePics(Catalyst);
          setTittle("Catalyst");

          break;
        case "Challenger":
          setTemplatePics(Challenger);
          setTittle("Challenger");

          break;
        case "Pioneer":
          setTemplatePics(Pioneer);
          setTittle("Pioneer");

          break;

        default:
          break;
      }
    }
  }, [user]);
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
        title={tittle}
      />
      {/* ))} */}
    </section>
  );
};

export default PortfolioPreview;
