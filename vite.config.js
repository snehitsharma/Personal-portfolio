import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.png'],
  build: {
    rollupOptions: {
      external: ['three'],
    },
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
})