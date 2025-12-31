
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { Services } from '../components/sections/Services';
import { Suspense, lazy } from 'react';

// Lazy load heavy graphical sections
const Comparison = lazy(() => import('../components/sections/Comparison').then(module => ({ default: module.Comparison })));
const Integrations = lazy(() => import('../components/sections/Integrations').then(module => ({ default: module.Integrations })));
const Testimonials = lazy(() => import('../components/sections/Testimonials').then(module => ({ default: module.Testimonials })));
const Pricing = lazy(() => import('../components/sections/Pricing').then(module => ({ default: module.Pricing })));

export const Home = () => {
    return (
        <div className="min-h-screen bg-white selection:bg-electric-purple/20 selection:text-electric-purple">
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <Services />

                <Suspense fallback={<div className="h-screen bg-white" />}>
                    <Comparison />
                    <Testimonials />
                    <Pricing />
                    <Integrations />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};
