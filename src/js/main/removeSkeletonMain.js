export function skeletonsMain() {
    const allSkeleton = document.querySelectorAll('.skeleton');
    document.querySelectorAll('.skeleton-card').forEach((card) => {
        card.remove();
    });

    allSkeleton.forEach((item) => {
        item.classList.remove('skeleton');
    });
}
