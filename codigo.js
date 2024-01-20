document.addEventListener('DOMContentLoaded', function () { 
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault() 
        var usuario = document.getElementById('username').value
        var senha = document.getElementById('senha').value
        var butao = document.getElementById('customSwitch').checked

        alert('Username: ' + usuario + '\nsenha: ' + senha + (butao ? '\nDados salvos' : '\nDados não salvos'))

    })
})
