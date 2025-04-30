import { defineConfig } from 'cypress'

export default defineConfig({
  // --- component runner ---
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },

  // --- end-to-end runner ---
  e2e: {
    baseUrl: 'http://localhost:5173',   // Vite’s default port
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents() { /* node-level hooks not needed here */ },
  },
})
