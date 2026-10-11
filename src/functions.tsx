import { useState } from 'react'

/*
export default function Avatar(){ 
    return(
        <img src={teleLogo} alt= "telepath_logo" width={120} height={120}
        />
    );
}
*/

/*  
passare props MODO-1: ha senso quando ne passi 1/2 ma se ne passi di più diventa ncasino
export default function Avatar({logoPath}: {logoPath:string}){ 
    return(

        <img src={logoPath} alt= "telepath_logo" width={120} height={120}
        />

    );
}*/

//passare props MODO-2: per quando devi passare più PROPS e vuoi tenere ordine!!!!!

interface logoProps {
  /** The text to display inside the button */
  logoPath: string;
  /** Whether the button can be interacted with */
  size: number;
}

export function Avatar({logoPath, size}: logoProps){ //default che vuol dire???
    return(

        <img src={logoPath} alt= "telepath_logo" width={size} height={size}
        />

    );
}




export function CounterButton(){

    //useState è un HOOK. Inoltre inizializza la var "counter" a 0. PS: states sono ISOLATI e PRIVATI (to the component declaring it)!!!
    const [counter, setCounter] = useState(0); 

    function resetCounter() {
        setCounter(0);
    }

    function getRandomInt(min:number, max: number) {    //0 and 255 included
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    function handleClick() {
        setCounter(counter +1);
        const butCheck = document.getElementById("count") ;
        
        if(butCheck){
            const counterButton = butCheck as HTMLButtonElement;
            let r_color:number =  getRandomInt(0,255);
            let g_color:number =  getRandomInt(0,255);
            let b_color:number =  getRandomInt(0,255);
            counterButton.style.backgroundColor= `rgb( ${r_color}, ${g_color}, ${b_color})`;

            if(r_color <= 20 || g_color <= 40 || b_color <= 25 ){
                counterButton.style.color= `rgb( 245, 240, 232)`;
            }
            else{
                counterButton.style.color= `rgb( 0, 0, 0)`;
            }
        }
    }

    return (
        <>
        <button style={{gridArea: "but-1"}} type="button" id="reset" className="btn" onClick={resetCounter}>
            Reset
        </button>

        <button style={{gridArea: "but-2"}} type="button" className="btn" id="count" onClick={handleClick}>
            You clicked {counter} times
        </button>
        </>
    );

    
}



export default function ColorButton(){
    function handleClick() {

        //è modo SAFE di gestire un html element. con if(elCheck) sono coperto in caso di valore "null"
        // cioè se non dovesse trovare il div che cerco
        const elCheck = document.getElementById("grid_contId") ;
        
        if(elCheck){
            const mainCard = elCheck as HTMLDivElement;


            switch(window.getComputedStyle(mainCard).backgroundColor) {
                case "rgb(127, 219, 218)":
                    mainCard.style.backgroundColor="rgb(255, 165, 82)";
                    break;
            
                case "rgb(255, 165, 82)":
                    mainCard.style.backgroundColor="rgb(184, 169, 250)";
                    break;
            
                case "rgb(184, 169, 250)":
                    mainCard.style.backgroundColor="rgb(127, 219, 218)";
                    break;
            }

        }
    }

    return( //handleClick è passata come PROP a <button>
        <button style={{gridArea: "but-3"}} type="button" className="btn" onClick={handleClick}>    
              Click me!
        </button>

    );
}



