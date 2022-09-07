let form = document.forms.name

let inps=form.querySelectorAll(".b")
console.log(inps);
form.onsubmit = (event) => {
    event.preventDefault() // stop page reload 
    let iseEroor =false
            inps.forEach(inp =>{
                if(inp.value.length === 0 ){
                    iseEroor =true
                }
                
                if(iseEroor = false){
    
                    submit()
                }else if(inp.value.length === 0){
                  inp.classList.add("bb")
                }
            })

}

function submit() {
    let user = {
        id: Math.random()
    }

    let fm = new FormData(form) // чтобы собрать данные из формы

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}