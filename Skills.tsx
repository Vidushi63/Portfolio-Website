import React from 'react';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 95 },
  { name: 'JavaScript', level: 80 },
  { name: 'Java', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'PHP', level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
