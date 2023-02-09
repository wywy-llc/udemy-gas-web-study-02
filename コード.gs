/**
 * doGet関数
 */
function doGet() {
  const htmlTemplate = HtmlService.createTemplateFromFile('hello');
  htmlTemplate.cssContent = HtmlService.createHtmlOutputFromFile('hello-css').getContent();
  return htmlTemplate.evaluate();
}
