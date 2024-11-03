export const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  closed: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

export const linkVariants = {
  hover: { scale: 1.1 },
};
