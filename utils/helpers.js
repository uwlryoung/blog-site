module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  // Shows the post's first 150 characters on homepage and dashboard if longer than 150 characters
  post_preview: (post) => {
    if (post.length > 150){
      console.log(post.length)
      post = post.slice(0, 150)
      return post + "..."
    } else {
      return post
    }
  }
};