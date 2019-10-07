import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'
import Boxes from '../import/collection';

Meteor.methods({
  addBoxToScene: function (box) {
    check(box, {
      x: Number,
      y: Number,
      z: Number
    });

    Boxes.insert(box);
  },
  removeBoxFromScene: function (boxId) {
    check(boxId, String);

    Boxes.remove(boxId);
  }
});

Meteor.publish("boxes", function () {
  return Boxes.find().fetch();
});


