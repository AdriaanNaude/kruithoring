window.onload = () => {

    class Crypt {
        constructor(word) {
            this.word = word;
        }

        incrypt() {
            
            //sending word into key
            let key = this.word;

            let arr = [];
            let simbool = ["", "#", "*", "$"];
            let incryptOutput = "";
        
            //todo sit uppercase loop end randomizer in

            //push word into array
            for(let x of key){arr.push(x);}
        
            //array and symbol arry length
            let l = arr.length;
            let sl = simbool.length -1;
        
            //random number
            let randNum = Math.ceil(Math.random()*l);
            let randSim = Math.ceil(Math.random()*sl);
            let randNumber = Math.ceil(Math.random()*9);
        
            //symbol and number value
            let randSimChois = simbool[randSim];
            let randNumChois = randNumber;
        
            //adding symbol - and number value to arry
            arr.splice(randNum, 0, randSimChois);
            arr.splice(randNum, 0, randNumChois);
        
            //loop through arry to build password
            for(let y of arr){incryptOutput += y;}
            
            document.getElementById("output").innerText = incryptOutput; // outputfield (password)

        }    
    }

    var userInput = document.getElementById("input"); // textfield id
    var btn = document.getElementById("btn");// submit button
    
    btn.addEventListener('click', () =>{
        var password = new Crypt(userInput.value);
        password.incrypt();
     });

}    