import React, { useEffect, useState } from "react";

const Sb = () => {
  const [st, sst] = useState([]);
  const [mt, smt] = useState([]);
  const gen = () => {
    const nw = Math.floor((window.innerWidth * window.innerHeight) / 1000);
    const ns = [];
    for (let i = 0; i < nw; i++) {
      ns.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    sst(ns);
  };
  const gt = () => {
    const nw = 4;
    const ns = [];
    for (let i = 0; i < nw; i++) {
      ns.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    smt(ns);
  };
  useEffect(() => {
    gen();
    gt();
    const hs = () => {
      gen();
    };
    window.addEventListener("resize", hs);
    return () => {
      window.removeEventListener("resize", hs);
    };
  }, []);
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {st.map((star) => {
        return (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            }}
          ></div>
        );
      })}

      {mt.map((star) => {
        return (
          <div
            key={star.id}
            className="meteor animate-meteor"
            style={{
              width: star.size * 50 + "px",
              height: star.size * 2 + "px",
              left: star.x + "%",
              top: star.y + "%",
              animationDelay: star.delay,
              animationDuration: star.animationDuration + "s",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Sb;
