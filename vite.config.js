import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
  plugins: [
    react(),
    monacoEditorPlugin.default({
      languageWorkers: ['editorWorkerService', 'typescript', 'css', 'html', 'json'],
    }),
  ],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true
    },
    mimeTypes: {
      'application/javascript': ['js', 'mjs', 'worker.js'],
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'], // .jsx 확장자를 명시적으로 추가
  },
});
