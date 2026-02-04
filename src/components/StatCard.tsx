import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: JSX.Element;
  value: string | number;
  label: string;
  description: string;
  delay?: number;
}

const StatCard = ({
  icon,
  value,
  label,
  description,
  delay = 0,
}: StatCardProps): JSX.Element => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  const rawValue =
    typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value;
  const hasPlus = typeof value === 'string' && value.includes('+');

  return (
    <div
      ref={ref}
      className="group text-center p-10 rounded-2xl bg-neutral-900 text-tan border border-bronze shadow-xl hover:shadow-bronze transition-all duration-300"
    >
      <div className="flex justify-center mb-4 text-bronze">
        {React.cloneElement(icon, {
          className:
            'w-10 h-10 group-hover:scale-110 transition-transform duration-300',
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className="text-5xl font-black text-bronze mb-1 font-heading tracking-tight"
      >
        {inView ? <CountUp end={rawValue} duration={2} /> : '0'}
        {hasPlus && '+'}
      </motion.div>

      <div className="uppercase text-sm font-bold tracking-widest mb-1">
        {label}
      </div>

      <div className="text-tan/70 text-sm font-medium">{description}</div>
    </div>
  );
};

export default StatCard;
