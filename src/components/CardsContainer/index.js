import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import { motion } from "framer-motion";
import Card from "./Card";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function CardsContainer() {
  return (
    <motion.ul variants={container} initial="hidden" animate="visible">
      <SimpleGrid minChildWidth="220px" spacing="40px">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <motion.li key={index} variants={item} style={{ listStyle: "none" }}>
            <Card />
          </motion.li>
        ))}
      </SimpleGrid>
    </motion.ul>
  );
}

export default CardsContainer;
