import { type KeyboardControlsEntry } from '@react-three/drei';
export const PI = Math.PI;
export enum CONTROLS {
    forward = 'forward',
    back = 'back',
    left = 'left',
    right = 'right',
    jump = 'jump',
}

export const KEY_MAP: KeyboardControlsEntry<CONTROLS>[] = [
    { name: CONTROLS.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: CONTROLS.back, keys: ['ArrowDown', 'KeyS'] },
    { name: CONTROLS.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: CONTROLS.right, keys: ['ArrowRight', 'KeyD'] },
    { name: CONTROLS.jump, keys: ['Space'] },
];
