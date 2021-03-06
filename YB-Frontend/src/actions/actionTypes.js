// Posts
export const Posts = {
  FETCH_ALL_POSTS: "fetch all posts",
  RECEIVE_ALL_POSTS: "receive all posts",

  FETCH_SINGLE_POST : "fetch single post",
  RECEIVE_SINGLE_POST: "receive single post",

  SEND_NEW_POST: 'send a new post to the API',
  RECEIVE_NEW_POST: 'receive new post from API',

  SET_DISPLAY_LIST: 'set posts display to list',
  SET_DISPLAY_GRID: 'set posts display to grid',
};

// Comments
export const Comments = {
  FETCH_ALL_POST_COMMENTS: 'fetch all comments for current post',
  RECEIVE_ALL_POST_COMMENTS: 'receive all comments for the current post',

  FETCH_SINGLE_POST_COMMENT: 'fetch single comment for current post',
  RECEIVE_SINGLE_POST_COMMENT: 'receive single comment for current post',

  SEND_NEW_COMMENT: 'send a new comment to the API',
  RECEIVE_NEW_COMMENT: 'receive new comment from the API'
};

// Users
export const Users = {
  LOGIN_REQUEST: 'request JWT from API',
  LOGIN_SUCCESS: 'successful login attempt',
  LOGIN_ERROR: 'failed login attempt',
  LOGOUT: 'logout the user'
};

// users
export const Auth = {
  SET_REDIRECT_URL: "set URL for subsequent redirection",
  REDIRECT_ON_LOGIN: 'redirect on logging in',
}
