import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/db/TaskCollection';

Meteor.publish('tasks', function publishTasks() {
    return TasksCollection.find({ userId: this.userId });
});
