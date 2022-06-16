import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useDebouncedCallback } from "use-debounce";

import { motion } from "framer-motion";

const Gallery = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const idPrefix = "screen2-";
  const imagePrefix = "/composites/screen2/";
  const numberOfImages = 5;

  const images = useMemo(
    () =>
      [...Array(numberOfImages)].map(
        (_, index) => `${imagePrefix + index}.png`
      ),
    []
  );

  const debouncedHandleMouseMove = useDebouncedCallback((event) => {
    if (!animationFinished) return;

    // todo, move outside event handler
    const $doms = images.map((_, index) =>
      document.getElementById(idPrefix + index)
    );
    const centerX = window.innerWidth / 2.5;
    const centerY = window.innerHeight / 3;

    const { x, y } = event;

    $doms.forEach(($element, index) => {
      const zDepthRatio = index / (numberOfImages * 2);
      const zDepthScale = 2;
      const ratio = zDepthRatio / zDepthScale;
      const moveHoriz = ((x - centerX) / 2) * ratio;
      const moveVert = (((y - centerY) / 2) * ratio) / 2;

      if ($element) {
        // eslint-disable-next-line no-param-reassign
        $element.style = `transform: scale(1.1, 1.1) translate(${moveHoriz}px, ${moveVert}px);`;
      }
    });
  });

  useEffect(() => {
    document.addEventListener("mousemove", debouncedHandleMouseMove);

    return () => {
      document.removeEventListener("mousemove", debouncedHandleMouseMove);
    };
  }, [debouncedHandleMouseMove]);

  const animSplashContainer = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    exit: {
      duration: 2,
      opacity: 0,
      transition: {
        duration: 2,
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const animSplashItem = {
    start: { scale: 0.75 },
    end: {
      scale: 1.1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      scale: 2,
      transition: {
        duration: 2,
      },
    },
  };

  const handleAnimationComplete = () => setAnimationFinished(true);

  return (
    <>
      <h1
        sx={{
          fontSize: 130,
          textAlign: "center",
          letterSpacing: "-5px",
          position: "fixed",
          top: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        The RIFT
      </h1>

      <div className="gallery">
        <motion.div
          initial="start"
          animate="end"
          onAnimationComplete={handleAnimationComplete}
          exit="exit"
          variants={animSplashContainer}
        >
          {images.map((image, index) => (
            <motion.div
              key={image}
              id={`${idPrefix}${index}`}
              variants={animSplashItem}
              sx={{
                variant: "layout.splash",
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </motion.div>

        <Link href="/image/[index]" as="/image/1" scroll={false}>
          <button
            type="button"
            style={{ position: "absolute", right: 50, bottom: 50 }}
            sx={{
              appearance: "none",
              display: "inline-block",
              textAlign: "center",
              lineHeight: "inherit",
              textDecoration: "none",
              fontSize: "inherit",
              fontWeight: "bold",
              m: 0,
              px: 4,
              py: 2,
              border: 0,
              borderRadius: 4,
              variant: "buttons.primary",
            }}
          >
            next
          </button>
        </Link>
      </div>
    </>
  );
};

export default Gallery;
