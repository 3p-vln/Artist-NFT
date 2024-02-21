document.addEventListener('DOMContentLoaded', async () => {
    const artLoadEvent = new Event('loadingIsFinished');
    document.dispatchEvent(artLoadEvent);
});
