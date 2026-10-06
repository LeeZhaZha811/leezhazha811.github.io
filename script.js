const dialog = document.querySelector('.image-dialog');
const dialogImage = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('p');
document.querySelectorAll('.image-button').forEach(button => button.addEventListener('click', () => {
  const thumbnail = button.querySelector('img');
  dialogImage.src = button.dataset.full;
  dialogImage.alt = thumbnail.alt;
  dialogCaption.textContent = button.dataset.caption || thumbnail.alt;
  dialog.showModal();
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { dialogImage.removeAttribute('src'); });
