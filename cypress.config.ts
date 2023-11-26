import { defineConfig } from 'cypress'

export default defineConfig({
    projectId: "fpfgqe",
    e2e: {
        baseUrl: 'http://localhost:3000',
    },
})
