import { Environment } from "@react-three/drei";

export const Lights = () => (
  <>
    <Environment files={"/exrs/blue_photo_studio_2k.exr"} />
    <ambientLight intensity={0.2} />
    <pointLight
      name="pc"
      intensity={2.6}
      decay={2}
      distance={3.09}
      color="#ffdf9c"
      position={[-1.656, 2.501, -1.434]}
    />
    <pointLight
      intensity={0.7}
      name="bathroom"
      decay={2}
      distance={3.12}
      color="#ffdf9c"
      position={[-1.817, 2.415, 1.142]}
    />
    <pointLight
      intensity={3.5}
      name="door"
      decay={2}
      distance={8.38}
      color="#ffdf9c"
      position={[-0.06, 2.469, 1.881]}
    />
    <pointLight
      intensity={1}
      name="stove"
      decay={2}
      distance={1.5}
      color="#ffdf9c"
      position={[-0.448, 2.469, -2.039]}
    />
    <pointLight
      intensity={1.5}
      name="ceiling"
      decay={2}
      color="#ffdf9c"
      position={[-0.466, 3.042, -0.183]}
    />
    <pointLight
      intensity={2}
      name="lamp"
      decay={2}
      distance={2.27}
      color="#ffdf9c"
      position={[0.72, 1.312, -2.223]}
    />
  </>
);
