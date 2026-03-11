import { chromium } from 'playwright';
import * as xlsx from 'xlsx';
import { fixture } from "../../hooks/pageFixture";

import * as excel from 'exceljs';

 

export async function readExcel() {

  // Replace with the path to your Excel file
  const filePath = "\\Downloads\\sample.xlsx";
  
  const workbook = new excel.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.worksheets[0];
  
  const rowCount = worksheet.rowCount;
  const columnCount = worksheet.columnCount;
  let row, value;
  for (let i = 6; i <= rowCount; i++) {
     row = [];
    for (let j = 1; j <= columnCount; j++) {
      let cellValue = worksheet.getRow(i).getCell(j).value;
      row.push(cellValue);
    }
    console.log(" "+row);
   // value=JSON.stringify(row);
   // console.log("=================="+value)
   // console.log(row);
  }

 //  value=JSON.stringify(row);
 // console.log("=================="+value)
 // await browser.close();
}

//readExcel();
