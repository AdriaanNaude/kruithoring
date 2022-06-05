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
           // key = key.splice(.toUpperCase()); 

            //push word into array
            for(let x of key){arr.push(x);}
        
            //array and symbol arry length
            let l = arr.length;
            let sl = simbool.length -1;

            //random number
            let randNum = Math.ceil(Math.random()*l);
            let randSim = Math.ceil(Math.random()*sl);
            let randNumber = Math.ceil(Math.random()*9);   // random nommer 1 tot 9
            let randNumber2 = Math.ceil(Math.random()*5); // random nommer 1 tot 5
        
            //symbol and number value
            let randSimChois = simbool[randSim];
            let randNumChois = randNumber;
            let randNumChois2 = randNumber2;

        
            //adding symbol - and number value to arry
            arr.splice(randNum, 0, randNumChois2);   // random nommer
            arr.splice(randNum, 0, randSimChois);   // random simbool
            arr.splice(randNum, 0, randNumChois);  // random nommer
        
            
            //loop through arry to build password
            for(let y of arr){incryptOutput += y;}
             
            document.getElementById("output").innerText = incryptOutput; // outputfield (password)
            
        }    
    }

    let userInput = document.getElementById("input"); // textfield id
    let btn = document.getElementById("btn");// submit button
    let termout = document.getElementById("term");

    btn.addEventListener('click', () =>{

        var password = new Crypt(userInput.value);

        setTimeout( () => {termout.innerText = "==> []" }, 1000);                //0
        setTimeout( () => {termout.innerText = "==> [#]" }, 2000);              //1
        setTimeout( () => {termout.innerText = "==> [###]" }, 3000);           //2
        setTimeout( () => {termout.innerText = "==> [######]" }, 4000);       //3
        setTimeout( () => {termout.innerText = "==> [#########]" }, 5000);   //4
        setTimeout( () => {termout.innerText = "==> [##########]" }, 6000); //5
        setTimeout( () => {
            termout.innerText = "==> [##########] \n :: Klaar";
            password.incrypt();
        }, 7000);
    
     });

}    