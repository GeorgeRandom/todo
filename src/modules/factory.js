const list = (()=>{
    const projects=[];
    const todos=[]
    
    let projectcounter=0
    const buildTodo = (title,description,dueDate,priority,projectNumber,todoIndex)=>{
        return{
        title,
        description,
        dueDate,
        priority,
        projectNumber,
        done : false,
        todoIndex}
    }
    
    /* const fileTodo = (todo)=>{
        let n=todo.projectNumber;
        if (projects[n]===undefined){addProject("default","default",n)}
        projects[n].toDoList.push(todo)} //weird

 */
    

    let todocounter = 0
    const addTodo= (title,description,dueDate,priority,projectNumber)=>{
        
        let todo = buildTodo(title,description,dueDate,priority,projectNumber,todocounter);
        todocounter++;
        todos.push(todo)
        return todo;
    }
            
    


    const buildProject= (projectTitle, projectDescription,index)=>{
        return {projectTitle,
            projectDescription,
            index
        }
    }
    const renameProject=(title,number)=>{
        projects[number].projectTitle = title;
    }
        


    
    const addProject= (title, description,projectindex)=>{
        let newProject=buildProject(title, description,projectindex);
        projects.push(newProject)
        return newProject
    }
      
   
        

        
        
       
            
        
    
    




        
    
            
        
       
    return{
        addTodo,
        addProject,
        projects,
        todos
        

    }
}    )()
   
// la classificationnitude
const order =(()=>{
    const projectArray= list.projects;
    const todosArray=list.todos;


    //sorting
    const todosbyProject=(number)=>{
        return todosArray.filter((todo)=>todo.projectNumber ===number)
     }
    
    
    const projectTitles=()=>{
        let titles=projectArray.map((project)=>project.projectTitle);
        return titles


        
        }
    const allTodos=()=>{
        return list.todos
        }
    const byDate=(array)=>{
        let newarray=array.sort(function(a,b){
            return a.dueDate-b.dueDate
        })
        return newarray
     }
    const byImportance=(array)=>{
        let newarray=array.sort(function(a,b){
            return b.priority-a.priority
        })
        return newarray

     }





    const fetchProject=(searchindex)=>{
        let goodproject= projectArray.find((project)=>project.index==searchindex)
        return goodproject
    }
    const fetchTodo=(searchindex)=>{
        let goodtodo=todosArray.find((todo)=>todo.todoIndex===searchindex)
        return goodtodo
    }
    
        
   


        
    


return{
    allTodos,
    todosbyProject,
    projectTitles,
    byDate,
    byImportance,
    fetchProject,
    fetchTodo

}

})()

export{ list , order }