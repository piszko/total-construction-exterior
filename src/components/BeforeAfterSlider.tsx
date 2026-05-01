import { useRef, useState, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeLabel = "Empty",
  afterLabel = "Virtually Staged",
  className = "",
}: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const handleUp = () => setIsDragging(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging, updatePosition]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none rounded-lg shadow-md ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        updatePosition(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        updatePosition(e.touches[0].clientX);
      }}
    >
      {/* After (staged) - base layer */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="block w-full h-auto pointer-events-none"
        loading="lazy"
        draggable={false}
      />

      {/* After label */}
      <span className="absolute top-3 right-3 bg-black/70 text-white text-xs font-poppins px-2 py-1 rounded pointer-events-none">
        {afterLabel}
      </span>

      {/* Before (empty) - clipped */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="block h-full w-auto max-w-none"
          style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
          loading="lazy"
          draggable={false}
        />
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-poppins px-2 py-1 rounded">
          {beforeLabel}
        </span>
      </div>

      {/* Slider handle */}
      <div
        role="slider"
        aria-label={`Compare ${beforeLabel} and ${afterLabel}. Use arrow keys to adjust.`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-logo-red"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-logo-red">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M5 4L1 8L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo-red" />
            <path d="M11 4L15 8L11 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-logo-red" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
