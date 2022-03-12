const cambios = () => {
       const lista = document.querySelectorAll(".listafrutas");
       const cambiar = document.querySelector(".cambiar");
       cambiar.addEventListener('click', () => {
       lista.forEach(element => {
             if(element.classList.contains('even')){
                element.classList.remove('even');
                element.classList.add('odd')

             }else{
                
                element.classList.remove('odd');
                element.classList.add('even');

             }
        })



    })
}
