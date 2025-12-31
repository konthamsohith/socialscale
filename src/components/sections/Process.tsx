
import { motion } from 'framer-motion';
import { Lightbulb, Cog, BarChart3 } from 'lucide-react';

const steps = [
    {
        icon: Lightbulb,
        title: "Strategy",
        description: "We analyze your workflows to identify high-impact automation opportunities."
    },
    {
        icon: Cog,
        title: "Implementation",
        description: "Our engineers build and deploy custom AI agents tailored to your needs."
    },
    {
        icon: BarChart3,
        title: "Optimization",
        description: "We continuously monitor and refine performance to ensure maximum efficiency."
    }
];

export const Process = () => {
    return (
        <section className="py-32 px-6 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Process Is Performance</h2>
                    <p className="text-slate-600 text-lg">
                        Our proven three-step framework ensures consistent results and seamless integration of AI into your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <step.icon size={100} />
                            </div>

                            <div className="w-12 h-12 bg-electric-purple/10 rounded-xl flex items-center justify-center text-electric-purple mb-6">
                                <step.icon size={24} />
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-4xl font-bold text-slate-100">0{index + 1}</span>
                                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
