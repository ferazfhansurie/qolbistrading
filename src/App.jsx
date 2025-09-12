import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Physics } from '@react-three/cannon'
import Scene from './components/Scene'
import UI from './components/UI'
import Loader from './components/Loader'
import './App.css'

function App() {
  return (
    <div className="app">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        style={{ background: '#000' }}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <Physics>
            <Scene />
          </Physics>
        </Suspense>
      </Canvas>
      <UI />
      <Loader />
    </div>
  )
}

export default App