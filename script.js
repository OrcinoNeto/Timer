function cronometro() {
    function criaHoraDosSegudons(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const cronometro = document.querySelector('.cronometro');
    const btnIniciar = document.querySelector('.iniciarTimer');
    let segundos = 0;
    let timer;

    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            cronometro.innerHTML = criaHoraDosSegudons(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;

        if (el.classList.contains('iniciarTimer')) {            
            cronometro.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
            btnIniciar.disabled = true;          
        }
        if (el.classList.contains('pausarTimer')) {
            clearInterval(timer);
            cronometro.classList.add('pausado');
            btnIniciar.disabled = false;
        }
        if (el.classList.contains('zerarTimer')) {
            clearInterval(timer);
            cronometro.innerHTML = '00:00:00';
            cronometro.classList.remove('pausado');
            segundos = 0;
            btnIniciar.disabled = false;
        }
    });
}
cronometro();