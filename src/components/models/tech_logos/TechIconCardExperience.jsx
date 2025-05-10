import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  return (
    <div className="w-40 h-40 flex items-center justify-center rounded-xl overflow-hidden">
    <img
      src={model.image}
      alt={model.name}
      className="object-contain"
    />
  </div>
  );
};

export default TechIconCardExperience;
