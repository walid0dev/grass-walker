import { type KeyboardControlsEntry } from '@react-three/drei';
export const PI = Math.PI;
enum Controls {
    forward = 'forward',
    back = 'back',
    left = 'left',
    right = 'right',
}

export const KEY_MAP: KeyboardControlsEntry<Controls>[] = [
    { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
    { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
];
