import React from "react";

const ParallaxBanner = ({ src, height, speed }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const offset = window.scrollY * speed;

      // Background bergerak ke ATAS, bukan ke bawah
      ref.current.style.backgroundPosition = `center calc(0px - ${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`w-full ${height}`}
      style={{
        backgroundImage: `url('${src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        willChange: "background-position"
      }}
    />
  );
};

export default ParallaxBanner;
