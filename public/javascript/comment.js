
async function commentFormHandler(event) {
  event.preventDefault();
  console.log('button clicked');

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  console.log(comment_text);
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log("comment" + post_id);
  // var pet_id=;

  if (comment_text) {

    
    const response = await fetch('/api/comments', {
    
      method: 'POST',
      body: JSON.stringify({
        comment_text,
        user_id:post_id,
        // pet_id: post_id
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // console.log("this is the comment text" + comment_text)
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
