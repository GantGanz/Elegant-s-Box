function togglePopupMessage(message) {
    document.getElementById("popup-message").classList.toggle("active");
    document.getElementById("message").innerHTML = message;
}

function togglePopupMeme(meme) {
    document.getElementById("popup-meme").classList.toggle("active");
    document.getElementById("meme").innerHTML = `<img src="../img/contents/` + meme + `" alt="` + meme + `" loading="lazy">`;
}

function togglePopupMemeO(meme) {
    document.getElementById("popup-meme").classList.toggle("active");
    document.getElementById("meme").innerHTML = `<img src="img/contents/` + meme + `" alt="` + meme + `" loading="lazy">`;
}