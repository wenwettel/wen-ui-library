import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({rollupTypes:true})],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'wen-ui-library',
      fileName: 'wen-ui-library',
    },

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      },

    }
  },
})
