"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    id: "review-1",
    source: "واتساب",
    image: "/images/reviews/rev1.jpeg",
    alt: "لقطة شاشة لتقييم طالب عبر واتساب بعد إخفاء بياناته الشخصية",
    caption: "رسالة شكر من أحد الطلاب بعد انتهاء إجراءات التقديم",
  },
  {
    id: "review-2",
    source: "واتساب",
    image: "/images/reviews/rev2.jpeg",
    alt: "لقطة شاشة لتقييم طالب عبر واتساب بعد إخفاء بياناته الشخصية",
    caption: "رسالة شكر من أحد الطلاب بعد انتهاء إجراءات التقديم",
  },
  {
    id: "review-3",
    source: "واتساب",
    image: "/images/reviews/rev3.jpeg",
    alt: "لقطة شاشة لتقييم طالب عبر واتساب بعد إخفاء بياناته الشخصية",
    caption: "رسالة شكر من أحد الطلاب بعد انتهاء إجراءات التقديم",
  },
  {
    id: "review-4",
    source: "واتساب",
    image: "/images/reviews/rev4.jpeg",
    alt: "لقطة شاشة لتقييم طالب عبر واتساب بعد إخفاء بياناته الشخصية",
    caption: "رسالة شكر من أحد الطلاب بعد انتهاء إجراءات التقديم",
  },
  {
    id: "review-5",
    source: "واتساب",
    image: "/images/reviews/rev5.jpeg",
    alt: "لقطة شاشة لتقييم طالب عبر واتساب بعد إخفاء بياناته الشخصية",
    caption: "رسالة شكر من أحد الطلاب بعد انتهاء إجراءات التقديم",
  },
  {
    id: "review-6",
    source: "واتساب",
    image: "/images/reviews/rev6.jpeg",
    alt: "لقطة شاشة لتقييم طالب عبر واتساب بعد إخفاء بياناته الشخصية",
    caption: "رسالة شكر من أحد الطلاب بعد انتهاء إجراءات التقديم",
  },
  {
    id: "review-7",
    source: "واتساب",
    image: "/images/reviews/rev7.jpeg",
    alt: "لقطة شاشة لتقييم طالب عبر واتساب بعد إخفاء بياناته الشخصية",
    caption: "رسالة شكر من أحد الطلاب بعد انتهاء إجراءات التقديم",
  },
];

export default function ReviewsSection() {
  const sliderRef = useRef(null);
  const [selectedReview, setSelectedReview] = useState(null);

  function scrollSlider(direction) {
    const slider = sliderRef.current;
    const firstCard = slider?.querySelector(".review-card");

    if (!slider || !firstCard) return;

    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.columnGap) || 0;
    const distance = firstCard.getBoundingClientRect().width + gap;

    slider.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (!selectedReview) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedReview(null);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedReview]);

  return (
    <section className="content-section reviews-section" id="reviews" dir="rtl">
      <header className="section-header">
        <span className="section-eyebrow">آراء عملائنا</span>
        <h2>تجارب حقيقية من طلابنا</h2>
        <p>استخدم الأسهم أو اسحب لمشاهدة التقييمات، واضغط على صورة لتكبيرها.</p>
      </header>

      <div className="reviews-slider-controls">
        <button
          type="button"
          className="slider-arrow"
          onClick={() => scrollSlider(-1)}
          aria-label="عرض التقييم السابق"
        >
          →
        </button>

        <button
          type="button"
          className="slider-arrow"
          onClick={() => scrollSlider(1)}
          aria-label="عرض التقييم التالي"
        >
          ←
        </button>
      </div>

      <div className="reviews-slider" ref={sliderRef}>
        {reviews.map((review, index) => (
          <motion.article
            className="review-card"
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: Math.min(index * 0.05, 0.25),
              ease: "easeOut",
            }}
            whileHover={{ y: -4 }}
          >
            <button
              type="button"
              className="review-open-button"
              onClick={() => setSelectedReview(review)}
              aria-label={`تكبير التقييم: ${review.caption}`}
            >
              <span className="review-image-wrap">
                <Image
                  src={review.image}
                  alt={review.alt}
                  width={900}
                  height={1100}
                  sizes="(max-width: 600px) 86vw, (max-width: 900px) 45vw, 32vw"
                  className="review-image"
                />
                <span className="review-zoom-hint">اضغط للتكبير</span>
              </span>
            </button>

            <div className="review-card-content">
              <span className="review-source">{review.source}</span>
              <p>{review.caption}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="review-modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedReview(null);
              }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.section
              className="review-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="review-modal-title"
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="review-modal-close"
                onClick={() => setSelectedReview(null)}
                aria-label="إغلاق النافذة"
              >
                ×
              </button>

              <h3 id="review-modal-title" className="review-modal-title">
                تقييم عبر {selectedReview.source}
              </h3>

              <div className="review-modal-image-wrap">
                <Image
                  src={selectedReview.image}
                  alt={selectedReview.alt}
                  width={1200}
                  height={1500}
                  sizes="(max-width: 700px) 92vw, 800px"
                  className="review-modal-image"
                />
              </div>

              <p className="review-modal-caption">
                {selectedReview.caption}
              </p>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
