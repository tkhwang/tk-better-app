
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category?: string;
  className?: string;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  image,
  category,
  className,
  featured = false,
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
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {category && (
          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </div>
        )}
      </div>
      <div className={cn("p-6", featured && "md:w-1/2")}>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar size={14} className="mr-1" />
          {date}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="group-hover:text-primary transition-colors"
        >
          <Link to={`/blog/${id}`}>
            Read More
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
