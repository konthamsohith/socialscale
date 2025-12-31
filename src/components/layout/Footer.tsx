
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis';

export const Footer = () => {
    const lenis = useLenis();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

    return (
        <footer className="bg-white text-slate-600 py-20 px-6 border-t border-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Newsletter */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-electric-purple rounded-lg flex items-center justify-center">
                                <img src="/logo1.png" alt="SocialScale Logo" className="w-5 h-5 object-contain brightness-0 invert" />
                            </div>
                            <span className="font-bold text-xl text-slate-900">SocialScale</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-slate-500">
                            Transform your social media presence into a powerful growth engine with our AI-driven strategies.
                        </p>
                        <form className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Stay in the loop</label>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-electric-purple transition-colors w-full"
                                />
                                <button type="button" onClick={(e) => e.preventDefault()} className="bg-electric-purple text-white p-2 rounded-lg hover:bg-electric-purple/90 transition-colors cursor-default">
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Columns */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#features" onClick={(e) => handleLinkClick(e, "#features")} className="hover:text-electric-purple transition-colors">Features</a></li>
                            <li><a href="#pricing" onClick={(e) => handleLinkClick(e, "#pricing")} className="hover:text-electric-purple transition-colors">Pricing</a></li>
                            <li><a href="#case-studies" onClick={(e) => handleLinkClick(e, "#case-studies")} className="hover:text-electric-purple transition-colors">Case Studies</a></li>
                            <li><a href="#reviews" onClick={(e) => handleLinkClick(e, "#reviews")} className="hover:text-electric-purple transition-colors">Reviews</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-electric-purple transition-colors">About Us</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-electric-purple transition-colors">Careers</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-electric-purple transition-colors">Blog</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-electric-purple transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-electric-purple transition-colors">Privacy Policy</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-electric-purple transition-colors">Terms of Service</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-electric-purple transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        © 2025 SocialScale. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-electric-purple transition-colors"><Twitter size={20} /></a>
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-electric-purple transition-colors"><Instagram size={20} /></a>
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-electric-purple transition-colors"><Linkedin size={20} /></a>
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-electric-purple transition-colors"><Facebook size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
