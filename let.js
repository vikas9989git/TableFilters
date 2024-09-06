let employees=[
    {
        eId:101,
        employeeName:"Max",
        employeeRole:"Frontend Developer",
        employeeLocation:"Hyderabad",
        domainSkills:"Html,Css,JS",
        employeeExperience:4
    },
    {
        eId:102,
        employeeName:"Willey",
        employeeRole:"Software Engineer",
        employeeLocation:"Chennai",
        domainSkills:"java,python",
        employeeExperience:1
    },
    {
        eId:103,
        employeeName:"Sam",
        employeeRole:"Graduate Trainee",
        employeeLocation:"New Delhi",
        domainSkills:"Vue",
        employeeExperience:2
    },
    {
        eId:104,
        employeeName:"Ram",
        employeeRole:"Associate Software",
        employeeLocation:"Banglore",
        domainSkills:"Angular",
        employeeExperience:6
    },
    {
        eId:105,
        employeeName:"Sai Krishna",
        employeeRole:"Associate Software",
        employeeLocation:"Vizag",
        domainSkills:"mongodb,React",
        employeeExperience:5
    },
    {
        eId:106,
        employeeName:"Laxman",
        employeeRole:"Software Engineer",
        employeeLocation:"NCR",
        domainSkills:"oracle,java,python",
        employeeExperience:9
    },
    {
        eId:107,
        employeeName:"Sai Chandra",
        employeeRole:"Senior Engineer",
        employeeLocation:"chennai",
        domainSkills:"c,c++,java,orcale",
        employeeExperience:11
    },
    {
        eId:108,
        employeeName:"Hemanth",
        employeeRole:"Testing Enginner",
        employeeLocation:"Mumbai",
        domainSkills:"QA testing",
        employeeExperience:7
    },
    {
        eId:109,
        employeeName:"Karthik",
        employeeRole:"DataBase Manager",
        employeeLocation:"Pune",
        domainSkills:"java,oracle",
        employeeExperience:2
    },
    {
        eId:110,
        employeeName:"Kalyan",
        employeeRole:"FullStack Developer",
        employeeLocation:"Hyderabad",
        domainSkills:"Reactjs,NodeJs",
        employeeExperience:8
    },
    {
        eId:111,
        employeeName:"Bhoomesh",
        employeeRole:"Frontend Developer",
        employeeLocation:"Banglore",
        domainSkills:"HTML,Css,js",
        employeeExperience:9
    },
    {
        eId:112,
        employeeName:"Vishwanath",
        employeeRole:"Backend",
        employeeLocation:"Kochi",
        domainSkills:"python,sql",
        employeeExperience:6
    },
    {
        eId:113,
        employeeName:"Suresh",
        employeeRole:"Developer",
        employeeLocation:"Hyderabad",
        domainSkills:"sql,java",
        employeeExperience:3
    },
    {
        eId:114,
        employeeName:"Vikram",
        employeeRole:"Web Developer",
        employeeLocation:"New Delhi",
        domainSkills:"dotnet",
        employeeExperience:2
    },
    {
        eId:115,
        employeeName:"Pratyush",
        employeeRole:"Testing Engineer",
        employeeLocation:"Banglore",
        domainSkills:"selinium",
        employeeExperience:8
    }
]
let displayArray=[]
let btns = document.querySelectorAll("li");
let table=document.querySelector('table');
display(employees)
for (let i = 0; i < btns.length; i++) {
        if(i==0){
            clearTable()
            display(employees); 
        }
        else{
            displayArray=[]
            clearTable()
            employees.map(obj=>{
                if(obj.employeeExperience>i){
                    displayArray.push(obj)
                }
            })
            display(displayArray)
        }
}
// function to display the table body data
function display(arrayData){
    let tbody=document.createElement("tbody")
    tbody.className+="table table-warning"
    table.appendChild(tbody)
    arrayData.map(obj=>{
        let tr=document.createElement("tr");
        tr.classList.add("rows");
        tbody.appendChild(tr)
        for(let prop in obj){
            if(prop==="employeeExperience"){
                let td=document.createElement("td")
                td.textContent=obj[prop]
                tr.appendChild(td);
                td.className+="fw-bold table-success" 
            }
            else{
                let td=document.createElement("td")
                td.textContent=obj[prop]
                tr.appendChild(td);
            }
        }
            
    }) 
}
// function to delete the table body element
function clearTable(){
    let trs=document.querySelector(".rows")
    trs.parentElement.remove()
}
