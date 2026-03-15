import React from 'react';
import { motion } from 'framer-motion';
import { ServerIcon, LayoutIcon, DatabaseIcon, WrenchIcon } from 'lucide-react';
export function SkillsSection() {
  const skillCategories = [
  {
    title: 'Backend Development',
    icon: <ServerIcon className="w-5 h-5 text-primary" />,
    skills: [
    {
      name: 'C#',
      level: 85
    },
    {
      name: 'ASP.NET Core',
      level: 80
    },
      {
    name: 'ASP.NET Framework',
    level: 85
  },
    {
      name: 'Web API / REST',
      level: 80
    },
    {
      name: ' Entity Framework Core',
      level: 60
    },
    {
      name: 'LINQ',
      level: 50
    }]

  },
  {
    title: 'Frontend Development',
    icon: <LayoutIcon className="w-5 h-5 text-primary" />,
    skills: [
    {
      name: 'HTML/CSS/Bootstrap',
      level: 90
    },
    {
      name: 'JavaScript/TypeScript/JQuery',
      level: 75
    },
    {
      name: 'React',
      level: 65
    }]

  },
  {
    title: 'Database',
    icon: <DatabaseIcon className="w-5 h-5 text-primary" />,
    skills: [
    {
      name: 'MSSQL Server',
      level: 80
    },
    {
      name: 'MySql',
      level: 65
    }]

  },
  {
    title: 'DevOps & Tools',
    icon: <WrenchIcon className="w-5 h-5 text-primary" />,
    skills: [
    // {
      // name: 'Azure',
      // level: 70
    // },
    // {
      // name: 'Docker',
      // level: 75
    // },
    {
      name: 'Git / GitHub',
      level: 60
    }]
    // {
      // name: 'CI/CD (Actions/Pipelines)',
      // level: 70
    // },
    // {
      // name: 'Visual Studio',
      // level: 90
    // }]

  }];

  return (
    <section
      id="skills"
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
              Technical Skills
            </h2>
            <div className="h-px bg-gray-200 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) =>
            <motion.div
              key={category.title}
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
                delay: catIndex * 0.1
              }}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, index) =>
                <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-mono text-sm text-gray-700">
                          {skill.name}
                        </span>
                        <span className="font-mono text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                      initial={{
                        width: 0
                      }}
                      whileInView={{
                        width: `${skill.level}%`
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.1,
                        ease: 'easeOut'
                      }}
                      className="h-full bg-primary rounded-full" />
                    
                      </div>
                    </div>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}