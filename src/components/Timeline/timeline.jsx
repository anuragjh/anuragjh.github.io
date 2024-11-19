import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-28 px-8 md:px-10 lg:px-12">
        <h2 className="text-3xl md:text-6xl mb-10 text-black dark:text-white font-extrabold tracking-tight">
          Meet My Journey
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 md:text-xl max-w-3xl">
          Over the years, I've cultivated my skills and experience in various domains. Here’s a glimpse of my journey, showcasing pivotal moments and key achievements.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-28">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-start pt-16 md:pt-40 md:gap-16">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 w-12 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-lg">
                <div className="h-6 w-6 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 md:text-6xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Timeline Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-3xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
                {item.content}
              </p>
            </div>
          </div>
        ))}

        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};