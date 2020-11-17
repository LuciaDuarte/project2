const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const needTypeSchema = new Schema ({
  name: {
    type: String,
    required: true
   // enum: ['food', 'healthcare', 'hosting', 'administrative Help']
  },
  color: String,
  // subServices: {
  //   type: String,
  //   enum: ['Doctor', 'Nurse', 'Lawyer', 'Restaurant','Grocery Store','Individual','Landlord','test','test','test','test', 'other volunteer']
  // }
  
});


module.exports = model('NeedType', needTypeSchema);