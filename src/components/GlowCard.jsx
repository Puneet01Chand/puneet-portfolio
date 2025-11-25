import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  // Rotate glow angle based on mouse position
  const handleMouseMove = (index) => (e) => {
    const cardEl = cardRefs.current[index];
    if (!cardEl) return;

    const rect = cardEl.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardEl.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column relative overflow-hidden"
    >
      {/* Glow Layer */}
      <div className="glow"></div>

      {/* Image or Custom Card Content */}
      <div className="mb-5">
        {children}
      </div>

      {/* Summary text */}
      {card.summary && (
        <p className="text-white-50 text-[15px] leading-relaxed">
          {card.summary}
        </p>
      )}
    </div>
  );
};

export default GlowCard;