var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var standupSchema = new Schema({
  memberName: String,
  project: String,
  workYesterday: String,
  workToday: String,
  implement: String,
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
