
//TODO: Todo List App 
/* ------------------------------- Project 04 ------------------------------- */

// task: 1
class TodoApp {
    constructor(){
        this.todos = [];
    }
    // task: 2
    addTodo(taskName, time, catagory) {
        const id = this.todos.length + 1;
        const todoObject = {
            id: id,
            name: taskName,
            time: time,
            catagory: catagory,
            completed: false
        };
        this.todos.push(todoObject)
        return "task added successfully"
    }
    // task: 3
    completeTodo(taskName) {
        const task = this.todos.find(task => task.name === taskName);
        if(task) {
            task.completed = true;
            return true;
        }
        return false;
    }
    // task: 4
    removeTodo(taskName) {
        const index = this.todos.findIndex(task => task.name === taskName);
        if(index !== -1) {
            this.todos.splice(index, 1);
            return "removed";
        }
        return "task not found";
    }
    // task: 5
    displayTodoList(catagory) {
        console.log(catagory)
        const list = catagory ? this.todos.filter(task => task.catagory === catagory) : this.todos;
        list.forEach(task => {
            console.log(`Name: ${task.name}, Catagory: ${task.catagory}, Time: ${task.time}, ID: ${task.id}`);
        });
    }
    // task: 6
    hoursWorked() {
        return this.todos.filter(task => task.completed).reduce((sum, task) => sum + task.time, 0)
    }
    // task: 7
    timeNeeded() {
        return this.todos.filter(task => !task.completed).reduce ((sum, task) => sum + task.time, 0);
    }
    // task: 8
    editTodo(taskName, updateTask) {
        const todo = this.todos.find(task => task.name === taskName);
        if(!todo) {
            // consolw.log(todo);
            return false;
        };

        let update = false;
        if(updateTask.name) {
            todo.name = updateTask.name;
            update = true;
        }
        if(updateTask.catagory) {
            todo.catagory = updateTask.catagory;
            update = true;
        }
        if(updateTask.time) {
            todo.time = updateTask.time;
            update = true;
        }
        return update;
    }
    // task: 9
    getTodo(search) {
        return this.todos.find(task => task.name === search || task.catagory === search);
    }
    // task: 10
    lergestTodo() {
        const pending = this.todos.filter(task => !task.completed);
        if(pending.length === 0) {
            return undefined;
        };
        return pending.reduce((max, task) => task.time > max.time ? task: max);
    }
    // task: 11
    smallestTodo() {
        const pending = this.todos.filter(task => !task.completed);
        if(pending.length === 0) {
            return undefined;
        }
        return pending.reduce((min, task) => task.time < min.time ? task: min);
    }
    // task: 12
    sortTodos() {
        return this.todos.filter(task => !task.completed).sort((small, big) => big.time - small.time);
    }
    // task: 13
    undoTodo(name) {
        const todo = this.todos.find(task => task.name === name)
        if(todo && todo.completed) {
            todo.completed = false;
            return true;
        }
        return false;
    }
    // task: 14
    completedPercentage() {
        if(this.todos.length === 0) {
            return 0;
        }
        const completed = this.todos.filter(task => task.completed).length;
        return Math.round((completed / this.todos.length) * 100)
    }
    // task: 15
    importTodos(jsonString) {
        try{
            const imported = JSON.parse(jsonString);
            if(Array.isArray(imported)) {
                imported.forEach(task => this.todos.push(task))
            }
        } catch (error) {
            console.log("Invalid JSON", error)
        }
        return "task added to todos, from jsonString"
    }
    // task: 16
    clearAllTodos() {
        this.todos = [];
        return "cleared all list"
    }

}

const todoApp = new TodoApp([]);

//* todo task
console.log(todoApp.addTodo("sabbir", 5, "study"));
console.log(todoApp.addTodo("sabbir hossain", 6, "study"));
console.log(todoApp.addTodo("sabbir hossain alif", 7, "study"));
// Output: task added successfully

//* complete tasks
console.log(todoApp.completeTodo("sabbir"));
// Output: true

//* removed tasked
// console.log(todoApp.removeTodo("sabbir"));
// Output: removed

//*  total hours
console.log(todoApp.hoursWorked())
// Output: 0

//* display todo list
todoApp.displayTodoList()

//* how much time needed
console.log(todoApp.timeNeeded());
// Output: 10

//* getTodo task
console.log(todoApp.getTodo("sabbir"));
/* Output: {
    id: 2,
    name: 'sabbir hossain',
    time: 6,
    catagory: 'study',
    completed: false
}
*/

//* lergest Todo task
console.log(todoApp.lergestTodo())
/* Output: {
    id: 3,
    name: 'sabbir hossain alif',
    time: 7,
    catagory: 'study',
    completed: false
}
*/

//* smallestTodo task
console.log(todoApp.smallestTodo())
/* Output: {
    id: 2,
    name: 'sabbir hossain',
    time: 6,
    catagory: 'study',
    completed: false
}
*/

//* sorting task
console.log(todoApp.sortTodos())
// Output: id: 3 and than id: 2 object show in output

//* undoTodo task
// console.log(todoApp.undoTodo("sabbir"))
// Output: true

//* percentage task
console.log(todoApp.completedPercentage());
// Output: 33

//* JSON to add todos list
const jsonDamoForTest = '[{"id": 4,"name":"Read book","category":"Learning","time":2,"completed":false}]';
console.log(todoApp.importTodos(jsonDamoForTest))
// Output: task added to todos, from jsonString

//* clear all todo list
console.log(todoApp.clearAllTodos())
// Output:cleared all list


//? after 3 day i finish this project Todo.js every day i code and i give up code but i did'd evey day 
//? so now i think i need to use array method evey js project so i need to practice dally 
//? this is my life code is my life code and code but don't code
//? overall this is start, it's a long journey, so, let's begain and deep dive into js