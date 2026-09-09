// C3. From the API response of Section 7.10, 
// produce the title of the most-liked post using chaining 
// only — no loops. 

// A typical parsed API response: 
const response = { 
  status: "success", 
  data: { 
    user: { id: 7, name: "Nabila" }, 
    posts: [ 
      { id: 101, title: "First post",  likes: 4  }, 
      { id: 102, title: "Learning JS", likes: 12 }, 
    ], 
  }, 
};

const mostLikedTitle = response.data?.posts?.reduce ((mostLiked, post) => 
    post.likes > mostLiked.likes ? post : mostLiked)?.title;

console.log(mostLikedTitle);
