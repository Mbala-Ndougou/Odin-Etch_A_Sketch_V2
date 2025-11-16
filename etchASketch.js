const container = document.querySelector('.container');
let containerRow = parseFloat(getComputedStyle(container).width);
let containerCol = parseFloat(getComputedStyle(container).height);
console.log(containerCol);
console.log(containerRow);

let n = Number(prompt('How many squares per line/column?'));
console.log(n);


for(let i = 0; i < (n*n); i++) {
    
    const div = document.createElement('div');
    div.classList.add('grid');
    div.style.width = `${(containerCol/n)-1}px`;
    div.style.height = `${(containerRow/n) -1}px`;  
    console.log(div.style.width);
    console.log(div.style.height);
    
    
    container.appendChild(div);

    div.textContent = "**"
    
}   

