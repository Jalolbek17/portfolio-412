document.querySelectorAll('.card').forEach(card => {
    card.onclick = () => location.href = card.dataset.link;
});
