import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import {
    Float,
    OrbitControls,
    PerspectiveCamera,
    Stars,
    shaderMaterial,
    useTexture,
} from '@react-three/drei';
import { TextureLoader } from 'three';
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing';
import { useEffect } from 'react';

const Cube = () => {
    const cubeRef = useRef();
    const repeatCount = [2, 2];

    // useFrame((_, delta) => {
    //     cubeRef.current.rotation.x += 0.5 * delta;
    //     cubeRef.current.rotation.y += 1 * delta;
    //     cubeRef.current.rotation.z += 0.25 * delta;
    //     // cubeRef.current.position.x += 2 * delta;
    //     // cubeRef.current.position.y += 2 * delta;
    //     // cubeRef.current.position.z += -2 * delta;
    // });
    // Fabric Plaid Tablecloth Textures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/fabric_pattern_07/fabric_pattern_07_col_1_2k.jpg',
    //     'textures/fabric_pattern_07/fabric_pattern_07_ao_2k.png',
    //     'textures/fabric_pattern_07/fabric_pattern_07_nor_gl_2k.png',
    //     'textures/fabric_pattern_07/fabric_pattern_07_rough_2k.png',
    //     'textures/fabric_pattern_07/fabric_pattern_07_rough_2k.png',
    // ]);

    // Marble Textures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/marble_white_006/marble_white_006_basecolor.jpg',
    //     'textures/marble_white_006/marble_white_006_ao.jpg',
    //     'textures/marble_white_006/marble_white_006_normal.jpg',
    //     'textures/marble_white_006/marble_white_006_rough.jpg',
    //     'textures/marble_white_006/marble_white_006_height.png',
    // ]);

    // Leather Textures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/leather_red_02/leather_red_02_coll1_4k.jpg',
    //     'textures/leather_red_02/leather_red_02_ao_4k.jpg',
    //     'textures/leather_red_02/leather_red_02_nor_gl_4k.png',
    //     'textures/leather_red_02/leather_red_02_rough_4k.png',
    //     'textures/leather_red_02/leather_red_02_rough_4k.png',
    // ]);

    // Stylized Wood PlanksTextures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/stylized_wood_planks_001/stylized_wood_planks_001_basecolor.jpg',
    //     'textures/stylized_wood_planks_001/stylized_wood_planks_001_ao.jpg',
    //     'textures/stylized_wood_planks_001/stylized_wood_planks_001_normal.jpg',
    //     'textures/stylized_wood_planks_001/stylized_wood_planks_001_rough.jpg',
    //     'textures/stylized_wood_planks_001/stylized_wood_planks_001_height.png',
    // ]);

    // Wood Floor Deck Textures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/wood_floor_deck/wood_floor_deck_diff_4k.jpg',
    //     'textures/wood_floor_deck/wood_floor_deck_ao_4k.png',
    //     'textures/wood_floor_deck/wood_floor_deck_nor_gl_4k.jpg',
    //     'textures/wood_floor_deck/wood_floor_deck_rough_4k.png',
    //     'textures/wood_floor_deck/wood_floor_deck_disp_4k.png',
    // ]);

    // Stone Tile Textures ----------------------------
    const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
        'textures/stone_tiles_02/stone_tiles_02_diff_2k.png',
        'textures/stone_tiles_02/stone_tiles_02_ao_2k.png',
        'textures/stone_tiles_02/stone_tiles_02_nor_gl_2k.png',
        'textures/stone_tiles_02/stone_tiles_02_rough_2k.png',
        'textures/stone_tiles_02/stone_tiles_02_disp_2k.png',
    ]);

    // Earth Textures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/earth/8k_earth_daymap.jpg',
    //     'textures/earth/8k_earth_specular_map.png',
    //     'textures/earth/8k_earth_normal_map.png',
    //     'textures/earth/8k_earth_specular_map.png',
    //     'textures/earth/8k_earth_normal_map.png',
    // ]);

    baseColorMap.repeat.set(...repeatCount);
    baseColorMap.wrapS = THREE.RepeatWrapping;
    baseColorMap.wrapT = THREE.RepeatWrapping;

    aoMap.repeat.set(...repeatCount);
    aoMap.wrapS = THREE.RepeatWrapping;
    aoMap.wrapT = THREE.RepeatWrapping;

    normalMap.repeat.set(...repeatCount);
    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;

    roughnessMap.repeat.set(...repeatCount);
    roughnessMap.wrapS = THREE.RepeatWrapping;
    roughnessMap.wrapT = THREE.RepeatWrapping;

    heightMap.repeat.set(...repeatCount);
    heightMap.wrapS = THREE.RepeatWrapping;
    heightMap.wrapT = THREE.RepeatWrapping;

    return (
        <>
            <mesh ref={cubeRef} castShadow position={[0, 15, 0]} scale={1}>
                {/* <boxBufferGeometry args={[5, 5, 5]} /> */}
                <sphereBufferGeometry args={[5, 32]} />
                <shaderMaterial
                    fog={false}
                    vertexShader={`
      varying vec2 vUv;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
      
        gl_Position = projectedPosition;
      }
    `}
                    fragmentShader={`
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
    }
  `}
                    color="hotpink"
                    time={1}
                />

                {/* <meshStandardMaterial
                    map={baseColorMap}
                    aoMap={aoMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    displacementMap={heightMap}
                    displacementScale={0}
                /> */}

                {/* <meshStandardMaterial
                    color="white"
                    emissive="gold"
                    emissiveIntensity={2}
                    toneMapped={false}
                /> */}
            </mesh>
        </>
    );
};

