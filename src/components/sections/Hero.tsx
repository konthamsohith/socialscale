import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Facebook, Linkedin, Instagram, TrendingUp, Globe, ThumbsUp, MoreHorizontal, MessageSquare, Repeat, Send } from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis';

export const Hero = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    const lenis = useLenis();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
        e.preventDefault();
        if (href === "#") {
            lenis?.scrollTo(0);
        } else if (href.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) {
                lenis?.scrollTo(element as HTMLElement);
            }
        }
    };

    useEffect(() => {
        const controls = animate(count, 128, { duration: 2, ease: "easeOut", delay: 0.1 });
        return controls.stop;
    }, []);

    return (
        <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden bg-slate-50/50">

            {/* Background Gradients (Original) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-electric-purple/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content (Original) */}
                <div className="max-w-xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                        className="font-sans font-semibold text-[64px] leading-[64px] text-[#0a0b10] mb-6 tracking-normal"
                    >
                        Power <span className="inline-flex items-center justify-center w-14 h-14 bg-electric-purple rounded-xl text-white mx-1 align-middle shadow-lg shadow-electric-purple/30 rotate-3"><TrendingUp size={32} /></span> up <br />
                        your socials.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed"
                    >
                        Scale your presence on LinkedIn, Instagram, and TikTok with real followers and engagement. All in one powerful platform.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-6 mb-12"
                    >
                        <Button size="lg" className="px-8 shadow-xl shadow-electric-purple/20" onClick={(e) => handleLinkClick(e, "#pricing")}>
                            Get Started <ArrowRight size={18} />
                        </Button>
                        <a href="#start-growing" onClick={(e) => handleLinkClick(e, "#start-growing")} className="text-slate-600 font-medium hover:text-electric-purple flex items-center gap-2 transition-colors">
                            Talk to sales <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    {/* Logos */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-8 opacity-60"
                    >
                        <Facebook size={24} className="text-slate-400" />
                        <Linkedin size={24} className="text-slate-400" />
                        <Instagram size={24} className="text-slate-400" />
                        <div className="h-8 w-px bg-slate-200" />
                        <span className="text-sm font-semibold text-slate-400">Trusted by 850+ brands</span>
                    </motion.div>
                </div>

                {/* Right Visuals - Ecosystem Graphic */}
                <div className="relative h-[700px] w-full hidden lg:block perspective-1000">

                    {/* SVG Connector Lines - Orthogonal Paths matching reference */}
                    {/* SVG Connector Lines - Orthogonal Paths matching reference */}
                    <motion.svg
                        className="absolute inset-0 w-full h-full z-0 pointer-events-none stroke-blue-500"
                        style={{ overflow: 'visible', willChange: 'opacity, filter' }}
                        viewBox="0 0 640 640"
                        preserveAspectRatio="none"
                        initial={{ opacity: 0, filter: "blur(5px)" }}
                        animate={{ opacity: 0.6, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <defs>
                            <mask id="line-mask">
                                {[
                                    "M 320 320 L 320 120 L 120 120", // Top Left
                                    "M 320 320 L 520 320 L 520 120", // Top Right
                                    "M 320 320 L 320 520 L 520 520", // Bottom Right
                                    "M 320 320 L 120 320 L 120 480"  // Bottom Left
                                ].map((d, i) => (
                                    <motion.path
                                        key={i}
                                        d={d}
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="5"
                                    />
                                ))}
                            </mask>
                        </defs>

                        <g mask="url(#line-mask)">
                            {[
                                "M 320 320 L 320 120 L 120 120",
                                "M 320 320 L 520 320 L 520 120",
                                "M 320 320 L 320 520 L 520 520",
                                "M 320 320 L 120 320 L 120 480"
                            ].map((d, i) => (
                                <motion.path
                                    key={i}
                                    d={d}
                                    fill="none"
                                    strokeWidth="2"
                                    strokeDasharray="10 10"
                                    initial={{ strokeDashoffset: 0 }}
                                    animate={{ strokeDashoffset: [0, -20] }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                />
                            ))}
                        </g>
                    </motion.svg>

                    {/* Central Hub Node */}
                    <motion.div
                        initial={{ scale: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, x: "-50%", y: "-50%" }}
                        transition={{ duration: 0.4, delay: 0 }}
                        className="absolute top-1/2 left-1/2 z-20"
                    >
                        <div className="w-24 h-24 bg-[#0055FF] rounded-2xl shadow-xl shadow-blue-500/30 flex items-center justify-center relative">
                            <img src="/logo1.png" alt="Social Scale" className="w-[65%] h-[65%] object-contain drop-shadow-sm" />
                            {/* Pulse effect overlay */}
                            <div className="absolute inset-0 bg-blue-500 rounded-2xl animate-ping opacity-20" />
                        </div>
                    </motion.div>

                    {/* Top Left: Facebook Ad Card */}
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(5px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ willChange: 'opacity, filter' }}
                        className="absolute top-[12%] left-[0%] z-10"
                    >
                        <div className="relative">
                            {/* Floating LinkedIn Logo */}
                            <div className="absolute -top-6 -right-6 w-14 h-14 bg-[#0A66C2] rounded-xl flex items-center justify-center shadow-lg z-20">
                                <Linkedin className="text-white fill-white" size={28} />
                            </div>

                            {/* Ad Card - LinkedIn Page Post */}
                            <div className="w-[250px] bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 font-sans">
                                {/* Header */}
                                <div className="p-1.5 flex gap-2 items-start">
                                    <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                                        <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-semibold text-slate-900 text-[10px] leading-tight truncate">Sarah Jenkins</h3>
                                                <p className="text-[8px] text-slate-500 truncate">Growth Marketer | 15k followers</p>
                                                <div className="flex items-center gap-1 text-[8px] text-slate-500 mt-0.5">
                                                    <span>2d • Edited • </span> <Globe size={8} />
                                                </div>
                                            </div>
                                            <button className="text-slate-400 hover:text-slate-600">
                                                <MoreHorizontal size={12} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Post Content */}
                                <div className="px-2 pb-1">
                                    <p className="text-[9px] text-slate-700 leading-relaxed mb-1">
                                        Unlock your true potential on social media with real engagement and authentic growth. 🚀 <span className="text-blue-600 font-semibold">#SocialScale</span> <span className="text-blue-600 font-semibold">#GrowthHack</span>
                                    </p>
                                </div>

                                {/* Media Attachment */}
                                <div className="bg-slate-100 h-16 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100" />
                                    <div className="relative z-10 flex flex-col items-center gap-0.5">
                                        <div className="w-6 h-6 bg-white rounded-md shadow-sm flex items-center justify-center">
                                            <TrendingUp className="text-[#0A66C2]" size={14} />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-[9px] font-bold text-slate-700">Growth Protocol</div>
                                            <div className="text-[7px] text-slate-500">2.4x Engagement Rate</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 px-2 py-1 border-b border-slate-100">
                                    <div className="text-[8px] font-medium text-slate-900">The Ultimate Growth Guide 2024</div>
                                    <div className="text-[7px] text-slate-500">socialscale.ai • 5 min read</div>
                                </div>

                                {/* Stats */}
                                <div className="px-2 py-1 flex items-center justify-between border-b border-slate-100">
                                    <div className="flex items-center gap-1">
                                        <div className="flex -space-x-1">
                                            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-white z-20">
                                                <ThumbsUp size={6} className="text-white fill-white" />
                                            </div>
                                            <div className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center ring-2 ring-white z-10">
                                                <svg viewBox="0 0 24 24" className="w-1.5 h-1.5 fill-white text-white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                            </div>
                                            <div className="w-3 h-3 rounded-full bg-orange-400 flex items-center justify-center ring-2 ring-white z-0">
                                                <svg viewBox="0 0 24 24" className="w-1.5 h-1.5 fill-white text-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z" /></svg>
                                            </div>
                                        </div>
                                        <span className="text-[8px] text-slate-500 hover:text-blue-600 cursor-pointer ml-1">325</span>
                                    </div>
                                    <div className="text-[8px] text-slate-500 hover:text-blue-600 cursor-pointer">
                                        103 comments • 34 reposts
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="px-1 py-0.5 flex justify-between items-center">
                                    <button className="flex items-center gap-1 px-1.5 py-1 hover:bg-slate-50 rounded-md transition-colors group">
                                        <ThumbsUp size={12} className="text-slate-500 group-hover:text-blue-600" />
                                        <span className="text-[9px] font-semibold text-slate-500 group-hover:text-slate-700">Like</span>
                                    </button>
                                    <button className="flex items-center gap-1 px-1.5 py-1 hover:bg-slate-50 rounded-md transition-colors group">
                                        <MessageSquare size={12} className="text-slate-500 group-hover:text-blue-600" />
                                        <span className="text-[9px] font-semibold text-slate-500 group-hover:text-slate-700">Comment</span>
                                    </button>
                                    <button className="flex items-center gap-1 px-1.5 py-1 hover:bg-slate-50 rounded-md transition-colors group">
                                        <Repeat size={12} className="text-slate-500 group-hover:text-blue-600" />
                                        <span className="text-[9px] font-semibold text-slate-500 group-hover:text-slate-700">Repost</span>
                                    </button>
                                    <button className="flex items-center gap-1 px-1.5 py-1 hover:bg-slate-50 rounded-md transition-colors group">
                                        <Send size={12} className="text-slate-500 group-hover:text-blue-600" />
                                        <span className="text-[9px] font-semibold text-slate-500 group-hover:text-slate-700">Send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Top Right: TikTok Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(5px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ willChange: 'opacity, filter' }}
                        className="absolute top-[8%] right-[5%] z-10"
                    >
                        <div className="w-[280px] bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 relative">
                            {/* Floating Instagram Logo */}
                            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg z-20">
                                <Instagram size={20} className="text-white" />
                            </div>

                            <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-2">
                                <span className="font-semibold text-slate-700 text-sm">Instagram Growth</span>
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-3">
                                {/* Row 1 */}
                                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-xl">
                                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-slate-500 mb-1">Viral Boost Active</div>
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "75%" }}
                                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                                                className="h-full bg-green-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Row 2 */}
                                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-xl">
                                    <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
                                        <Instagram size={14} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-slate-500 mb-1">New Followers</div>
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "50%" }}
                                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                                                className="h-full bg-black"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Right: Analytics Graph */}
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(5px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ willChange: 'opacity, filter' }}
                        className="absolute bottom-[8%] right-[-5%] z-10"
                    >
                        <div className="relative">
                            {/* Floating Google Logo */}


                            <div className="w-[320px] bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-5 border border-slate-100">
                                <div className="mb-4">
                                    <div className="text-xl font-bold text-slate-800">Growth Analytics</div>
                                    <div className="text-green-500 font-bold text-3xl mt-1 flex items-center">
                                        +<motion.span>{rounded}</motion.span>%
                                    </div>
                                </div>
                                {/* Simple Smooth Line Graph SVG */}
                                <div className="h-24 w-full relative">
                                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                                        <motion.path
                                            d="M0 40 L10 35 L20 38 L30 30 L40 32 L50 20 L60 25 L70 10 L80 15 L90 5 L100 0"
                                            fill="none"
                                            stroke="#0055FF"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
                                        />
                                        <motion.path
                                            d="M0 40 L10 35 L20 38 L30 30 L40 32 L50 20 L60 25 L70 10 L80 15 L90 5 L100 0 V 40 H 0 Z"
                                            fill="url(#gradient)"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.1 }}
                                            transition={{ duration: 1, delay: 1 }}
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#0055FF" />
                                                <stop offset="100%" stopColor="#ffffff" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    {/* Data Points */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 1.5, type: "spring" }}
                                        className="absolute top-[0%] right-[0%] w-3 h-3 bg-[#0055FF] rounded-full border-2 border-white shadow-sm"
                                    />
                                </div>
                                <div className="flex justify-between mt-3 text-xs text-slate-400 font-medium">
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span>Sun</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Left: Snapchat Floating Node */}
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(5px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{ willChange: 'opacity, filter' }}
                        className="absolute bottom-[20%] left-[10%] z-10"
                    >
                        <div className="w-16 h-16 bg-[#000000] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                            </svg>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};
