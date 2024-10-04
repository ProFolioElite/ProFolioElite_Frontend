import ImageCard from "../../component/ImageCard";
import Visionary from "../../assets/software.png";
import Pioneer from "../../assets/tem2.png";
import Catalyst from "../../assets/tem3.png";
import Innovator from "../../assets/tem5.png";
import AvantGarde from "../../assets/temp6.png";
import Trailblazer from "../../assets/temp7.png";
import Challenger from "../../assets/snip4.png";

const PortfolioGallery = () => {
  const projects = [
    {
      id: 1,
      imageUrl: Visionary, // Replace with your image URL
      title: "Visionary",
    },
    {
      id: 2,
      imageUrl: Pioneer,
      title: "Pioneer",
    },
    {
      id: 3,
      imageUrl: Catalyst,
      title: "Catalyst",
    },
    {
      id: 4,
      imageUrl: Innovator,
      title: "Innovator",
      priview:
        "https://www.figma.com/proto/6COi28dYt0qqMpGb7PL2zG/%F0%9F%8E%A8-Personal-Portfolio-Template-(Community)?node-id=203-55",
    },
    {
      id: 5,
      imageUrl: AvantGarde, // Replace with your image URL
      title: "Avant-Garde",
    },
    {
      id: 6,
      imageUrl: Trailblazer,
      title: "Trailblazer",
    },
    {
      id: 7,
      imageUrl: Challenger,
      title: "Challenger",
    },
    {
      id: 8,
      imageUrl: "https://via.placeholder.com/300",
      title: "Creator",
    },
  ];

  return (
    <section
      className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-4/5  overflow-y-scroll scrollbar-hide "
      style={{
        scrollbarWidth: "none" /* For Firefox */,
      }}
    >
      {projects.map((project) => (
        <ImageCard
          key={project.id ? project.id : null}
          imageUrl={project.imageUrl ? project.imageUrl : null}
          title={project.title ? project.title : null}
          priview={project.priview ? project.priview : null}
        />
      ))}
    </section>
  );
};

export default PortfolioGallery;
