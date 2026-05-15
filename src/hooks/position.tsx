import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import type { Mesh } from 'three';

export const usePositionControls = (label = 'Position') => {
    const ref = useRef<Mesh>(null!);

    const { x, y, z } = useControls(label, {
        x: { value: 0, min: -10, max: 10, step: 0.1 },
        y: { value: 0, min: -10, max: 10, step: 0.1 },
        z: { value: 0, min: -10, max: 10, step: 0.1 },
    });

    useFrame(() => {
        ref.current.position.set(x, y, z);
    });

    return ref;
};
