/*Scripts*/

// Controladores do menu;

let openMenuBtn = document.getElementById('openMenuBtn');
	openMenuBtn.addEventListener("click", function(){
	
		if (document.getElementById('barraNav').style.width == "98vw") {
			fechaMenu();
		}else if(document.getElementById('barraNav').style.width == ""){
			abreMenu();
		}else if (document.getElementById('barraNav').style.width == "1%"){
			abreMenu()
		};
	
	}); 

function abreMenu () {
	document.getElementById('barraNav').style.background="#4286f4";
	document.getElementById('barraNav').style.opacity="0.95";
	document.getElementById('barraNav').style.width="98vw";
	document.getElementById('barraNav').style.borderTop="10px #103B82 solid";
	document.getElementById('ulMenu').style.visibility="initial";
	closeMenuBtn.style.visibility="initial";	
}


let closeMenuBtn = document.getElementById('closeMenuBtn');
	closeMenuBtn.addEventListener("click", fechaMenu);	

let linksAncoras = [document.getElementById('link0'), document.getElementById('link1'), document.getElementById('link2'), document.getElementById('link3'),];
	
	for(let i = 0; i < linksAncoras.length; i++){
		linksAncoras[i].addEventListener("click", fechaMenu);
	}	

function fechaMenu() {
	closeMenuBtn.style.visibility="hidden"
	document.getElementById('ulMenu').style.visibility="hidden";
	document.getElementById('barraNav').style.borderTop="initial";
	document.getElementById('barraNav').style.width="1%";
	document.getElementById('barraNav').style.background="transparent";	
}

// 


// 
// Controladores do Indice

let fechaIndiceBTN = document.getElementById('fechaIndiceBTN');
	fechaIndiceBTN.addEventListener("click", fechaIndice);

let ancora = [document.getElementById('ancora0'), document.getElementById('ancora1'), document.getElementById('ancora2'), document.getElementById('ancora3'), document.getElementById('ancora4')];
// Quando clicar nos items fecha o indice
let posicao = 0; /*posicao da ancora, cada ancora é um link no HTML*/
	while(posicao < ancora.length) { /*adiciona o evento enquanto a posicao for menor que o tamanho da ancora*/
		ancora[posicao].addEventListener("click", fechaIndice);
	posicao++;/*passa para a proxima etapa no loop*/
	};


let abreIndiceBTN = document.getElementById('abreIndiceBTN');
	abreIndiceBTN.addEventListener("click", function(){
		abreIndiceBTN.style.visibility="hidden"
		document.getElementById('indice').style.background="#FFF092"
		document.getElementById('indice').style.width="auto";
		document.getElementById('indice').style.boxShadow="0px 0px 10px black";
		document.getElementById('indiceUl').style.visibility="initial";
		fechaIndiceBTN.style.visibility="initial";	
	});


function fechaIndice() {
		fechaIndiceBTN.style.visibility="hidden";
		document.getElementById('indiceUl').style.visibility="hidden";
		document.getElementById('indice').style.width="1px";
		document.getElementById('indice').style.boxShadow="initial";
		document.getElementById('indice').style.background="transparent";
		abreIndiceBTN.style.visibility="initial";		
}


//Configura botão para esconder e mostrar o texto;

let ativador = document.getElementById('lerMaisBTN');
let restoTexto = document.getElementById('restoDoTexto');
	
	ativador.addEventListener("click", function(){

		if (restoTexto.style.fontSize == ""){
			restoTexto.style.fontSize="1em";
			ativador.innerHTML="Esconder";
		}
		else if (restoTexto.style.fontSize="1em"){
			restoTexto.style.fontSize="";
			ativador.innerHTML="Ler mais";
		}
	});

// 
// 
// 

// Rolagem suave com jQuery

$(function() {
    $('a').bind('click',function(event){ /*seleciona o elemento, atribui a função com a animação ao evento */
        var $anchor = $(this);

      $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'easeInOutExpo');
    });
});
	


