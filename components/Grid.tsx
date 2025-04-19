import React from 'react'
import { BentoGrid } from './ui/BentoGrid'
import { gridItems } from '@/data'
import dynamic from 'next/dynamic';
const BentoGridItem = dynamic(() => import('./ui/BentoGridItem'), { ssr: false });

export const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(
                ({id, title, description, className, img, 
                    imgClassName, titleClassName, spareImg }) => (
                    <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName = {imgClassName}
                    titleClassName = {titleClassName}
                    spareImg = {spareImg}
                    />
                )
            )}
        </BentoGrid>
    </section>
  )
}
