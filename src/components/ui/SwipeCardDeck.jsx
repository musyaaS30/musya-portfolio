import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCard = ({ item, renderItem, isTop, index, total, x, threshold, onSwipe }) => {
  const depthFromFront = total - 1 - index;
  const scale = 1 - depthFromFront * 0.06;
  const xOffset = depthFromFront * 14;
  const zIdx = index + 10;

  const cardX = useTransform(x, (v) =>
    isTop ? v : v * 0.25 * ((index + 1) / total) + xOffset
  );

  const topRotate = useTransform(x, [-200, 0, 200], [-8, 0, 8]);
  const staticRotate = index === 0 ? 4 : index === 1 ? 0 : -4;
  const cardRotate = isTop ? topRotate : staticRotate;

  const handleDragEnd = (_, info) => {
    if (!isTop) return;
    if (Math.abs(info.offset.x) > threshold) {
      onSwipe();
    }
    x.set(0);
  };

  return (
    <motion.div
      style={{
        gridArea: "stack",
        x: cardX,
        scale,
        rotate: cardRotate,
        zIndex: zIdx,
        width: "100%",
        maxWidth: "300px",
        cursor: isTop ? "grab" : "default",
        touchAction: isTop ? "none" : "auto",
      }}
      layout
      drag={isTop ? "x" : false}
      dragElastic={0.65}
      dragSnapToOrigin
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: "grabbing" }}
      initial={false}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
    >
      {renderItem(item)}
    </motion.div>
  );
};

const SwipeCardDeck = ({ items, renderItem, threshold = 100 }) => {
  const [stack, setStack] = useState(() =>
    items.map((item, i) => ({ ...item, _id: i }))
  );
  const x = useMotionValue(0);

  if (stack.length < 2) {
    return (
      <div className="flex justify-center">
        {stack.map((item) => (
          <div key={item._id} className="w-full max-w-[300px]">
            {renderItem(item)}
          </div>
        ))}
      </div>
    );
  }

  const handleSwipe = () => {
    setStack((prev) => {
      const top = prev[prev.length - 1];
      return [top, ...prev.slice(0, -1)];
    });
  };

  const visibleCards = stack.slice(-3);

  return (
    <div className="relative w-full flex justify-center py-4" style={{ height: "410px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateAreas: '"stack"',
          position: "relative",
          width: "300px",
          height: "100%",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {visibleCards.map((item, i) => (
          <SwipeCard
            key={item._id}
            item={item}
            renderItem={renderItem}
            isTop={i === visibleCards.length - 1}
            index={i}
            total={visibleCards.length}
            x={x}
            threshold={threshold}
            onSwipe={handleSwipe}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1.5">
        {stack.map((item, i) => (
          <span
            key={item._id}
            className={`block w-1.5 h-1.5 rounded-full transition-colors ${
              i === stack.length - 1
                ? "bg-accent dark:bg-white"
                : "bg-neutral-300 dark:bg-neutral-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeCardDeck;
