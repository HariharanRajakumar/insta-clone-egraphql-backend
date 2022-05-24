import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
  username: String,
  caption: String,
  imageUrl: String,
  avatarUrl: String,
});

export default mongoose.model('story', storySchema);
