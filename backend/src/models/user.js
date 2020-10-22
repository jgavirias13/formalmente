import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.methods.toJSON = () => {
  let user = this.toObject();
  delete user.password;
  return user;
}

userSchema.methods.comparePassword = async function(password){
  let result = await bcrypt.compare(password, this.password);
  return result;
}

userSchema.pre('save', async (next) => {
  const user = this;

  if(!user.isModified('password')){
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;

  next();
});

mongoose.model('User', userSchema);
const finalSchema = mongoose.model('User');

export default finalSchema;