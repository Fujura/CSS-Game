let modalWindow = document.querySelector('.modal-window');
console.log(modalWindow);

function showModalWindow() {
  modalWindow.classList.add('active');
}
function closeModalWindow() {
  modalWindow.classList.remove('active');
}
