feather.replace();


//Código que seleciona todo a ancora "a" que comece com #, para cada ancora ele adicona um evento
//impedindo o comportamento default e adiciona o smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});