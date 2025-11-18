import React from "react";

const DraggableModel = ({ children }) => {
  const ref = React.useRef(null);
  const pos = React.useRef({ x: 0, y: 0 });
  const dragging = React.useRef(false);
  const offset = React.useRef({ x: 0, y: 0 });

  const handleDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - pos.current.x,
      y: e.clientY - pos.current.y
    };
  };

  const handleMove = (e) => {
    if (!dragging.current) return;

    pos.current = {
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y
    };

    if (ref.current) {
      ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    }
  };

  const handleUp = () => {
    dragging.current = false;
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      onMouseDown={handleDown}
      className="cursor-grab active:cursor-grabbing select-none"
    >
      {children}
    </div>
  );
};

export default DraggableModel;
