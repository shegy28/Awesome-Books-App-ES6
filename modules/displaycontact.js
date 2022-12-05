  const displayContact = () => {
    document.getElementById('contact').classList.add('block');
    document.getElementById('Book-list').classList.remove('block');
    document.getElementById('Add-new').classList.remove('block');
  }

  export {displayContact}