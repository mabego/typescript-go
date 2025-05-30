//// [tests/cases/compiler/typeGuardNarrowsIndexedAccessOfKnownProperty2.ts] ////

//// [typeGuardNarrowsIndexedAccessOfKnownProperty2.ts]
const foo: { key?: number } = {};
const key = 'key' as const;

if (foo[key]) {
    foo[key]; // number
    foo.key;  // number
}


//// [typeGuardNarrowsIndexedAccessOfKnownProperty2.js]
const foo = {};
const key = 'key';
if (foo[key]) {
    foo[key]; // number
    foo.key; // number
}
