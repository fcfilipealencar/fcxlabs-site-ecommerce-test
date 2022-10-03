import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        // setupNodeEvents(on, config) {
        //   // implement node event listeners here
        // },
        baseUrl:
            process.env.NODE_ENV === "production"
                ? "https://dev.d3kph5yilq6yeb.amplifyapp.com/"
                : "http://localhost:3001/",
        specPattern: [
            "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
            "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
            "pages/**/*.{spec,cy}.{js,jsx,ts,tsx}",
        ],
    },
    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
        },
    },
});
