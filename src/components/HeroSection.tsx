import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, DownloadIcon, UserIcon } from 'lucide-react';
export function HeroSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Subtle Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl">
            
            {/* <motion.div */}
              {/* variants={itemVariants} */}
              {/* className="flex items-center gap-2 mb-6"> */}

            {/* </motion.div> */}

            <motion.h1
              variants={itemVariants}
              className="text-xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
              Ankita Singh
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-500 mb-6">
              
              .NET Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed">
              
              Designing and developing modern backend solutions using C#,
               .NET, Web API, and ASP.NET Core. Dedicated to writing clean, maintainable
                code and building efficient, scalable applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-primary hover:bg-primaryHover text-white font-medium px-6 py-3 rounded transition-colors shadow-sm">
                Get In Touch
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded transition-colors shadow-sm">
                <DownloadIcon className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: 'easeOut'
            }}
            className="hidden md:flex justify-center relative">
            
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-150" />
            <div className="absolute -inset-4 border border-gray-200 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
            <div className="absolute -inset-8 border border-gray-100 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

            {/* Profile Image Container */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden ring-4 ring-primary/20 from-sky-400 to-blue-500 flex items-center justify-center shadow-xl">
              {/* Placeholder for actual image - using initials for now */}
              <img src='src/assets/images/ankita_singh.jpg'className='h-72 w-72'/>
              {/* <span className="text-7xl font-bold text-white tracking-tighter"> */}
                {/* JA */}
              {/* </span> */}
              {/* If user had an image, it would go here:
                <img src="/profile.jpg" alt="John Anderson" className="w-full h-full object-cover" />
                */}
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 1,
                duration: 0.5
              }}
              className="absolute bottom-4 -right-4 bg-white border border-gray-200 shadow-lg rounded-lg px-4 py-2 flex items-center gap-2">
              
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700 font-mono">
                Available for work
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}