
let dy = document.getElementById("dy");
let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let se = document.getElementById("se");

const timer = () => {
    let day = 0;
    let hour = 0;
    let min = 0;
    let sec = 59;

    let interval = setInterval(() => {
        sec++;

        if (sec >= 59) {
            min++;
            sec = 0;
            // se.innerHTML = sec;
        }

        if (min >= 59) {
            hour++;
            min = 0;
            // min.innerHTML = min;
        }  
        
        if(hour >= 23){
            day++;
            hour = 0;
        }
    
        // Update HTML elements with current values
        dy.innerHTML = day;
        hr.innerHTML = hour;
        mn.innerHTML = min;
        se.innerHTML = sec;


    }, 1000);
}

timer();
