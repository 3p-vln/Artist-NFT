export function skeletonsCustom(mesh) {
    const allSkeleton = document.querySelectorAll('.skeleton');
    const cardNoSkeleton = document.querySelectorAll('.card:not(.skeleton)');
    const blockNoSkeleton = document.querySelector('.are-you-ready__picture');
    blockNoSkeleton.style = 'display: block';
    cardNoSkeleton.forEach((card) => {
        card.style = 'display: block';
    });
    allSkeleton.forEach((item) => {
        item.remove();
    });
}
