const container = document.querySelector('.container');
let containerRow = parseFloat(getComputedStyle(container).width);
let containerCol = parseFloat(getComputedStyle(container).height);

function etchASketch() {

    let n;
    
    do {
        n = Number(prompt('Enter a number superior or equal to 1 or inferior or equal to 100'))
    } while(n<1 || n > 100)

    for(let i = 0; i < (n*n); i++) {
        
        const div = document.createElement('div');
        div.classList.add('grid');
        div.style.width = `${(containerCol/n)-1}px`;
        div.style.height = `${(containerRow/n) -1}px`;  

        div.addEventListener('mouseover', e => e.target.style.backgroundColor = 'grey')
        
        container.appendChild(div);

        let reset = document.querySelector('.reset');
        reset.addEventListener('click',() => {

            let grids = document.querySelectorAll('.grid');
            grids.forEach(div => {
                div.style.backgroundColor = "rgb(243, 243, 243)";
            });

        })

    }   

}

let start  = document.querySelector('.start');
start.addEventListener('click', () => {
    container.innerHTML = "";
    etchASketch();    
})