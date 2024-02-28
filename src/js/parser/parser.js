import { i18n } from "../app";
import getItems from "./getItems";

const pars = new DOMParser();

export default (url, response, state) => {
  const content = pars.parseFromString(response.data.contents, "application/xml");
  const parserError = content.querySelector('parsererror');
  if (parserError) {
    state.error = i18n.t('invalidRss');
    return
  };
  state.items.push(url);
  const feedTitle = content.querySelector('title').textContent;
  const feedDescription = content.querySelector('description').textContent;
  state.feeds.unshift({ feedTitle, feedDescription, url });
  state.posts.unshift(getItems(content));
};
