import { navigation } from './nft/nftCards';

document.addEventListener('DOMContentLoaded', async () => {
  await navigation();
  const artLoadEvent = new Event('loadingIsFinished');
  document.dispatchEvent(artLoadEvent);
});
