export default (value) => {
    const feeds = document.querySelector('.feeds');
    feeds.textContent = '';
    const feedsCard = document.createElement('div');
    feedsCard.classList.add('card', 'border-0');
    const feedsCardBody = document.createElement('div');
    feedsCardBody.classList.add('card-body');
    const feedsTitile = document.createElement('h2');
    feedsTitile.classList.add('card-title', 'h4');
    feedsTitile.textContent = 'Фиды';
    feedsCardBody.appendChild(feedsTitile);
    feedsCard.appendChild(feedsCardBody);
    feeds.appendChild(feedsCard);
    const feedsList = document.createElement('ul');
    feedsList.classList.add('list-group', 'border-0', 'rounded-0');
    value.forEach((feed) => {
      const item = document.createElement('li');
      item.classList.add('list-group-item', 'border-0', 'border-end-0');
      const title = document.createElement('h3');
      title.classList.add('h6', 'm-0');
      title.textContent = feed.feedTitle;
      const description = document.createElement('p');
      description.classList.add('m-0', 'small', 'text-black-50')
      description.textContent = feed.feedDescription;
      item.appendChild(title);
      item.appendChild(description);
      feedsList.appendChild(item);
    })
    feedsCard.appendChild(feedsList);
}