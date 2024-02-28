var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click', function () {
    var node;
    for (var i = 0; i < this.childNodes.length - 1; i++)
        node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
        node.classList.add('visible');
        activeDropdown = node;
    };
})

window.onclick = function (e) {
    console.log(e.target.tagName)
    console.log('dropdown');
    console.log(activeDropdown)
    if (e.target.tagName === 'LI' && activeDropdown) {
        if (e.target.innerHTML === 'Master Card') {
            document.getElementById('credit-card-image').src = 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_hrz_rev_300px_2x.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
            e.target.innerHTML = document.getElementById('current-card').innerHTML;
            document.getElementById('current-card').innerHTML = 'Master Card';
        }
        else if (e.target.innerHTML === 'PIX') {
            document.getElementById('credit-card-image').src = 'https://user-images.githubusercontent.com/741969/99538133-492fe280-298b-11eb-81a2-66779343e064.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
            e.target.innerHTML = document.getElementById('current-card').innerHTML;
            document.getElementById('current-card').innerHTML = 'PIX';
        }
        else if (e.target.innerHTML === 'Cartão Visa') {
            document.getElementById('credit-card-image').src = 'https://files.passeidireto.com/8b1cc0c7-5e15-4589-8ee6-efa6016a75ce/8b1cc0c7-5e15-4589-8ee6-efa6016a75ce.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
            e.target.innerHTML = document.getElementById('current-card').innerHTML;
            document.getElementById('current-card').innerHTML = 'Cartão Visa';
        }
    }
    else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
    }
}
