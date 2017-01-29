import { Mongo } from 'meteor/mongo';
Meteor.startup(() => {
  // code to run on server at startup

	



	


});

// Collect majors...
export const majors = new Mongo.Collection('list_of_majors')
results = Meteor.http.call("GET", "http://api.umd.io/v0/courses/departments")
var myresults = results.content;
var regex = new RegExp("\"dept_id\":\"(.{4})\"", "g");
var matches, deptNames = [];
while (matches = regex.exec(myresults)) {
	deptNames.push({text: matches[1]});
	majors.insert({text: matches[1]})
}






export const classesL = new Mongo.Collection('list_of_classes')
	results = Meteor.http.call("GET", "http://api.umd.io/v0/courses/list")
    var myresults = results.content;
    var regex = new RegExp("\"course_id\":\"([^\"]*)\",\"name\":\"([^\"]*)\"", "g");
    var matches, courseHash = {};
    while (matches = regex.exec(myresults)) {
        courseHash[matches[1]] = matches[2];
        classesL.insert({dep:matches[1].slice(0,4),course:matches[1], classes:matches[2]})
    }







Accounts.onCreateUser(
    function(options, user){

	user.profile = options.profile ? options.profile : {};
    
    return user
    }
)







