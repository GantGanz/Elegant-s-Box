// render tweet data
// var countComments = 0;
const renderComments = (data) => {
    // countComments += 1;
    const comments = document.querySelector(`.${data.tweet}`);
    const html = `
    <div class="comment">
        <dt>${data.name}</dt>
        <small>${data.time}</small>
        <dd>${data.comment}</dd>
    </div>
    `;

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