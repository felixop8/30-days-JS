const addItems = document.querySelector('.addItems');
const itemsList = document.querySelector('.items')
const uncheckAllButton = document.querySelector('#uncheckAll');
const checkAllButton = document.querySelector('#checkAll');
const clearAllButton = document.querySelector('#clearAll');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(items = [], itemsList) {
    itemsList.innerHTML = items.map((item, id) => {
        return `
            <li>
                <input type="checkbox" data-index=${id} id="item${id}"${item.done ? 'checked' : ''}/>
                <label for="item${id}">${item.text}</label>
            </li>
        `
    }).join('');
}

function toggleDoneStatus(e) {
    if(!e.target.matches('input')) return;
    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function uncheckAll(e) {
    e.preventDefault();
    const allUncheckedList = items.map((item) => {
        return { text: item.text, done: false }
    });
    populateList(allUncheckedList, itemsList);
    localStorage.setItem('items', JSON.stringify(allUncheckedList));   
}

function checkAll(e) {
    e.preventDefault();
    const allCheckedList = items.map((item) => {
        return { text: item.text, done: true }
    });
    populateList(allCheckedList, itemsList);
    localStorage.setItem('items', JSON.stringify(allCheckedList));
}

function clearAll(e) {
    e.preventDefault();
    populateList([], itemsList);
    localStorage.clear();
}

itemsList.addEventListener('click', toggleDoneStatus);
addItems.addEventListener('submit', addItem);
uncheckAllButton.addEventListener('click', uncheckAll);
checkAllButton.addEventListener('click', checkAll);
clearAllButton.addEventListener('click', clearAll);

populateList(items, itemsList);