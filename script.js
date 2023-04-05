const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

// const saveNotes=()=>{
//     const notes=document.querySelectorAll(".note textarea");
//     const data=[];
//     //console.log(notes);
//     notes.forEach(
//         (note)=>{
//             data.push(note)
//         }
//     )
//     localStorage.setItem("notes",JSON.stringify(data))
// }

function addNote(){

    const note=document.createElement("div")
    note.classList.add("note")
    note.innerHTML=`<div class="tool">
    <i class="save far fa-save fa-sm" style="color: #ffffff;"></i>
    <i class="trash far fa-trash fa-sm" style="color: #ffffff;"></i>
    </div>
    <textarea></textarea>
    `;

    note.querySelector(".trash").addEventListener("click", ()=>{
        note.remove()
        
    })

    main.appendChild(note);
}




addBtn.addEventListener("click", () => {
  //alert("function working properly")
  addNote();
}
);


// (
//     function(){
//         const lsNotes=JSON.parse(localStorage.getItem("notes"));
//         lsNotes.forEach(
//             (lsNote)=>{
//                 addNote(lsNote)
//             }
//         )
//     }
// )()