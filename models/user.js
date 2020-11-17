const mongoose = require('mongoose');
const {Schema, model} = mongoose;


function capitalize(value) {
  if (typeof value !== 'string') value = '';
  return value.charAt(0).toUpperCase() + value.substring(1);
};

const userSchema = new Schema ({
  firstName: String,
  lastName: String,
  userName: {
      type: String,
      required: true,
      unique: true,
      set: capitalize
  },
  photo: {
      type: String,
      default: '/images/user-default-pic.png'
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  description: String,
  password: {
    type: String,
    required: true
  },
  address: String,
  postCode: { 
    type: String,
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['helper', 'needy']
  },
  serviceType: {
    type: Schema.Types.ObjectId, // link to 
    ref: 'HelpType' 
  },
  needType: {
    type: Schema.Types.ObjectId, //foreign key
    ref: 'NeedType' // relates to Author Model
  },
});




module.exports = model('User', userSchema);