const { defineConfig } = require("cypress");
const del = require('del');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:spec', (spec, results) => {
        if (results && results.stats.failures === 0 && results.video) {
          // delete the video if the spec passed and no tests retried
          return del(results.video)
        }
      })
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/reports/screenshots',
    video: true,
    videosFolder: 'cypress/reports/videos'
  },
});
