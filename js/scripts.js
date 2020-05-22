// Grap the index list of all todoes
const allToDos = document.getElementById('index');
//run axios to obtain list
if (allToDos){axios.get('https://localhost:44300/api/ToDoItems/')
//get just the data from response 
.then(response => response.data)
//process our data (json object or array)
.then (data=> {
    //output list of todos
    // data.forEach(element => {
        
    // });
})
}