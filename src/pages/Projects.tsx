
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const Projects: React.FC = () => {
  // Sample projects data
  const allProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform with product management, cart functionality, and payment processing. Built with React on the frontend and Node.js on the backend, with MongoDB as the database.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true,
      category: "Web Application",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application that helps users organize tasks, set deadlines, and track progress. Features include drag-and-drop task organization, priority setting, and calendar integration.",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false,
      category: "Web Application",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website to showcase projects and skills. Designed with a focus on user experience and performance, featuring smooth animations and a clean, modern interface.",
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false,
      category: "Web Design",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A weather forecasting application that provides real-time weather data and forecasts for locations worldwide. Features include location search, favorite locations, and detailed weather metrics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false,
      category: "Web Application",
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "A modern blogging platform with an intuitive content management system. Features include rich text editing, image uploads, commenting system, and user authentication.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "AWS S3"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true,
      category: "Web Application",
    },
    {
      id: 6,
      title: "Restaurant Booking System",
      description:
        "An online reservation system for restaurants that allows customers to book tables and manage their reservations. Includes features for managing table availability and customer notifications.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Node.js", "MySQL", "Twilio API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false,
      category: "Web Application",
    },
  ];

  // Categories for filtering
  const categories = [
    "All",
    ...Array.from(new Set(allProjects.map((project) => project.category))),
  ];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtered projects
  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  return (
    <Layout className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              A showcase of my web development and design projects, from e-commerce
              platforms to productivity tools and personal websites.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Category Filters */}
          <div className="mb-12 animate-fade-in">
            {/* Mobile Filter */}
            <div className="flex justify-between items-center mb-6 md:hidden">
              <h2 className="text-2xl font-bold">Projects</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="flex items-center gap-2"
              >
                <Filter size={16} />
                Filter
              </Button>
            </div>

            {(mobileFilterOpen || window.innerWidth >= 768) && (
              <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                featured={project.featured}
                className={
                  project.featured
                    ? "col-span-1 md:col-span-2"
                    : "col-span-1"
                }
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found for this category. Please select another filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
