module.exports = {
	'Pages and Dialogs' : function (browser) {
		browser
			.login();
		
		browser.waitForElementVisible('.icons8-remote-control', 2000);
		
		browser
			.click(".icons8-remote-control")
			.pause(1000)
			.assert.title("Remote", "The title is Remote! HA!")
			.click("a[href='#page-goto']")
			.pause(2000);
			
		//browser.assert.elementPresent("a[href='#pages']");
		
		//Check if Pages tab is present, if yes then click it
		
		browser.element('css selector',"a[href='#pages']", function(pageselement){
			if(pageselement.value && pageselement.value.ELEMENT){
				
				browser.pause(1000);
				browser.click("a[href='#pages']");
				browser.log('\n' + 'Pages tab is there!'.green + '\n');
					
			} else {
				
				browser.log('Pages does not exist'.red);
			}
		});
		
		
		//Print the name of each Page and then click
		
		browser.elements('css selector',"#pages .button-list.module-list li", function(pageslist){
			
			browser.log(pageslist.value.length + ' items found:');
			
			browser.perform(function() {
			
				 for (let i=1;i<=pageslist.value.length;i++) {
					
					browser.getText('#pages :nth-of-type('+i+') div', function(text){
						browser.log('- ' + text.value);
					});
					
					browser.click('#pages :nth-of-type('+i+')');
					
					browser.pause(1500);
					
				} 
			
			});

			
		});
		
		
		
		//Check if Dialogs tab is present, if yes then click it
		
		browser.element('css selector',"a[href='#dialogs']", function(dialogselement){
			if(dialogselement.value && dialogselement.value.ELEMENT){
				
				browser.pause(1000);
				browser.click("a[href='#dialogs']");
				browser.log('\n' + 'Dialogs tab is there!'.green + '\n');
					
			} else {
				
				browser.log('Dialogs does not exist'.red);
			}
		});
		
		
		
		//Print the name of each Dialog and then click
		
		browser.elements('css selector',"#dialogs .button-list.module-list:nth-of-type(1) li", function(dialogslist){
			
			browser.log('\n' + dialogslist.value.length + ' items found:' + '\n');
			
			browser.perform(function() {
			
				 for (let i=1;i<=dialogslist.value.length;i++) {
					
					browser.getText('#dialogs .button-list.module-list:nth-of-type(1) li:nth-of-type('+i+') div', function(text){
						browser.log('- ' + text.value);
					});
					
					browser.click('#dialogs .button-list.module-list:nth-of-type(1) li:nth-of-type('+i+') .btn-command.switch-part.on');
					
					browser.pause(1500);
					
				} 
			
			});

			
		});
		
		
		//Print the name of each Voting sets and then click
		
		browser.elements('css selector',"#dialogs .button-list.module-list:nth-of-type(2) li", function(dialogslist){
			
			browser.log('\n' + dialogslist.value.length + ' items found:' + '\n');
			
			browser.perform(function() {
			
				 for (let i=1;i<=dialogslist.value.length;i++) {
					
					browser.getText('#dialogs .button-list.module-list:nth-of-type(2) li:nth-of-type('+i+') div', function(text){
						browser.log('- ' + text.value);
					});
					
					browser.click('#dialogs .button-list.module-list:nth-of-type(2) li:nth-of-type('+i+') .btn-command.switch-part.on');
					
					browser.pause(1500);
					
				} 
			
			});

			
		});
		
			
		browser.end();

	}
}