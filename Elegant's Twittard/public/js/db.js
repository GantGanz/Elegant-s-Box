// real-time listener
db.collection('tweets').orderBy('time').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            // add the document data to the web page
            renderComments(change.doc.data());
        }
    });
})

// add new recipe
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    var name = "Anonim";
    evt.preventDefault();
    if (form.name.value != '') {
        name = form.name.value;
    }

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    const comment = {
        tweet: form.tweet.value,
        name: escapeHtml(name),
        comment: escapeHtml(form.comment.value),
        time: dateTime
    }

    db.collection('tweets').add(comment)
        .catch(err => console.log(err));

    form.name.value = '';
    form.comment.value = '';
});

function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function (m) {
        return map[m];
    });
}