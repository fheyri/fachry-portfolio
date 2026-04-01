import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import Band from './Band'

export default function Lanyard() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 0, 30], fov: 20 }}>
        <ambientLight intensity={1.5} />
        <Physics gravity={[0, -40, 0]}>
          <Band />
        </Physics>
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}