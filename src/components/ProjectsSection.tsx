import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon, FolderIcon } from 'lucide-react';
export function ProjectsSection() {
  const projects = [
  {
    title: 'SchoolPulse',
    description:
    'A full-stack application built with ASP.NET Core Minimal API and React that enables school self-assessment, third-party verification, grading & scoring, and management of School Improvement Plans (SIP).',
    tech: ['React','Tailwind','ASP.NET Core', 'Minimal API', 'SQL Server'],
    // github: '#',
    // live: '#'
  },
  {
    title: 'Court Case Monitoring System',
    description:
    'A web-based application developed to track and manage court cases efficiently. The system allows users to monitor case details, hearing dates, status updates, and related documents in a centralized platform.',
    tech: ['.NET Framework', 'HTML / CSS', 'SQL Server'],
    // github: '#',
    // live: '#'
  },
  {
    title: 'PHQ Headquarters (HP)',
    description:
    'A web-based dashboard application developed for PHQ Headquarters to generate and monitor daily crime and traffic reports. The system includes reports based on various legal acts and incident categories, helping authorities track cases.',
    tech: ['.NET Framework', 'HTML / CSS', 'SQL Server'],
    // github: '#',
    // live: null
  },
  {
    title: 'Wedding Planner',
    description:
    'A responsive web application designed to help users plan and manage wedding events efficiently. The platform allows users to explore wedding services, view galleries, and organize event details through an interactive interface',
    tech: ['.NET', 'HTML / CSS','Entity Framework' ],
    github: 'https://github.com/ankitasingh58/WeddingPlanner',
    // live: '#'
  }];

  return (
    <section
      id="projects"
      className="py-8 relative border-t border-gray-100 bg-gray-50/50">
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.5
          }}>
          
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <div className="h-px bg-gray-200 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) =>
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group p-8 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              
                <div className="flex justify-between items-start mb-6">
                  <FolderIcon className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    {project.github &&
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label="GitHub Repository">
                    
                        <GithubIcon className="w-5 h-5" />
                      </a>
                  }
                    {project.live &&
                  <a
                    href={project.live}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label="Live Demo">
                    
                        <ExternalLinkIcon className="w-5 h-5" />
                      </a>
                  }
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto ">
                  {project.tech.map((tech) =>
                <span
                  key={tech}
                  className="text-xs font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded">
                  
                      {tech}
                    </span>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}