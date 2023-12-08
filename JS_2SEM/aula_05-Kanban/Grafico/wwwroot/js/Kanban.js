const colunas = document.querySelector(".column");

//variavel para armazenar o item atual
let ItemArrastado = null;

//Adicional um ouvinte ao evento a cada elemento com classe "column"
colunas.forEach(item => {
    item.addEventListener("dragstart", (e) =>{
        ItemArrastado = e.target;

        ItemArrastado.cassList.add("dragging");
    })

    item.addEventListener("dragend", () =>{
        ItemArrastado.classList.remove("dragging");

        ItemArrastado = null;
    });
});

colunas.forEach((item) =>{
    item.addEventListener("dragover", (e) =>{
        e.preventDefault();

        if(!ItemArrastado) return;

        const aplicarDepois = getNewPosition(item, e.clientY);


        if(aplicarDepois){
            aplicarDepois.insertAdjacentElement("afterend", ItemArrastado);
        }else{
            item.prepend(ItemArrastado);
        }
    });
});

function getNewPosition(column, posY){
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;

    for(let refer_cards of cards){
        const box = refer_cards.getBoundingClientRect();
        const boxCenterY = box.top + box.heigth /2;

        if(posY >= boxCenterY) result = refer_cards;
    }
    return result;
}