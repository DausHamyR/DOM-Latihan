const button = document.querySelector('button');
const targetObject1 = document.getElementById('targetObject1');
const targetObject2 = document.getElementById('targetObject2');

button.addEventListener('click', function() {
    const selection = document.getElementById('selection').value;
    const inputValue = document.getElementById('inputValue').value;

    if(selection === 'warnaLatar'){
        targetObject1.style.backgroundColor = inputValue
    }else if(selection === 'warnaText'){
        targetObject2.style.color = inputValue
    }else if(selection === 'ukuranText'){
        targetObject2.style.fontSize = inputValue
    }else if(selection === 'jenisFont'){
        targetObject2.style.fontFamily = inputValue
    }else if(selection === 'lebarKonten'){
        targetObject1.style.width = inputValue
    }else if(selection === 'tinggiKonten'){
        targetObject1.style.height = inputValue
    }
}
);