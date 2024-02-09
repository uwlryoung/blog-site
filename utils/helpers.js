module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  // For Homepage and Dashboard views, shortens post to create a 
  // post preview to not clutter the pages
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