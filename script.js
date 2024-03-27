const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventDefault();
    if (itemInput.value === '') {
        alert('Please enter an item!');
        return;
    }
    console.log('Success');
}


//Event listeners
itemForm.addEventListener('submit', addItem)