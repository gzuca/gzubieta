import { useState, useRef, useEffect } from "react";

function Skillcard({ title, description, image }) {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    }

    if (showPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopover]);

  return (
    <div className="skill-chip-container" style={{ position: "relative", display: "inline-block", margin: "0.25rem" }}>
      <div
        className="skill-chip"
        onClick={() => setShowPopover(!showPopover)}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === "Enter") setShowPopover(!showPopover);
        }}
        aria-haspopup="true"
        aria-expanded={showPopover}
        aria-label={`Show info about ${title}`}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#2C3E50",
          color: "#F5F5F5",
          padding: "0.4rem 0.8rem",
          borderRadius: "20px",
          fontWeight: "600",
          userSelect: "none",
          fontFamily: "'Open Sans', sans-serif",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "25px", height: "25px", objectFit: "contain", filter: "drop-shadow(0 0 2px #5DADE2)" }}
          className="skill-icon"/>
        <span>{title}</span>
      </div>

      {showPopover && (
        <div
          ref={popoverRef}
          className="popover"
          role="tooltip"
          style={{
            position: "absolute",
            top: "110%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#01161E",
            color: "#F5F5F5",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
            whiteSpace: "normal",
            width: "200px",
            zIndex: 100,
            fontSize: "0.9rem",
            fontWeight: "400",
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
}

export default Skillcard;
