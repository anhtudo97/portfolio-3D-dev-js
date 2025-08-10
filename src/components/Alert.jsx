import { AnimatePresence, motion as Motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';

const variants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -50, scale: 0.8 }
};

const Alert = ({ type, text }) => {
  return (
    <AnimatePresence>
      <Motion.div
        className='fixed z-50 flex items-center justify-center bottom-5 right-5'
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={variants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div
          className={twMerge(
            'p-2 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md',
            type === 'danger' ? 'bg-red-800' : 'bg-royal'
          )}
        >
          <p
            className={twMerge(
              'flex rounded-full uppercase px-2 py-1 text-xs font-semibold mr-3',
              type === 'danger' ? 'bg-red-500' : 'bg-lavender'
            )}
          >
            {type === 'danger' ? 'Failed' : 'Success'}
          </p>
          <p className='mr-2 text-left'>{text}</p>
        </div>
      </Motion.div>
    </AnimatePresence>
  );
};

export default Alert;
