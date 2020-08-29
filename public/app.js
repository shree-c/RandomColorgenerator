const chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const codeele = document.getElementsByClassName('code')[0];
const message = document.getElementsByClassName('message')[0];
document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        document.body.style.backgroundColor = hexcodebuilder();
        codeele.innerText = hexcodebuilder();
    }
    if (event.key === 'c' && codeele.innerText !== 'hexcode') {
        console.log(codeele.innerText);
       let text =  codeele.innerText;
       let textarea =  document.createElement('textarea');
       textarea.width = '1px';
       textarea.height = '1px';
       textarea.value = text;
       document.body.append(textarea);
       textarea.select();
       document.execCommand('copy');
       document.body.removeChild(textarea);
       message.innerText = 'copied!!'
       setTimeout(() => {
           message.innerText = '';
       }, 1000);
    }
    /////////////
   

});

function hexcodebuilder() {
    let code = '#';
    for (let i = 0; i < 6; i++) {
        code = code + chars[Math.floor(Math.random() * 16)]
    }
    return code;
}