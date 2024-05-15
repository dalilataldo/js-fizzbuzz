// valore start
let start = 1

// ciclo for
for (let i = start; i <= 100; i++) {
    if (i % 3 === 0) { console.log('Buzz'); }
    else if (i % 5 === 0) { console.log('Fitz'); }
    // else if (i % 3 and % 5 === 0) { console.log('Fitz'); }
    else { console.log(i); }
}