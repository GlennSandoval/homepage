"use client";
import { Canvas, Dpr } from "@react-three/fiber";
import HomeScene from "./components/home-scene";

export default function Home() {
  let dpr: Dpr = [1, 1.5];
  if (typeof window !== "undefined") {
    dpr = window.devicePixelRatio;
  }

  return (
    <div className="w-screen h-screen" id="root">
      <Canvas dpr={dpr} className="w-full h-screen bg-transparent">
        <HomeScene />
      </Canvas>
    </div>
  );
}
