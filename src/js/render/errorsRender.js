import i18n from '../i18n';
import { feedback, input } from '../elems';

export default (key) => {
  feedback.textContent = i18n.t(key);
  input.classList.add('is-invalid');
  feedback.classList.remove('text-success');
  feedback.classList.add('text-danger');
};
