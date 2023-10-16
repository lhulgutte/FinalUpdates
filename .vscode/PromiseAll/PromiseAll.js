const posts = [];
let lastActivityTime = null;

function createPost(postTitle) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: postTitle });
      resolve();
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function printPostsAndLastActivityTime() {
  return Promise.all([createPost("Post1"), updateLastUserActivityTime()])
    .then(([_, updatedTime]) => {
      console.log("All Posts:", posts);
      console.log("Last Activity Time:", updatedTime);

      return deletePost();
    })
    .then((deletedPost) => {
      console.log("Deleted Post:", deletedPost.title);
      console.log("Remaining Posts:", posts);
    })
    .catch((error) => console.error(error));
}

printPostsAndLastActivityTime();
