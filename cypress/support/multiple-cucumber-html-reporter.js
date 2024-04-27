const report = require('multiple-cucumber-html-reporter');

let today = new Date();
let date =
  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
let time =
  today.getHours() + 'h' + today.getMinutes() + 'm' + today.getSeconds() + 's';
let dateTime = date + '_' + time;

report.generate({
  jsonDir: 'cypress/cucumber-json/',
  reportPath: 'cypress/reports/MultipleReport_' + dateTime + '.html',
  metadata: {
    browser: {
      name: 'Chrome',
      version: '86.0.4240'},
      device: 'Local test machine',
      platform: {
        name: 'Ubuntu',
        version: '22.04 LTS',
      },
    },
    customData: {
      title: 'Run info',
      data: [
        { label: 'Project', value: 'Medium Cypress project' },
        { label: 'Release', value: '1.0.1' },
        //{label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
        //{label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
      ],
    },
  });