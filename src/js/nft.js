import { navigation } from './nft/nftCards';

document.addEventListener('DOMContentLoaded', async () => {
    skeletonCardLoad();
    await navigation();
    // const artLoadEvent = new Event('loadingIsFinished');
    // document.dispatchEvent(artLoadEvent);
});

function skeletonCardLoad() {
    const paginationBtn = document.querySelector('.nfts-pagination');

    window.addEventListener('load', function () {
        paginationBtn.style.pointerEvents = 'auto';
        document.querySelectorAll('.skeleton-card').remove();
    });
}
