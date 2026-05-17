import { useKeyboardControls, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useEffect, useRef } from 'react';
import { damp3 } from 'maath/easing';
import { Vector3, type Mesh } from 'three';
import texture from '../../public/assets/textures/43402.jpg';
import { useThirdPersonCamera } from '@/hooks/camera';
const targetVelocity = new Vector3();
const currentVelocity = new Vector3();
const SPEED = 10;
const SMOOTHING = 0.15;
const IMPULSE = new Vector3(0, 20, 0);
import { CONTROLS } from '@/constants';
export default function Ball() {
    const map = useTexture(texture);
    const ballRef = useRef<RapierRigidBody>(null!);
    const meshRef = useRef<Mesh>(null!);
    const [subscribeKey, getKeys] = useKeyboardControls<CONTROLS>();
    useFrame((_, delta) => {
        if (!ballRef?.current) return;
        const { forward, back, left, right } = getKeys();
        targetVelocity.set(0, 0, 0);
        if (forward) targetVelocity.z -= 1;
        if (back) targetVelocity.z += 1;
        if (left) targetVelocity.x -= 1;
        if (right) targetVelocity.x += 1;

        targetVelocity.normalize().multiplyScalar(SPEED);

        // ease the targetVelocity
        damp3(currentVelocity, targetVelocity, SMOOTHING, delta);

        // apply to actual ball position
        ballRef.current.setLinvel(currentVelocity, true);
        meshRef.current.rotation.x += currentVelocity.z * delta;
        meshRef.current.rotation.z -= currentVelocity.x * delta;
    });

    // useThirdPersonCamera({ ref: ballRef });
    useEffect(() => {
        const unsub = subscribeKey(
            (state) => state.jump,
            (pressed) => {
                if (pressed) ballRef.current.applyImpulse(IMPULSE, true);
            }
        );
        return unsub;
    }, [subscribeKey]);
    return (
        <RigidBody
            gravityScale={10}
            enabledRotations={[false, false, false]}
            colliders="ball"
            ref={ballRef}
            type="dynamic"
            linearDamping={0.5}
            angularDamping={0.5}
        >
            <mesh castShadow ref={meshRef} position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial map={map} />
            </mesh>
        </RigidBody>
    );
}
