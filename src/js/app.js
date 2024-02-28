import onChange from 'on-change';
import render from './render/render';
import ru from '../locales/ru';
import i18next from 'i18next';
import * as yup from 'yup';
import axios from 'axios';
import parser from './parser/parser';
import postsUpdating from './postsUpdating';

export const feedback = document.querySelector('.feedback');
export const input = document.querySelector('input');

export const i18n = i18next.createInstance();
i18n.init({
  lng: 'ru',
  debug: true,
  resources: { ru },
});

export const state = {
  error: '',
  currentURL: '',
  items: [],
  feeds: [],
  posts: [],
  currentPost: null,
  viewedPostIds: [],
};

export default () => {
  const form = document.querySelector('form');

  const watchState = onChange(state, render);

  postsUpdating(watchState);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const schema = yup.string().url('invalidUrl').notOneOf(state.items, 'alreadyExistRss');

    schema.validate(input.value.trim())
      .then((data) => {
        const url = data;
        state.currentURL = url;
        return url;
      })
      .then((url) => axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`))
      .then((response) => parser(state.currentURL, response, watchState))
      .catch((e) => {
        watchState.error = e.toString().slice(17);
      });
  });

  const posts = document.querySelector('.posts');

  posts.addEventListener('click', (event) => {
    if (event.target.dataset.bsToggle === 'modal') {
      const eventID = event.target.dataset.id;
      watchState.currentPost = watchState.posts
        .flat()
        .filter((post) => post.id === eventID);
      watchState.viewedPostIds.push(eventID);
    }

    if (event.target.tagName === 'A') {
      const eventID = event.target.dataset.id;
      if (!watchState.viewedPostIds.includes(eventID)) watchState.viewedPostIds.push(eventID);
    }
  });
};
