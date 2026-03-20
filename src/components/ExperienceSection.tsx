import React from 'react';
import { motion } from 'framer-motion';
import { BuildingIcon } from 'lucide-react';
export function ExperienceSection() {
  const experiences = [
  {
    id: 2,
    role: '.NET Developer',
    company: 'Technosys Services, Pvt. Ltd. Lucknow , Uttar Pradesh',
    period: '2023 - present',
    description:
    'Developed and maintained scalable RESTful APIs using ASP.NET Core and .NET technologies. Optimized database queries and API performance, reducing average response time by 40%.',
    tech: ['C#','ASP.NET Core','.NET Framework', 'Entity Framework', 'SQL Server']
  },
  {
    id: 3,
    role: 'React Developer',
    company: 'Technosys Services, Pvt. Ltd. Lucknow , Uttar Pradesh',
    period: '2023 - present',
    description:
    'I am a passionate React Developer with experience in building modern, responsive web applications. I specialize in creating reusable UI components, managing application state efficiently, and integrating RESTful APIs to deliver seamless user experiences',
    tech: ['React.js','HTML5,CSS3','RESTful APIs Integration', 'React Hooks', 'Component-Based Architecture']
  }];

  return (
    <section
      id="experience"
      className="py-8 relative border-t border-gray-100">
      
      <div className="max-w-4xl mx-auto px-6">
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
          
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
            <div className="h-px bg-gray-200 flex-grow max-w-xs"></div>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) =>
              <motion.div
                key={exp.id}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2
                }}
                className="relative md:pl-20">
                
                  {/* Timeline dot */}
                  <div className="absolute left-[-33px] md:left-[23px] top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-white shadow-sm z-10"></div>

                  {/* Content Card */}
                  <div className="bg-white border border-gray-200 border-l-4 border-l-primary rounded-xl shadow-sm p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 font-medium mb-4">
                      <BuildingIcon className="w-4 h-4" />
                      {exp.company}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) =>
                    <span
                      key={tech}
                      className="text-xs font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      
                          {tech}
                        </span>
                    )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}