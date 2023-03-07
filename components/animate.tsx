import { motion } from "framer-motion";

const transition = {
  duration: 2, // Set duration to 3 seconds
};

const Animate = ({ children }: any) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
    <div className="animate">{children}</div>
  </motion.div>
);

export default Animate;
