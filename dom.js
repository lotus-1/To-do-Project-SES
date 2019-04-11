// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'enass kmal' },
    { id: -2, description: 'sara saad' },
    { id: -1, description: 'sabeel halbe' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add span holding description
    var todoSpan = document.createElement('span');
    var spanText = document.createTextNode(todo.description);
    todoSpan.appendChild(spanText);
    todoNode.appendChild(todoSpan);

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    var deleteText = document.createTextNode("Delete");
    deleteButtonNode.appendChild(deleteText);
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markButtonNode = document.createElement('button');
  var markText = document.createTextNode("Mark");
  markButtonNode.appendChild(markText);
  markButtonNode.addEventListener('click', function(event) {
    var newState = todoFunctions.markTodo(state, todo.id);
    update(newState);
  });
  if (todo.done) {
        markButtonNode.style.color = "red";
      }

   todoNode.appendChild(markButtonNode);

   //add edit button
    // add classes for css
    todoNode.querySelector('button').classList.add("delete"); // add class to delete button
    todoNode.childNodes[2].classList.add("mark"); // add class to mark button



        return todoNode;
      };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = event.target.firstElementChild.value; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, { description: description }); // ?? change this!
        console.log(newState);
        update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
    container.firstChild.classList.add("list");


  };

  if (container) renderState(state);
})();
