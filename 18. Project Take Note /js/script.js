let titleInput = document.getElementById('noteTitle');
let noteInput = document.getElementById('noteText');
let noteTakeBtn = document.getElementById('noteTakeBtn');
let NotesDiv = document.querySelector('.notes');
let allNotes = document.querySelectorAll('.notes');
let deletAll = document.getElementById('del_all');
let filterInput = document.getElementById('filter_task');


noteTakeBtn.addEventListener('click', takeNote);
NotesDiv.addEventListener('click', removeNote);
deletAll.addEventListener('click', deletAllNotes);
filterInput.addEventListener('keyup', filterTask);



function takeNote(e) {
    let noteTitle = titleInput.value;
    let noteDescp = noteInput.value;
    if (noteTitle === '') {
        alert('Please enter Note Title');
    } else if (noteDescp === '') {
        alert('Please enter Your Note');
    } else {
        createNoteElement(noteTitle, noteDescp);
    }
    e.preventDefault();
}


function removeNote(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm('Are you sure you want to remove')) {
            let delteNote = e.target.parentElement.parentElement;
            delteNote.remove();
        }
    }
}

function deletAllNotes(e) {
    if (confirm("Are you Want to Delete All Notes?")) {
        while (allNotes.firstChild) {
            allNotes.removeChild(allNotes.firstChild);
        }
    }
}


function createNoteElement(title, description) {
    let createNoteDiv = document.createElement('div');
    createNoteDiv.classList = "note shadow p-3 mb-1 text-bg-secondary";

    let createNoteTitle = document.createElement('div');
    createNoteTitle.classList = "note_title";

    let noteHeading = document.createElement('h4');
    noteHeading.style.display = "inline-block";
    noteHeading.appendChild(document.createTextNode(title));

    let deleteAncorBtn = document.createElement('a');
    deleteAncorBtn.setAttribute('href', '#');
    deleteAncorBtn.style.float = 'right';
    deleteAncorBtn.classList = "btn btn-danger"
    deleteAncorBtn.appendChild(document.createTextNode('Delete'));

    createNoteTitle.appendChild(noteHeading);
    createNoteTitle.appendChild(deleteAncorBtn);

    let dividerHr = document.createElement('hr');

    let noteDescp = document.createElement('div');
    noteDescp.classList = "noteDesc";

    let noteTextPara = document.createElement('p');
    noteTextPara.appendChild(document.createTextNode(description));
    noteDescp.appendChild(noteTextPara);


    createNoteDiv.appendChild(createNoteTitle);
    createNoteDiv.appendChild(dividerHr);
    createNoteDiv.appendChild(noteDescp);


    NotesDiv.appendChild(createNoteDiv);
}


function filterTask(e) {
    let searchValue = e.target.value.toLowerCase();
    let allNotes = document.querySelectorAll('.note');

    allNotes.forEach(note => {
        let itemTitle = note.querySelector('.note_title h4').textContent.toLowerCase(); 
       
        if(itemTitle.indexOf(searchValue)  != -1){
            note.style.display = "block";
        }else{
            note.style.display = "none";
        }

    });


}
