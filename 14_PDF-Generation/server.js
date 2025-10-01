const express = require("express");
const puppeteer = require("puppeteer");
const ejs = require("ejs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlContent = `
        <!DOCTYPE html>
        <head>
    <title>PDF Generation</title>
    <style>
        body{
            font-family: arial;
        }
        h1{
            color: #0066cc;
        }
    </style>
      </head>
    <body>
    <h1>PDF FILE GENERATION</h1>
    <P>This is a pdf generated form HTML in Express.js</P>
   </body>
   </html>
        `;
    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({
      format: "A4",
      margin: { top: "20px", right: "20px", bottom: "20px", left: "20px" },
    });
    await browser.close();

    res.contentType("application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error generating PDF");
  }
});
app.get("/invoice", async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const invoiceData = {
      invoiceNumber: 1234,
      customer: "Yahoo Baba",
      product: "ExpressJS course",
      price: "99",
    };
    const htmlContent = await ejs.renderFile(
      path.join(__dirname, "views", "invoice.ejs"),
      invoiceData
    );

    await page.setContent(htmlContent, { waitUntil: "domcontentloaded" });
    const pdfBuffer = await page.pdf({
        format: "A4",
        margin: { top: "60px", right: "20px", bottom: "40px", left: "20px" },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: `
          <div style="width:100%; text-align:center; font-size:30px; border-bottom:1px solid #000; padding-bottom:10px;">
            OneOrigin
          </div>
        `,
        footerTemplate: `
          <div style="width:100%; text-align:center; font-size:20px;">
            Page <span class="pageNumber"></span> of <span class="totalPages"></span>
          </div>
        `,
      });
      
    await browser.close();

    res.contentType("application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error generating PDF");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
