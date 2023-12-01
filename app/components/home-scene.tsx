"use client";
import { OldComputers } from "./old-computers";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { PerspectiveCamera } from "@react-three/drei";
import { useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      const rootDiv = document.getElementById("root")!;
      setSize([rootDiv.clientWidth, rootDiv.clientHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function HomeScene() {
  const [width, height] = useWindowSize();
  const scaleX = width / 1920;
  const scaleY = height / 1080;
  const zoomFactor = ((scaleX + scaleY) / 2) * 1.1;
  console.log(zoomFactor);

  return (
    <mesh>
      <PerspectiveCamera makeDefault fov={45} zoom={zoomFactor} />
      <ambientLight intensity={Math.PI / 2} />
      <group>
        <OldComputers
          position={[0, -2.5, -7.5]}
          scale={[1, 1.1, 1.25]}
          rotation={[0, Math.PI * -0.02, 0]}
        />
      </group>
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0}
          mipmapBlur
          luminanceSmoothing={0.0}
          intensity={3}
        />
      </EffectComposer>
    </mesh>
  );
}
