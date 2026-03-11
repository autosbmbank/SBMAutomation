# LPB Automation - Step-by-Step Implementation Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Design](#architecture--design)
3. [Project Structure](#project-structure)
4. [Technology Stack](#technology-stack)
5. [Setup & Configuration](#setup--configuration)
6. [Key Components](#key-components)
7. [Test Execution Flow](#test-execution-flow)
8. [Writing Tests](#writing-tests)
9. [Page Object Model](#page-object-model)
10. [Reusable Methods](#reusable-methods)
11. [Test Data Management](#test-data-management)
12. [Reporting & Logging](#reporting--logging)
13. [Common Workflows](#common-workflows)
14. [Troubleshooting](#troubleshooting)

---

## Project Overview

**LPBAutomation** is a comprehensive automated testing framework built using:
- **Playwright** for browser automation
- **Cucumber** for BDD (Behavior Driven Development)
- **TypeScript** for type-safe implementation

### Purpose
The framework automates testing of the LPB application, covering various modules including:
- Core module (CIF - Customer Information File creation)
- Account Management
- Withdrawals
- Deposits
- Wholesale operations
- Finance GL operations
- User creation and maintenance
- And more...

### Test Results Organization
Test results are organized by core modules:
- **Core1_test-results**: Individual customer CIF creation tests
- **Core2_test-results**: Corporate joint customer tests
- **Core3_test-results**: Individual type customer tests

---

## Architecture & Design

### Design Pattern: Page Object Model (POM)

```
┌─────────────────────────────────────────────────────────┐
│              Feature Files (BDD Scenarios)              │
│              - Written in Gherkin language              │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│              Step Definition Files                       │
│         - Bridges feature files to page objects          │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│              Page Object Classes                         │
│       - Encapsulates element locators and actions        │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│            Reusable Methods (Utilities)                  │
│     - Common functions used across all page objects      │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│              Playwright (Browser)                        │
│            - Actual browser automation                   │
└─────────────────────────────────────────────────────────┘
```

### Test Execution Flow
```
Hooks (BeforeAll) 
    ↓
Browser Initialization
    ↓
Hooks (Before)
    ↓
Context Creation
    ↓
Feature File Execution
    ├── Step 1 → Page Object → Reusable Methods → Playwright
    ├── Step 2 → Page Object → Reusable Methods → Playwright
    └── Step N → Page Object → Reusable Methods → Playwright
    ↓
Hooks (After)
    ↓
Screenshot/Video Capture & Cleanup
    ↓
Report Generation
```

---

## Project Structure

### Directory Layout

```
LPBAutomation/
│
├── src/
│   ├── helper/                    # Helper utilities and configurations
│   │   ├── browsers/
│   │   │   └── browserManager.ts  # Browser initialization & launch
│   │   ├── env/
│   │   │   ├── env.ts            # Environment setup
│   │   │   ├── .env.test         # Test environment variables
│   │   │   └── .env.dev          # Dev environment variables
│   │   ├── report/
│   │   │   ├── init.ts           # Report initialization
│   │   │   └── report.ts         # Report generation
│   │   ├── types/
│   │   │   └── types.ts          # TypeScript type definitions
│   │   ├── util/
│   │   │   └── logger.ts         # Winston logger configuration
│   │   └── wrapper/
│   │       ├── reusableMethods.ts # Common utility functions
│   │       ├── DBConnectivity.ts  # Database connection utilities
│   │       └── excedata.ts        # Excel data utilities
│   │
│   ├── hooks/
│   │   ├── hooks.ts              # Before/After hooks
│   │   └── pageFixture.ts        # Fixture for page & logger
│   │
│   ├── pages/                    # Page Object Model classes
│   │   ├── LoginPage.ts
│   │   ├── HomePage.ts
│   │   ├── CorePage.ts
│   │   ├── createAccountPage.ts
│   │   ├── RetailDepositPage.ts
│   │   ├── WithdrawalsPage.ts
│   │   ├── WholesalePage.ts
│   │   ├── FinanceGLPage.ts
│   │   └── ... (other page objects)
│   │
│   └── test/
│       ├── features/             # BDD Feature files (Gherkin)
│       │   ├── Core.feature
│       │   ├── Login.feature
│       │   ├── AccountManagement.feature
│       │   ├── Withdrawals.feature
│       │   └── ... (other feature files)
│       │
│       ├── steps/                # Step definitions (Glue code)
│       │   ├── CoreSteps.ts
│       │   ├── LoginPageSteps.ts
│       │   ├── createAccountSteps.ts
│       │   └── ... (other step files)
│       │
│       └── testData/             # Test data files
│           ├── data.json
│           ├── testdata.xlsx
│           └── ... (other test data)
│
├── config/
│   └── cucumber.js              # Cucumber configuration
│
├── test-results/                # Test execution results
│   ├── cucumber-report.html
│   ├── cucumber-report.json
│   ├── logs/                    # Execution logs
│   ├── reports/                 # HTML reports
│   ├── screenshots/             # Test screenshots
│   └── videos/                  # Test recordings
│
├── playwright.config.ts         # Playwright base configuration
├── playwright.service.config.ts # Playwright service config
├── tsconfig.json               # TypeScript configuration
├── package.json                # Node dependencies
├── build.xml                   # Build configuration
└── README.md                   # Project documentation
```

---

## Technology Stack

### Core Dependencies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Playwright** | 1.39.0 - 1.50.1 | Browser automation |
| **Cucumber** | 9.6.0 | BDD test framework |
| **TypeScript** | 5.2.2 | Type-safe JavaScript |
| **Axios** | 1.7.7 | HTTP client for API calls |
| **Winston** | 3.8.2 | Logging |
| **MSSQL** | 10.0.1 | Database connectivity |
| **ExcelJS** | 4.4.0 | Excel file handling |
| **Faker** | 8.4.1 | Test data generation |

### Build & Development Tools

- **Webpack** 5.89.0 - Module bundling
- **ts-node** 10.9.1 - TypeScript execution
- **cross-env** 7.0.3 - Environment variable management
- **ts-loader** 9.5.0 - TypeScript loader for webpack

---

## Setup & Configuration

### Prerequisites
1. **Node.js** (v14 or higher)
2. **npm** or **yarn**
3. **Git**
4. Playwright browsers installed

### Installation Steps

#### Step 1: Clone the Repository
```bash
git clone --branch "branch-name" "https://github.com/your-org/LPBAutomation.git"
cd LPBAutomation
```

#### Step 2: Install Dependencies
```bash
npm install
npx playwright install
```

#### Step 3: Configure Environment Variables

Create `.env` files in `src/helper/env/`:

**`.env.test`** (Test environment)
```
APP_URL=https://test-application-url.com
BROWSER=chrome
HEAD=true
```

**`.env.dev`** (Development environment)
```
APP_URL=https://dev-application-url.com
BROWSER=firefox
HEAD=false
```

#### Step 4: Configure Cucumber

File: `config/cucumber.js`
```javascript
module.exports = {
  default: {
    tags: "@CORE1",              // Filter by tags
    paths: ["src/test/features/"],
    require: ["src/test/steps/*.ts", "src/hooks/hooks.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    parallel: 1
  }
};
```

---

## Key Components

### 1. Hooks System (Lifecycle Management)

**File**: `src/hooks/hooks.ts`

#### BeforeAll Hook
Executes once before all tests:
```typescript
BeforeAll(async function () {
  getEnv();                          // Load environment variables
  browser = await invokeBrowser();   // Initialize browser
});
```

#### Before Hook (Non-Auth Scenarios)
Executes before each scenario:
```typescript
Before(async function ({ pickle }) {
  const scenarioName = pickle.name;
  context = await browser.newContext({
    ignoreHTTPSErrors: true,
    recordVideo: { dir: "test-results/videos" }
  });
  let page = await context.newPage();
  context.setDefaultTimeout(120000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  fixture.page = page;
  fixture.logger = createLogger(options(scenarioName));
});
```

#### Before Hook (Auth Scenarios)
Executes for scenarios tagged with `@AnalystLogin`:
```typescript
Before("@AnalystLogin", async function ({ pickle }) {
  context = await browser.newContext({
    storageState: getStorageState(pickle.name),  // Restore auth state
    recordVideo: { dir: "test-results/videos" }
  });
  const page = await context.newPage();
  fixture.page = page;
  fixture.logger = createLogger(options(scenarioName));
});
```

#### After Hook
Executes after each scenario:
```typescript
After(async function ({ pickle, result }) {
  // Take screenshots on failure
  if (result?.status === Status.FAILED) {
    const screenshot = await fixture.page.screenshot({ 
      path: `test-results/screenshots/${pickle.name}.png` 
    });
  }
  
  // Close context and cleanup
  await context.close();
});
```

#### AfterAll Hook
Executes once after all tests:
```typescript
AfterAll(async function () {
  await browser.close();
});
```

### 2. Fixture System

**File**: `src/hooks/pageFixture.ts`

Provides global access to page and logger:
```typescript
export const fixture = {
  page: undefined as Page,
  logger: undefined as Logger
}
```

**Usage in tests**:
```typescript
import { fixture } from "../../hooks/pageFixture";

// Access page
await fixture.page.click(selector);

// Log messages
fixture.logger.info("Performing action...");
```

### 3. Environment Management

**File**: `src/helper/env/env.ts`

```typescript
export const getEnv = () => {
  if (process.env.ENV) {
    dotenv.config({
      override: true,
      path: `src/helper/env/.env.${process.env.ENV}`
    })
  } else {
    console.error("NO ENV PASSED!");
  }
}
```

**Usage**:
```bash
npm test                                          # Uses default .env.test
ENV=dev npm test                                  # Uses .env.dev
ENV=prod npm test                                 # Uses .env.prod
```

### 4. Browser Manager

**File**: `src/helper/browsers/browserManager.ts`

Handles browser launch based on configuration:
```typescript
export const invokeBrowser = () => {
  const browserType = process.env.BROWSER;
  const executionMode = process.env.HEAD;
  
  const options: LaunchOptions = {
    headless: executionMode === "true" ? false : true
  };
  
  switch (browserType) {
    case "chrome":
      return chromium.launch(options);
    case "firefox":
      return firefox.launch(options);
    case "webkit":
      return webkit.launch(options);
    default:
      throw new Error("Please set the proper browser!");
  }
};
```

### 5. Logger Setup

**File**: `src/helper/util/logger.ts`

Winston logger configuration:
```typescript
export const options = (filename: string) => {
  return {
    transports: [
      new winston.transports.File({
        filename: `test-results/logs/${filename}.log`,
        level: "info"
      })
    ],
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(info => 
        `${info.timestamp} - ${info.level}: ${info.message}`
      )
    )
  };
};
```

---

## Test Execution Flow

### Step-by-Step Execution Process

#### 1. **Pre-Test Execution** (`pretest` script)
```bash
npm run pretest
# Runs: ts-node src/helper/report/init.ts
# Purpose: Initialize report directories and clean up old reports
```

#### 2. **Hook Initialization** (BeforeAll)
- Load environment variables
- Launch browser (Chrome, Firefox, or WebKit)
- Set browser default timeout (120 seconds)

#### 3. **Test Execution** (For each scenario)

**Before Hook**:
- Create new browser context
- Create new page
- Set viewport (1920x1080)
- Initialize logger for the scenario
- Setup video recording

**Feature Execution**:
```
Feature: Core Module Feature
  Scenario: Validate Creation of Individual Customer
    ├── Given: Preconditions
    ├── When: Actions
    ├── Then: Assertions
    └── And: Additional steps
```

**After Hook**:
- Capture screenshot if failed
- Save video recording
- Close browser context
- Write logs

#### 4. **Post-Test Execution** (`posttest` script)
```bash
npm run posttest
# Runs: ts-node src/helper/report/report.ts
# Purpose: Generate HTML report from JSON results
```

### Execution Commands

```bash
# Run tests with default configuration
npm test

# Run only failed tests
npm test:failed

# Run with specific environment
ENV=dev npm test

# Run with specific browser
BROWSER=firefox npm test

# Run in headless mode
HEAD=false npm test

# Run in headed mode (see browser)
HEAD=true npm test
```

### Parallel Execution

Configure in `config/cucumber.js`:
```javascript
parallel: 20  // Run 20 scenarios in parallel
```

---

## Writing Tests

### Test Structure (BDD Approach)

**File**: `src/test/features/Core.feature`

```gherkin
@CORE                                    # Feature tag
Feature: Core Module Feature             # Feature description
 
  @CORE1                                 # Scenario tag
  @CIFCreationforIndividualwithTrackLimits
  Scenario Outline: Validate Creation of Individual Customer with Track Limits enabled
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And User click on New Tab 
    # ... more steps ...
    
    Examples:
      | HomePageTitle                                       | BranchNumber | FunctionName |
      | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       |
```

### Step Definition (Glue Code)

**File**: `src/test/steps/CoreSteps.ts`

```typescript
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import cifCreationPage from "../../pages/CorePage";
import ReusableMethods from "../../helper/wrapper/reusableMethods";

const reusableMethods = new ReusableMethods(fixture.page);
let CifPageloc: cifCreationPage;

setDefaultTimeout(120 * 1000);  // 120 second timeout per step

// Step: User click on New Tab
When("User click on New Tab", async function() {
  CifPageloc = new cifCreationPage(fixture.page);
  fixture.logger.info("clicks on New Tab");
  
  await CifPageloc.handleClFFrame();
  await CifPageloc.clickNewTab();
});

// Step: User enters Full Name
When("User enters Full Name {string}", async function (FullName) {
  await CifPageloc.enterFullName(FullName);
});

// Step: User validates success message
Then("User validates success message", async function () {
  fixture.logger.info("Validating success message");
  await CifPageloc.validateSuccessMessage();
});
```

### Tags & Filtering

#### Purpose of Tags
- Organize tests by feature/module
- Run specific test suites
- Mark special scenarios (smoke, regression, auth)

#### Common Tags
```gherkin
@CORE1          # Core module test 1
@CORE2          # Core module test 2
@AnalystLogin   # Requires analyst authentication
@smoke          # Smoke test (quick validation)
@regression     # Regression test (comprehensive)
@skip           # Skip this scenario
```

#### Run Specific Tag
```bash
# Run only @CORE1 scenarios
cucumber-js --tags="@CORE1"

# Run multiple tags
cucumber-js --tags="@CORE1 or @CORE2"

# Exclude tags
cucumber-js --tags="not @skip"
```

---

## Page Object Model

### Principles
1. **Encapsulation**: Locators hidden within page classes
2. **Reusability**: Methods shared across scenarios
3. **Maintainability**: Changes in UI only affect page object
4. **Readability**: Test steps are business-readable

### Page Object Structure

**File**: `src/pages/CorePage.ts`

```typescript
import { Page } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

export default class CorePage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  // Element Locators (Private)
  private Elements = {
    fullNameField: "//input[@id='CUST_FULL_NAME']",
    shortNameField: "//input[@id='CUST_SHORT_NAME']",
    categoryDropdown: "//select[@id='CUST_CATEGORY']",
    genderRadioMale: "//input[@value='M']",
    genderRadioFemale: "//input[@value='F']",
    dobField: "//input[@id='CUST_DOB']",
    saveBtn: "//input[@value='Save']",
    successMsg: "//span[@id='success_message']",
    newTab: "//button[contains(text(), 'New')]"
  };

  // Public Methods (Used in Step Definitions)

  async handleClFFrame() {
    const frame = await this.page.frameLocator('//iframe[@id="ifr_CLFMain"]');
    return frame;
  }

  async clickNewTab() {
    await this.base.clickElement(this.Elements.newTab);
  }

  async enterFullName(fullName: string) {
    await this.base.enterValue(this.Elements.fullNameField, fullName);
  }

  async enterShortName(shortName: string) {
    await this.base.enterValue(this.Elements.shortNameField, shortName);
  }

  async enterCustomerCategory(category: string) {
    await this.base.selectDropdownByValue(
      this.Elements.categoryDropdown, 
      category
    );
  }

  async selectGender(gender: string) {
    const selector = gender === "Male" 
      ? this.Elements.genderRadioMale 
      : this.Elements.genderRadioFemale;
    await this.base.clickElement(selector);
  }

  async enterDOB(dob: string) {
    await this.base.enterValue(this.Elements.dobField, dob);
  }

  async clickSaveButton() {
    await this.base.clickElement(this.Elements.saveBtn);
  }

  async validateSuccessMessage() {
    await this.base.verifyElementVisible(this.Elements.successMsg);
  }
}
```

### Page Object Best Practices

1. **Naming Convention**
   - Page class: `FeatureNamePage.ts`
   - Methods: Descriptive action names (e.g., `enterFullName`, `clickSaveButton`)

2. **Element Organization**
   - Group related locators
   - Use meaningful names
   - Keep private (encapsulated)

3. **Method Design**
   - One method per user action
   - Return void for actions, specific values for queries
   - Handle waits within methods

4. **Exception Handling**
   ```typescript
   async validateSuccessMessage() {
     try {
       await this.base.verifyElementVisible(
         this.Elements.successMsg,
         5000  // Wait up to 5 seconds
       );
     } catch (error) {
       throw new Error(`Success message not found: ${error}`);
     }
   }
   ```

---

## Reusable Methods

**File**: `src/helper/wrapper/reusableMethods.ts`

This utility class provides common functions used across all page objects.

### Core Methods

#### 1. **Element Interaction**

```typescript
// Click element
async clickElement(locator: string) {
  await this.page.click(locator);
}

// Enter value in input field
async enterValue(locator: string, value: string) {
  await this.page.fill(locator, value);
}

// Clear field and enter value
async clearAndEnterValue(locator: string, value: string) {
  await this.page.fill(locator, "");  // Clear
  await this.page.fill(locator, value);
}

// Select dropdown by value
async selectDropdownByValue(locator: string, value: string) {
  await this.page.selectOption(locator, value);
}

// Select dropdown by label
async selectDropdownByLabel(locator: string, label: string) {
  const options = await this.page.$$(locator + "//option");
  for (const option of options) {
    const text = await option.textContent();
    if (text === label) {
      await option.click();
      break;
    }
  }
}

// Get text from element
async getElementText(locator: string): Promise<string> {
  return await this.page.textContent(locator) || "";
}
```

#### 2. **Verification Methods**

```typescript
// Verify element is visible
async verifyElementVisible(locator: string, timeout: number = 5000) {
  await this.page.waitForSelector(locator, { timeout });
}

// Verify element is hidden
async verifyElementHidden(locator: string) {
  await this.page.waitForSelector(locator, { state: "hidden" });
}

// Verify text in element
async verifyText(locator: string, expectedText: string) {
  const actualText = await this.getElementText(locator);
  expect(actualText).toContain(expectedText);
}

// Verify attribute value
async verifyAttribute(locator: string, attribute: string, value: string) {
  const attrValue = await this.page.getAttribute(locator, attribute);
  expect(attrValue).toBe(value);
}
```

#### 3. **Data Generation**

```typescript
// Generate random number
async generateRandomNumber(length: number): Promise<string> {
  let randomNumber = '';
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(Math.random() * 9) + 1;
    randomNumber += digit.toString();
  }
  return randomNumber;
}

// Generate random string (letters only)
async generateRandomString(length: number): Promise<string> {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return result;
}

// Generate random alphanumeric
async generateAlphanumericValue(length: number): Promise<string> {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return result;
}

// Get current date
async currentDate(): Promise<string> {
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const year = String(currentDate.getFullYear());
  return `${year}-${month}-${day}`;
}

// Get future date
async generatefutureDate(days: number): Promise<string> {
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + days);
  const month = String(futureDate.getMonth() + 1).padStart(2, '0');
  const day = String(futureDate.getDate()).padStart(2, '0');
  const year = String(futureDate.getFullYear());
  return `${year}-${month}-${day}`;
}
```

#### 4. **Wait Methods**

```typescript
// Wait for specific time (milliseconds)
async wait(milliseconds: number) {
  await this.page.waitForTimeout(milliseconds);
}

// Wait for navigation
async waitForNavigation() {
  await this.page.waitForNavigation({ waitUntil: "networkidle" });
}

// Wait for selector to appear
async waitForElement(locator: string, timeout: number = 10000) {
  await this.page.waitForSelector(locator, { timeout });
}
```

#### 5. **Frame Handling**

```typescript
// Get frame by name
async getFrameByName(frameName: string) {
  return await this.page.frame({ name: frameName });
}

// Switch to frame
async switchToFrame(frameLocator: string) {
  return this.page.frameLocator(frameLocator);
}

// Handle iframe operations
async getIframeContent(iframeLocator: string) {
  const frameHandle = await this.page.locator(iframeLocator);
  return frameHandle.contentFrame();
}
```

---

## Test Data Management

### Sources of Test Data

#### 1. **Feature File Examples**
```gherkin
Examples:
  | FullName | ShortName | Category    | Gender |
  | Test1    | TST1      | INDIVIDUAL  | Male   |
  | Test2    | TST2      | CORPORATE   | Female |
```

#### 2. **Excel Files**
**File**: `src/test/testData/testdata.xlsx`

```typescript
import ExcelUtil from "../../helper/wrapper/excedata";

const excelData = new ExcelUtil();
const data = await excelData.readExcelFile("testdata.xlsx", "Sheet1");
// Returns: Array of objects with headers as keys
```

#### 3. **JSON Files**
**File**: `src/test/testData/data.json`

```typescript
import * as fs from "fs";

const testData = JSON.parse(
  fs.readFileSync("src/test/testData/data.json", "utf-8")
);
```

#### 4. **Database**
**File**: `src/helper/wrapper/DBConnectivity.ts`

```typescript
import DBConnectivity from "../../helper/wrapper/DBConnectivity";

const db = new DBConnectivity();
const query = "SELECT * FROM CUSTOMERS WHERE ID = @id";
const result = await db.executeQuery(query, { id: 123 });
```

### Using Faker for Random Data

```typescript
import { faker } from "@faker-js/faker";

// Generate random customer data
const customerData = {
  fullName: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.location.streetAddress(),
  country: faker.location.country()
};
```

---

## Reporting & Logging

### Logging System

**Winston Logger Configuration**
```typescript
import { fixture } from "../../hooks/pageFixture";

// Log levels: error, warn, info, debug
fixture.logger.info("User logged in successfully");
fixture.logger.error("Login failed: Invalid credentials");
fixture.logger.warn("Payment processing delayed");
```

### Report Generation

#### Cucumber HTML Report
- **Location**: `test-results/cucumber-report.html`
- **Format**: Multiple Cucumber HTML Reporter
- **Contains**:
  - Feature summary
  - Scenario pass/fail status
  - Step details
  - Execution time

#### Report Structure
```
Report
├── Features
│   ├── Core Module Feature
│   │   ├── Scenario 1: [PASSED]
│   │   ├── Scenario 2: [FAILED]
│   │   │   └── Step 5: Login failed (Error message)
│   │   └── Scenario 3: [SKIPPED]
│   └── Account Management
│       └── Scenario: [PASSED]
├── Statistics
│   ├── Total: 10 scenarios
│   ├── Passed: 8
│   ├── Failed: 1
│   └── Skipped: 1
└── Execution Summary
    ├── Duration: 25 minutes
    └── Browser: Chrome
```

### Artifacts

#### Screenshots
- Location: `test-results/screenshots/`
- Triggered: On step failure
- Named: `{scenario-name}.png`

#### Videos
- Location: `test-results/videos/`
- Format: WebM
- Created: For every scenario (if enabled)

#### Logs
- Location: `test-results/logs/`
- Named: `{scenario-name}.log`
- Format: Timestamp | Level | Message

### Test Report Initialization & Generation

**Pre-Test Setup** (`src/helper/report/init.ts`):
```typescript
// Clear old test results
// Create fresh directories for current run
// Initialize report metadata
```

**Post-Test Cleanup** (`src/helper/report/report.ts`):
```typescript
// Read cucumber-report.json
// Generate HTML using multiple-cucumber-html-reporter
// Compile test statistics
// Attach screenshots and videos
```

### Accessing Reports

```bash
# After test execution
open test-results/cucumber-report.html    # macOS
start test-results/cucumber-report.html   # Windows
xdg-open test-results/cucumber-report.html # Linux
```

---

## Common Workflows

### Workflow 1: Creating a New Feature Test

#### Step 1: Create Feature File
**File**: `src/test/features/MyFeature.feature`
```gherkin
@MY_FEATURE
Feature: My New Feature

  @MY_TEST_1
  Scenario: Test scenario 1
    Given precondition
    When action is performed
    Then result is validated
```

#### Step 2: Create Page Object
**File**: `src/pages/MyFeaturePage.ts`
```typescript
import { Page } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

export default class MyFeaturePage {
  private base: ReusableMethods;
  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  private Elements = {
    element1: "//selector1",
    element2: "//selector2"
  };

  async performAction() {
    await this.base.clickElement(this.Elements.element1);
  }
}
```

#### Step 3: Create Step Definitions
**File**: `src/test/steps/MyFeatureSteps.ts`
```typescript
import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import MyFeaturePage from "../../pages/MyFeaturePage";

let myFeaturePage: MyFeaturePage;

Given("precondition", async function() {
  myFeaturePage = new MyFeaturePage(fixture.page);
  fixture.logger.info("Setup precondition");
});

When("action is performed", async function() {
  await myFeaturePage.performAction();
});

Then("result is validated", async function() {
  fixture.logger.info("Validating result");
});
```

#### Step 4: Run Tests
```bash
cucumber-js --tags="@MY_FEATURE"
```

### Workflow 2: Debugging a Failed Test

#### Step 1: Review Test Report
```bash
open test-results/cucumber-report.html
# Look for failed scenario and error message
```

#### Step 2: Check Test Logs
```bash
# Logs are in: test-results/logs/{scenario-name}.log
cat "test-results/logs/My Scenario Name.log"
```

#### Step 3: Review Screenshots/Videos
```bash
# Screenshots: test-results/screenshots/
# Videos: test-results/videos/
```

#### Step 4: Run Test in Headed Mode
```bash
HEAD=true npm test
# Browser UI visible, can debug interactively
```

#### Step 5: Add Debug Logs
```typescript
When("action is performed", async function() {
  fixture.logger.info("Starting action");
  await myFeaturePage.performAction();
  fixture.logger.info("Action completed");
  
  // Add explicit waits if timing issues
  await this.page.waitForTimeout(2000);
});
```

### Workflow 3: Running Failed Tests Only

After test execution, failed tests are stored in `@rerun.txt`

```bash
# First run (creates @rerun.txt with failed tests)
npm test

# Re-run only failed tests
npm test:failed

# Or manually
cucumber-js @rerun.txt
```

### Workflow 4: Parallel Test Execution

#### Configure Parallel Runs
**File**: `config/cucumber.js`
```javascript
parallel: 20  // Run 20 scenarios simultaneously
```

#### Run with Parallel Configuration
```bash
npm test
# Automatically uses cucumber's parallel feature
```

#### Important Considerations
- Each scenario runs in isolated context
- No data sharing between parallel scenarios
- Ensure test data is unique per scenario
- Database operations must be transaction-safe

---

## Troubleshooting

### Common Issues & Solutions

#### 1. **Browser Timeout Issues**

**Problem**: Tests timeout waiting for elements

**Solution**:
```typescript
// Increase timeout in hooks.ts
export const timeout = 120 * 1000;  // 120 seconds

// Or in specific step
await this.page.waitForSelector(locator, { timeout: 30000 });
```

#### 2. **Element Not Found**

**Problem**: Playwright can't find element with given locator

**Solutions**:
```typescript
// 1. Check if element is in an iframe
const frame = this.page.frameLocator('//iframe[@id="myFrame"]');
await frame.locator("//button").click();

// 2. Use more specific locator
// Instead of: //button
// Use: //button[@id='submit' and contains(@class, 'primary')]

// 3. Add explicit wait
await this.page.waitForSelector(locator, { timeout: 5000 });
```

#### 3. **Authentication Issues**

**Problem**: Tests can't login or auth state expired

**Solution**: Use `@AnalystLogin` tag
```gherkin
@AnalystLogin
Scenario: Test that requires login
  # Pre-stored auth state will be loaded
```

#### 4. **Flaky Tests**

**Problem**: Tests pass sometimes, fail other times

**Solutions**:
```typescript
// 1. Add explicit waits
await this.page.waitForNavigation({ waitUntil: "networkidle" });

// 2. Wait for element to be stable
await this.page.locator(selector).waitFor({ state: "visible" });

// 3. Handle dynamic content
const elementCount = await this.page.$$eval(selector, el => el.length);

// 4. Increase timeout for network requests
context.setDefaultTimeout(120000);
```

#### 5. **Report Generation Fails**

**Problem**: HTML report not generated after tests

**Solution**: Run posttest script manually
```bash
# Ensure JSON report exists
ls -la test-results/cucumber-report.json

# Run report generation
npx ts-node src/helper/report/report.ts
```

#### 6. **Environment Variables Not Loaded**

**Problem**: App URL or configuration not found

**Solution**:
```bash
# Verify environment file exists
ls -la src/helper/env/.env.test

# Check file contents
cat src/helper/env/.env.test

# Run with specific environment
ENV=test npm test
```

#### 7. **Playright Dependency Issues**

**Problem**: Playwright browsers not installed

**Solution**:
```bash
# Install Playwright and browsers
npm install
npx playwright install

# Or install specific browser
npx playwright install chromium
```

### Debugging Techniques

#### 1. **Enable Console Logging**
```typescript
fixture.page.on('console', msg => {
  fixture.logger.info(`Console: ${msg.text()}`);
});
```

#### 2. **Log Network Requests**
```typescript
fixture.page.on('request', request => {
  fixture.logger.info(`Request: ${request.method()} ${request.url()}`);
});

fixture.page.on('response', response => {
  fixture.logger.info(`Response: ${response.status()} ${response.url()}`);
});
```

#### 3. **Slow Down Execution**
```typescript
// In playwright.config.ts
use: {
  launchArgs: ['--disable-gpu'],
  slowMo: 1000  // Slow down by 1 second
}
```

#### 4. **Use Page Inspector**
```bash
# Launch tests with inspector
PWDEBUG=1 npm test
# Interactive browser with DevTools
```

#### 5. **Take Screenshots at Key Points**
```typescript
await fixture.page.screenshot({ 
  path: `test-results/debug/${Date.now()}.png` 
});
```

---

## Summary

This automation framework provides:

✅ **BDD Testing**: Gherkin syntax for business-readable tests

✅ **Page Object Model**: Maintainable and scalable test structure

✅ **Comprehensive Logging**: Detailed execution logs and reports

✅ **Parallel Execution**: Run multiple scenarios simultaneously

✅ **Screenshots & Videos**: Visual evidence of test execution

✅ **Data Generation**: Faker library for random test data

✅ **Database Connectivity**: Direct DB access for complex validations

✅ **Reusable Methods**: Common utilities reduce code duplication

✅ **Environment Management**: Support for multiple environments (dev, test, prod)

✅ **Robust Hooks System**: BeforeAll, Before, After, AfterAll lifecycle management

---

## Quick Reference Commands

```bash
# Setup
npm install
npx playwright install

# Run Tests
npm test                          # Run all tests
ENV=dev npm test                  # Run with dev environment
HEAD=true npm test                # Run in headed mode
npm test:failed                   # Re-run failed tests
BROWSER=firefox npm test          # Run with Firefox

# View Reports
open test-results/cucumber-report.html

# Debug
PWDEBUG=1 npm test               # Interactive debugging
```

---

**Last Updated**: January 28, 2026
**Framework Version**: 1.0.0
**Project**: LPB Automation Testing
