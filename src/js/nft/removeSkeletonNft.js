export function skeletonsNft() {
    const allSkeleton = document.querySelectorAll('.skeleton');
    const paginationBtn = document.querySelector('.nfts-pagination');
    paginationBtn.style.pointerEvents = 'auto';
    document.querySelectorAll('.skeleton-card').forEach((card) => {
        card.remove();
    });

    allSkeleton.forEach((item) => {
        item.classList.remove('skeleton');
    });
}
