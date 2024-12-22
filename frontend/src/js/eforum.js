// script.js

let loggedInUser = "Anonymous"; // Default user

// Handle post form submission
document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const postContent = document.getElementById("postContent").value;

  if (postContent.trim() !== "") {
    addPost(postContent);
    document.getElementById("postContent").value = ""; // Clear textarea
  }
});

// Function to add a post
function addPost(content) {
  const postsContainer = document.getElementById("posts");

  // Create post element
  const post = document.createElement("div");
  post.className = "post";

  const postId =`post-${Date.now()}`; // Unique ID for each post
  post.setAttribute("id", postId);

  post.innerHTML = `
    <h3>${loggedInUser}</h3>
    <p>${content}</p>
    <div class="post-actions">
      <button class="delete-btn" onclick="deletePost('${postId}')">Delete Post</button>
      <button class="comment-btn" onclick="toggleCommentSection('${postId}')">Comment</button>
    </div>
    <div class="comments" id="comments-${postId}" style="display: none;">
      <textarea placeholder="Write a comment..." id="comment-input-${postId}"></textarea>
      <button onclick="addComment('${postId}')">Add Comment</button>
      <div class="comment-list" id="comment-list-${postId}">
        <!-- Comments will appear here -->
      </div>
    </div>
  `;

  postsContainer.prepend(post);
}

// Function to delete a post
function deletePost(postId) {
  const post = document.getElementById(postId);
  if (post) {
    post.remove();
  }
}

// Function to toggle comment section visibility
function toggleCommentSection(postId) {
  const commentSection = document.getElementById(`comments-${postId}`);
  if (commentSection.style.display === "none") {
    commentSection.style.display = "block";
  } else {
    commentSection.style.display = "none";
  }
}

// Function to add a comment
function addComment(postId) {
  const commentInput = document.getElementById(`comment-input-${postId}`);
  const commentList = document.getElementById(`comment-list-${postId}`);
  const commentText = commentInput.value.trim();

  if (commentText !== "") {
    const commentId = `comment-${Date.now()}`; // Unique ID for each comment

    const comment = document.createElement("div");
    comment.className = "comment";
    comment.setAttribute("id", commentId);

    comment.innerHTML = `
      <strong>${loggedInUser}</strong>: ${commentText}
      <button class="delete-btn" onclick="deleteComment('${commentId}')">Delete Comment</button>
    `;

    commentList.appendChild(comment);
    commentInput.value = ""; // Clear input
  }
}

// Function to delete a comment
function deleteComment(commentId) {
  const comment = document.getElementById(commentId);
  if (comment) {
    comment.remove();
  }
}

// Simulate user login
document.getElementById("loginBtn").addEventListener("click", function () {
  const username = prompt("Enter your name:", "John Doe");
  if (username) {
    loggedInUser = username;
    document.getElementById("loggedInUser").innerHTML =`Logged in as: <strong>${username}</strong>`;
  }
});