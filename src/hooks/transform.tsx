import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import type { Mesh } from 'three';
import type { RapierRigidBody } from '@react-three/rapier';
import { Euler, Quaternion } from 'three';
export const useRBTransform = (label = 'Transform') => {
    // Keep the typed ref
    const ref = useRef<RapierRigidBody>(null!);

    // 1. Grab values from Leva controls (Removed scale since Rapier shouldn't scale dynamically)
    const { position, rotation } = useControls(label, {
        position: { value: [0, 0, 0], step: 0.1 },
        rotation: { value: [-Math.PI / 2, 0, 0], step: 0.01 },
    });

    useFrame(() => {
        if (!ref.current) return;

        // 2. Set the position (Rapier takes an object {x, y, z} or array)
        ref.current.setTranslation(
            { x: position[0], y: position[1], z: position[2] },
            true
        );

        // 3. Convert Euler array [x, y, z] to a Quaternion for Rapier
        const euler = new Euler(rotation[0], rotation[1], rotation[2]);
        const quaternion = new Quaternion().setFromEuler(euler);

        // 4. Set the rotation
        ref.current.setRotation(quaternion, true);
    });

    return ref;
};
export const useMeshTransformControls = (label = 'Transform') => {
    const ref = useRef<Mesh>(null!);
    const { position, rotation, scale } = useControls(label, {
        position: { value: [0, 0, 0], step: 0.1 },
        rotation: { value: [-Math.PI / 2, 0, 0], step: 0.01 },
        scale: { value: 1, min: 0.1, max: 5 },
    });

    useFrame(() => {
        ref.current.position.set(...position);
        ref.current.rotation.set(...rotation);
        ref.current.scale.setScalar(scale);
    });

    return ref;
};