const Ground = () => {
    const repeatCount = [10, 10];

    // Stone Tile Textures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/stone_tiles_02/stone_tiles_02_diff_2k.png',
    //     'textures/stone_tiles_02/stone_tiles_02_ao_2k.png',
    //     'textures/stone_tiles_02/stone_tiles_02_nor_gl_2k.png',
    //     'textures/stone_tiles_02/stone_tiles_02_rough_2k.png',
    //     'textures/stone_tiles_02/stone_tiles_02_disp_2k.png',
    // ]);

    // Wood Floor Deck Textures -----------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/wood_floor_deck/wood_floor_deck_diff_4k.jpg',
    //     'textures/wood_floor_deck/wood_floor_deck_ao_4k.png',
    //     'textures/wood_floor_deck/wood_floor_deck_nor_gl_4k.jpg',
    //     'textures/wood_floor_deck/wood_floor_deck_rough_4k.png',
    //     'textures/wood_floor_deck/wood_floor_deck_disp_4k.png',
    // ]);

    // Stylized Wood Planks Textures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/stylized_wood_planks_001/stylized_wood_planks_001_basecolor.jpg',
    //     'textures/stylized_wood_planks_001/stylized_wood_planks_001_ao.jpg',
    //     'textures/stylized_wood_planks_001/stylized_wood_planks_001_normal.jpg',
    //     'textures/stylized_wood_planks_001/stylized_wood_planks_001_rough.jpg',
    //     'textures/stylized_wood_planks_001/stylized_wood_planks_001_height.png',
    // ]);

    // Wood Floor 007 Textures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/wood_floor_007/wood_floor_007_COLOR.jpg',
    //     'textures/wood_floor_007/wood_floor_007_OCC.jpg',
    //     'textures/wood_floor_007/wood_floor_007_NORM.jpg',
    //     'textures/wood_floor_007/wood_floor_007_ROUGH.jpg',
    //     'textures/wood_floor_007/wood_floor_007_DISP.png',
    // ]);

    // Metal Plate Textures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap, bumpMap, metalMap] =
    //     useLoader(TextureLoader, [
    //         'textures/metal_plate/metal_plate_diff_4k.png',
    //         'textures/metal_plate/metal_plate_ao_4k.png',
    //         'textures/metal_plate/metal_plate_nor_gl_4k.png',
    //         'textures/metal_plate/metal_plate_rough_4k.png',
    //         'textures/metal_plate/metal_plate_disp_4k.png',
    //         'textures/metal_plate/metal_plate_bump_4k.png',
    //         'textures/metal_plate/metal_plate_metal_4k.png',
    //     ]);

    // Laminate Textures ----------------------------
    const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap, metalMap] = useLoader(
        TextureLoader,
        [
            'textures/laminate_floor_02/laminate_floor_02_diff_4k.png',
            'textures/laminate_floor_02/laminate_floor_02_ao_4k.png',
            'textures/laminate_floor_02/laminate_floor_02_nor_gl_4k.png',
            'textures/laminate_floor_02/laminate_floor_02_rough_4k.png',
            'textures/laminate_floor_02/laminate_floor_02_disp_4k.png',
            'textures/laminate_floor_02/laminate_floor_02_arm_4k.png',
        ]
    );

    // Coast Sand Rocks Textures ----------------------------
    // const [baseColorMap, aoMap, normalMap, roughnessMap, heightMap] = useLoader(TextureLoader, [
    //     'textures/coast_sand_rocks_02/coast_sand_rocks_02_diff_4k.png',
    //     'textures/coast_sand_rocks_02/coast_sand_rocks_02_ao_4k.png',
    //     'textures/coast_sand_rocks_02/coast_sand_rocks_02_nor_gl_4k.png',
    //     'textures/coast_sand_rocks_02/coast_sand_rocks_02_rough_4k.png',
    //     'textures/coast_sand_rocks_02/coast_sand_rocks_02_disp_4k.png',
    // ]);

    baseColorMap.repeat.set(...repeatCount);
    baseColorMap.wrapS = THREE.RepeatWrapping;
    baseColorMap.wrapT = THREE.RepeatWrapping;

    aoMap.repeat.set(...repeatCount);
    aoMap.wrapS = THREE.RepeatWrapping;
    aoMap.wrapT = THREE.RepeatWrapping;

    normalMap.repeat.set(...repeatCount);
    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;

    roughnessMap.repeat.set(...repeatCount);
    roughnessMap.wrapS = THREE.RepeatWrapping;
    roughnessMap.wrapT = THREE.RepeatWrapping;

    heightMap.repeat.set(...repeatCount);
    heightMap.wrapS = THREE.RepeatWrapping;
    heightMap.wrapT = THREE.RepeatWrapping;

    return (
        <>
            <mesh position={[0, -5, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]} scale={1}>
                <planeBufferGeometry args={[200, 200]} />
                <meshStandardMaterial
                    map={baseColorMap}
                    aoMap={aoMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    roughness={1}
                    metalnessMap={metalMap}
                    // metalness={1}
                    // bumpMap={bumpMap}
                    displacementMap={heightMap}
                    displacementScale={0}
                />
            </mesh>
        </>
    );
};

