const inputName= document.getElementById("txtname");
const btncalculate = document.getElementById("calculate");
const note1 = document.getElementById("Note1");
const note2 = document.getElementById("Note2");
const note3 = document.getElementById("Note3");
const txtaverage = document.getElementById("average");

btncalculate.addEventListener("click",(event) => {
    let nameUser = inputName.value;
    let NoteOne = note1.value;
    let NoteTwo = note2.value;
    let NoteThree = note3.value;
    let percentage1 = NoteOne*30/100;
    let percentage2 = NoteTwo*30/100;
    let percentage3 = NoteThree*40/100;
    let average = (((parseFloat(NoteOne+percentage1)+parseFloat(NoteTwo+percentage2)+parseFloat(NoteThree+percentage3))/3));
    let totallyaverage = average.toFixed(2);
    if(totallyaverage >= 4.5){
        txtbtnaverage.textContent = `${nameUser} según sus notas, su promedio es EXCELENTE y es de: ${totallyaverage} , ganó la materia`;
    }
    else if(totallyaverage >= 3.5 && totallyaverage <= 4.5){
        txtbtnaverage.textContent = `${nameUser} según sus notas, su promedio es BUENO y es de: ${totallyaverage} , ganó la materia`;
    }
    else if(totallyaverage >= 2.5 && totallyaverage <= 3.4){
        txtbtnaverage.textContent = `${nameUser} según sus notas, su promedio es REGULAR y es de: ${totallyaverage} , perdió la materia, pero cuenta con la oportunidad de recuperarla`;
    }
    else if(totallyaverage <= 2){
        txtbtnaverage.textContent = `${nameUser} según sus notas, su promedio es MALO y es de: ${totallyaverage} , perdió la materia, debe repetirla`;
    }
    });

