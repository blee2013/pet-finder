
async function commentFormHandler(event) {
  event.preventDefault();
  console.log('button clicked');

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const pet_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(pet_id);
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
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      // document.location.reload();  TURN THIS BACK ON 
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
