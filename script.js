const inputField = document.querySelector('input[type="text"]');
const checkButton = document.querySelector('button');
const resultParagraph = document.getElementById('result');

function checkVowel() {
    const input = inputField.value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (input.length === 1 && /^[a-z]$/.test(input)) {
        if (vowels.includes(input)) {
            resultParagraph.textContent = `${input.toUpperCase()} is a vowel!`;
            resultParagraph.style.color = 'green';
        } else {
            resultParagraph.textContent = `${input.toUpperCase()} is a consonant!`;
            resultParagraph.style.color = 'red';
        }
    } else {
        resultParagraph.textContent = 'Please enter a single alphabet letter.';
        resultParagraph.style.color = 'orange';
    }
}

checkButton.addEventListener('click', checkVowel);
