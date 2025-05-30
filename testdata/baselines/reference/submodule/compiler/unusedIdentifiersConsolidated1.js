//// [tests/cases/compiler/unusedIdentifiersConsolidated1.ts] ////

//// [unusedIdentifiersConsolidated1.ts]
function greeter(person: string) {
    var unused = 20;
}

class Dummy<usedtypeparameter, unusedtypeparameter> {
    private unusedprivatevariable: string;
    private greeting: string;
    public unusedpublicvariable: string;
    public typedvariable: usedtypeparameter;

    constructor(message: string) {
        var unused2 = 22;
        this.greeting = "Dummy Message";
    }

    public greeter(person: string) {
        var unused = 20;
        this.usedPrivateFunction();
    }

    private usedPrivateFunction() {
    }

    private unUsedPrivateFunction() {
    }
}

var user = "Jane User";
var user2 = "Jane2 User2";

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s2: string) {
            return lettersRegexp.test(s2);
        }

        private unUsedPrivateFunction() {
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s3: string) {
            return s3.length === 5;
        }
    }

    interface usedLocallyInterface {
    }

    interface usedLocallyInterface2 {
        someFunction(s1: string): void;
    }

    export interface exportedInterface {
    }

    class dummy implements usedLocallyInterface {
    }

    interface unusedInterface {
    }
}


namespace Greeter {
    class class1 {
    }

    export class class2 extends class1 {
    }

    class class3 {
    }

    export class class4 {
    }

    interface interface1 {
    }

    export interface interface2 extends interface1 {
    }

    interface interface3 {
    }

    export interface interface4 {
    }

    export let a: interface3;

    interface interface5 {
    }
}

//// [unusedIdentifiersConsolidated1.js]
function greeter(person) {
    var unused = 20;
}
class Dummy {
    unusedprivatevariable;
    greeting;
    unusedpublicvariable;
    typedvariable;
    constructor(message) {
        var unused2 = 22;
        this.greeting = "Dummy Message";
    }
    greeter(person) {
        var unused = 20;
        this.usedPrivateFunction();
    }
    usedPrivateFunction() {
    }
    unUsedPrivateFunction() {
    }
}
var user = "Jane User";
var user2 = "Jane2 User2";
var Validation;
(function (Validation) {
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s2) {
            return lettersRegexp.test(s2);
        }
        unUsedPrivateFunction() {
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s3) {
            return s3.length === 5;
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
    class dummy {
    }
})(Validation || (Validation = {}));
var Greeter;
(function (Greeter) {
    class class1 {
    }
    class class2 extends class1 {
    }
    Greeter.class2 = class2;
    class class3 {
    }
    class class4 {
    }
    Greeter.class4 = class4;
})(Greeter || (Greeter = {}));
