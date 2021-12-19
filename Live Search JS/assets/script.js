const searchInput = document.getElementById('search-input'),
    itemsList = document.querySelectorAll('.list__item');

searchInput.addEventListener('input', function() {
    let filter = searchInput.value.toLowerCase();
    
    if(filter !== '')
        itemsList.forEach(element => {
            if(element.textContent.toLowerCase().includes(filter))
                element.style = 'display: block;';
            else
                element.style = 'display: none;';
        });
    else
        itemsList.forEach(element => {
            element.style = 'display: block;';
        });
})