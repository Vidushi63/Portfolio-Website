import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Vidushi Singh</h1>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </nav>
    </header>
  );
}
