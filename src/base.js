
import {list,order} from"./modules/factory";

//clunky page turner:
let pagecount=null





const display =(()=>{
    const colorImportance=()=>{
        const tocolor=rightContent.querySelectorAll("li");
        tocolor.forEach((item)=>{
            if (item.dataset.priority==0){item.classList.add("nofuck")}
            if (item.dataset.priority==1){item.classList.add("low")}
            if (item.dataset.priority==2){item.classList.add("mid")}
            if (item.dataset.priority==3){item.classList.add("important")}
        })

       
    }

    const clearProjectListDisplay=()=>{
        while(projectListDisplay.childNodes.length>0){
            projectListDisplay.removeChild(projectListDisplay.lastChild)
        }
    }
    const clearRightContent=()=>{
        while(rightContent.childNodes.length>0){
            rightContent.removeChild(rightContent.lastChild)
        }

    }
    const clearRightTitle=()=>{
        while(rightTitle.childNodes.length>0){
            rightTitle.removeChild(rightTitle.lastChild);
            console.log(rightTitle.childNodes)
        }
    }
    const putOnTop=(title,subtitle)=>{
        clearRightTitle();
        let firstline=document.createElement("h2");
        firstline.textContent=title
        let secondline=document.createElement("p");
        secondline.textContent=subtitle;
        rightTitle.appendChild(firstline);
        rightTitle.appendChild(secondline)
    }

    const displayProjectTitles=()=>{

        clearProjectListDisplay()
            const projects=list.projects
            for (let i=0;i<projects.length;i++){
                if(projects[i]!==undefined){
                    let line=document.createElement("li")
                    let projbutton = document.createElement("button");
                    projbutton.classList.add(`project`);
                    projbutton.dataset.number=projects[i].index
                    projbutton.addEventListener("click",listen.projectButton)
                    
                    projbutton.textContent=`${projects[i].projectTitle}`
                    line.appendChild(projbutton)
                    projectListDisplay.appendChild(line)
                }
            }
        }
     const displayTodos=(list)=>{
        clearRightContent();
        const listToShow=document.createElement("div")
        /* console.log(list) */
        for(let i=0;i<list.length;i++){
            
            let listitem=document.createElement("li");
            listitem.classList.add("todo");
            listitem.dataset.priority=list[i].priority
            let text=document.createTextNode(`${list[i].title}, ${list[i].dueDate}, importance${list[i].priority}`)//plus si nécessaire  index ${list[i].todoIndex}  
            let icon=buildicon(list[i].projectNumber,list[i].todoIndex);
            let checkbox=buildCheckBox(list[i].projectNumber,list[i].todoIndex);
            listitem.appendChild(checkbox);
            listitem.appendChild(text);
            listitem.appendChild(icon)
        
            listToShow.appendChild(listitem)

            
            
            
            
            
        }
        rightContent.appendChild(listToShow)
        colorImportance()
    }
    const buildCheckBox=(pnum,tdnum)=>{
        let box=document.createElement("input");
        box.setAttribute("type", "checkbox");
        box.dataset.project=pnum;
        box.dataset.number=tdnum;
        /* box.classList.add("fas");
        box.classList.add("fa-check-square"); */
        box.defaultChecked=false
        box.addEventListener("click",listen.tdCheckbox);
        return box

    }



    const buildicon=(pnum,tdnum)=>{
        let icon=document.createElement("i")
        icon.classList.add("fas");
        icon.classList.add("fa-file");
        icon.dataset.project=pnum;
        icon.dataset.number=tdnum;
        icon.addEventListener("click",listen.toDoicon)
        return icon
        }
 

return{
    displayProjectTitles,
    displayTodos,
    putOnTop,
    colorImportance
}






})()





