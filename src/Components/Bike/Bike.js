import React, { useRef } from "react";
import "./Bike.css";
import { Canvas, extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useProgress, Html } from "@react-three/drei";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";

import bikeBg from "../../Assets/Bike/bike-bg.png";
import github from "../../Assets/Images/github.png";
import linkedin from "../../Assets/Images/linkedin.png";
import instagram from "../../Assets/Images/instagram.png";
import mouseSvg from "../../Assets/Images/mouse.svg";

const Scene = () => {
    const fbx = useLoader(FBXLoader, "Bike.fbx");

    return <primitive object={fbx} scale={0.02} />;
};

extend({ OrbitControls })
const Controls = () => {
    //Configure camera and controls (see orbitControls docs for more info)
    const controls = useRef();
    const { camera, gl } = useThree();
    //Set the camera position and the camera target
    camera.position.set(0, 3, 3);
    useFrame(() => controls.current.update());
    return <orbitControls
        ref={controls}
        args={[camera, gl.domElement]}
        enableDamping
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.6}
        minPolarAngle={1.2}
        maxPolarAngle={1.2}
        autoRotate={true}
        autoRotateSpeed={0.75} />
}

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html center>Loading</Html>
    );
}

const Lights = () => {
    return (
        <ambientLight intensity={0.5} />
    );
}

const Bike = () => {
    return (
        <div className="container-bike">
            <div className="left-side">
                <img src={github} alt="github" />
                <img src={linkedin} alt="linkedin" />
                <img src={instagram} alt="instagram" />
                <div className="h-line"></div>
            </div>
            <div className="bike">
                <div className="bike-bg">
                    <img src={bikeBg} alt="bike-bg" />
                </div>
                <Canvas>
                    <Suspense fallback={<Loader />}>
                        <Scene />
                        <Lights />
                    </Suspense>
                    <Controls />
                </Canvas>
            </div>
            <div className="right-side">
                <img src={mouseSvg} alt="mouse" />
                <div className="scrolldown">
                    <h4>Scroll Down</h4>
                </div>
            </div>
        </div>
    );
}

export default Bike;
