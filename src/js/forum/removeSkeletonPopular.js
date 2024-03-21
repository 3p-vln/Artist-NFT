export function skeletonsForumPopular() {
    const allSkeleton = document.querySelectorAll('.skeleton');
    document.querySelector('.skeleton-wrapper').remove();

    allSkeleton.forEach((item) => {
        item.classList.remove('skeleton');
    });
}
