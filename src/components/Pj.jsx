import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import React from "react";
const projects = [
  {
    id: 1,
    title: "Admin page for a food App",
    description: "A beautiful admin page using React,Node,Mongodb,Css",
    image: "/projects/image1.jpg",
    tags: ["React", "Css", "Node", "MongoDb"],
    demoUrl: "https://admin-dashboard-bice-omega-74.vercel.app",
    githubUrl: "https://github.com/busybraindev/admin-dashboard",
  },
  {
    id: 2,
    title: "Landing page for a food App",
    description: "A beautiful Landing page using React,Node,Mongodb,Css",
    image: "/projects/image2.jpg",
    tags: ["React", "Css", "Node", "MongoDb"],
    demoUrl: "https://home-page-drab-three.vercel.app",
    githubUrl: "https://github.com/busybraindev/home-page",
  },
  {
    id: 3,
    title: "Landing page for a School App",
    description: "A beautiful Landing page using React,and Css",
    image: "/projects/image3.jpg",
    tags: ["React", "Css"],
    demoUrl: "https://myapp-one-lime.vercel.app",
    githubUrl: "https://github.com/busybraindev/myapp",
  },
  {
    id: 4,
    title: "Landing page for a Ecommerce App",
    description: "A beautiful Landing page using React,and TailwindCss",
    image: "/projects/image4.jpg",
    tags: ["React", "Css"],
    demoUrl: "https://ecommerce-blond-eight-efokzaj4ae.vercel.app",
    githubUrl: "https://github.com/busybraindev/Ecommerce",
  },
  {
    id: 5,
    title: "Cart page for a Ecommerce App",
    description: "A beautiful Cart page using React,and TailwindCss",
    image: "/projects/image5.jpg",
    tags: ["React", "Css"],
    demoUrl: "https://ecommerce-blond-eight-efokzaj4ae.vercel.app",
    githubUrl: "https://github.com/busybraindev/Ecommerce",
  },
  {
    id: 6,
    title: "Product Detail page for a Ecommerce App",
    description: "A beautiful Cart page using React,and TailwindCss",
    image: "/projects/image6.jpg",
    tags: ["React", "Css"],
    demoUrl: "https://ecommerce-blond-eight-efokzaj4ae.vercel.app",
    githubUrl: "https://github.com/busybraindev/Ecommerce",
  },
  {
    id: 7,
    title: "Landing page for a Learning App",
    description: "A beautiful Landing page using React,and Css",
    image: "/projects/image7.jpg",
    tags: ["React", "Css"],
    demoUrl: "https://mywebapp-sage.vercel.app",
    githubUrl: "https://github.com/busybraindev/mywebapp",
  },
  {
    id: 8,
    title: "Landing page for a Tracking System App",
    description:
      "A beautiful Landing page using React,Node,MongoDB, TailwindCss",
    image: "/projects/image8.jpg",
    tags: ["React", "node", "MongoDB", "Css"],
    demoUrl: "https://tracking-system-z68t.vercel.app",
    githubUrl: "https://github.com/busybraindev/Tracking-system",
  },
  {
    id: 9,
    title: "Logging page for a Tracking System App",
    description:
      "A beautiful Logging page using React,Node,MongoDB, TailwindCss",
    image: "/projects/image9.jpg",
    tags: ["React", "node", "MongoDB", "Css"],
    demoUrl: "https://tracking-system-z68t.vercel.app",
    githubUrl: "https://github.com/busybraindev/Tracking-system",
  },
  {
    id: 10,
    title: "Dashboard page for a Tracking System App",
    description:
      "A beautiful Dashbaord page using React,Node,MongoDB, TailwindCss",
    image: "/projects/image10.jpg",
    tags: ["React", "node", "MongoDB", "Css"],
    demoUrl: "https://tracking-system-z68t.vercel.app",
    githubUrl: "https://github.com/busybraindev/Tracking-system",
  },
  {
    id: 11,
    title: "Landing page for a Hotel  App",
    description: "A beautiful Hotel page using React,Node,MongoDB, TailwindCss",
    image: "/projects/image11.jpg",
    tags: ["React", "node", "MongoDB", "Css"],
    demoUrl: "https://hotelfrontend-two.vercel.app",
    githubUrl: "https://github.com/busybraindev/hotelfrontend",
  },
];

const Pj = () => {
  return (
    <div id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-[20px]">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tg) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tg}
                    </span>
                  ))}
                </div>

                <h3 className="text-[15px] font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20}></ExternalLink>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <GitBranch size={20}></GitBranch>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/busybraindev"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16}></ArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pj;
