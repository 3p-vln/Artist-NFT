export function skeletonsArt(mesh) {
    const allSkeleton = document.querySelectorAll('.skeleton');
    const cardNoSkeleton = document.querySelectorAll('.card:not(.skeleton)');
    cardNoSkeleton.forEach((card) => {
        card.style = 'display: block';
    });
    allSkeleton.forEach((item) => {
        item.remove();
    });
}
