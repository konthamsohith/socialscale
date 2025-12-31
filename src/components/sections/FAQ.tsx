import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How does the AI automation work?",
        answer: "We analyze your current workflows, identify bottlenecks, and deploy custom AI agents to handle repetitive tasks, enhancing efficiency and reducing error rates."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We use enterprise-grade encryption and adhere to strict data privacy protocols. Your data is processed securely and never shared with third parties without consent."
    },
    {
        question: "Can I customize the AI agents?",
        answer: "Yes! Our Pro and Enterprise plans offer full customization capabilities. You can train agents on your specific knowledge base and brand voice."
    },
    {
        question: "What support do you offer?",
        answer: "We provide 24/7 support for all plans. Enterprise clients also get a dedicated account manager for personalized assistance and strategy."
    },
    {
        question: "Do you offer a free trial?",
        answer: "We offer a 14-day money-back guarantee on all paid plans so you can try our services risk-free."
    }
];

export const FAQ = () => {
    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                    <p className="text-slate-600 text-lg">
                        Everything you need to know about Lander OS.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Accordion key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Accordion = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors bg-slate-50/50"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900"
            >
                {question}
                <span className="shrink-0 text-slate-400">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
