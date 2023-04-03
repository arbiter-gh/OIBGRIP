let degree = document.getElementById('degree')
degree.value = 0


let tempType = document.getElementById('temp-type')
tempType.value = 'celsius'

let output = document.getElementById('output')
output.innerHTML = 32 + ' \u00B0F'

let convertBtn = document.getElementById('convert-btn')
convertBtn.addEventListener('click', convert)


function convert() {

    if (!degree.value) {
        console.log("Enter degree")
        return
    }
    let result = null
    if (tempType.value == 'celsius') {
        result = ((degree.value * 9) / 5 + 32)
        result = Math.round((result + Number.EPSILON) * 100) / 100
        output.innerHTML = result + ' \u00B0F'
    } else if (tempType.value == 'fahrenheit') {
        result = ((degree.value - 32) * 5) / 9
        result = Math.round((result + Number.EPSILON) * 100) / 100
        output.innerHTML = result + ' \u00B0C'
    }


    console.log(result)
} 