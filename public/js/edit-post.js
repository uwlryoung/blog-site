async function editFormHandler(event) {
  event.preventDefault();
  const postTitle = document.querySelector('#post-title').value;
  const postBody = document.querySelector('#post-body').value;

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 2
  ];

  const response = await fetch(`/api/post/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postBody
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/posts/${id}`);
  } else {
    alert('Failed to edit post');
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
