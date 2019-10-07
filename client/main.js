import {Template} from 'meteor/templating';
import Boxes from '../import/collection';
import './main.html';

Template.legoScene.helpers({
  boxes: function () {
    return Boxes.find().fetch() || [];
  },
  lengthBoxes: () => {
    return Boxes.find().fetch().length || 0;
  }
});

Meteor.methods({
  addBoxToScene: function (box) {
    Boxes.insert(box);
  },
  removeBoxFromScene: function (boxId) {
    Boxes.remove(boxId);
  }
});

Template.legoScene.events({
  "mouseup shape": function (event) {
    if (event.button === 1) {
      const box = {
        x: Math.floor(event.worldX + event.normalX / 2) + 0.5,
        y: Math.floor(event.worldY + event.normalY / 2) + 0.5,
        z: Math.floor(event.worldZ + event.normalZ / 2) + 0.5
      };
      Meteor.call("addBoxToScene", box);
    }
    if (event.button === 2) {
      Meteor.call("removeBoxFromScene", event.currentTarget.id);
    }
  }
});
