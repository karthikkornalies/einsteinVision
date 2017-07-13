({
	fetch : function(component) {
		let helper = this;
		let action = component.get("c.getLabels");
		action.setParams({
			"recordId" : component.get("v.recordId")
		});
		let prom = helper.executeActionJSON(component, action)
			.then($A.getCallback(function (result){
				console.log(result);
				component.set("v.data", result);
				component.set("v.done", true);
			}));
	},

	shouldRetry : function(component) {
		if (component.get("v.data").statusMsg==='UPLOADING' || !component.get("v.done")){
			return true;
		} else {
			return false;
		}
	},

})