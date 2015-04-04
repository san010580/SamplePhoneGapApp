var sample=(function(module){
	module.DoIt = function(resultobject){
		resultobject.prepend(Date()+'<br/>');
		}
		return module;
}(sample ||{}));