const Camera = ({ cameraRef, position = [0, 0, -10] }) => {
    // useFrame((_, delta) => {
    //     cameraRef.current.position.x += 0.01;
    //     cameraRef.current.position.z += 0.1;
    //     cameraRef.current.rotation.y += 0.1;
    // });
    return <PerspectiveCamera makeDefault ref={cameraRef} position={position} fov={75} />;
};

const CircleGround = ({ meshPosition = [0, 0, 0], meshRotation = [0, 0, 0] }) => {
    const BASE_RADIUS = 5;
    const RADIUS_INCREMENTS = 1.2;
    const BASE_SIDES = 256;
    const SIDE_INCREMENTS = 1;
    const BASE_SIZE = 0.02;
    const SIZE_INCREMENTS = 0.15;
    const BASE_COLOR = 180;
    const COLOR_INCREMENTS = 4;

    const circlesArr = [];

    function createCircles(count) {
        for (let i = 0; i < count; i++) {
            circlesArr.push({
                // radius: BASE_RADIUS * ((circlesArr.length + 1) * RADIUS_INCREMENTS),
                radius: BASE_RADIUS,
                // sides: BASE_SIDES * ((circlesArr.length + 1) * SIDE_INCREMENTS),
                sides: BASE_SIDES,
                pointSize: BASE_SIZE * ((circlesArr.length + 1) * SIZE_INCREMENTS),
                // pointSize: BASE_SIZE,
                color: `hsl(${BASE_COLOR + (circlesArr.length + 1) * COLOR_INCREMENTS}, 80%, 50%)`,
                oscMultiplier: 2,
                isSine: Math.random() > 0.5 ? true : false,
            });
        }
    }

    createCircles(7);

    const circleRefs = circlesArr.map(() => useRef());
    const meshRef = useRef();

    let counter = 0;
    let oscSine = 0;
    let oscCos = 0;
    const oscSpeed = 0.2;
    const oscMultiplier = 1;
    const oscOffset = 0.5;

    useFrame((_, delta) => {
        counter += delta * oscSpeed;

        // meshRef.current.rotation.y += delta * 0.1;

        circleRefs.map((circle, index) => {
            oscSine = Math.sin(counter + index * oscOffset);
            oscCos = Math.cos(counter + index * oscOffset);

            circle.current.position.z = oscSine / oscCos / oscMultiplier;
            // circle.current.rotation.x = oscSine * oscMultiplier;
            // circle.current.rotation.y = oscCos * oscMultiplier;
            // circle.current.rotation.z = circle.isSine ? oscSine : oscCos;
            circle.current.rotation.z = oscCos;
            // circle.current.material.color.r = (oscSine + 1) / 2;
            // circle.current.material.color.b = oscCos;
            // circle.current.material.color.b = (oscCos + 1) / 2;
        });

        // console.log(oscSine);
    });

    return (
        <mesh ref={meshRef} position={meshPosition} rotation={meshRotation} scale={1} receiveShadow>
            {circlesArr.map((circle, index) => {
                return (
                    <points ref={circleRefs[index]} key={index}>
                        <ringBufferGeometry
                            args={[
                                circle.radius,
                                circle.radius + index * 0.1,
                                circle.sides,
                                circle.sides / 32,
                            ]}
                        />
                        <pointsMaterial
                            transparent
                            size={circle.pointSize}
                            sizeAttenuation
                            color={circle.color}
                            key={index}
                        />
                    </points>
                );
            })}
        </mesh>
    );
};

