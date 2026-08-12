import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        )}

        {/* Konten section fade-up saat pertama kali masuk viewport */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
