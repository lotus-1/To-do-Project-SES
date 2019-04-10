var test = require('tape');
var logic = require('./logic');

var testTodos = [
    {
      id: 1,
      description: "Finish Todo App",
      done: false
  },
  {
    id: 2,
    description: "Do My Homework",
    done: false
  }
];

var newTodoTest = {
  id: 3,
  description: "Practice TDD",
  done: false
}

test('Testing tape', function(t) {
  t.equal(1 ,1 , "Tape is working ");
  t.end();
});

test('leave the original array unchanged', function(t){
  var actual = testTodos === logic.addTodo(testTodos, newTodoTest);
  var expected = false;
  t.equal(actual, expected, "Return array is a copy of origin array")
  t.end();
});

test('Testing addTodo', function(t){
  var actual = logic.addTodo(testTodos, newTodoTest);
  var expected = [
    {
      id:1,
      description: "Finish Todo App",
      done: false
  },
  {
    id: 2,
    description: "Do My Homework",
    done: false
  },
  {
    id: 3,
    description: "Practice TDD",
    done: false
  }
];
  t.deepEqual(actual, expected, "New todo has been added to the todo array");
  t.end();
});

var testIdToDelete = 2;

test('leave the original array unchanged', function(t){
  var actual = testTodos === logic.deleteTodo(testTodos, newTodoTest);
  var expected = false;
  t.equal(actual, expected, "Return array is a copy of origin array")
  t.end();
});

test('Testing deleteTodo', function(t){
  var actual = logic.deleteTodo(testTodos, testIdToDelete);
  var expected = [
  {
    id: 1,
    description: "Finish Todo App",
    done: false
  }
];
  t.deepEqual(actual, expected, "New todo has been delete to the todo array");
  t.end();
});

  var testMarkTodo =  [
      {
        id: 1,
        description: "Finish Todo App",
        done: false
    },
    {
      id: 2,
      description: "Do My Homework",
      done: false
    }
  ];
test('leave the original array unchanged', function(t){
  var actual = testTodos === logic.markTodo(testTodos, newTodoTest);
  var expected = false;
  t.equal(actual, expected, "Return array is a copy of origin array")
  t.end();
});

test('Testing markTodo', function(t){
  var actual = logic.markTodo(testMarkTodo, 1);
  var expected = [
  {
    id: 1,
    description: "Finish Todo App",
    done: true
  },
  {
    id: 2,
    description: "Do My Homework",
    done: false
  }
];
  t.deepEqual(actual, expected, "New todo has been delete to the todo array");
  t.end();
});
