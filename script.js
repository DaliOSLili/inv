function revealInvitation() {
    const invite = document.getElementById('invitation');
    invite.classList.toggle('hidden');
    setTimeout(() => {
        invite.style.opacity = 1;
    }, 100);
}
