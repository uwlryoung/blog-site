module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
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