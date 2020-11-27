function togglePopupMessage(message) {
    document.getElementById("popup-message").classList.toggle("active");
    document.getElementById("message").innerHTML = message;
}

function togglePopupMemeO(meme) {
    document.getElementById("popup-meme").classList.toggle("active");
    document.getElementById("meme").innerHTML = `<img src="img/contents/` + meme + `" alt="` + meme + `" loading="lazy">`;
}

function togglePopupMeme(meme) {
    document.getElementById("popup-meme").classList.toggle("active");
    document.getElementById("meme").innerHTML = `<img src="../img/contents/` + meme + `" alt="` + meme + `" loading="lazy">`;
}
// render tweet data
// var countComments = 0;
const renderComments = (data) => {
    // countComments += 1;
    const comments = document.querySelector(`.${data.tweet}`);
    var name = `${data.name}`;
    var html = `
        <div class="comment">
            <dt>${data.name}</dt>
            <small>${data.time}</small>
            <dd>${data.comment}</dd>
        </div>
        `;
    if (name == `GantGanz-Admin`) {
        html = `
        <div class="comment">
            <dt><img src="img/star.png" width="10" height="10" loading="lazy"> Gan Gan <img src="img/star.png" width="10" height="10" loading="lazy"></dt>
            <small>${data.time}</small>
            <dd>${data.comment}</dd>
        </div>
        `;
    }
    if (comments != null) {
        comments.innerHTML += html;
    }
};

// db.collection('tweets').onSnapshot((snapshot) => {
//     snapshot.docChanges().forEach(change => {
//         if (change.type === 'added') {
//             // setTimeout(() => {
//             // }, 3000);
//             document.querySelector('.countComments').innerHTML = `<h5 class="text-center thoughts-on">${countComments} THOUGHTS ON "Readme”</h5>`;
//         }
//     });
// })