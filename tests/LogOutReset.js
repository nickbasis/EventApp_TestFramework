// Log Out - Reset - Restart Test



// 1. Go to the Controller and click the 'Remote' button
// - Wait for the Remote icon to appear
// - title of the page should be 'Remote'


// 2. Click Login - Log Out - Restart 3 times and Reset the last
// - Commands tab should be present
// - Logout button should be present and contain the test 'log'
// - Restart button should be present and contain the text 'Restart'
// - Alert should be accepted
// - Reset should be presseed only on the last loop



module.exports = {
	'Log Out Reset Test' : function (browser) {
		browser
			.login();
		
		browser.waitForElementVisible('.icons8-remote-control', 2000);

		browser
			.click(".icons8-remote-control")
			.pause(1000)
			.assert.title("Remote", "The title is Remote! HA!")
			.pause(2000);
		
		
		
		for(let i=1;i<=3;i++) {
			
			browser.perform(function() {
				console.log('Loop'.cyan, i); //cyan
			});
				
			browser
			
				.click("a[href='#page-advanced']")
				.click("div[data-command='login']")  // Click Login button
				.pause(3000)
				.click("a[href='#page-devices']");
				
			browser.expect.element("a[href='#commands']").to.be.present; //Make sure we are in the 'Devices'
			browser.expect.element("div[data-command='logout']").to.be.present.and.text.to.contain('Log');
			browser.expect.element("div[data-command='restart']").to.be.present.and.text.to.contain('Restart');
				
			browser
			
				.click("div[data-command='logout']") // Log Out
				.pause(3000)
				.click("div[data-command='restart']") //Restart
				.pause(3000)
				.acceptAlert()
				.pause(2000);
				
		}
			browser
				.click("div[data-command='reset']") //Reset
						.pause(2000)
						.acceptAlert()
						.pause(2000);
		
			
		browser.end();

	}
}


