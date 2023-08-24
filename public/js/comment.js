const commentHandler = async (event) => {
  event.preventDefault();

  const commentBody = document.querySelector('#add-comment').value.trim();
  const urlArray = location.href.split('/'); 
  const postId = urlArray[urlArray.length - 1]

  console.log(commentBody);
  
  if (commentBody && postId) {
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ commentBody, postId }),
      headers: { 'Content-Type': 'application/json' },
    });

    const results = await response.json();
    console.log(results);
    
    if (response.ok) {
      console.log("Comment successfully added!")
      console.log(commentBody);
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


