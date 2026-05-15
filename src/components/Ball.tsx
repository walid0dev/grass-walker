import { css } from '@/utils';
import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { useRef, type RefObject } from 'react';
import type { Mesh } from 'three';
import { useEasedRotation } from '@hooks/useEasedRotation';
type Props = {
    ref?: RefObject<Mesh | null>;
};

export default function Ball({ ref }: Props) {
    const BallRef = ref || useEasedRotation();
    const [, getKeys] = useKeyboardControls();
    useFrame(() => {
        const { forward, back, left, right } = getKeys();
        if (!BallRef?.current) return;
        if (forward) BallRef.current.position.z -= 0.1;
        if (back) BallRef.current.position.z += 0.1;
        if (left) BallRef.current.position.x -= 0.1;
        if (right) BallRef.current.position.x += 0.1;
        easing.dampE(
            ref.current.rotation, // Current Euler rotation
            targetRotation, // Target Euler rotation
            smoothness,
            delta
        );
    });
    return (
        <RigidBody colliders="ball">
            <mesh castShadow position={[0, 10, 0]} ref={BallRef}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color={css('--accent')} />
            </mesh>
        </RigidBody>
    );
}
