import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, MapPinIcon, GithubIcon, LinkedinIcon, PhoneCall } from 'lucide-react';
export function ContactSection() {
  return (
    <section id="contact" className="py-8 relative border-t border-gray-100">
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
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Get In Touch
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
             Currently open to new opportunities. If you're looking for a developer with experience in .NET and React, feel free to reach out. I'd be happy to connect and discuss how I can contribute to your team
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div >
                <h3 className="text-xl font-semibold mb-6 text-gray-900">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-600">
                    <PhoneCall className="w-5 h-5 text-primary" />
                    <span>9974191640</span>
                  </div>
                   <div className="flex items-center gap-4 text-gray-600">
   <MailIcon className="w-5 h-5 text-primary" />
   <span>202ankitasingh@gmail.com</span>
 </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <MapPinIcon className="w-5 h-5 text-primary" />
                    <span>Available for .NET, React Developer</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900">
                  Socials
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ankitasingh58"
                    className="p-3 bg-gray-50 border border-gray-200 rounded hover:border-primary/50 hover:text-primary transition-colors text-gray-500">
                    
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ankita-singh-82a584384/"
                    className="p-3 bg-gray-50 border border-gray-200 rounded hover:border-primary/50 hover:text-primary transition-colors text-gray-500">
                    
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form UI */}
            {/* <div className="md:col-span-3"> */}
              {/* <form className="space-y-4" onSubmit={(e) => e.preventDefault()}> */}
                {/* <div className="grid grid-cols-2 gap-4"> */}
                  {/* <div className="space-y-2"> */}
                    {/* <label */}
                      {/* // htmlFor="name" */}
                      {/* // className="font-mono text-sm text-gray-500"> */}
{/*                        */}
                      {/* Name */}
                    {/* </label> */}
                    {/* <input */}
                      {/* // type="text" */}
                      {/* // id="name" */}
                      {/* // className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors" */}
                      {/* // placeholder="John Doe" /> */}
{/*                      */}
                  {/* </div> */}
                  {/* <div className="space-y-2"> */}
                    {/* <label */}
                      {/* // htmlFor="email" */}
                      {/* // className="font-mono text-sm text-gray-500"> */}
{/*                        */}
                      {/* Email */}
                    {/* </label> */}
                    {/* <input */}
                      {/* // type="email" */}
                      {/* // id="email" */}
                      {/* // className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors" */}
                      {/* // placeholder="john@example.com" /> */}
{/*                      */}
                  {/* </div> */}
                {/* </div> */}
                {/* <div className="space-y-2"> */}
                  {/* <label */}
                    {/* // htmlFor="subject" */}
                    {/* // className="font-mono text-sm text-gray-500"> */}
{/*                      */}
                    {/* Subject */}
                  {/* </label> */}
                  {/* <input */}
                    {/* // type="text" */}
                    {/* // id="subject" */}
                    {/* // className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors" */}
                    {/* // placeholder="Project Inquiry" /> */}
{/*                    */}
                {/* </div> */}
                {/* <div className="space-y-2"> */}
                  {/* <label */}
                    {/* // htmlFor="message" */}
                    {/* // className="font-mono text-sm text-gray-500"> */}
{/*                      */}
                    {/* Message */}
                  {/* </label> */}
                  {/* <textarea */}
                    {/* // id="message" */}
                    {/* // rows={5} */}
                    {/* // className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-none" */}
                    {/* // placeholder="Hello, I'd like to talk about..."> */}
                  {/* </textarea> */}
                {/* </div> */}
                {/* <button */}
                  {/* // type="button" */}
                  {/* // className="w-full bg-primary hover:bg-primaryHover text-white font-medium px-6 py-3 rounded transition-colors mt-2"> */}
{/*                    */}
                  {/* Send Message */}
                {/* </button> */}
              {/* </form> */}
            {/* </div> */}
          </div>
        </motion.div>
      </div>
    </section>);

}