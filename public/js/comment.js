const commentHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#add-comment').value.trim();

  console.log(comment);
  
  if (comment) {
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' },
    });

    const results = await response.json();
    console.log(results);
    
    if (response.ok) {
      console.log("Comment successfully added!")
      console.log(comment);
      // document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

let commentForm = document
  .querySelector('.comment-form')
  if (commentForm){
    commentForm.addEventListener('submit', commentHandler);
  }


