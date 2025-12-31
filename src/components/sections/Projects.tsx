
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

const projects = [
    {
        title: "ElevenLabs Integration",
        category: "Voice AI",
        description: "Implemented rigorous voice synthesis for automated content creation.",
        color: "bg-blue-50"
    },
    {
        title: "MedAssist AI",
        category: "Healthcare",
        description: "Automated patient triage and appointment scheduling system.",
        color: "bg-green-50"
    },
    {
        title: "AutoTag Pro",
        category: "E-commerce",
        description: "Smart product tagging and categorization for large inventories.",
        color: "bg-orange-50"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Selected Works</h2>
                        <p className="text-slate-600 text-lg">
                            See how we've helped other businesses transform their operations with intelligent automation.
                        </p>
                    </div>
                    <Button variant="secondary">View All Projects</Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className={`aspect-[4/3] rounded-2xl mb-6 overflow-hidden border border-slate-200 ${project.color} relative`}>
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-3xl opacity-20 rotate-12 select-none">
                                    {project.category}
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-electric-purple transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="p-2 rounded-full border border-slate-200 text-slate-400 group-hover:bg-electric-purple group-hover:text-white group-hover:border-electric-purple transition-all">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
