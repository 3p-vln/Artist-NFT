import $ from 'jquery';
import ClipboardJS from 'clipboard';
export function copytext() {
  var clipboard = new ClipboardJS('.copy-btn');
}
