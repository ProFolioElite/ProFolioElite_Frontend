import ImageCard from "../../component/ImageCard";
import LivePortFolio from "../../component/LivePortFolio";

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300", // Replace with your image URL
      title: "Project 1",
    },
  ];

  return (
    <section
      className="mt-10 p-3 flex justify-center "
      style={{
        scrollbarWidth: "none" /* For Firefox */,
      }}
    >

      {projects.map((project) => (
        <LivePortFolio
          key={project.id}
          imageUrl={project.imageUrl}
          title={project.title}
        />
      ))}
    </section>
  );
};

export default PortfolioPreview;
