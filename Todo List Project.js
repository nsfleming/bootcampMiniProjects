let input = prompt('what would you like to do?');
const toDos = ['Collect Eggs', 'Clean Litter Box'];


while (input !== 'quit' && input !== 'q') {
    input = prompt("what would you like to do?");
    if (input == 'list') {
        console.log('****************')
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i}: ${toDos[i]}`);
        }
        console.log('****************')
    } else if (input == 'new') {
        const newTodo = prompt('What is the new todo?')
        toDos.push(newTodo);
        console.log(`${newTodo} added to list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = toDos.splice(index, 1);
            console.log(`Ok deleted ${deleted[0]}`);
        } else {
            console.log("Unknown Index")
        }

    }

    // toDo.push(listItem);
    // console.log(toDo);
    // if (listItem = 'remove') {
    //     toDo.splice(listItem);
    //     console.log(toDo);
    // } else if (listItem = 'display') {
    //     toDo
    // }

}
console.log("You have quit")