const BasicParticles = () => {
    const sphereTexture = useTexture('/textures/flare.png');

    return (
        <points ref={circle}>
            <sphereBufferGeometry args={[5, 8, 64, 64, 64, 64, 64]} />
            <pointsMaterial
                alphaMap={sphereTexture}
                alphaTest={0.03}
                transparent
                // map={sphereTexture}
                size={0.2}
                sizeAttenuation
                color={'hsl(176, 70%, 38%)'}
            />
        </points>
    );
};

function Background() {
    const cameraRef = useRef();
    return (
        <Canvas
            style={{
                width: '100%',
                height: '100vh',
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                // filter: 'saturate(1) blur(0px)',
                // background: 'radial-gradient(hsl(215, 100%, 8%), var(--bg-color))',
                opacity: 0.5,
            }}
        >
            <Camera cameraRef={cameraRef} position={[0, 0, -10]} rotation={[0, 0, 0]} />
            {/* <ambientLight intensity={0.2} /> */}
            {/* <pointLight castShadow position={[-200, -10, 200]} intensity={0.3} /> */}
            {/* <pointLight castShadow position={[-200, -10, -200]} intensity={0.3} /> */}
            {/* <directionalLight castShadow position={[-20, 30, -30]} intensity={0.4} /> */}
            <OrbitControls
                args={[cameraRef.current]}
                maxDistance={300}
                minDistance={1}
                // autoRotate
                autoRotateSpeed={0.6}
            />
            <EffectComposer enabled>
                {/* <Bloom mipmapBlur radius={0.5} intensity={1} /> */}
                {/* <Stars radius={100} depth={100} count={12000} fade speed={1000} noise={[5, 5, 5]} /> */}
                {/* <SoftShadows /> */}
                {/* <Float
                    speed={0.5}
                    rotationIntensity={1.3}
                    floatIntensity={1}
                    floatingRange={[1, 1.5]}
                > */}
                {/* <Blob noiseTexture={noiseTexture} /> */}
                {/* <Cube /> */}
                {/* <BasicParticles /> */}
                {/* </Float> */}

                <CircleGround meshPosition={[0, 0, 0]} meshRotation={[Math.PI / 2, 0, 0]} />
                {/* <Ground /> */}
            </EffectComposer>
        </Canvas>
    );
}

export default Background;
