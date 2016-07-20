"use strict";

var Animal = function (name) {
    this.name = name;
    this.healthPoints = 10;
    this.isFed = true;
    this.speed = 1;

    this.eat = function () {
        this.healthPoints += 1;
    };

    this.run = function (n) {
        return console.log('Ran ' + n + 'm.');

    };
    this.sleep = function () {
        this.tired = false;
    };
};

var animal = new Animal('animal');

var Rabbit = function (name) {
    this.isHidden = false;

    this.jump = function () {
        console.log('Jumped!');
    };

    this.hide = function () {
        this.isHidden = true;
    };
};
Rabbit.prototype = animal;

var lilRabbit = new Rabbit('lilRabbit');

var Wolf = function (name) {
    this.howl = function () {
        console.log('Whooooooooh!');
    };

    this.eatRabbit = function (rabbit) {
        if (rabbit.isHidden === false) {
            this.eat();
        }
    };
};
Wolf.prototype = animal;

var bigWolf = new Wolf('bigWolf');

////////////////////////////////////////////////////


var user = {
    lastName: 'Иванов',
    firstName: 'Иван',
};

function showName() {
    console.log(this.firstName + ' ' + this.lastName);
};

showName.call(user);

////////////////////////////////////////////////////////////


function getIncFunc() {
    var count;
    return function incFunc(start) {
        if (start > 0) {
            count = start;
        }
        return console.log(count++);

    };

};

var increm = getIncFunc();

/////////////////////////////////////////////////////////////////
var join = [].join;

var user1 = {
    0: 'Oleg',
    1: 'Sidorov',
    2: 'Ivanovich',
    length: 3
}


console.log(join.call(user1, '|'))

