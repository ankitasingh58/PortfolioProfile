import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, BriefcaseIcon, UsersIcon } from 'lucide-react';
export function AboutSection() {
  const stats = [
  {
    icon: <BriefcaseIcon className="w-6 h-6 text-primary" />,
    value: '3+',
    label: 'Years Experience'
  },
  {
    icon: <CodeIcon className="w-6 h-6 text-primary" />,
    value: '10+',
    label: 'Projects Completed'
  }];

  return (
    <section id="about" className="py-8 relative border-t border-gray-100">
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
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            <div className="h-px bg-gray-200 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
               I am a dedicated .NET Developer with over 3 years of professional experience
                building scalable and enterprise-level applications. My journey started with a
                 strong interest in backend development, which naturally led me to working with 
                 ASP.NET Core APIs and the .NET ecosystem.
              </p>
              <p>
                Currently, I specialize in{' '}
                <span className="text-gray-900 font-medium">
                  ASP.NET Core, Web APIs, React, and Microsoft SQL Server.
                </span>
              I'm passionate about writing clean, maintainable code while following
               SOLID principles and Domain-Driven Design.
              </p>
          
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1
                }}
                className={`p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col gap-4 ${index === 2 ? 'sm:col-span-2' : ''}`}>
                
                  {stat.icon}
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-mono text-gray-500">
                      {stat.label}
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