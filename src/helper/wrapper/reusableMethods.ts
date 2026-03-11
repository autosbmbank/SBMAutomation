import { Page, expect, Keyboard } from "@playwright/test";
import axios from 'axios';
import { EventEmitter } from "node:stream";
// import * as tinycolor from 'tinycolor2';
let hashmap = new Map<string, string>();
let newMap = new Map<any, any>();
export let eyeConResponse;

export default class ReusableMethods {

  constructor(private page: Page) {
  }

  // Function to generate a random number with given length
  async generateRandomNumber(length: number) {
    let randomNumber = '';
    for (let i = 0; i < length; i++) {
      const digit = Math.floor(Math.random() * 9) + 1; // Generate a random digit (1-9)
      randomNumber += digit.toString(); // Append the digit to the number string
    }
    console.log("Number " + randomNumber)
    return randomNumber;
  }

  // Function to generate a random alphanumeric with given length
  async generateAlphanumericValue(length:number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    console.log(result);
   
    return result;
  }

  //Function to generate the random string with geven length
  async generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
   
    return result;
  }

  async getTheCurrentDate(locator) {
    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1);
    const day = String(currentDate.getDate());
    const year = String(currentDate.getFullYear());
    const formattedCurrentDate = `${month}/${day}/${year}`;
    console.log(formattedCurrentDate);
    this.enterValue(locator, formattedCurrentDate);
  }

  async currentDate(): Promise<string> {
    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const year = String(currentDate.getFullYear());
   // const formattedCurrentDate = `${month}/${day}/${year}`;
    const formattedCurrentDate = `${year}-${month}-${day}`;
    console.log(formattedCurrentDate);
    return formattedCurrentDate;
  }

   async generatefutureDate(days){
   const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + days);
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');
    const year = String(futureDate.getFullYear());
    const formattedfutureDate = `${year}-${month}-${day}`;
    console.log(formattedfutureDate);
    return formattedfutureDate;
  }

  async getTheFutureDate(months) {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    // Add 6 months to the current date
    futureDate.setMonth(currentDate.getMonth() + months);
    const month = String(futureDate.getMonth() + 1);
    const day = String(futureDate.getDate());
    const year = String(futureDate.getFullYear());
    const formattedFutureDate = `${month}/${day}/${year}`;
    console.log(formattedFutureDate);
    return formattedFutureDate;
  }

  // Generate a past date with the specified number of days in the mmddyy format
  generatePastDate(months) {
    const currentDate = new Date();
    const pastDate = new Date(currentDate);
    pastDate.setMonth(currentDate.getMonth() - months);
    const month = String(pastDate.getMonth() + 1);
    const day = String(pastDate.getDate());
    const year = String(pastDate.getFullYear());
    const formattedpastDate = `${year}-${month}-${day}`;
    console.log(formattedpastDate);
    return formattedpastDate;
  }

  async generatePastDateDays(days) {
    const currentDate = new Date();
    const pastDate = new Date(currentDate);
    pastDate.setDate(currentDate.getDate() - days);
    const month = String(pastDate.getMonth() + 1).padStart(2, '0');
    const day = String(pastDate.getDate()).padStart(2, '0');
    const year = String(pastDate.getFullYear());
    const formattedPastDate = `${month}/${day}/${year}`;
    console.log(formattedPastDate);
    return formattedPastDate;
  }
 

  // Generate a future date with the specified number of days in the mmddyy format
  generateFutureDate(locator, days) {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + days);
    console.log(" Date  " + futureDate.toLocaleDateString());
    this.enterValue(locator, futureDate.toLocaleDateString());
    return futureDate.toLocaleDateString();
  }

  async randomnumberarray(numbers: number[]) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];

  }

  //Navigate to URL on the browser
  async goto(url: any) {
    await this.page.goto(url, {
      waitUntil: "domcontentloaded"
    });
  }

  // Navigate forward in the browser 
  async navigateForward() {
    await this.page.goForward();
  }

  // Navigate back in the browser 
  async navigateBack() {
    await this.page.goBack();
  }

  // Refresh the current page
  async refreshPage() {
    await this.page.reload();
  }


  // Scroll to a specific element on the page
  async scrollPage(locator: any) {
    await this.page.$eval(locator, (element) => {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    });
  }

  // Scroll to a specific element on the page
  async scrollToElement(locator: any) {
    await locator.scrollIntoViewIfNeeded();
  }

  // Simulate mouse hover over a specific element
  async mouseHover(locator: any) {
    await this.page.locator(locator).hover();
  }

  // Get the title of the current page
  async getPageTitle() {
    return await this.page.title();
  }
  async imagevisible(locator) {
    const image = this.page.locator(locator); // Replace with your actual selector
    // Check if the image is visible
    await expect(image).toBeVisible();
    // Check if the image has loaded properly
    const imageStatus = await image.evaluate((img) => {
      const imageElement = img as HTMLImageElement;
      return imageElement.complete && imageElement.naturalWidth > 0;
    });
    // Validate that the image is not broken
    expect(imageStatus).toBe(true);
  }
  //Perform Click operation
  async waitAndClick(locator: any) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor({
        state: "visible", timeout: 20 * 1000
      });
      await element.click();
    } catch (error) {
      console.log("Error during click action:" + error);
      throw error;
    }
  }
  async waitforElement(locator: any) {
    const element = this.page.locator(locator);
    await element.waitFor({
      state: "visible"
    });
  }

  async doubleClick(locator: any) {
    const element = this.page.locator(locator);
    await element.dblclick();
    //this.netWorkTabDetails()
  }

  //Perform Click operation for hidden element(JS click)
  async jsClick(locator: any) {
    try {
      const element = this.page.locator(locator);
      await element.dispatchEvent('click');
    } catch (error) {
      console.log("Error during click action:" + error);
      throw error;
    }
  }

  //Enter the value in to text box
  async enterValue(locator, value) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor();
      await this.clearText(locator);
      await this.page.locator(locator).fill(value);
    } catch (error) {
      console.log("Error occured during entering text:" + error);
      throw error;
    }
  }

  async wait() {
    await this.page.waitForTimeout(3000);
  }
  //Get the text
  async getElementText(locator) {
    try {
      const text = await this.page.locator(locator).innerText();
      return text.trim();
    } catch (error) {
      console.log("Error during fetching element text:" + error);
      throw error;
    }
  }

  //Get the List of values using same locator

  async getTheListOfValues(locator) {
    const tableLocator = await this.page.locator(locator);
    const actualValues = await tableLocator.allInnerTexts();
    console.log("===============" + actualValues)
    const actualVal = JSON.stringify(actualValues);
    return actualVal

  }
  //Compare the exact texts
  async compareExactText(locator, expText) {
    try {
      const text = await this.page.locator(locator).innerText();
      const actualText = text.trim();
      expect(actualText).toBe(expText);
    } catch (error) {
      console.log("Error occurred comparing text:" + error);
      throw error;
    }
  }

  async comparePrepopulateText(locator, expText) {
    const text = await this.page.locator(locator).inputValue();
    const actualText = text.trim();
    console.log("actualText" + actualText);
    console.log("expText" + expText);
    expect(actualText).toBe(expText);
  }

  // Check if the text of a specific element contains the provided partial text
  async checkPartialText(locator, partialText) {
    try {
      await this.ElementWait(locator);
      let text = await this.page.locator(locator).innerText();
      text = text.trim();
      console.log("partialText" + partialText);
      console.log("text" + text);
      if (text.includes(partialText))
        expect(true).toBe(true)
      else
        throw new Error('Text mismatched');
    } catch (error) {
      console.log("Error occurred comparing text:" + error);
      throw error;
    }
  }

  // Check the presence of a specific element
  async checkElementPresence(locator) {
    if (await this.page.waitForSelector(locator))
      expect(true).toBe(true)
    else
      throw new Error('Element not presented');
  }

  async elementVisible(locator) {
    const element = this.page.locator(locator);
    // await this.page.waitForSelector(locator, { state: 'visible' });
    let val = await element.isVisible({ timeout: 5000 });
    return val;
  }

  async clickOnDefaultPopUp(locator) {
    const element = await this.page.locator(locator)
    if (element.isVisible) {
      element.click();
      //this.netWorkTabDetails()
    }

    else
      console.log("error")
  }

  // Check if a specific element is enabled
  async checkElementEnable(locator) {
    await expect(await this.page.locator(locator)).toBeEnabled();
  }


  // Check if a specific element is disabled
  async checkElementDisabled(locator) {
    await expect(await this.page.locator(locator)).toBeDisabled();
  }

  async checkElementDisabled1(locator) {
    await this.page.waitForSelector(locator);

    // Log button state for debugging
    const button = await this.page.locator(locator);
    const isDisabled = await button.isDisabled();
    console.log('Is button disabled:', isDisabled);

    // Expect the button to be disabled
    expect(isDisabled).toBe(true);
    // const button = await this.page.locator(locator);
    // const isDisabled = await button.isDisabled();

    // // Assert that the button is disabled
    //   expect(isDisabled).toBe(true);

    // const button = await this.page.locator(locator);
    // // Check if it has 'disabled' attribute
    // const isDisabled = await button.getAttribute('disabled');
    // expect(isDisabled).not.toBeNull();

  }


  // Check if a specific element is displayed
  async isElementDisplayed(locator) {
    await this.page.waitForTimeout(5000)
    await this.page.waitForSelector(locator, { state: "visible", timeout: 15 * 1000 });
    await expect(await this.page.locator(locator)).toBeVisible();
  }


  // Check if a specific element is not displayed
  async checkElementNotDisplayed(locator) {
    try {
      const value = await this.page.isVisible(locator);
      throw new Error('Element is presented' + value);
    }
    catch (error) {
      expect(true).toBe(true)
    }
  }

  // Check if a specific checkbox is checked
  async isCheckboxChecked(locator) {
    await expect(await this.page.locator(locator)).toBeChecked();

  }

  // Check if a specific checkbox is Unchecked
  async isCheckboxUnChecked(locator) {
    if (expect(await this.page.locator(locator).isChecked()).toBeFalsy) {
      expect(true).toBe(true)
    }


  }
  async isCheckboxChecked1(selector: string): Promise<boolean> {
    // page=fixture.page;
    // Check if the checkbox is checked
    const isChecked = await this.page.$eval(selector, (checkbox: HTMLInputElement) => checkbox.checked);
    return isChecked;
  }
  async selectdropdown12() {
    // Select the dropdown element
    const dropdownSelector = 'select#dropdown-id'; // Replace with your dropdown's selector// Get the selected value
    const selectedValue = await this.page.$eval(dropdownSelector, (dropdown) => {
      const selectedOption = (dropdown as HTMLSelectElement).selectedOptions[0];
      return selectedOption ? selectedOption.value : null;
    });
    // console.log(`Selected value: ${selectedValue}`);
  }


  // Clear the text from a specific input field or textarea
  async clearText(loc) {
    await this.page.locator(loc).fill('');
    await this.page.waitForTimeout(1500);
  }

  // Select the dropdown using Select tag
  async selectDropDown(locator, value) {
    let drpdwn = await this.page.locator(locator);
    await drpdwn.selectOption({ value: value });
  }

  // Select the dropdown using div tag
  async selectDropDownUsingDiv(locator, value) {
    await this.page.locator(locator).fill(value);
    await this.page.waitForTimeout(1000);
    await this.page.getByText(value).click();
    //this.netWorkTabDetails()
  }

  // Select an option from an auto-suggest list
  async selectOptionFromAutoList(locator, optionText) {
    await locator.type(optionText); // Type into the input field to trigger the appearance of the auto-suggest list
    const optionSelector = `text=${optionText}`; // Use the text selector to select the option from the list
    await this.page.click(optionSelector); // Click on the option to select it
  }

  // Compare the multiple values with single locator
  async validateListOfValues(locator, expectedValues) {
    // Getting values from application
    const tableLocator = await this.page.locator(locator);
    const actualValues = await tableLocator.allInnerTexts();
    const actualVal = JSON.stringify(actualValues);
    console.log("===============" + actualVal);
    // Getting values from fearue file
    const objectAsString = JSON.stringify(expectedValues);
    const value = objectAsString.split(":");
    const fromFeature = value[1].replace("}", "").replace("]", "").replace("[", "");
    console.log("fromFeature " + fromFeature);
    expect(actualVal).toBe(fromFeature)
  }

  // Compare the multiple values with single locator ignore the empty columns
  async validateListOfValuesIgnoreEmptyColumns(locator, expectedValues) {
    // Getting values from application
    await this.page.waitForTimeout(1000);
    const tableLocator = await this.page.locator(locator);
    let actualValues = await tableLocator.allInnerTexts();
    actualValues = actualValues.filter((text) => text.trim() !== '');

    const actualVal = JSON.stringify(actualValues);
    // Getting values from fearue file
    const objectAsString = JSON.stringify(expectedValues);
    const value = objectAsString.split(":");
    const fromFeature = value[1].replace("}", "").replace("]", "").replace("[", "");
    expect(fromFeature).toBe(actualVal);
  }
  async Label(Label: string) {

    let labelEle = `//span[contains(text(),'${Label}')]/parent::label/following-sibling::span//span[@class='ng-arrow-wrapper']`;

    await this.page.click(labelEle);

  }

  // Accept the popup
  async popUpAccept(dialog) {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  }

  // Dismiss the popup
  async popUpDismiss(dialog) {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
  }

  //Upload a file 
  async uploadFile(filePath, locator) {
    const fileInput = await this.page.locator(locator);
    // Upload the file
    if (fileInput) {
      await fileInput.setInputFiles(filePath);
      console.log('File uploaded successfully');
    } else {
      console.error('File input element not found');
    }
  }


  //Get the selected option from the dropdown list
  async getFirstSelectedOption(locator) {
    await this.page.waitForSelector(locator)
    const select = this.page.locator(locator);
    const selectedOption = await select.evaluate((node: HTMLSelectElement) => node.options[node.options.selectedIndex].textContent);
    return selectedOption.trim()
  }
  async getdropdownselectedtext(locator) {
    await this.page.waitForSelector(locator)
    // Select the dropdown element
    const dropdown = await this.page.$(locator); // Replace with your dropdown selector

    // Get the selected option element
    const selectedOption = await dropdown.$('option:checked');

    // Retrieve the text content of the selected option
    const selectedText = await selectedOption.textContent();
    return selectedText;
  }
  // async stext(locator){
  //   const selectedValue = await locator.evaluate((select) => {
  //     const selectedOption = select.querySelector('option:checked');
  //     if (!selectedOption) {
  //       throw new Error('Selected option not found');
  //     }
  //     return selectedOption.value;
  //   });

  //   console.log('Selected value:', selectedValue);

  //   // Use JavaScript to get the text corresponding to the selected value
  //   const selectedText = await locator.evaluate((select, value) => {
  //     const selectedOption = Array.from(select.options).find(option => option.value === value);
  //     if (!selectedOption) {
  //       throw new Error('Selected option text not found');
  //     }
  //     return selectedOption.text;
  //   }, selectedValue);
  //   console.log('Selected text:', selectedText);
  // }

  // Select the dropdown using text
  async selectDropDownbyText(locator, value) {
    await this.page.waitForSelector(locator)
    let drpdwn = await this.page.locator(locator);
    await drpdwn.selectOption({ label: value });
  }
  // Select the dropdown using index
  async selectDropDownoptionbyIndex(locator, value) {
    let drpdwn = await this.page.locator(locator);
    await drpdwn.selectOption({ index: value });
  }
  // Select the dropdown using value
  async selectDropDownoptionbyValue(locator, value) {
    let drpdwn = await this.page.locator(locator);
    await drpdwn.selectOption({ value: value });
  }

  async getElementTextContent(locator) {
    const text = await this.page.locator(locator).textContent();
    return text.trim();
  }

  async keyBoardActions(action) {
    const keyboard = this.page.keyboard;
    //  const keyboard = this.page.keyboard;
    switch (action) {
      case 'F2':
        await keyboard.press('F2');
        break;
      case 'Escape':
        await keyboard.press('Escape');
        break;
      case 'Backspace':
        await keyboard.press('Backspace');
        break;
      case 'AltS':
        await keyboard.press('Alt+S');
        break;
      case 'AltE':
        await keyboard.press('Alt+E');
        break;
      case 'AltP':
        await keyboard.press('Alt+P');
        break;
      case 'AltD':
        await keyboard.press('Alt+D');
        break;
      case 'AltA':
        await keyboard.press('Alt+A');
        break;
      case 'AltC':
        await keyboard.press('Alt+C');
        break;
      case 'AltI':
        await keyboard.press('Alt+I');
        break;
      case 'AltH':
        await keyboard.press('Alt+H');
        break;
      case 'AltV':
        await keyboard.press('Alt+V');
        break;
      case 'AltW':
        await keyboard.press('Alt+W');
        break;
      case 'AltO':
        await keyboard.press('Alt+O');
        break;
      case 'AltF':
        await keyboard.press('Alt+F');
        break;
      case 'Tab':
        await keyboard.press('Tab');
        break;
      case 'Enter':
        await keyboard.press('Enter');
        break;
      case 'ArrowLeft':
        await keyboard.press('ArrowLeft');
        break;
      case 'ArrowRight':
        await keyboard.press('ArrowRight');
        break;
      case 'ArrowUp':
        await keyboard.press('ArrowUp');
        break;
      case 'ArrowDown':
        await keyboard.press('ArrowDown');
        break;
      // case 'AltC':
      //   console.log("veeru")
      //   await keyboard.down('Alt');
      //   await keyboard.press('KeyC');
      //   await keyboard.up('Alt');
      //   break;
      case 'AltX':
        await keyboard.press('Alt+X');
        break;
      case 'CtrlX':
        await keyboard.press('Control+X');
        break;
      case 'CtrlC':
        await keyboard.press('Control+C');
        break;
      case 'AltY':
        await keyboard.press('Alt+Y');
        break;
      case 'AltZ':
        await keyboard.press('Alt+Z');
        break;

      case 'AltT':
        await keyboard.press('Alt+T');
        break;
      case 'Y':
        await keyboard.press('Y');
        break;
      case 'N':
        await keyboard.press('N');
        break;
      case 'P':
        await keyboard.press('P');
        break;
      case 'O':
        await keyboard.press('O');
        break;
      case 'S':
        await keyboard.press('S');
        break;
      case 'C':
        await keyboard.press('C');
        break;
      case 'A':
        await keyboard.press('A');
        break;
      case 'D':
        await keyboard.press('D');
        break;
      case 'R':
        await keyboard.press('R');
        break;
      case 'H':
        await keyboard.press('H');
        break;
      case 'CtrlU':
        await keyboard.press('Control+U');
        break;
      case 'CtrlS':
        await keyboard.press('Control+S');
        break;
      case 'L':
        await keyboard.press('L');
        break;
      case 'V':
        await keyboard.press('V');
        break;
      case 'AltL':
        await keyboard.press('Alt+L');
        break;
      case 'AltU':
        await keyboard.press('Alt+U');
        break;
      case 'AltS':
        await keyboard.press('Alt+S');
        break;
      // Add more cases for other keyboard actions as needed
      default:
        console.error('Invalid keyboard action');
    }
  }
  //to enter the text one by one characters
  async enterValue1(locator, value) {
    const element = this.page.locator(locator);
    await this.clearText(locator);
    await this.page.locator(locator).type(value);
  }

  //to select the dropdown having span tag
  async ngSelectTextFromDropdownHavingSpanTag(label, option) {
    try {
      const q = `//span[contains(text(),'${label}')]/parent::label/following-sibling::span//span[@class='ng-arrow-wrapper']`;
      const element = await this.page.waitForSelector(q);
      await element.click();
      //this.netWorkTabDetails()
      await this.page.waitForTimeout(400);
      const queryEle = `//ng-dropdown-panel//div[@role='option']/span[contains(text(),'${option}')]`;
      const valElement = await this.page.waitForSelector(queryEle);
      await valElement.click();
      //this.netWorkTabDetails()
      await this.page.waitForTimeout(1000);
    } catch (ex) {
      console.error(ex.stack);
      throw new Error(ex.stack);
    }
  }

  async MarkSettingNo(setting) {
    let locator = `//div//label[contains(.,'${setting}')]/following-sibling::span//input`;
    console.log("===================" + locator)
    const element = await this.page.locator(locator);
    console.log("===================" + element)
    const elementId = await element.getAttribute('id');
    const elementName = await element.getAttribute('name');
    if (elementId == (elementName)) {
      var s = `//div//label[contains(.,'${setting}')]/following-sibling::span//input[@id='${elementId}']`
      console.log("================" + s)
      await this.jsClick(s)
    }
  }

  async MarkSettingYes(setting) {
    let locator = `//div//label[contains(.,'${setting}')]/following-sibling::span//input`;
    const element = await this.page.locator(locator);
    const elementId = await element.getAttribute('id');
    const elementName = await element.getAttribute('name');
    if (elementId != (elementName)) {
      var s = `//div//label[contains(.,'${setting}')]/following-sibling::span//input[@id='${elementId}']`
      await this.jsClick(s)
    }
  }
  async isDropdownSelected(locator) {
    const selectedOption = await locator.getAttribute('innerText');
    if (selectedOption.length > 0)
      expect(true).toBe(true)
  }

  //Get the prepopulated text from the text box
  async getText(locator) {
    const text = await this.page.waitForSelector(locator)
    const enteredText = await text.inputValue()
    console.log("====" + enteredText)
    return enteredText.trim();
  }

  async verifyDropDownItemsAvailable(locator) {
    const dropdownOptions = await this.page.$(locator);
    const options = await dropdownOptions.$$('option');
    const optionsCount = options.length;
    //console.log("==================" + optionsCount)
    // Validate if the length of options is greater than 1
    if (optionsCount > 1) {
      console.log('Dropdown has more than one value');
    } else {
      throw new Error('No value exists in Rx Origin dropdown');
    }
  }

  async getActiveElementOntheCurrentPage() {
    try {
      const activeElementId = await this.page.evaluate(() => {
        const activeElement = document.activeElement;
        return activeElement ? activeElement.id : null;
      });
      console.log(`Active element ID is: ${activeElementId}`);
      return activeElementId;
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }

  async validateElementAsActive(locator) {
    const id = await this.getActiveElementOntheCurrentPage()
    let element = `//*[@id='${id}']`
    const locatorString = locator.toString();
    console.log("Locatorex " + locatorString)
    console.log("Locator " + element)
    expect(locatorString).toBe(element)
  }

  async validateElementAsActive1(locator) {
    const id = await this.getActiveElementOntheCurrentPage()
    let element = `//input[@id='${id}']`
    const locatorString = locator.toString();
    console.log("Locatorex " + locatorString)
    console.log("Locator " + element)
    expect(locatorString).toBe(element)
  }

  async BGcolor(locator) {
    await this.page.waitForSelector(locator); // Replace with actual selector

    const elementHandle = await this.page.$(locator); // Replace with the actual selector

    // Pass the element handle into evaluate
    const backgroundColor = await this.page.evaluate((element) => {
      return window.getComputedStyle(element!).backgroundColor;
    }, elementHandle);

    console.log('Background color:', backgroundColor);
    // return backgroundColor
    const value = await this.getColorName(backgroundColor);
    return value;
  }

  async getBackGroundColor(locator) {
    // Replace 'your-selector' with the specific CSS selector for your object
    const color = await this.page.$eval(locator, (element: Element) => {
      const styles = getComputedStyle(element);
      return styles.background; // Retrieves the 'color' property of the element
    });

    console.log('Color of the object:', color);

    // Regular expression pattern to match the RGB value
    const rgbPattern = /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/;

    // Find the RGB value in the string
    const match = color.match(rgbPattern);
    let rgbValue;
    // Check if a match is found and extract the RGB value
    if (match) {
      rgbValue = match[0];
      //console.log(rgbValue); // Output: rgb(247, 148, 29)
    } else {
      console.log('No RGB value found in the string.');
    }
    const value = await this.getColorName(rgbValue);
    return value;
  }

  async getTextColor(locator) {
    // Replace 'your-selector' with the specific CSS selector for your object
    const color = await this.page.$eval(locator, (element: Element) => {
      const styles = getComputedStyle(element);
      return styles.color; // Retrieves the 'color' property of the element
    });

    console.log('Color of the object:', color);

    // Regular expression pattern to match the RGB value
    const rgbPattern = /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/;

    // Find the RGB value in the string
    const match = color.match(rgbPattern);
    let rgbValue;
    // Check if a match is found and extract the RGB value
    if (match) {
      rgbValue = match[0];
      //console.log(rgbValue); // Output: rgb(247, 148, 29)
    } else {
      console.log('No RGB value found in the string.');
    }
    const value = await this.getColorName(rgbValue);
    return value;
  }

  async getColorName(rgb) {
    const colorMap: { [key: string]: string } = {

      'rgb(246, 37, 26)': 'red',
      'rgb(189, 54, 47)': 'lightred',
      'rgb(0, 0, 255)': 'blue',
      'rgb(81, 163, 81)': 'green',
      'rgb(0, 100, 0)': 'darkgreen',
      'rgb(144, 238, 144)': 'lightgreen',
      'rgb(134, 224, 150)': 'pistagreen',
      'rgb(66, 156, 208)': 'lightblue',
      'rgb(255, 165, 0)': 'orange',
      // 'rgb(134,224,150)':'Green',
      'rgb(128, 128, 128)': 'grey',
      'rgb(179, 179, 179)': 'lightgrey',
      'rgb(247, 148, 29)': 'lightorange',
      'rgb(255, 255, 255)': 'white',
      'rgb(27, 32, 51)': 'black',
      'rgb(0, 0, 0)': 'pureblack',
      'rgb(49, 175, 229)': 'skyblue',
      'rgb(255, 0, 0)': 'red',
      'rgb(95, 176, 213)': 'pencilblue',
      'rgb(255, 153, 153)': 'peach',
      'rgb(95, 175, 213)': 'tabblue',
      'rgb(0, 128, 0)': 'tabgreen',
      'rgb(127, 255, 0)': 'PDCGreen',
      'rgb(255, 193, 7)': 'PDCYellow',
      'rgb(52, 229, 52)': 'brightgreen',
      'rgb(204, 0, 51)': 'maroon',
    };

    return colorMap[rgb] || null;
  }


  async compareNotequalText(obj1: any, obj2: any) {
    return JSON.stringify(obj1) !== JSON.stringify(obj2);
  }

  async ctrlShortcut(KeyVal) {
    await this.page.waitForTimeout(500);
    await this.page.keyboard.down('Control');
    await this.page.keyboard.press(KeyVal);
    await this.page.keyboard.up('Control');
  }

  async altShortcut(KeyVal) {
    await this.page.waitForTimeout(500);
    await this.page.keyboard.down('Alt');
    await this.page.keyboard.press(KeyVal);
    await this.page.keyboard.up('Alt');
  }

  async singlekeyboardactions(key: string) {
    await this.page.keyboard.press(key)
  }

  async getRxForRefillWizard(rxNo) {
    const refillWizRx: { [key: string]: string } = {
      'easyRef1': '114862',
      'easyRef2': '114041',
      'easyRef3': '506900',
      'easyRef4': '506901',
    }
    return refillWizRx[rxNo] || null;
    await this.page.waitForTimeout(2000);
  }

  async generateRandomLastName() {
    const lastName = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'García', 'Rodriguez', 'Martinez'];

    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];

    return `${randomLastName}`;
  }

  async generateRandomFirstName() {
    const firstName = ['James', 'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Sophia', 'Jackson', 'Isabella', 'Lucas'];

    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];

    return `${randomFirstName}`;
  }


  async generateRandomDOB() {

    const minDate = new Date(1950, 0, 1); // January 1, 1950
    const maxDate = new Date(2005, 11, 31); // December 31, 2005

    const randomTimestamp = minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());
    const randomDate = new Date(randomTimestamp);

    // Format the date as "MM/DD/YYYY"
    const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
    const day = randomDate.getDate().toString().padStart(2, '0');
    const year = randomDate.getFullYear();

    return `${month}/${day}/${year}`;
  }

  async getPassword(user: string) {
    const passwords: { [key: string]: string } = {
      'AA': 'Sails@1234',
      'ap': 'Sails@1234',
      'at': 'Sails@1234',
      'a1': 'Anusha@121',
      'a3': 'Anusha@121',
      'nr': 'Radhika@123',
      'a2': 'Anusha@121',
      'rn': 'Radhika@123',
      'sam': 'Anusha@1234'
    }
    return passwords[user] || null;
    await this.page.waitForTimeout(2000);
  }

  async showRxDropDown(label: string, option: string) {
    let lbl = `//span[contains(text(),'${label}')]/parent::label/following-sibling::span//span[@class='ng-arrow-wrapper']`;
    await this.isElementDisplayed(lbl);
    await this.waitAndClick(lbl);
    await this.page.waitForTimeout(1000);
    let opt = `//div[@role='combobox']/ancestor::ng-select//span[contains(text(),'${option}')]`;
    await this.page.waitForTimeout(2500);
    await this.jsClick(opt);
    await this.page.waitForTimeout(2500);
  }

  async ngMultiSelectTextFromDropdown(label: string, option: string) {
    try {
      const q = `//span[contains(text(),'${label}')]/parent::label/following-sibling::span//span[@class='ng-arrow-wrapper']`;
      const element = await this.page.waitForSelector(q);
      await element.click();
      //this.netWorkTabDetails()
      await this.page.waitForTimeout(400);
      const queryEle = `//ng-dropdown-panel//div[@role='option']/div/div[contains(text(),'${option}')]`;
      const valElement = await this.page.waitForSelector(queryEle);
      await valElement.click();
      //this.netWorkTabDetails()
      await this.page.waitForTimeout(1000);
    }
    catch (ex) {
      console.error(ex.stack);
      throw new Error(ex.stack);
    }
  }
  async verifySectionHeaderTitle(title: string) {
    const tit = `//*[contains(@class,'eprx--header__heading')and contains(.,'${title}')]`;
    //const ttl = await this.page.waitForSelector(tit);
    await this.isElementDisplayed(tit);
    await this.page.waitForTimeout(1000);
  }
  async editIconInAccSettings(setting: string) {
    const icon = `//div[contains(text(),'${setting}')]/following-sibling::div/i`;
    //const ttl = await this.page.waitForSelector(tit);
    await this.isElementDisplayed(icon);
    await this.jsClick(icon);
    await this.page.waitForTimeout(1000);
  }
  async performModalActions(btnName: string) {
    const icon = `//div[@class='modal-footer']//button[normalize-space(text())='${btnName}']`;
    if (btnName == "Transmit Reversal" || btnName == "Cancel" || btnName == "OK" || btnName == "Reverse and Re-Transmit" || btnName == "PROCESS AND HOLD" || btnName == "PROCESS AND TR-NOW")
      await this.jsClick(icon);
    await this.page.waitForTimeout(1000);
  }
  async clickTab(tabName: string) {
    const tab = `//app-security-tabs//ul/li//div[contains(text(),'${tabName}')]`;
    const tabnm = await this.page.locator(tab);
    const isEnable = await tabnm.isEnabled();
    if (isEnable) {
      await this.jsClick(tab);
      //const cssTab = `//a/div/div[contains(text(),'${tabName}')]`;
      //Need to Add Tabs Colouring
    }
  }
  async CheckModalHeader(title: string) {
    try {
      const popup = `//div[@class='modal-header']//h4[contains(text(),'${title}')]`;
      await this.isElementDisplayed(popup);
    }
    catch (error) {
      console.error("Popup is not visible")
    }

  }

  async ShowRxdropdown(label, option) {
    try {
      const q = `//span[contains(text(),'${label}')]/parent::label/following-sibling::span//span[@class='ng-arrow-wrapper']`;
      const element = await this.page.waitForSelector(q);
      await element.click();
      //this.netWorkTabDetails()
      await this.page.waitForTimeout(400);
      const queryEle = `//div[@role='combobox']/ancestor::ng-select//span[contains(text(),'${option}')]`;
      const valElement = await this.page.waitForSelector(queryEle);
      await valElement.click();
      //this.netWorkTabDetails()
      await this.page.waitForTimeout(1000);
    }
    catch (ex) {
      console.error(ex.stack);
      throw new Error(ex.stack);
    }
  }
  async setHashMapValue(key: string, value: string) {
    hashmap.set(key, value);
    await this.page.waitForTimeout(1000);
  }
  async getHashMapValue(key: string): Promise<string> {
    let value;
    value = hashmap.get(key);
    return value;
  }

  async generateFutureDate1(locator: string, daysToAdd: number) {
    const currentDate = new Date();
    // Calculate the future date by adding the specified number of days
    const futureDate = new Date(currentDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    // Format the future date as "mmddyyyy"
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');
    const year = futureDate.getFullYear();
    let futuredate = `${month}/${day}/${year}`;
    this.enterValue(locator, futuredate);
  }


  async dragDrop(locator1, locator2) {
    const source = await this.page.locator(locator1);
    const target = await this.page.locator(locator2);
    await source.dragTo(target);
  }

  async ElementWait(locator: string) {
    await this.page.waitForSelector(locator, { state: 'visible', timeout: 20 * 1000 });
  }
  async selectDDText(locator: string, text: string) {
    await this.page.waitForSelector(locator);
    await this.page.selectOption(locator, { label: `${text}` });
  }

  //waits until an element is clickable
  async ClickWait(locator: string) {
    const button = this.page.locator(locator);
    await this.page.waitForSelector(locator, { state: "visible", timeout: 20 * 1000 });
    await button.waitFor();
    await button.click({ trial: true });
  }

  //Example: coverts "2,400.000" into number 2400
  async StringToNum(strNum: string) {
    const str = strNum;
    const num: number = parseFloat(str.replace(/,/g, ""));
    return num;
  }

  async BtnTagEleClick(btn: string) {
    let btnName = `//button[contains(text(),'${btn}')]`;
    await this.page.waitForSelector(btnName, { state: "visible", timeout: 10 * 1000 });
    await this.page.locator(btnName).focus();
    await this.waitAndClick(btnName);
  }

  async generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const localPartLength = Math.floor(Math.random() * 10) + 5;
    const domainPartLength = Math.floor(Math.random() * 5) + 5;
    let email = '';
    for (let i = 0; i < localPartLength; i++) {
      email += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    email += '@';
    for (let i = 0; i < domainPartLength; i++) {
      email += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    email += '.com';

    return email;
  }
  async ElementDisplayAssert(locator: string) {
    try {
      await this.page.waitForSelector(locator, { state: "visible", timeout: 15 * 1000 });
      let elevis = await this.page.locator(locator).isVisible();
      expect(elevis).toBe(true);
    } catch (error) {
      console.log("Error during element visibility check:" + error);
      throw error;
    }
  }

  async setMapValue(key: any, value: any) {
    newMap.set(key, value);
    await this.page.waitForTimeout(1000);
  }

  async GetMapValue(key: any) {
    let value: any = newMap.get(key);
    return value;
  }

  async FetchNumfromstring(locator: string) {
    let text = await this.getElementText(locator);
    const match = text.match(/\d+/);
    const number = parseInt(match[0], 10);
    return number;
  }
}

