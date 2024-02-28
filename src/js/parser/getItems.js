import idGenerator from "../idGenerator";

export default (content) => {
  const items = content.querySelectorAll('item');
  let rssLink = [];
  items.forEach((item) => {
    const postTitle = item.querySelector('title').textContent;
    const postDescription = item.querySelector('description').textContent;
    const postLink = item.querySelector('link').textContent;
    const id = idGenerator();
    rssLink.push({ postTitle, postDescription, postLink, id })
  })
  return rssLink;
}