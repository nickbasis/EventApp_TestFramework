module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
	  .pause(3000)
      //.expect.element('body').to.be.present;
	  
	  //browser
      .setValue('input#lst-ib', 'nightwatch')
      //.waitForElementVisible('button[name=btnK]', 1000)
      .click('body')
      .pause(5000)
      //.assert.containsText('#main', 'Night Watch')
      .end();
  }
};