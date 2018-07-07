var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var memberNameValidator = [
  function(val){
    return (val.length>0 && val.toLocaleLowercase()!= 'none')
  },
  //Custom error text
  'Select a valid member name.'
];

var requiredStringValidator = [
  function(val){
    var testVal = val.trim();
    return (testVal.length>0)
  },
  //Custom error text
  '{PATH} can not  be empty.'
];


var standupSchema = new Schema({
  memberName: {
    type: String,
    required: true,
    validate: memberNameValidator
  },
  project: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workYesterday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workToday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  implement: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Standup', standupSchema);









// //Defining schema with disable id
// var noIdSchema = new Schema({name: String }, {_id: false});

// //example of using Schema.add
// var exampleSchema = new Schema;
// exampleSchema.add({
//   memberName: String,
//   project: String
// });

// //conditional schema
// var includeMiddleName = true;
// var conditionalSchema = new Schema;
// if(includeMiddleName){
//   conditionalSchema.add({
//     firstName: String,
//     middleName: String,
//     lastName: String,
//     project: String
//   });
// }else{
//   conditionalSchema.add({
//     firstName: String,
//     lastName: String,
//     project: String
//   });
// }
// conditionalSchema.add({
//   name: String,
//   project: String
// });
