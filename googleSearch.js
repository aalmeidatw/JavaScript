/*
* Carry out a Google Search
*/
 
"use strict";
 
require('chromedriver');
var webdriver = require('selenium-webdriver');

//opem browswer
var browser = new webdriver.Builder()
                           .usingServer()
                           .withCapabilities({'browserName': 'chrome' })
                           .build();
 
 //get page title
function logTitle() {
    browser.getTitle().then(function(title) {
        console.log('Current Page Title: ' + title);
    });
}
 
 //click 
function clickLink(link) {
    link.click();
}
 
 //error
function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
    closeBrowser();
}
 

function findTutsPlusLink() {
    return browser.findElements(webdriver.By.css('[href="http://www.ebay.com/?_ul=BR"]')).then(function(result) {
        return result[0];
    });
}
 
function closeBrowser() {
    //browser.quit();
}
 
browser.get('https://www.google.com');
browser.findElement(webdriver.By.name('q')).sendKeys('ebay');
browser.findElement(webdriver.By.name('btnG')).click();
browser.wait(findTutsPlusLink, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);