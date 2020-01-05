"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./models/User");
var user = new User_1.User({ id: 1 });
user.set({ name: "NEW NAME", age: 9999 }, new Eventing());
user.save();
