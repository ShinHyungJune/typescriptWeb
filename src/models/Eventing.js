"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eventing = /** @class */ (function () {
    function Eventing() {
        this.events = {};
    }
    Eventing.prototype.on = function (eventName, callback) {
        var handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };
    Eventing.prototype.trigger = function (eventName) {
        var handlers = this.events[eventName];
        if (!handlers || handlers.length === 0)
            return;
        handlers.forEach(function (callback) {
            callback();
        });
    };
    return Eventing;
}());
exports.Eventing = Eventing;
