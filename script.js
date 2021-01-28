var killComments = setInterval(function(){ 
	if($$("button[id*='overflow-menu']")[0] == undefined) clearInterval(killComments);
	else {
		$$("button[id*='overflow-menu']")[0].click();
		$$("button[role='menuitem']")[3].click();
		$$("footer button")[1].click();
	}
}, 10);
