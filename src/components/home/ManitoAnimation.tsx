import { motion, useScroll, useTransform } from 'framer-motion';

export function ManitoAnimation() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0, 1, 1, 0]
  );

  return (
    <div className="relative h-[100vh] overflow-hidden bg-[rgba(255,255,255,0.1)]">
      <motion.img
        src="/manitou.png"
        alt="Manitou MRT"
        style={{ x, opacity }}
        className="absolute top-1/2 -translate-y-1/2 max-h-[400px] w-auto 
                   my-10 drop-shadow-lg object-contain
                   sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%]"
      />
    </div>
  );
}