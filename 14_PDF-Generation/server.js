const express = require("express");
const puppeteer = require("puppeteer");
const app = express();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
