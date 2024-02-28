import { feedback, input } from "../app";
import { i18n } from "../app";

export default (key) => {
  feedback.textContent = i18n.t(key);
  input.classList.add('is-invalid');
  feedback.classList.remove('text-success');
  feedback.classList.add('text-danger');
}