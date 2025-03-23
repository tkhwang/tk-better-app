import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { projects } from "@/consts/projects";
import { ProjectCard } from "@/components/project-card";

const Projects: React.FC = () => {
  // Categories for filtering
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtered projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <Layout className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              A showcase of my web development and design projects, from
              e-commerce platforms to productivity tools and personal websites.
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
                // liveLink={project.liveLink}
                githubLink={project.githubLink}
                featured={project.featured}
                className={
                  project.featured ? "col-span-1 md:col-span-2" : "col-span-1"
                }
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found for this category. Please select another
                filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
