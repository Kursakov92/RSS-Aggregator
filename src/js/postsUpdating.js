import axios from 'axios';
import getItems from './parser/getItems';
import i18n from './i18n';

const pars = new DOMParser();

export default function postsUpdating(state) {
  try {
    const oldLinks = state.posts.flat().map((post) => post.postLink);
    const promises = state.feeds.map((feed) => (
      axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(feed.url)}`)
        .then((response) => {
          if (response.status === 200) {
            const content = pars.parseFromString(response.data.contents, 'application/xml');
            const newItems = getItems(content).filter((item) => !oldLinks.includes(item.postLink));
            state.posts.unshift(newItems);
          }
        })
        .catch(() => {
          // eslint-disable-next-line
          state.error = i18n.t('networkError');
        })
    ));
    Promise.all(promises)
      .catch(() => {
        // eslint-disable-next-line
        state.error = i18n.t('networkError');
      });
    setTimeout(() => {
      postsUpdating(state);
    }, 5000);
  } catch (error) {
    // eslint-disable-next-line
    state.error = i18n.t('networkError');
  }
}
