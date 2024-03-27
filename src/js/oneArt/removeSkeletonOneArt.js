export function skeletonsOneArt() {
    const allSkeletons = document.querySelectorAll('.skeletons');
    const cardNoSkeleton = document.querySelectorAll('.art:not(.skeletons)');
    const allSkeleton = document.querySelectorAll('.skeleton');
    cardNoSkeleton.forEach((card) => {
        card.style = 'display: flex';
    });
    allSkeletons.forEach((item) => {
        item.remove();
    });
    allSkeleton.forEach((item) => {
        item.classList.remove('skeleton');
    });
}
