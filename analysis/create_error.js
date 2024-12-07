/*
The purpose of this file is to introduce errors in the code that the other analyses will catch.

The following errors is introduced in this file:
1. Introduce a NaN value in the code.
2. Introduce a function call with more arguments than expected.
3. Concatenate a string with undefined
4. Compare a function with a primitive value.
5. Access an undefined value in an array.
*/

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

(function (sandbox) {
    function MyAnalysis() {
        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            // Add "ERROR" as the last argument
            args.push("ERROR");
            return { f: f, base: base, args: args, skip: false };
        };

        this.binaryPre = function (iid, op, left, right) {
            // Check if the operation is string concatenation
            if (op === "+") {
                // Check if either operand is a string
                if (typeof left === "string") {
                    right = undefined;
                } else if (typeof right === "string") {
                    left = undefined;
                } else if (typeof left === "number") {
                    right = NaN;
                } else if (typeof right === "number") {
                    left = NaN;
                }
            } else if (op === "==" || op === "===" || op === "!=" || op === "!==" || op === "<" || op === "<=" || op === ">" || op === ">=") {
                // Replace the right operand with a function
                right = function() { return "I am a function"; };
            }
            return { op: op, left: left, right: right, skip: false };
        };
    }

    sandbox.analysis = new MyAnalysis();
})(J$);