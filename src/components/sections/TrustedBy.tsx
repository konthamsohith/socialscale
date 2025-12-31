
import { motion } from 'framer-motion';

const brands = [
    "Asterisk", "Oasis", "Eooks", "Opal", "Dune",
    "Helix", "Fathom", "Plural", "Volume", "Light"
];

export const TrustedBy = () => {
    return (
        <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Trusted by big brands</p>
            </div>

            <div className="flex relative items-center">
                <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex gap-16 min-w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {[...brands, ...brands, ...brands].map((brand, i) => (
                        <div key={i} className="text-2xl font-bold text-slate-300 hover:text-slate-900 transition-colors cursor-default">
                            {brand}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
