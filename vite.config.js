import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: (id) => {
        const externals = [
          'react',
          'react-dom',
          'react-hot-toast',
          'reactflow',
          'html-to-image',
          '@reactflow/react',
          '@google/genai',
          'lucide-react'
        ];
        // Check if the import ID is one of the externals or starts with one followed by a slash.
        return externals.some(pkg => id === pkg || id.startsWith(`${pkg}/`));
      }
    }
  }
});
