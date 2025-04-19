"use client"

import React from 'react'
import { CanvasRevealEffect } from './ui/CanvasRevealEffect'
import { AnimatePresence, motion } from 'motion/react';

const Approach = () => {
    return (
        <section className='w-full py-20 ' id='approach'>
            <h1 className='text-center text-white text-[40px] md:text-5xl lg:text-5xl'>

                My {' '}
                <span className='text-purple'> Approach</span>
            </h1>
            <div className='my-20 flex flex-col lg:flex-row items-center justify-center gap-4'>
                <Card
                    title="Understand & Plan"
                    subtitle="Measure Twice, Cut Once"
                    icon={<AceternityIcon order="Phase 1" />}
                    description="Whether it’s a feature, bug fix, or refactor, I try to understand the why behind the task. I confirm the edge cases, user needs and the business impact. I split the work into smaller parts and then choose the right tools, libraries, or patterns to solve the problem cleanly"
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900" />

                </Card>
                <Card
                    title="Build & Iterate"
                    subtitle="Build smart. Build small. Test often."
                    icon={<AceternityIcon order="Phase 2" />}
                    description="While building, I keep things clean and simple. I make sure the UI works smoothly across devices, performance stays solid, and the code’s easy to follow. I test as I go to catch bugs early and save time later.">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-purple-900"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-purple/50 dark:bg-purple/90" />
                </Card>
                <Card
                    title="Polish & Deliver"
                    subtitle="Code with Purpose. Ship with Care."
                    icon={<AceternityIcon order="Phase 3" />}
                    description="This is where the fun details come in—nice transitions, good loading states, and all the small touches that make it feel complete. I double-check everything, get quick feedback, and ship with confidence.
">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>
    )
}

const Card = ({
    title,
    subtitle,
    icon,
    children,
    description
}: {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description?: string
}) => {
    const [hovered, setHovered] = React.useState(false);
    const [canHover, setCanHover] = React.useState(true);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            setCanHover(window.matchMedia('(hover: hover)').matches);
        }
    }, []);

    return (
        <div
            onMouseEnter={() => canHover && setHovered(true)}
            onMouseLeave={() => canHover && setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 border border-white-100 rounded-3xl p-5 lg:border-0 lg:rounded-0 lg:p-0">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white text-center text-3xl opacity-100 lg:opacity-0 lg:group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4  font-bold group-hover/canvas-card:text-white translate-y-0 lg:group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
                <h2 className="dark:text-white text-center text-md opacity-100 lg:opacity-0 lg:group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4  font-bold group-hover/canvas-card:text-white translate-y-0 lg:group-hover/canvas-card:-translate-y-2 transition duration-200">
                    <i> {subtitle}</i>
                </h2>
                <h2 className="text-sm text-center dark:text-white opacity-100 lg:opacity-0 lg:group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4  font-bold group-hover/canvas-card:text-white translate-y-0 lg:group-hover/canvas-card:-translate-y-2 transition duration-200" style={{ 'color': '#e4ecff' }}>
                    {description}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    {order}
                </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export default Approach