document.getElementById('nein').addEventListener('click', function() {
    document.getElementById('ergebnis').textContent = 'Warum also Sorgen machen?';
});

document.getElementById('ja').addEventListener('click', function() {
    var aktion = prompt('Kannst du etwas dagegen tun? (ja/nein)');
    if (aktion.toLowerCase() === 'ja' || aktion.toLowerCase() === 'nein') {
        document.getElementById('ergebnis').textContent = 'Warum also Sorgen machen?';
    } else {
        alert('Ungültige Eingabe. Bitte antworte mit "ja" oder "nein".');
    }
});