//LISTENERS
const listen=(()=>{
    const toDoicon=function(){
        console.log(this.dataset.project , this.dataset.number)
        let index=parseInt(this.dataset.number)
        toDoForm(index)
    }
    const projectButton=function(){
        let num=parseInt(this.dataset.number);
        let currentProject=order.fetchProject(num);
        console.log(num, currentProject);
        pagecount=num

        display.displayTodos(order.todosbyProject(num));
        display.putOnTop(currentProject.projectTitle, currentProject.projectDescription)
        
        
    }
    const showAll=()=>{
        pagecount=null
        display.displayTodos(order.allTodos());
        display.putOnTop("full list","")
    }
    const sortbydate=()=>{

        if (pagecount===null){
             display.displayTodos(order.byDate(order.allTodos()))}
        else display.displayTodos(order.byDate(order.todosbyProject(pagecount)))

    }
    const important=()=>{

        if (pagecount===null){
            display.displayTodos(order.byImportance(order.allTodos()))}
       else display.displayTodos(order.byImportance(order.todosbyProject(pagecount)))
        console.log("fuck you")
    }
    const tdCheckbox=function(){
        
        
    }






    



return{
    toDoicon,
    projectButton,
    showAll,
    sortbydate,
    important,
    tdCheckbox
}

})()


/* display.displayTodos(1) */




//selectors
const rightContent=document.querySelector(".right-content");
const rightTitle=document.querySelector(".right-title")

const projectListDisplay= document.querySelector(".project-list")
const allButton=document.querySelector(".allbutton");
    allButton.addEventListener("click",listen.showAll);
const dateButton=document.querySelector(".sortbydate-button")
    dateButton.addEventListener("click",listen.sortbydate)
const importantButton=document.querySelector(".important-button")
    importantButton.addEventListener("click",listen.important)










//bogus tasks
list.addProject("bitoufle", "un projet basé sur la bitoufle",1);
list.addProject("soupline", "un ensemble de taches destinées à acquérir du Soupline, classées du plus important au moins important, oui oui, vraiment",2);
list.addProject("autre projet","un autre projet, étonnemment classé à l'index 11, et vide.",11)
list.addProject("manger","c'est important",8)
list.addProject("to do list","à faire sur la to do list",3)
list.addTodo("définir bitoufle","se renseigner sur le sens du mot bitoufle",2019,0,1)
list.addTodo("acquérir poivre","acquérir du poivre",2019,1,1)
list.addTodo("magasin","voir si y'a du soupline au magasin",2016,2,2)
list.addTodo("pétrole","mouflardax du pétrole",2097,1,2)
list.addTodo("futur","mouflardax du futur",2050,3,2)
list.addTodo("acheter à manger","se procurer un ensemble de denrées comestibles",2019,3,8)
list.addTodo("préparer à manger","s'affairer à la concoction de l'ensemble des denrées",2019,2,8)
list.addTodo("manger","ingérer les aliments",2019,1,8)
list.addTodo("faire la vaisselle","muuh",2019,0,8)
list.addTodo("digérer","laisser les sucs gastriques faire leur travail",2019,0,8)



display.displayProjectTitles()
display.displayTodos(order.allTodos())
/* console.table(list.projects)
console.table(list.todos) */
console.log(order.fetchProject("2"))





//a ranger

const rightContentContainer=document.querySelector(".right-content-container")
const container=document.createElement("div");
const titlefield=document.createElement("input");
titlefield.setAttribute("type","text");
container.classList.add("formcontainer");
container.classList.add("hidden")
const description=document.createElement("textarea");
container.appendChild(titlefield);
container.appendChild(description);
rightContentContainer.appendChild(container)

const toDoForm=(index)=>{
    container.classList.toggle("hidden")
    const todo= order.fetchTodo(index);
    container.addEventListener("transitionend",buildback)
    function buildback(cont){
        cont.target.removeEventListener("transitionend",buildback);
        const backbutton=document.createElement("I")
        backbutton.classList.add("fas");
        backbutton.classList.add("fa-arrow-left");
        backbutton.addEventListener("click",removeForm);
        container.appendChild(backbutton);
        cont.target.removeEventListener("transitionend",buildback)
        }



    
    

    
        
        titlefield.value=todo.title;
        titlefield.readOnly=true

    
        description.value=todo.description;
        description.readOnly=true
    }
    function removeForm(){
        container.classList.toggle("hidden");
        
        container.addEventListener("transitionend",removeAll);
        const backbut=document.querySelector(".fa-arrow-left");
        
        container.addEventListener("transitionend",removeAll)
        function removeAll(){
            while (container.childNodes.length>2){
                container.removeChild(container.lastChild)
            }

        }

    }


    
    

    












