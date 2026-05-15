import { KeyboardControls } from '@react-three/drei';
import type { ReactNode } from 'react';
import { KEY_MAP } from '@constants/index';

type Props = {
    children: ReactNode;
};

const MainKeyboardControls = ({ children }: Props) => {
    return <KeyboardControls map={KEY_MAP}>{children}</KeyboardControls>;
};
export default MainKeyboardControls;
