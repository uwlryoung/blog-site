const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const postBody = document.querySelector('#post-body').value.trim();

  if (title && postBody) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, postBody }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

let newPost = document.querySelector('.new-post-form')
if (newPost){
  newPost.addEventListener('submit', newFormHandler);
}

let postList = document.querySelectorAll('.post-list');
if (postList.length > 0) {
  postList.forEach((button) => {
    button.addEventListener('click', delButtonHandler);
  });
}