
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

// Kept structure, updated copy slightly to match context
const plans = [
    {
        name: "Growth",
        price: "29",
        description: "For creators scaling up.",
        features: [
            "2,500 Credits / month",
            "Unlock 7 Social Medias",
            "Up to 20k credits scale",
            "5 Credits = 1 Follower (Insta)",
            "1 Credit = 5 Likes (Insta)",
            "20 Credits = 1 Follower (LinkedIn)",
            "10 Credits = 1 Like (LinkedIn)"
        ],
        highlight: false,
        buttonText: "Get Started"
    },
    {
        name: "Business",
        price: "79",
        description: "Power for brands & agencies.",
        features: [
            "10,000 Credits / month",
            "Unlock 7 Social Medias",
            "Dedicated Account Manager",
            "24/7 VIP Support",
            "5 Credits = 1 Follower (Insta)",
            "1 Credit = 5 Likes (Insta)",
            "20 Credits = 1 Follower (LinkedIn)",
            "10 Credits = 1 Like (LinkedIn)"
        ],
        highlight: true,
        buttonText: "Get Started"
    }
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-32 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-6 block">PRICING</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Flexible Pricing Plans</h2>
                    <p className="text-slate-600 text-lg">
                        Ready to scale your socials? Choose the perfect plan for you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ willChange: 'opacity, transform' }}
                            className={`
                relative p-8 rounded-3xl border flex flex-col
                ${plan.highlight
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10'
                                    : 'bg-white text-slate-900 border-slate-200 hover:shadow-xl transition-shadow'}
              `}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-electric-purple to-blue-500 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                                    Best Value
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8 items-baseline flex gap-1">
                                <span className="text-4xl font-bold">${plan.price}</span>
                                <span className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
                            </div>

                            <div className="flex-grow mb-8 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm">
                                        <Check size={18} className={plan.highlight ? 'text-electric-purple' : 'text-slate-900'} />
                                        <span className={plan.highlight ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={`w-full ${plan.highlight ? 'bg-white text-slate-900 hover:bg-slate-100' : ''}`}
                                variant={plan.highlight ? 'secondary' : 'primary'}
                            >
                                {plan.buttonText}
                            </Button>
                        </motion.div>
                    ))}

                    {/* Manual Column 3: Stacked Cards */}
                    <div className="flex flex-col gap-6 h-full">
                        {/* Enterprise Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow flex flex-col gap-6"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                                <p className="text-sm text-slate-500">Tailored for your team.</p>
                            </div>

                            <Button variant="secondary" className="w-full justify-between group bg-white border border-slate-200 hover:bg-slate-50 text-slate-900">
                                Get a Quote
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <div className="space-y-4">
                                {[
                                    "Custom design system setup",
                                    "Integration with your stack",
                                    "Priority onboarding & support"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm">
                                        <div className="w-5 h-5 bg-[#0037FF] rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check size={12} className="text-white" />
                                        </div>
                                        <span className="text-slate-600">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Still deciding? Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow flex flex-col justify-between flex-grow"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Still deciding?</h3>
                                <p className="text-sm text-slate-500">Explore features or reach out.</p>
                            </div>

                            <Button variant="secondary" className="w-full justify-between group bg-white border border-slate-200 hover:bg-slate-50 text-slate-900">
                                Let's talk
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
