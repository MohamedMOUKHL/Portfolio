import { Canvas } from "@react-three/fiber";
import {Suspense} from "react";
import {Loader} from "@react-three/drei";



const Home = () => {


    return (
        <section className='w-full h-screen relative'>
            <Canvas
                className="w-full h-screen bg-transparent"
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 5, 10]} intensity={2} />
                    <spotLight
                        position={[0, 50, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />
                    <hemisphereLight
                        skyColor='#b1e1ff'
                        groundColor='#000000'
                        intensity={1}
                    />

                    <Bird />
                    <Sky isRotating={isRotating} />
                    <Island
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                        position={islandPosition}
                        rotation={[0.1, 4.7077, 0]}
                        scale={islandScale}
                    />
                    <Plane
                        isRotating={isRotating}
                        position={biplanePosition}
                        rotation={[0, 20.1, 0]}
                        scale={biplaneScale}
                    />
                </Suspense>

            </Canvas>

            <div className='absolute bottom-2 left-2'>

            </div>
        </section>
    );
};

export default Home;