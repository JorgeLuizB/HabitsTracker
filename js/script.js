const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');
button.addEventListener('click', add);

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5);
    const dayExists = nlwSetup.dayExists(today);

    if(dayExists){
        alert('Este dia já existe');
        return;
    }

    nlwSetup.addDay(today);
}

/*const data = {
    run: ['01-01','01-02','01-06'],
    water: ['01-04','01-05'],
    food: ['01-01','01-03'],
}*/
nlwSetup.setData(data);
nlwSetup.load();