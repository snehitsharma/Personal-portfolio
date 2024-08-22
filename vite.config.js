import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.png'],
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
  resolve: {
    alias: {
      'three': 'three/src/Three.js',
    }
  },
})