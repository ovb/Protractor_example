describe('angularjs homepage', function() {


var newtodoID = "new-todo"
var todocounterID = "todo-count"
var todolistID = "todo-list"
var itemcount = 0 

  function createTodo(name) {

    element(by.id(newtodoID)).sendKeys(name + "\n");
  }

  function checkTodolist(expected) {

    expect(element(by.id(todolistID)).getText()).toEqual(expected);
  }


  function checkTodocounter(expected) {

    expect(element(by.id(todocounterID)).getText()).toEqual(expected);
  }


  function deletefirstitem() {

	element(by.css('#todo-list > li:nth-child(1) > div > button')).click();
  }


  function initialization() {

	browser.get('http://todomvc.com/examples/angularjs/');
	expect(browser.getTitle()).toEqual('AngularJS • TodoMVC');
	expect(element(by.id('header')).getText()).toEqual('todos');
	expect(element(by.id('info')).getText()).toEqual('Double-click to edit a todo\nCredits: Christoph Burgdorf, Eric Bidelman, Jacob Mumm and Igor Minar\nPart of TodoMVC');
  }


  function clickActive() {

   	element(by.css('#filters > li:nth-child(2) > a')).click();
  }

  function clickAll() {

  	element(by.css('#filters > li:nth-child(1) > a')).click();
  }

  function clickCompleted() {

  	element(by.css('#filters > li:nth-child(3) > a')).click();
  }

  it('\nTitle & Info', function() {
   
	
	initialization();

  });
// one item
  it('\nTest for one item', function() {

	createTodo("task 1");
	checkTodolist("task 1");
	checkTodocounter('1 item left');	
  });


it('\nTest for few items', function() {
  
// two items
	createTodo("task 2");
	checkTodolist('task 1\ntask 2');
	checkTodocounter('2 items left');

//3-4 items
	createTodo("task 3");
	checkTodolist('task 1\ntask 2\ntask 3');
	checkTodocounter('3 items left');
	createTodo("task 4");
	checkTodolist('task 1\ntask 2\ntask 3\ntask 4');
	checkTodocounter('4 items left');
	
//10 items

	for(var i=5; i < 11; i++){

		createTodo("task " + i);
		checkTodocounter(i + " items left");

	};
	checkTodolist('task 1\ntask 2\ntask 3\ntask 4\ntask 5\ntask 6\ntask 7\ntask 8\ntask 9\ntask 10');

	expect(element(by.id('filters')).getText()).toEqual('All Active Completed');

	element(by.css('#todo-list > li:nth-child(1) > div > input')).click();
	element(by.css('#todo-list > li:nth-child(1) > div > input')).click();

	element(by.css('#todo-list > li:nth-child(2) > div > input')).click();
	element(by.css('#todo-list > li:nth-child(2) > div > input')).click();
	
	element(by.css('#todo-list > li:nth-child(3) > div > input')).click();
	element(by.css('#todo-list > li:nth-child(3) > div > input')).click();

	element(by.css('#todo-list > li:nth-child(4) > div > input')).click();
	element(by.css('#todo-list > li:nth-child(4) > div > input')).click();


	element(by.css('#filters > li:nth-child(2) > a')).click();
	element(by.css('#filters > li:nth-child(3) > a')).click();
	element(by.css('#filters > li:nth-child(1) > a')).click();
	
	expect(element(by.css('#filters > li:nth-child(2) > a')).getText()).toEqual('Active');
	expect(element(by.css('#filters > li:nth-child(1) > a')).getText()).toEqual('All');
	expect(element(by.css('#filters > li:nth-child(3) > a')).getText()).toEqual('Completed');
	
	
//delete
 	for(var i=1; i < 11; i++){

	deletefirstitem();
	};

	checkTodolist('');
  });


it('\nActive/Complited tasks', function() {


		createTodo("task 1");
		checkTodocounter("1 item left");
		for(var i=2; i < 11; i++){

			createTodo("task " + i);
			checkTodocounter(i + " items left");
};

expect(element(by.id('filters')).getText()).toEqual('All Active Completed');

	element(by.css('#toggle-all')).click(); //completed all
	checkTodocounter('0 items left');
	checkTodolist('task 1\ntask 2\ntask 3\ntask 4\ntask 5\ntask 6\ntask 7\ntask 8\ntask 9\ntask 10');

	clickCompleted();
	checkTodocounter('0 items left');
	checkTodolist('task 1\ntask 2\ntask 3\ntask 4\ntask 5\ntask 6\ntask 7\ntask 8\ntask 9\ntask 10');

	clickActive();
	checkTodocounter('0 items left');
	checkTodolist('');

	clickAll();
	checkTodocounter('0 items left');
	checkTodolist('task 1\ntask 2\ntask 3\ntask 4\ntask 5\ntask 6\ntask 7\ntask 8\ntask 9\ntask 10');

	element(by.css('#toggle-all')).click(); //completed all uncheck
	checkTodocounter('10 items left');
	checkTodolist('task 1\ntask 2\ntask 3\ntask 4\ntask 5\ntask 6\ntask 7\ntask 8\ntask 9\ntask 10');

	clickCompleted();
	checkTodocounter('10 items left');
	checkTodolist('');

	clickActive();
	checkTodocounter('10 items left');
	checkTodolist('task 1\ntask 2\ntask 3\ntask 4\ntask 5\ntask 6\ntask 7\ntask 8\ntask 9\ntask 10');
	clickAll();
	checkTodocounter('10 items left');
	checkTodolist('task 1\ntask 2\ntask 3\ntask 4\ntask 5\ntask 6\ntask 7\ntask 8\ntask 9\ntask 10');
	

	element(by.css('#todo-list > li:nth-child(1) > div > input')).click();
	element(by.css('#todo-list > li:nth-child(3) > div > input')).click();
	element(by.css('#todo-list > li:nth-child(4) > div > input')).click();
	element(by.css('#todo-list > li:nth-child(8) > div > input')).click(); 

	clickActive();
	checkTodocounter('6 items left');
	checkTodolist('task 2\ntask 5\ntask 6\ntask 7\ntask 9\ntask 10');

 	clickCompleted();
	checkTodocounter('6 items left');
	checkTodolist('task 1\ntask 3\ntask 4\ntask 8');

 	clickAll();
	checkTodocounter('6 items left');
	checkTodolist('task 1\ntask 2\ntask 3\ntask 4\ntask 5\ntask 6\ntask 7\ntask 8\ntask 9\ntask 10');
	element(by.css('#todo-list > li:nth-child(1) > div > input')).click();
	element(by.css('#todo-list > li:nth-child(3) > div > input')).click();
	element(by.css('#todo-list > li:nth-child(4) > div > input')).click();
	element(by.css('#todo-list > li:nth-child(8) > div > input')).click(); 

	checkTodocounter('10 items left');
	checkTodolist('task 1\ntask 2\ntask 3\ntask 4\ntask 5\ntask 6\ntask 7\ntask 8\ntask 9\ntask 10');

	element(by.css('#toggle-all')).click();
//	element(by.css('#clear-completed')).click(); ElementNotVisibleError: element not visible


  });

it('\nload_test', function() {

	initialization();
	createTodo("task 1");
	checkTodocounter('1 item left');


	for(var i=2; i < 1000; i++){

		createTodo("new task " + i);
		checkTodocounter(i + " items left");

	};
  });
});

