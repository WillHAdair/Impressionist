// JALANGI DO NOT INSTRUMENT

(function (sandbox) {
    function MyAnalysis() {
        this.declare = function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
            // Check if the variable name is 'tester'
            if (name === 'tester') {
                val = 'This has been altered';
            }
            return { result: val };
        };
    }

    sandbox.analysis = new MyAnalysis();
})(J$);