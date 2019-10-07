import { Mongo } from 'meteor/mongo';
const Boxes = new Mongo.Collection("boxes");

if (Meteor.isServer) {
  Boxes._ensureIndex({
    x: 1,
    y: 1,
    z: 1
  }, {unique: true});
}

export default Boxes;
