const commentHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#add-comment');

  if (comment) {
    const response = await fetch('/api/posts/:id', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' },
    });

    const results = await response.json();
    console.log(results);
    
    if (response.ok) {
      console.log("Comment successfully added!")
      // document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

let commentForm = document
  .querySelector('.comment-form')
  if (commentForm){
    signupForm.addEventListener('submit', commentHandler);
  }


