// Script do Feather Icons
feather.replace();
let selectedMenuId = 1;

const menu = document.getElementById("menu");
const boardLeft = document.getElementById("board-left");
const boardRight = document.getElementById("board-right");
const flexBoard = document.getElementById("flex-board");
const illustration = document.getElementById("illustration");

const contentList = [
    {img:
    "https://i.pinimg.com/originals/c7/c4/7d/c7c47df2029f48c112eee65625f9ef8b.png"
    },
    {img:
    "https://images.vexels.com/media/users/3/158558/isolated/preview/60b6cba6210b4313e1168a74976a9039-menina-swimsuit-flor-surfboard-apartamento-by-vexels.png"
    },
    {img:"https://cdn.pixabay.com/photo/2020/06/28/02/34/mountain-5347640__340.png"}
]
//iniciando o scroll no id "bl-1"
document.getElementById("bl-1").scrollIntoView();

//Evento do click
menu.addEventListener("click", changeContent);

// função para animação funcionar clicando nas imagens laterais
function changeContent(event){
    const target = event.target.id;

    if(target ==="menu" || target === "" || target =="selectedMenuId"){
        return;
    }

    // Adição e Remoção da cor ao selecionar um ícone, seleção menu
    document.getElementById(target).classList.add("selected");

    document.getElementById(selectedMenuId).classList.remove("selected");

    //scroll dos boards
    const offset = selectedMenuId - target;
    boardLeft.scrollTop -= offset * 370;
    boardRight.scrollTop += offset * 370;

    //flex board controll
    //Adicionando e removendo a animação do lado esquerdo
    flexBoard.classList.add("flex-board-close");
    setTimeout( function(){
        illustration.src = contentList[target-1].img;
        flexBoard.classList.remove("flex-board-close");
        flexBoard.classList.add("flex-board-open");
    }, 400);

    selectedMenuId = target;
}