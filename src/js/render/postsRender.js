import { state } from "../app";

export default () => {
  const flatValue = state.posts.flat();
  const posts = document.querySelector('.posts');
  posts.textContent = '';
  const postsCard = document.createElement('div');
  postsCard.classList.add('card', 'border-0');
  const postsCardBody = document.createElement('div');
  postsCardBody.classList.add('card-body');
  const postsTitle = document.createElement('h2');
  postsTitle.classList.add('card-title', 'h4');
  postsTitle.textContent = 'Посты';
  postsCardBody.appendChild(postsTitle);
  postsCard.appendChild(postsCardBody);
  posts.appendChild(postsCard);
  const postsList = document.createElement('ul');
  postsList.classList.add('list-group', 'border-0', 'rounded-0');
  flatValue.forEach((post) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
    const link = document.createElement('a');
    link.href = post.postLink;
    state.viewedPostIds.includes(post.id) ? link.classList.add('fw-normal', 'link-secondary') : link.classList.add('fw-bold');
    link.setAttribute('data-id', post.id);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.textContent = post.postTitle;
    item.appendChild(link);
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
    button.setAttribute('data-id', post.id);
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#modal');
    button.textContent = 'Просмотр'
    item.appendChild(button);
    postsList.appendChild(item)
  })
  postsCard.appendChild(postsList)
}