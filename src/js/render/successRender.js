import i18n from '../i18n';
import { feedback, input } from '../elems';

export default () => {
  feedback.textContent = i18n.t('success');
  feedback.classList.remove('text-danger');
  feedback.classList.add('text-success');
  input.classList.remove('is-invalid');
  input.value = '';
};
