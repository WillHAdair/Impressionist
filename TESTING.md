# How to run

After cloning the application run the following commands to be able to run the application

```
npm install -g http-server

http-server
```

This will create a basic html server that we can run our project on localhost. After doing so, navigate to __http://localhost:8080/app.html__ to load the application.

# Instrumentation

Our analysis files are located within the **analysis** folder.

Our instrumented code files are located within an **instrumented** directory contained within the _js_, _alpha3_, _alpha3/colorpicker/js_, and  _alpha3/scripts_ folders.

## Testing

To run the testing version of this code, look under the _test/Impressionist_ folder. This will contain the instrumented version of the code. To build a new version of this (i.e test with new analyses), first delete the _Impressionist_ subfolder under the __test__ directory. You can now run this command using any analyses that jalangi2 provides or our own located within the analysis folder:

```
node node_modules/jalangi2/src/js/commands/instrument.js --inlineIID --inlineSource --inlineJalangi --analysis <path to analysis (with repeats)> --exclude node_modules --outputDir test --exclude test <path_to_Impressionist>
```

For example, this code runs all of the linting functions available within jalangi2:
```
node node_modules/jalangi2/src/js/commands/instrument.js --inlineIID --inlineSource --inlineJalangi --analysis node_modules/jalangi2/src/js/sample_analyses/ChainedAnalyses.js --analysis node_modules/jalangi2/src/js/sample_analyses/dlint/Utils.js --analysis node_modules/jalangi2/src/js/sample_analyses/dlint/CheckNaN.js --analysis node_modules/jalangi2/src/js/sample_analyses/dlint/FunCalledWithMoreArguments.js --analysis node_modules/jalangi2/src/js/sample_analyses/dlint/CompareFunctionWithPrimitives.js --analysis node_modules/jalangi2/src/js/sample_analyses/dlint/ShadowProtoProperty.js --analysis node_modules/jalangi2/src/js/sample_analyses/dlint/ConcatUndefinedToString.js --analysis src/js/sample_analyses/dlint/UndefinedOffset.js --outputDir test --exclude node_modules --exclude test <path_to_Impressionist>
```

NOTE: the jalangi2 interpreter may not always recognize when to exclude the test and node_modules folders. If this happens an infinite loop is possible, as it creates subfolders indefinitely. Therefore, if you notice this behavior terminate the process, then remove the nested folders under __test/Impressionist/test__
