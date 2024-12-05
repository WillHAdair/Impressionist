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

To run the instrumented files, uncomment them out in the following html files:

* app.html

* alpha3/app.html

* alpha3/colorpicker/index.html

This will allow you to run the instrumented code files when running the `http-server` command.