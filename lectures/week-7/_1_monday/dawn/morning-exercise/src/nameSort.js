var People = function(names) {
<<<<<<< HEAD
	this.allName = [];
	names.forEach(function(name) {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		this.allNames.push(name);
	}.bind(this));
};


People.prototype.getNames = function() {
	return this.allNames;
};

People.prototype.sort = function() {
	this.allNames.sort();
	return this.getNames();
};
=======
  this.allNames = [];
  names.forEach(function(name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    this.allNames.push(name);
  }.bind(this));
};

People.prototype.getNames = function() {
  return this.allNames;
};

People.prototype.sort = function() {
  this.allNames.sort();
  return this.getNames();
};
>>>>>>> 132e5efbf04eef5a49f39d49fd82529935d53e53
