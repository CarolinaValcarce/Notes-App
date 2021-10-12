const add_btn=document.getElementById("add");
const notes=JSON.parse(localStorage.getItem("notes"));


if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}


add_btn.addEventListener("click", ()=>{
	addNewNote();
});

function addNewNote(text=""){
	const note=document.createElement("div");
 	note.classList.add("note");

 	note.innerHTML=`<div class="container">
 						<div class="tool-box">
 							<header>
 								<button class="save"> <i class="fas fa-save"></i> Guardar</button>
 								<button class="clear"> <i class="fas fa-trash-alt"></i> Borrar</button>
 							</header>
					
 						</div> 
 						<textarea spellcheck=false></textarea>	
 					</div>`;

	const Text_elm = note.querySelector("textarea");
	const save_btn= note.querySelector(".save");
	const clear_btn= note.querySelector(".clear");

	console.log(Text_elm);
	Text_elm.value= text;	
	
	save_btn.addEventListener("click",()=>{
		updateLS();
	});


	clear_btn.addEventListener("click",()=>{		
		note.remove();
		updateLS();
	});

	document.body.appendChild(note);
	
}

function updateLS(){
	const allNotes= document.querySelectorAll("textarea");
	const notes=[];
	allNotes.forEach((note)=>{
		notes.push(note.value);
	});
	localStorage.setItem("notes",JSON.stringify(notes));
};
