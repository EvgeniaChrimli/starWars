import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../Components/Loader";
import DeathStar from "../models/DeathStar";
import Destroyer from "../models/Destroyer";
//import Space from "../models/Space";
import Xwing from "../models/Xwing";
import CameraController from "../Components/CameraController";
import Header from "../Components/Header";
import styles from "../Styles/Home.module.css";
function Home() {
  const [currentSection, setCurrentSection] = React.useState(1);

  const adjustStarForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [0.6, 0.6, 0.6];
    screenPosition = [0, -6.5, -43.4];
    return [screenScale, screenPosition];
  };

  const adjustDestroyerScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [0.003, 0.003, 0.003];
    screenPosition = [4, -4, -6];

    return [screenScale, screenPosition];
  };
  const adjustSpaceForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [70, 70, 70];
    screenPosition = [0, 0, -4];

    return [screenScale, screenPosition];
  };
  const adjustXwingForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [0.2, 0.2, 0.2];
    screenPosition = [-2.8, 0.6, 0.4];

    return [screenScale, screenPosition];
  };
  const [starScale, starPosition] = adjustStarForScreenSize();
  const [destroyerScale, destroyerPosition] = adjustDestroyerScreenSize();
  const [xwingScale, xwingPosition] = adjustXwingForScreenSize();

  return (
    <>
      <Header />
      <section className={styles.home}>
        <Canvas
          className="w-full h-screen bg-transparent"
          camera={{ near: 0.1, far: 1000, position: [0, -2, 3.3] }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1, 1]} intencity={2} />
            <DeathStar
              position={starPosition}
              scale={starScale}
              rotation={[0, 0, 0]}
            />
            <Destroyer
              position={destroyerPosition}
              scale={destroyerScale}
              rotation={[13, 20.5, -0.3]}
            />
            <Xwing
              position={xwingPosition}
              scale={xwingScale}
              rotation={[0, 3, 0]}
            />
            <CameraController setCurrentSection={setCurrentSection} />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
}
export default Home;
