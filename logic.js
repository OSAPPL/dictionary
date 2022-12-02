var response_word




function Search() {

    let user_Input = document.getElementById('userInput').value;
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + user_Input

    var __word = "You Search the Word " +user_Input
    var __definition = "definitions for the word " + user_Input
    var __annonyms = "synonyms for the word "  + user_Input
    var __partOfSpeech =  "word " + user_Input + " used as :" 
    var __exa = "exapmle with Word " + user_Input

    fetch(url)
        .then(resalut => {
            return resalut.json()
        })
        .then(data => {
            console.log(data)



            document.getElementById('_definintions').innerHTML = __definition
            document.getElementById('_annonyms').innerHTML = __annonyms
            document.getElementById('_phothetic').innerHTML = __partOfSpeech
            document.getElementById('_word').innerHTML = __word
            document.getElementById('_exa').innerHTML = __exa
            
           /* var response_definition2 = data[0]["meanings"][1]["definitions"][0]["definition"]*/
            var response_definition1 = data[0]["meanings"][0]["definitions"][0]["definition"]
            console.log(response_definition1)
            document.getElementById('def0').innerHTML = response_definition1

            var response_exa1 = data[0]["meanings"][0]["definitions"][0]["example"]
            document.getElementById('exa').innerHTML = response_exa1

            var response_part_of_speech0 = data[0]["meanings"][0]["partOfSpeech"]
            document.getElementById('pos0').innerHTML = response_part_of_speech0

            
    
            var response_a1 = data[0]["meanings"][0]["synonyms"][0]
            document.getElementById('a1').innerHTML = response_a1

            var response_definition0 = data[0]["meanings"][0]["definitions"][1]["definition"]
            document.getElementById('d2').innerHTML = response_definition0

           


            var response_part_of_speech1 = data[0]["meanings"][1]["partOfSpeech"]
            document.getElementById('pos1').innerHTML = response_part_of_speech1

           

            var response_part_of_speech1 = data[0]["meanings"][1]["partOfSpeech"]
            document.getElementById('pos1').innerHTML = response_part_of_speech1
            

          
       
            var response_a2 = data[0]["meanings"][0]["synonyms"][1]
            document.getElementById('a2').innerHTML = response_a2
           
            /*var response_part_of_speech3 = data[0]["meanings"][2]["partOfSpeech"]*/


            

         
           
            console.log(response_part_of_speech0)
            console.log(response_part_of_speech1)
            /*console.log(response_part_of_speech3)*/



        })
        



}