import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm Vidushi Singh
            <span className="block text-indigo-600 mt-2">Web Developer</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            I craft beautiful and functional web experiences with modern technologies.
            Passionate about creating intuitive interfaces and scalable solutions.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:john@example.com"
               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
            alt="Profile"
            className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
