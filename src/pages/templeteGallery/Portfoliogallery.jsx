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
      priview:
        "https://www.figma.com/proto/SYnFPeYXNEAOTqrBuEI0ZC/Software-developer-portfolio-(Community)?node-id=401-3&node-type=canvas&t=18iNIaPqRaakfnSR-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=401%3A3",
    },
    {
      id: 2,
      imageUrl: Pioneer,
      title: "Pioneer",
      priview:
        "https://www.figma.com/proto/wYiv2EE4sat85d7sSr70bX/Geist---UI-Kit-for-Figma-(Community)?node-id=849-7780",
    },
    {
      id: 3,
      imageUrl: Catalyst,
      title: "Catalyst",
      priview:
        "https://www.figma.com/proto/ld5Sbh4Pa4ImmF5VGCyqCx/Portofolio-Website-Template-(Community)?node-id=813-219",
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
      priview:
        "https://www.figma.com/proto/c2NqwbmDy76JF3EzjjDt6g/Portfolio-Template-%7C-Resume-Template-(Community)?node-id=2-447&node-type=frame&t=bXKQtohHmp6fubaj-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    {
      id: 7,
      imageUrl: Challenger,
      title: "Challenger",
      priview:
        "https://www.figma.com/proto/VlSR013Lsti33ToatkisqX/Wilson-Kinyua's-Portfolio-v2024-(Community)?node-id=1-2",
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
