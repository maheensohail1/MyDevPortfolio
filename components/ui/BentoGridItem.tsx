'use client'

import { cn } from "@/lib/utils";
import BackgroundGradientAnimation from "@/components/ui/BackgroundGradientAnimationWrapper";
import { Globe } from "./globe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData  from "@/data/confetti.json";
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        if (typeof window !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText('sohailmaheen6@gmail.com');
            setCopied(true);
        }
    }
    return (
        <div
            className={cn(
                "group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl dark:shadow-none border-4 sm:border-1 md:border-1 lg:border-1 border-white/[0.1]",

                className,
            )}
            style={{
                background: 'rgb(2,0,36)',
                backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)',
                height: '100%'
            }}
        >

            <div className={cn("relative w-full h-full flex justify-center items-center")}>
                {/* image and spare image */}
                <div className="w-full h-full absolute z-0">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'w-full h-full object-cover object-center rounded-2xl')}
                        />
                    )}
                </div>
                {spareImg && (
                    <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                        <img
                        src={spareImg}
                        alt={spareImg}
                        className={'w-full h-full object-cover object-center rounded-2xl'}
                    />
                   
                </div>
                 )}
                <div >
                    {id === 6 && (
                        <BackgroundGradientAnimation>
                        </BackgroundGradientAnimation>
                    )}
                </div>
               

                {/* title of card and description */}
                <div className={`z-10 relative p-1 ${id === 1 && 'mt-[15rem] mr-[6rem]'} ${id ===3 && 'mr-[13rem]'} ${id ===6 && 'p-2'}`}
                >
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                    {title}
                    </div>
                </div>

                {id === 3 && (
                    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-2 lg:-right-2">

                        {/* 2 columns of my skills */}
                        {/* column 1 */}
                        <div className="flex flex-col gap-0 md:gap-6 lg:gap-8 mt-3">
                            {['TypeScript', 'Angular', 'JavaScript'].map(
                                (item) => (
                                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-sm lg:test-base opacity-50 
                                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                )
                            )}
                        </div>
                        {/* column 2 */}
                        <div className="flex flex-col gap-0 md:gap-6 lg:gap-8 mt-3">
                            {['React.js', 'Next.js', 'Node.js'].map(
                                (item) => (
                                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-sm lg:test-base opacity-50 
                                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                )}

                {id === 6 && (
                    <div className="mt-5 relative p-2">
                        <div className={`absolute -bottom-5 right-0 h-auto`}>
                            <Lottie options={{
                                loop: copied,
                                autoplay: copied,
                                animationData,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                }
                            }} />
                        </div>
                        <MagicButton
                            title={copied? 'Email Copied': 'Copy my Email'}
                            icon= {<IoCopyOutline />}
                            position="left"
                            otherClasses="!bg-[#161a31"
                            handleClick={handleCopy}
                        />
                    </div>
                    
                )}

            </div>
            
        </div>
    );
};

export default BentoGridItem;