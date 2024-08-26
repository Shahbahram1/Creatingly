const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      userId: "shahbahram508@gmail.com",
      password: "shah@creatingly",
    },
    baseUrl: "https://dev.platform.creatingly.com/",
    defaultCommandTimeout: 100000,
    requestTimeout: 100000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
  },
});
