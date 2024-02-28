import { feedback, input, i18n } from '../app';

export default () => {
  feedback.textContent = i18n.t('success');
  feedback.classList.remove('text-danger');
  feedback.classList.add('text-success');
  input.classList.remove('is-invalid');
  input.value = '';
};
