"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var Eventing_1 = require("./Eventing");
var User = /** @class */ (function () {
    function User(data) {
        this.data = data;
        this.events = new Eventing_1.Eventing();
    }
    ;
    User.prototype.get = function (propName) {
        return this.data[propName];
    };
    User.prototype.set = function (data) {
        Object.assign(this.data, data);
    };
    User.prototype.fetch = function () {
        var _this = this;
        axios_1.default.get("http:localhost:3000/users/" + this.get("id"))
            .then(function (response) {
            _this.set(response.data);
        });
    };
    User.prototype.save = function () {
        var id = this.get("id");
        if (this.get("id")) {
            // put
            axios_1.default.put("http://localhost:3000/users/" + this.get("id"), this.data);
        }
        else {
            // post
            axios_1.default.post("http:localhost:3000/users/users", this.data);
        }
    };
    return User;
}());
exports.User = User;
