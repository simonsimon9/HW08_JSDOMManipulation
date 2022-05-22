var button = document.getElementById("submit-btn");

button.addEventListener("click", function(){
    
    let personName = document.getElementById("input-name").value;
    let characterName = document.getElementById("input-character").value;
    let adjective = document.getElementById("input-adjective").value;
    let adverb = document.getElementById("input-adverb").value;

    let outputName = document.getElementsByClassName("insert-name");
    let outputCharacter = document.getElementsByClassName("insert-character");
    let outputAdjective = document.getElementsByClassName("insert-adjective");
    let outputAdverb = document.getElementsByClassName("insert-adverb");
    //&& characterName != "" && adjective != "" && adverb !="" 
    if(personName == "" || characterName =="" || adjective =="" || adverb ==""){
        alert("All fields are required!!");
    }else{
        displayMadlips(personName, outputName);
        displayMadlips(characterName, outputCharacter);
        displayMadlips(adjective, outputAdjective);
        displayMadlips(adverb,outputAdverb);
    
        let story = document.getElementById("madlip-story");
        story.style.display = "block";
        
    }

    
})

function displayMadlips(inputMadlip,outputMadlip){
    for(let i = 0; i < outputMadlip.length; i++){
        outputMadlip[i].innerHTML = inputMadlip;
    }
}