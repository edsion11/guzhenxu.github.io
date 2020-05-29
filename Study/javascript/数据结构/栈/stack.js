	function Stack() { //构造栈的方法
	  this.dataStore = []
	  this.push = push;
	  this.pop = pop;
	  this.top = 0
	  this.length = length
	}

	function length() {
	  return this.top
	}

	function push(element) {
	  this.dataStore[this.top++] = element
	}

	function pop(element) {
	  return this.dataStore[--this.top];
	}