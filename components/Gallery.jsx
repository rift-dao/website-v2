import * as React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import Thumbnail from "./Thumbnail";

import { images } from "../constants";

const Gallery = () => (
  <>
    <h1>The RIFT</h1>
    <div className="gallery">
      <motion.div
        className="thumbnails"
        initial="initial"
        animate={{ scale: [0, 2, 0.8, 1], opacity: [0, 1] }}
        exit="exit"
        variants={{
          exit: {
            transition: { staggerChildren: 0.1 },
            opacity: [1, 0.5, 0.8, 0],
            rotate: [0, 360, 180],
          },
        }}
      >
        <div id="splash" />
      </motion.div>

      <motion.div className="frame" whileHover="hover">
        <Link href="/image/[index]" as="/image/1" scroll={false}>
          <button
            type="button"
            style={{ position: "absolute", right: 50, bottom: 50 }}
          >
            next
          </button>
        </Link>
      </motion.div>
    </div>

    <style>
      {`
        body {
          background: black;
        }

        h1 {
            font-size: 130px;
            text-align: center;
            position: fixed;
            top: 50px;
            letter-spacing: -5px;
            z-index: 1;
            color: #f9fbf8;
            left: 50%;
            transform: translateX(-50%);
            pointer-events: none;
        }

        button {
          cursor: pointer;
          border: 0;
          border-radius: 2px;
          padding: 6px 20px;
          min-width: 140px;
          font-size: 16px;
          font-weight: 400;
        }
          
        button:hover {
          background: black;
          color: white;
        }

        .gallery {
            height: 100vh;
        }

        .thumbnails {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            height: 100%;
        }

        #splash {
          background: url(unknown.png) center center no-repeat;
          background-size: cover;
          height: 100%;
          width: 100%;
        }
        `}
    </style>
  </>
);

export default Gallery;
