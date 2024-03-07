export function copytext() {
  var copyBtn = document.querySelector('.copy-btn');
  copyBtn.addEventListener('click', () => {
    const sysInp = document.createElement('input');
    sysInp.setAttribute('value', 'EQBSSl0Xlo15gkkHTmFw5YVYOiWJ.');
    document.body.appendChild(sysInp);
    sysInp.select();
    document.execCommand('copy');
    document.body.removeChild(sysInp);
  });
}
