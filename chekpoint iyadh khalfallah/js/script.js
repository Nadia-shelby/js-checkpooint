var myTextArea=document.getElementById("myText");
var selectSize=document.getElementById("size");
var selectPolice=document.getElementById("police");

function makeBold(){
    if(myTextArea.style.fontWeight=="bold"){
        myTextArea.style.fontWeight="normal";
    }
    else{
        myTextArea.style.fontWeight="bold";
    }
}

function makeItalic(){
    if(myTextArea.style.fontStyle=="italic"){
        myTextArea.style.fontStyle="normal";
    }
    else{
        myTextArea.style.fontStyle="italic";
    }
}

function makeUnderline(){
    if(myTextArea.style.textDecoration=="underline"){
        myTextArea.style.textDecoration="normal";
    }
    else{
        myTextArea.style.textDecoration="underline";
    }
}

function changeSize(){
    myTextArea.style.fontSize=selectSize.value;
}

function changePolice(){
    myTextArea.style.fontFamily=selectPolice.value;
}

