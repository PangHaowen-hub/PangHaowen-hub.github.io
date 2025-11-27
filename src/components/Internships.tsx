import { Briefcase } from 'lucide-react';
import { INTERNSHIPS } from '../constants';

const Internships = () => {
    return (
        <section className="py-24 bg-slate-900 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400">
                            <Briefcase size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Internship Experience</h2>
                    </div>

                    <div className="space-y-0 relative border-l border-slate-700 ml-3">
                        {INTERNSHIPS.map((internship, index) => (
                            <div key={index} className="relative pl-8 pb-12 last:pb-0 group">
                                {/* Dot */}
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-400 group-hover:bg-primary-500 group-hover:scale-125 transition-all"></div>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{internship.role}</h4>
                                    <span className="text-sm font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">{internship.period}</span>
                                </div>

                                <div className="flex items-center gap-2 mb-4 text-slate-300">
                                    <Briefcase size={16} />
                                    <span className="font-medium">{internship.company}</span>
                                </div>

                                <ul className="space-y-2">
                                    {internship.description.map((desc, i) => (
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
        </section>
    );
};

export default Internships;
