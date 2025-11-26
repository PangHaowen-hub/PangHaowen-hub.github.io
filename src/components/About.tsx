import { SectionId } from '../types';
import { PERSONAL_INFO, SKILLS, EXPERIENCE } from '../constants';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Col: Bio & Skills */}
            <div className="space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                    <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
                    <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                        {PERSONAL_INFO.about}
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white">Technical Proficiency</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {SKILLS.map((skill) => (
                            <div key={skill.name} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-primary-400">{skill.icon}</div>
                                    <span className="font-medium text-slate-200">{skill.name}</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Col: Education Timeline */}
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white mb-8">Education</h3>
                <div className="space-y-0 relative border-l border-slate-700 ml-3">
                    {EXPERIENCE.map((job, index) => (
                        <div key={index} className="relative pl-8 pb-12 last:pb-0 group">
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-400 group-hover:bg-primary-500 group-hover:scale-125 transition-all"></div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{job.role}</h4>
                                <span className="text-sm font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">{job.period}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 mb-4 text-slate-300">
                                <GraduationCap size={16} />
                                <span className="font-medium">{job.company}</span>
                            </div>

                            <ul className="space-y-2">
                                {job.description.map((desc, i) => (
                                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                                        <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-600 rounded-full shrink-0"></span>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;
