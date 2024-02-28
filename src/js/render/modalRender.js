export default (value) => {
  const data = value[0];
  const title = document.querySelector('.modal-title');
  title.textContent = data.postTitle;
  const description = document.querySelector('.modal-body');
  description.textContent = data.postDescription;
  const footer = document.querySelector('.modal-footer');
  const link = footer.querySelector('a');
  link.href = data.postLink;
};
