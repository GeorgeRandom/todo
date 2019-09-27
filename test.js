const list = (()=>{
    const projects=[];
    const buildTodo = (title,description,dueDate,priority,projectNumber)=>{
        return{
        title,
        description,
        dueDate,
        priority,
        projectNumber,
        done : false}
    }
    
    const fileTodo = (todo)=>{
        let n=todo.projectNumber;
        if (projects[n]===undefined){addProject("default","default",n)}
        projects[n].toDoList.push(todo)} //weird


    

    
    const addTodo= (title,description,dueDate,priority,projectNumber)=>{
        let todo = buildTodo(title,description,dueDate,priority,projectNumber);
        fileTodo(todo);
    }


    const buildProject= (projectTitle, projectDescription)=>{
        return {projectTitle,
            projectDescription,
            
            toDoList:[]
        }
    }
    const renameProject=(title,number)=>{
        projects[number].projectTitle = title;
    }
        


    
    const addProject= (title, description, number)=>{
        if (projects[number]!==undefined){renameProject(title,number)

        }
        else {let newProject=buildProject(title, description);
            projects[number] = newProject
        }
    }
    




        
    
            
        
       
    return{
        addTodo,
        addProject,
        projects,
        

    }
}    )()
   
// la classificationnitude
const order =(()=>{
    const projectArray= list.projects;
    
    const showProjectTitles=()=>{
        let nonempty=projectArray.filter((project)=>project!==undefined)
        let titles=nonempty.map((project)=>project.projectTitle);


        return titles
    }

        
    


return{
    showProjectTitles,
    projectArray

}

})()

/* export{ list , order } */




















const displayProjectTitles=()=>{
    const titles=order.showProjectTitles();
        for (let i=0;i<titles.length;i++){
            let titletext = document.createElement("div");
            titletext.classList.add(`project${[i]}`);
            titletext.textContent=`${titles[i]}`
            projectlistContainer.appendChild(titletext)
        }
    }
    


/* import {list,order} from"./modules/factory"; */
list.addProject("bitoufler un poivre", "un ensemble de taches dans le but de bitoufler un poivre",1);
list.addProject("soupline", "un ensemble de taches destinées à acquérir du Soupline",2);
list.addTodo("définir bitoufle","se renseigner sur le sens du mot bitoufle",2019,"important",1)
list.addTodo("acquérir poivre","acquérir du poivre",2019,"moyen",1)
list.addTodo("magasin","voir si y'a du soupline au magasin",2019,"important",2)



const submitbut= document.querySelector("#submitbut");
submitbut.addEventListener("click",inputTodo);
const projectlistContainer=document.querySelector(".projectlist");
const taskdisplayContainer=document.querySelector(".taskdisplay");
const projectsDisplayButton=document.createElement("button");
projectsDisplayButton.addEventListener("click",displayProjectTitles);
projectlistContainer.appendChild(projectsDisplayButton);




//DOM INPUT

function inputTodo(){
    let title= document.querySelector('[name="title"]').value
    let description= document.querySelector('[name="description"]').value
    let dueDate= document.querySelector('[name="date"]').value
    let priority= document.querySelector('[name="priority"]').value
    let projectNumber= document.querySelector('[name="projectnumber"]').value;
    list.addTodo(title,description,dueDate,priority,projectNumber)


}
//initialize with shite


//display




    








        
        
                