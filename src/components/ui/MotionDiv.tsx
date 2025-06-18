import { motion, HTMLMotionProps } from 'framer-motion';
import { scrollReveal } from '@/config/animations';

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={scrollReveal}
      {...props}
    >
      {children}
    </motion.div>
  );
}
