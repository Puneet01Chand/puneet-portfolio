import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          fontFamily: "Inter, sans-serif",
          color: "#fff",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.05) 70%)",
            boxShadow:
              "0 0 15px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.15)",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />

        <div style={{ fontSize: "20px", letterSpacing: "1px" }}>
          {progress.toFixed(0)}%
        </div>

        <style>
          {`
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.7; }
              50% { transform: scale(1.15); opacity: 1; }
              100% { transform: scale(1); opacity: 0.7; }
            }
          `}
        </style>
      </div>
    </Html>
  );
}



const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [1, 0, 0], fov: 45 }}
      gl={{ antialias: false }} // Disable on mobile for performance
    >
      <ambientLight intensity={0.6} />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={15} // FIXED: was 0
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={<Loader />}>
        <HeroLights />
        <Particles count={isMobile ? 50 : 100} /> {/* Reduce on mobile */}
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -1.5, 0]}
          rotation={[0, Math.PI / 2.7, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
