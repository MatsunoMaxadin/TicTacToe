
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");
let binary = 0;
let player = document.getElementById("player");
let jogador = document.getElementById("jogador");
let symbol = "X";

    
    function changeSymbol () {
        
        switch (binary) {
            case 0:
            
            symbol = "X";
            jogador.innerHTML = symbol;
            player.style.color = 'red';
            break;
            
            case 1:
            symbol = "O";
            jogador.innerHTML = symbol;
            player.style.color = 'blue';
            break;
            
            
        };
        
        binary = binary === 0? 1 : 0;
        
        
        
    };

    changeSymbol();
    function putSymbol (position) {
        
        
        position.innerHTML = symbol;
        
        changeSymbol();
        
        
        
        
        
    };

