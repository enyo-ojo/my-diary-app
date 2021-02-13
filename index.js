const entryForm = document.querySelector('#entryForm')
const textArea = document.querySelector('#textEntry')
const button = document.querySelector('#button')
const entriesNav = document.querySelector('#entriesNav')
const entries = document.querySelector('#entries')
let count = 1

function onSubmitText(event) {

    event.preventDefault()
    const newEntry = document.createElement('div')
    newEntry.classList.add('newEntry')
    newEntry.innerText = textArea.value
    newEntry.style.display = 'none'
    entries.append(newEntry)
    textArea.value = ''

    const hiddenText = document.createElement('button')
    hiddenText.classList.add('buttons')
    hiddenText.innerText = 'Day' + ' ' + count++
        entriesNav.append(hiddenText)

    hiddenText.addEventListener('click', function(event) {
        const allEntry = document.querySelectorAll('.newEntry')
        for (let i = 0; i < allEntry.length; i++) {
            allEntry[i].style.display = 'none'
        }

        newEntry.style.display = 'block'
    })
    hiddenText.addEventListener('dblclick', function(event) {
        newEntry.style.display = 'none'
    })


}


onSubmitText
entryForm.addEventListener('submit', onSubmitText)