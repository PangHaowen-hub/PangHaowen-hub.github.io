import { Trophy } from 'lucide-react';
import { AWARDS } from '../constants';

const Awards = () => {
    return (
        <section className="py-24 bg-slate-900/50 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400">
                            <Trophy size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Honors & Awards</h2>
                    </div>

                    <div className="grid gap-6">
                        {AWARDS.map((award, index) => (
                            <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-colors group">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                                    <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{award.title}</h4>
                                    <span className="text-sm font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded self-start">{award.date}</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {award.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
