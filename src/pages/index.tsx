import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ArrowRight,
  Code,
  Layers,
  Database,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/consts/projects";
import { Layout } from "@/components/layout";

// Sample blog posts
const recentPosts = [
  {
    id: 1,
    title: "How I Built a Real-time Chat Application",
    date: "June 10, 2023",
    excerpt:
      "Learn about the technologies and architecture behind a modern real-time chat application.",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    date: "May 22, 2023",
    excerpt:
      "Exploring upcoming trends and technologies that will shape the future of web development.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

const Index = () => {
  return (
    <Layout className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
                One-Person Development
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-balance">
                Creating digital solutions with{" "}
                <span className="text-primary">precision</span> and{" "}
                <span className="text-primary">passion</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                I'm a full-stack developer specializing in building exceptional
                digital experiences. Currently focused on creating responsive
                web applications that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/projects">View My Work</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in animation-delay-400">
              <div className="aspect-square relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-primary/20 to-primary/5 p-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-background rounded-2xl transform rotate-6 scale-105"></div>
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Developer"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-24 h-24 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl"></div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#services" className="text-muted-foreground">
              <ChevronDown size={30} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Services
            </h2>
            <p className="text-muted-foreground">
              I offer a range of services to help businesses and individuals
              build their digital presence and solve technical challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Code size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fullstack Development</h3>
              <p className="text-muted-foreground">
                Creating responsive, user-friendly websites and web applications
                using modern frameworks and best practices.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow animate-on-scroll animation-delay-400">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Applications</h3>
              <p className="text-muted-foreground">
                Leveraging machine learning and artificial intelligence
                technologies to develop smart solutions, personalized
                recommendation systems, and innovative applications that support
                data-driven decision making for businesses and organizations.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow animate-on-scroll animation-delay-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Layers size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Designing intuitive and engaging user interfaces and experiences
                that delight users and achieve business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-16 animate-on-scroll">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Featured Projects
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                A selection of my recent work, showcasing my skills and
                expertise across different technologies and domains.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden md:flex items-center gap-2"
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
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
                    <Link to={project.githubLink}>
                      View Project
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Have a project in mind or need help with your digital
                challenges? I'm currently available for freelance work and
                interesting projects.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
