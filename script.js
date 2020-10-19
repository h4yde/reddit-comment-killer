var killComments = setInterval(function(){ 
	if($$("button[id*='overflow-menu']")[0] == undefined) clearInterval(killComments);
	else {
		$$("button[id*='overflow-menu']")[2].click();
		$$("button[role='menuitem']")[3].click();
		$$("button[role='button']")[4].click();
	}
}, 10);
