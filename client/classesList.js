import { Mongo } from 'meteor/mongo';

export const classesL = new Mongo.Collection('list_of_classes')
Template.classes.helpers({


	classesL(){

		major = FlowRouter.current().queryParams['major']
		console.log( classesL.find({dep:major}).fetch() )  
		return classesL.find({dep:major}).fetch()
	}


});