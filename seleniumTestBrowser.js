console.log("webdriver is running");
require('chromedriver');

const loginName = 'beingzero';
const password = 'beingzero';


var webdriver = require('selenium-webdriver'),
			By = webdriver.By;

// open browser
var driver = new webdriver.Builder()
                          .forBrowser('chrome')
                          .build();

 // go to webPage
 driver.get("http://beingzero.in/selenium-login-form");

//locate username box
var loginTxt = driver.findElement(By.id('txtUsername'));

//enter loginName
loginTxt.sendKeys(loginName);

//locate password box
passwordTxt = driver.findElement(By.id('pwdPassword'));

// enter password
passwordTxt.sendKeys(password);

//locate login button
var loginBtn = driver.findElement(By.id('btnLogin'));

//click
loginBtn.click();


//wait alert
var alert = driver.switchTo().alert();

alert.getText().then(function(value){
	console.log("alert : " + value);
	alert.dismiss();
});

//close the browser
driver.quit();




                    

