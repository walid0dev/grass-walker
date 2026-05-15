import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { PI } from '@constants/index';
import type { Mesh } from 'three';

export const useRotationControls = (label = 'Rotation') => {
    const ref = useRef<Mesh>(null!);
    const { x, y, z } = useControls(label, {
        x: { value: 0, min: -PI, max: PI, step: 0.01 },
        y: { value: 0, min: -PI, max: PI, step: 0.01 },
        z: { value: 0, min: -PI, max: PI, step: 0.01 },
    });

    useFrame(() => {
        ref.current.rotation.set(x, y, z);
    });

    return ref;
};
