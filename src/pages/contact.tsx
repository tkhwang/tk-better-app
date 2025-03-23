import React from "react";
import { Layout } from "@/components/layout";
import { ContactForm } from "@/components/contact-form";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { GitHubIcon } from "@/icons/github";
import { TwitterIcon } from "@/icons/twitter";
import ThreadsIcon from "@/icons/threads";

const Contact: React.FC = () => {
  return (
    <Layout className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or want to discuss a potential
              collaboration? I'd love to hear from you. Fill out the form below
              or reach out through any of my contact channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold font-display mb-8">
                Contact Information
              </h2>

              <div className="space-y-10">
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a
                        href="mailto:contact@example.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        San Francisco, California, USA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-bold mb-4">Connect with me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon size={18} />
                    </a>
                    {/* <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a> */}
                    <a
                      href="https://www.threads.net/@tkbetter.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Threads"
                    >
                      <ThreadsIcon size={18} />
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="font-bold mb-2">Current Availability</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance projects and
                    consultations. My typical response time is within 24-48
                    hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in animation-delay-200">
              <h2 className="text-3xl font-bold font-display mb-8">
                Send Me a Message
              </h2>
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-xl overflow-hidden border border-border h-[400px] animate-on-scroll">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948922!3d37.75781499657613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1623805696552!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location Map"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
