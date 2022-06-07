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
             
            //document.getElementById("output")
            userOutput.innerText = incryptOutput; // outputfield (password)
            
        }    
    }

    let userInput = document.getElementById("input"); // textfield id
    let userOutput = document.getElementById("output"); // output lyn
    
    let termout = document.getElementById("term"); //output van terminaal

    // keyboard action (on 'Enter')

    userInput.addEventListener('keypress', (event) =>{

        if(event.key === "Enter"){

            var password = new Crypt(userInput.value);

            setTimeout( () => {termout.innerText = "==> []"}, 200);                //0
            setTimeout( () => {termout.innerText = "==> [#]"}, 400);              //1
            setTimeout( () => {termout.innerText = "==> [###]"}, 600);           //2
            setTimeout( () => {termout.innerText = "==> [######]"}, 800);       //3
            setTimeout( () => {termout.innerText = "==> [#########]"}, 1000);   //4
            setTimeout( () => {termout.innerText = "==> [##########]"}, 1200); //5
            setTimeout( () => {
                termout.innerText = "==> [##########] \n :: Klaar";
                password.incrypt();
            }, 1400);
        }
    
    });


    // button press
    let submit = document.getElementById("submitBtn");

    submit.addEventListener('click', () =>{

        var password = new Crypt(userInput.value);

        setTimeout( () => {termout.innerText = "==> []"}, 200);                //0
        setTimeout( () => {termout.innerText = "==> [#]"}, 400);              //1
        setTimeout( () => {termout.innerText = "==> [###]"}, 600);           //2
        setTimeout( () => {termout.innerText = "==> [######]"}, 800);       //3
        setTimeout( () => {termout.innerText = "==> [#########]"}, 1000);   //4
        setTimeout( () => {termout.innerText = "==> [##########]"}, 1200); //5
        setTimeout( () => {
            termout.innerText = "==> [##########] \n :: Klaar";
            password.incrypt();
        }, 1400);
    });

    
    let clear = document.getElementById("clearBtn");

    clear.addEventListener('click', () =>{

        setTimeout( () => {termout.innerText = "==> [-----]"}, 500);
        setTimeout( () => {termout.innerText = "==> [----------]"}, 1000);
        setTimeout( () => {
            userInput.value = "";
            userOutput.innerText = "";
            termout.innerText = "::skoon";
        }, 1500)
        
    });

    let colorBtn = document.getElementById("kleur");

    colorBtn.addEventListener('click', () =>{
        document.body.style.backgroundColor = "#F5713F";
    });
}    