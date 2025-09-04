import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // WARNING: Hardcoding API keys is a major security risk.
  // This key will be exposed to anyone who inspects your site's code.
  // It is strongly recommended to use environment variables instead.
  // For example, in Netlify, set VITE_API_KEY in your site's "Build & deploy" > "Environment" settings.
  // The original, secure code was:
  // 'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY)
  define: {
    'process.env.VITE_API_KEY': JSON.stringify('AIzaSyCvv6NEBGW_8e5IfIUpAe45uT_Fa68sUS4')
  },
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