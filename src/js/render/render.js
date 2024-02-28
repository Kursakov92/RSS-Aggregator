import errorsRender from "./errorsRender";
import successRender from "./successRender";
import feedsRender from "./feedsRender";
import postsRender from "./postsRender";
import modalRender from "./modalRender";

export default (path, value) => {
  switch (path) {
    case 'error': 
      errorsRender(value);
      break;
    case 'items':
      successRender(value);
      break;
    case 'feeds':
      feedsRender(value);
      break;
    case 'posts':
      postsRender();
      break;
    case 'currentPost':
      modalRender(value);
      break;
    case 'viewedPostIds':
      postsRender();
      break;
  }
}