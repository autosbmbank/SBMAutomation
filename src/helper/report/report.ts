const report = require("multiple-cucumber-html-reporter");
const os = require("os");
const fsModule = require("fs");
const path = require("path");
const dotenv = require("dotenv");

 
dotenv.config({ path: '\\src\\helper\\env\\.env.test' });
 
const browserName = "Chrome" //process.env.BROWSER;
const browserVersion ="140" // process.env.BROWSER_VERSION || "";
const deviceName = os.hostname();
const platformName = os.platform();
const platformVersion = os.release();
 
// console.log("Device Name:", deviceName);
// console.log("Platform Name:", platformName);
// console.log("Platform Version:", platformVersion);
// console.log("Browser Name:", browserName);
// console.log("Browser Version:", browserVersion);
 
report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Automation Report",
    pageTitle: "Automation Test Results",
    displayDuration: false,
    metadata: {
        browser: {
            name: browserName,
            version:browserName,
        },
        device: deviceName,
        platform: {
            name: platformName,
            version: platformVersion,
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Automation" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
       
    },
});