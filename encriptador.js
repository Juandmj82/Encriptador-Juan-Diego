document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.querySelector('.btn-encrypt');
    const decryptButton = document.querySelector('.btn-decrypt');
    const copyButton = document.querySelector('.btn-copy');
    const clearButton = document.querySelector('.btn-clear');
    const textArea = document.getElementById('textArea');

    function encrypt(text) {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function decrypt(text) {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    encryptButton.addEventListener('click', () => {
        const inputText = textArea.value;
        textArea.value = encrypt(inputText);
    });

    decryptButton.addEventListener('click', () => {
        const inputText = textArea.value;
        textArea.value = decrypt(inputText);
    });

    copyButton.addEventListener('click', () => {
        textArea.select();
        document.execCommand('copy');
    });

    clearButton.addEventListener('click', () => {
        textArea.value = '';
    });
});
