import React, { useState, useEffect, useRef } from 'react';

const HeroSlider = () => {
  const imageCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // بدء التبديل
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCounts.length);
    }, 4000); // كل ثانيتين (عدلها للسرعة التي تراها مناسبة)

    // عند إزالة المكون (أو عند إغلاق التبويب) أوقف الـ Interval فوراً
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [imageCounts.length]);

  return (
    <div className="hero-bg-slider">
      <div className="slide-track">
        {imageCounts.map((i, index) => (
          <div
            key={i}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={`/images/hero/scholarship${i}.jpg`}
              alt={`منحة ${i}`}
              // الـ onError الخاص بك كما هو
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                // ملاحظة: بما أن العرض والارتفاع صار 100%، يجب وضع الخلفية للـ div الأب
                const parent = e.currentTarget.parentElement;

                parent?.style.setProperty(
                  'background',
                  `hsl(${i * 60 + 30}, 70%, 50%)`
                );

                parent?.style.setProperty('display', 'flex');
                parent?.style.setProperty('align-items', 'center');
                parent?.style.setProperty('justify-content', 'center');
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;