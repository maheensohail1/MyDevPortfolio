'use client'

import { cn } from "@/lib/utils";


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-7 gap-14 sm:gap-8 md:gap-8 lg:gap-8 mx-auto ",
                className,
            )}
        >
            {children}
        </div>
    );
};
export default BentoGrid;