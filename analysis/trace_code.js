// This analysis script traces the execution of the code and logs the following information:
// - Function enter and exit events (paramaters and returns included)
// - Function execution times
// - Tainted data propagation

// JALANGI DO NOT INSTRUMENT

(function (sandbox) {
    function MyAnalysis() {
        const taintedValues = new WeakSet();
        const functionStartTimes = new Map();
        const functionExecutionTimes = new Map();

        this.functionEnter = function (iid, f, dis, args) {
            const functionName = f.name || 'anonymous';
            functionStartTimes.set(iid, Date.now());
            if (!functionExecutionTimes.has(functionName)) {
                functionExecutionTimes.set(functionName, 0);
            }

            console.log(`Entering function: ${functionName}`);
            console.log('Parameters:', args);
        };

        this.functionExit = function (iid, returnVal, wrappedExceptionVal) {
            console.log('Exiting function');
            console.log('Return value:', returnVal);
            if (wrappedExceptionVal !== undefined) {
                console.log('Exception value:', wrappedExceptionVal);
            }

            const functionName = J$.iidToLocation(iid).split(':')[0] || 'anonymous';
            const startTime = functionStartTimes.get(iid);
            const endTime = Date.now();
            const executionTime = endTime - startTime;
            functionExecutionTimes.set(functionName, functionExecutionTimes.get(functionName) + executionTime);
            functionStartTimes.delete(iid);
            
            return { returnVal: returnVal, wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false };
        };

        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            if (f.name === 'tainted') {
                // Mark all arguments as tainted
                args.forEach(arg => taintedValues.add(arg));
            }
        };

        this.invokeFun = function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
            if (f.name === 'process_results') {
                // Check if any arguments are tainted
                for (let arg of args) {
                    if (taintedValues.has(arg)) {
                        console.error('Security Alert: Tainted data passed to process_results');
                        break;
                    }
                }
            }
            // Propagate taint to the result if any argument is tainted
            if (args.some(arg => taintedValues.has(arg))) {
                taintedValues.add(result);
            }
        };

        this.endExecution = function () {
            console.log('Function execution times (ms):');
            functionExecutionTimes.forEach((time, functionName) => {
                console.log(`${functionName}: ${time}`);
            });
        };
    }

    sandbox.analysis = new MyAnalysis();
})(J$);