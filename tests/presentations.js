module.exports = {
	'Notifications Test' : function (browser) {
		browser
			.login();
		
		browser.waitForElementVisible('.icons8-statistics', 2000)
		
		browser
			.click(".icons8-statistics")
			.pause(1000)
			.assert.title('Presentation', 'The title is Presentation! HA!' + '\n');
			
		browser.perform(function() {	
		
			browser.elements('css selector',"#sets .set-holder .set.block ", function(setlist){ 		// > * if they were all different
			
				browser.log(setlist.value.length + ' items found:' + '\n');
			
				for (let i=1;i<=setlist.value.length;i++) { //Go through the Sets and expand them
					
					let setblock = '#sets .set-holder .set.block:nth-of-type('+i+') ';
					
					browser.getText(setblock +' .title', function(text){
						browser.log('- ' + text.value);
						browser.pause(1500);
						browser.click(setblock +' .title');
					});
					
					browser.elements('css selector',setblock + '.presentations li:not(.empty)', function(presentationlist){
						
						if (presentationlist.value.length > 0) {
							for (let j=1;j<=presentationlist.value.length;j++) {  //Go through the Presentations in each set and print em
								
								let presentationBlock = setblock + ' .presentations li:nth-of-type('+j+') ';
								
								browser.getText(presentationBlock + '.title', function(text2){
									
									browser
									browser.pause(500);
									browser.log( ' * ' + text2.value);
									browser.click(presentationBlock + '.title');
									browser.waitForElementVisible('.fa.fa-share', 2000);
									browser.waitForElementVisible('.btn-restart', 2000);
									browser.click('.presentation.selected .cmd-toggler .handle');
									browser.pause(1500);
									
									if (i == 1 && j == 1) {
										browser.click('.fa.fa-cog');
										browser.click('.btn.btn-play'); //Press Play only on the first set of the presentation
									}
									
									browser.waitForElementVisible('.btn.btn-play', 2000);
									//browser.click('.btn.btn-play:not(btn-primary)'); //Click only if bot already playing
									browser.pause(6000);
									browser.click('.btn-restart');
									browser.waitForElementVisible('.btn.btn-yes', 2000);
									browser.click('.btn.btn-yes');
									browser.pause(3000);
																	
								});
								
								if (j == presentationlist.value.length ) {
									browser.log(' ');
									browser.click('.header .cmd-toggler .handle');
								}
								
							}
						}
						
					});	
				} 
		
			});
		});
		
		browser.end();

	}
}