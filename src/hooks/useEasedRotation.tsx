import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import type { Mesh, Euler } from 'three';

export const useEasedRotation = (targetRotation: Euler, smoothness = 0.25) => {
    const ref = useRef<Mesh>(null!);

    useFrame((_, delta) => {
        // dampE is specifically engineered for smooth, short-path Euler rotations
    });

    return ref;
};
