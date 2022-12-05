const displayList = () => {
  document.getElementById('Add-new').classList.remove('block');
    document.getElementById('Book-list').classList.add('block');
    document.getElementById('contact').classList.remove('block');
}

export { displayList };