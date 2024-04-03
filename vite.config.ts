import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import CSSExtractorPlugin from '@master/css-extractor.vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), CSSExtractorPlugin()],
})
