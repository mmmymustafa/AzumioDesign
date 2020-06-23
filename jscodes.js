const selectedArea = (id) => {
   let area = document.getElementById(id)
    area.style.color = (area.style.color === '' || area.style.color === 'gray') ? 'white' : 'gray'
    area.style.backgroundColor = (area.style.backgroundColor === '' || area.style.backgroundColor === 'white') ? 'rgb(57, 71, 153)' : 'white'
    area.style.boxShadow = area.style.boxShadow === '' ? '1px 1px 5px rgb(57, 71, 153)' : ''
    area.style.borderColor = (area.style.borderColor === '' || area.style.borderColor === 'lightgray') ? 'rgb(57, 71, 153' : 'lightgray'
}

let curStep = 4;

const setStep = (idx) => {
    let steps = document.getElementsByClassName('step')
    let stepBodies = document.getElementsByClassName('step-body')
    for(let i = 0; i < steps.length; i++){
        if(i === idx){
            steps[i].style.color = 'rgb(57, 71, 153)'
            steps[i].style.fontSize = '2.75rem'
            stepBodies[i].style.display = 'block'
        } else {
            steps[i].style.color = 'lightgray'
            steps[i].style.fontSize = '1.5rem'
            stepBodies[i].style.display = 'none'
        }
    }
}

const backStep = () => {
    let nextButton = document.getElementsByClassName('next-done-button')[0]
    if(curStep !== 0){ 
        curStep--
        setStep(curStep)
        nextButton.innerText= 'NEXT'
    }
}

const nextStep = () => {
    let nextButton = document.getElementsByClassName('next-done-button')[0]
    if(curStep !== 4){ 
        curStep++
        setStep(curStep)
        if (curStep === 4) nextButton.innerText = 'DONE'
    } 
}



