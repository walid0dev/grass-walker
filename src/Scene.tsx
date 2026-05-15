/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Field from '@components/Field';
import MainKeyboardControls from './entities/KeyboardControls';
import Ball from '@components/Ball';
import Camera from './entities/Camera';
const Scene = () => {
    return (
        <MainKeyboardControls>
            <Canvas style={{ height: '100dvh' }}>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} castShadow />
                <Sky sunPosition={[100, 20, 100]} />
                <Camera />
                <Physics debug>
                    <Field />
                    <Ball />
                </Physics>
            </Canvas>
        </MainKeyboardControls>
    );
};

export default Scene;
