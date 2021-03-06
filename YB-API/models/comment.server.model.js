var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  comment_text: {
    type: String,
    index: true,
    required: 'comment_text is required',
    trim: true
  },
  post_id: String,
  author_id: String,
  parent_id: String, // for replies
  created: {
    type: Date,
    default: Date.now
  },
  upvotes: {
    type: Number,
    default: 0
  }
})

CommentSchema.pre('save', function (next) {
  next()
})

CommentSchema.set('toJSON', {
  getters: true,
  virtuals: true
})

mongoose.model('Comment', CommentSchema)
