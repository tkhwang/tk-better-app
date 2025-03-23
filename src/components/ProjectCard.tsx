import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
  featured = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300",
        featured && "md:col-span-2 md:flex",
        className
      )}
    >
      <div
        className={cn(
          "aspect-video relative overflow-hidden",
          featured && "md:w-1/2"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {(liveLink || githubLink) && (
          <div className="absolute bottom-4 right-4 flex space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full hover:bg-background transition-colors"
                aria-label="View source code on GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full hover:bg-background transition-colors"
                aria-label="Visit live site"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        )}
      </div>
      <div className={cn("p-6", featured && "md:w-1/2")}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="group-hover:text-primary transition-colors"
        >
          <Link to={githubLink ?? liveLink}>
            View Project
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};
