/* eslint-disable react/no-unknown-property */
import { css } from '@/utils';
import { RigidBody } from '@react-three/rapier';

const Field = () => {
    return (
        <RigidBody type="fixed" colliders="cuboid">
            <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
            >
                <planeGeometry args={[1000, 1000, 1000]} />
                <meshStandardMaterial side={2} color={css('--primary')} />
            </mesh>
        </RigidBody>
    );
};

export default Field;
