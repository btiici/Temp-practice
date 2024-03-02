    const input = document.getElementById('input')
    const tofahrenheit = document.getElementById('tofahrenheit')
    const tocelcious = document.getElementById('tocelcious')
    const result = document.getElementById('result')
    let temp;

    function convert(event){
        event.preventDefault()

        if(tofahrenheit.checked){
            temp = Number(input.value)
            temp = temp * 9 / 5 + 32
            result.textContent = temp.toFixed(1) + "°F"
        }
        else if (tocelcious.checked) {
            temp = Number(input.value)
            temp = (5 / 9) * (temp - 32)
            result.textContent = temp.toFixed(1) + "°C"
        }
        else {
            result.textContent = "Select a unit"
        }
    }

    