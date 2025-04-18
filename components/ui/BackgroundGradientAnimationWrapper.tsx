'use client';

import dynamic from "next/dynamic";

// This disables server-side rendering for the component
const BackgroundGradientAnimation = dynamic(
  () => import("./background-gradient-animation"),
  { ssr: false }
);

export default BackgroundGradientAnimation;