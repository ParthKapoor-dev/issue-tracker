const desc = document.querySelector("#description-input");
const form = document.querySelector("#the-input-form")
const sev = document.querySelector("#severity")
const body = document.body;
const ass = document.querySelector("#asigned-to-input");
const formDiv = document.querySelector(".input-form");
const deleteBtn = document.querySelector(".delete-btn");
let statusValue = "Open";

//----------FUNCTIONS & LOOPS----------
function IssueSubmission(a,b,c){
    const DivElement = document.createElement('div');
    DivElement.className= 'input-form';
    DivElement.innerHTML = `
    <p class="issueId"> Issue Id : </p> 
    <div class="status">Open</div>
    <div class="discription-added"><h2>${a}</h2></div>
    <div class="severity-added" style="display:inline;">${b} - </div>
    <div class="asigned-to-added" style="display:inline;">${c}</div> <br>
    <button class="close-btn">Close</button>
    <button class="delete-btn">Delete</button>
    `;
    body.appendChild(DivElement);
    const closeBtn = document.querySelectorAll(".close-btn");
    closeBtn.forEach(ele=>{{
        ele.addEventListener("click",()=>{
            console.log("Hell");
        })
    }})    
}


for(i=0;i< localStorage.length;i++ )
{
    const key = localStorage.key(i);
    const issue = JSON.parse(localStorage.getItem(key));
    IssueSubmission(issue.Description,issue.severity,issue.assignment);
}


//-------EVENT LISTENERS

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    IssueSubmission(desc.value,sev.value,ass.value);

    Data =
    {
        Description : desc.value,
        severity :sev.value,
        assignment : ass.value
    }       
    localStorage.setItem('Data ' + Date.now() , JSON.stringify(Data))
    
    
});
// if(closeBtn){
//     closeBtn.forEach().addEventListener("click",()=>{
//         console.log("Hello")
//     })
// }



































/*
I am working on a java script project called Issue tracker. here User can input their description of issue , its severity & who it should be assigned to. I made the code for that through HTML forms and that works. Now, when the User clicks on submit ,  a new form or section is shown below that includes description, severity & assigned to , given by the user. that I also was able to code through java script event listener. Now, I want to store the data in the local storage, such that whenever the webapp is refreshed , the section of the data still stays there as a record. this is the part I am facing problem with because I don't have much knowledge about local storage. I want you to help me understand what should I do to solve it by giving me hints so that I solve the problem myself to get more experienced in java script
*/




