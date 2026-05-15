import { PerspectiveCamera } from '@react-three/drei';
const Camera = () => {
    return <PerspectiveCamera makeDefault position={[0, 1, 20]} />;
};

export default Camera;
