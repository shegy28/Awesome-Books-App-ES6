const displayNew = () => {
  document.getElementById('Add-new').classList.add('block');
  document.getElementById('Book-list').classList.remove('block');
  document.getElementById('contact').classList.remove('block');
};

export default displayNew;