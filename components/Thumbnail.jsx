import React from "react";
// import PropTypes from "prop-types";

import Link from "next/link";
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 1 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

const Thumbnail = ({ id, i }) => (
  <>
    <motion.div className="thumbnail" variants={thumbnailVariants}>
      <motion.div
        className="frame"
        whileHover="hover"
        variants={frameVariants}
        transition={transition}
      >
        <Link href="/image/[index]" as={`/image/${i}`} scroll={false}>
          <motion.img
            src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1500`}
            alt="The Barbican"
            variants={imageVariants}
            transition={transition}
          />
        </Link>
      </motion.div>
    </motion.div>
    <style>
      {`
            .thumbnail {
                flex: 1 0 33%;
                margin: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            .frame {
                overflow: hidden;
            }

            .thumbnail img {
                width: 100%;
                height: 100%;
            }
        `}
    </style>
  </>
);

Thumbnail.propTypes = {};
Thumbnail.defaultProps = {};

export default Thumbnail;
