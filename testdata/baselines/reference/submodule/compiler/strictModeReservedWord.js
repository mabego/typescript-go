//// [tests/cases/compiler/strictModeReservedWord.ts] ////

//// [strictModeReservedWord.ts]
let let = 10;

function foo() {
    "use strict"
    var public = 10;
    var static = "hi";
    let let = "blah";
    var package = "hello"
    function package() { }
    function bar(private, implements, let) { }
    function baz<implements, protected>() { }
    function barn(cb: (private, public, package) => void) { }
    barn((private, public, package) => { });

    var myClass = class package extends public {}

    var b: public.bar;

    function foo(x: private.x) { }
    function foo1(x: private.package.x) { }
    function foo2(x: private.package.protected) { }
    let b: interface.package.implements.B;
    ublic();
    static();
}



//// [strictModeReservedWord.js]
let let = 10;
function foo() {
    "use strict";
    "use strict";
    var public = 10;
    var static = "hi";
    let let = "blah";
    var package = "hello";
    function package() { }
    function bar(private, implements, let) { }
    function baz() { }
    function barn(cb) { }
    barn((private, public, package) => { });
    var myClass = class package extends public {
    };
    var b;
    function foo(x) { }
    function foo1(x) { }
    function foo2(x) { }
    let b;
    ublic();
    static();
}
