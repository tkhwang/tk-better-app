
import React from "react";
import { Layout } from "@/components/Layout";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Book, 
  BriefcaseBusiness, 
  Code2, 
  GraduationCap, 
  Heart,
  Mail, 
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  // Skills data
  const technicalSkills = [
    { name: "JavaScript/TypeScript", proficiency: 90 },
    { name: "React.js", proficiency: 85 },
    { name: "Node.js", proficiency: 80 },
    { name: "HTML/CSS", proficiency: 95 },
    { name: "SQL/NoSQL", proficiency: 75 },
    { name: "UI/UX Design", proficiency: 70 },
  ];

  // Experience data
  const experiences = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building responsive web applications using React and TypeScript. Implemented component libraries and design systems to ensure consistent UI across projects.",
    },
    {
      position: "Web Developer",
      company: "Digital Solutions Agency",
      period: "2018 - 2021",
      description:
        "Developed and maintained client websites using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect interfaces and improve user experience.",
    },
    {
      position: "Junior Developer",
      company: "Startup Hub",
      period: "2016 - 2018",
      description:
        "Assisted in building web applications and implemented responsive designs. Participated in code reviews and learned best practices in modern web development.",
    },
  ];

  // Education data
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description:
        "Specialized in web technologies and user interface design. Thesis focused on improving user experience in web applications.",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description:
        "Studied programming fundamentals, algorithms, and data structures. Participated in coding competitions and open-source projects.",
    },
  ];

  return (
    <Layout className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                About Me
              </div>
              <h1 className="text-4xl font-bold font-display tracking-tight mb-6">
                Passionate developer creating impactful solutions
              </h1>
              <p className="text-muted-foreground mb-6">
                I'm a full-stack developer with over 6 years of experience building
                websites and web applications. My journey in tech started with a
                curiosity about how things work online, which led me to explore web
                development and eventually turn it into a career.
              </p>
              <p className="text-muted-foreground mb-8">
                I'm passionate about creating clean, efficient, and user-friendly
                applications that solve real-world problems. When I'm not coding,
                you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge through my blog and tech
                community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href="/path-to-resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative mx-auto max-w-md animate-fade-in animation-delay-400">
              <div className="aspect-square relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent rounded-2xl transform -rotate-3 scale-105"></div>
                <div className="relative h-full w-full rounded-2xl overflow-hidden p-1 bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Developer Portrait"
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border animate-fade-in animation-delay-600">
                <div className="flex items-center gap-3">
                  <Heart className="text-primary" size={20} />
                  <div>
                    <p className="text-sm font-medium">Passionate about</p>
                    <p className="text-xs text-muted-foreground">Clean code & User experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold font-display mb-6">
              My Skills & Expertise
            </h2>
            <p className="text-muted-foreground">
              I've honed a diverse set of skills throughout my career,
              specializing in modern web technologies and development practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-on-scroll">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Code2 size={20} className="text-primary" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <User size={20} className="text-primary" />
                Professional Skills
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award size={20} className="text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">
                    Analytical approach to identifying and resolving complex technical challenges.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Book size={20} className="text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to staying updated with the latest technologies and industry trends.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BriefcaseBusiness size={20} className="text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Project Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Experience managing technical projects and coordinating with cross-functional teams.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Clear and effective communication of complex technical concepts to diverse audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold font-display mb-6">
              Experience & Education
            </h2>
            <p className="text-muted-foreground">
              My professional journey and academic background that have shaped my
              expertise and approach to development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Work Experience */}
            <div className="animate-on-scroll">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <BriefcaseBusiness size={20} className="text-primary" />
                Work Experience
              </h3>
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <div key={index} className="relative pl-8 border-l border-border">
                    <div className="absolute w-4 h-4 rounded-full bg-primary top-0 -left-2"></div>
                    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                      <h4 className="font-bold text-lg">{experience.position}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <span>{experience.company}</span>
                        <span>•</span>
                        <span>{experience.period}</span>
                      </div>
                      <p className="text-muted-foreground">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="animate-on-scroll animation-delay-200">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <GraduationCap size={20} className="text-primary" />
                Education
              </h3>
              <div className="space-y-12">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l border-border">
                    <div className="absolute w-4 h-4 rounded-full bg-primary top-0 -left-2"></div>
                    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                      <h4 className="font-bold text-lg">{item.degree}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <span>{item.institution}</span>
                        <span>•</span>
                        <span>{item.period}</span>
                      </div>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              <h2 className="text-3xl font-bold font-display mb-6">
                Interested in Working Together?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Let's Connect</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
