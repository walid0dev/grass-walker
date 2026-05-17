import { useFrame } from '@react-three/fiber';
import type { MeshRef, RigidBodyRef } from '@types';
import { damp3 } from 'maath/easing';
import { Vector3 } from 'three';

// 1. Keep these outside the loop so we don't spam the Garbage Collector 144x a second
const idealPosition = new Vector3();
const targetPos = new Vector3();
const CAMERA_OFFSET = new Vector3(0, 2, 10);

export function useThirdPersonCamera({ ref }: { ref: MeshRef | RigidBodyRef }) {
    useFrame(({ camera }, delta) => {
        if (!ref.current) return;

        if ('translation' in ref.current) {
            const t = ref.current.translation();
            targetPos.set(t.x, t.y, t.z);
        } else {
            targetPos.copy(ref.current.position);
        }

        idealPosition.copy(targetPos).add(CAMERA_OFFSET);

        damp3(camera.position, idealPosition, 0.15, delta);

        // camera.lookAt(targetPos);
    });

    return null;
}
