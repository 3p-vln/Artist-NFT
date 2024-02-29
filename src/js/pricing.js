import { pricingTabs } from './pricing/pricingTabs';

document.addEventListener('DOMContentLoaded', () => {
  pricingTabs();
  const artLoadEvent = new Event('loadingIsFinished');
  document.dispatchEvent(artLoadEvent);
});
