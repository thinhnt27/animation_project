import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useScroll,
  MotionValue,
  useSpring,
} from "framer-motion";

interface HorizontalScrollGalleryProps {
  images: string[];
}

const HorizontalScrollGallery: React.FC<HorizontalScrollGalleryProps> = ({
  images,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  // Lưu trữ ref vào state để chắc chắn phần tử đã tồn tại trong DOM trước khi useScroll sử dụng nó
  useEffect(() => {
    if (targetRef.current) {
      setContainer(targetRef.current);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: container ? { current: container } : undefined,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Chia ảnh thành 5 hàng
  const rowCount = 5;
  const rows = Array.from({ length: rowCount }, (_, i) =>
    images.filter((_, index) => index % rowCount === i)
  );

  return (
    <div ref={targetRef} className="relative h-[100vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-10 gap-2 md:gap-4">
        {/* Hàng 1 - Sang Trái */}
        <ScrollRow
          images={rows[0]}
          progress={smoothProgress}
          direction="left"
          startOffset="0%"
          endOffset="-50%"
        />

        {/* Hàng 2 - Sang Phải */}
        <ScrollRow
          images={rows[1]}
          progress={smoothProgress}
          direction="right"
          startOffset="-50%"
          endOffset="0%"
        />

        {/* Hàng 3 - Sang Trái */}
        <ScrollRow
          images={rows[2]}
          progress={smoothProgress}
          direction="left"
          startOffset="-10%"
          endOffset="-60%"
        />

        {/* Hàng 4 - Sang Phải */}
        <ScrollRow
          images={rows[3]}
          progress={smoothProgress}
          direction="right"
          startOffset="-60%"
          endOffset="-10%"
        />

        {/* Hàng 5 - Sang Trái */}
        <ScrollRow
          images={rows[4]}
          progress={smoothProgress}
          direction="left"
          startOffset="-20%"
          endOffset="-70%"
        />
      </div>

      {/* Hiệu ứng mờ ở hai đầu trên dưới để tạo cảm giác điện ảnh */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </div>
  );
};

interface ScrollRowProps {
  images: string[];
  progress: MotionValue<number>;
  direction: "left" | "right";
  startOffset: string;
  endOffset: string;
}

const ScrollRow: React.FC<ScrollRowProps> = ({
  images,
  progress,
  startOffset,
  endOffset,
}) => {
  // Để tạo mật độ cực dày, ta lặp lại mảng ảnh ít nhất 3 lần
  const displayImages = [...images, ...images, ...images];

  // Áp dụng animation trượt
  const x = useTransform(progress, [0, 1], [startOffset, endOffset]);

  return (
    <div className="relative w-full h-[12vh] md:h-[15vh] flex-shrink-0">
      <motion.div
        style={{ x }}
        className="flex gap-2 md:gap-4 absolute top-0 left-0 h-full"
      >
        {displayImages.map((src, idx) => (
          <div
            key={`${idx}-${src}`}
            className="relative aspect-[21/9] h-full flex-shrink-0 bg-brand-gray/20 rounded-sm overflow-hidden shadow-2xl group border border-white/5"
          >
            <img
              src={src}
              alt={`Concept Art ${idx}`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/5 transition-colors duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalScrollGallery;
