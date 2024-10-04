import ImageCard from "../../component/ImageCard";

const PortfolioGallery = () => {
  const projects = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300", // Replace with your image URL
      title: "Project 1",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300",
      title: "Project 2",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      title: "Project 3",
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/300",
      title: "Project 4",
    },
    // {
    //   id: 5,
    //   imageUrl: "https://via.placeholder.com/300", // Replace with your image URL
    //   title: "Project 1",
    // },
    // {
    //   id: 6,
    //   imageUrl: "https://via.placeholder.com/300",
    //   title: "Project 2",
    // },
    // {
    //   id: 7,
    //   imageUrl: "https://via.placeholder.com/300",
    //   title: "Project 3",
    // },
    // {
    //   id: 8,
    //   imageUrl: "https://via.placeholder.com/300",
    //   title: "Project 4",
    // },
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
          key={project.id}
          imageUrl={project.imageUrl}
          title={project.title}
        />
      ))}
    </section>
  );
};

export default PortfolioGallery;
