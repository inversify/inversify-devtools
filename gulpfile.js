"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************

var gulp        = require("gulp"),
    tslint      = require("gulp-tslint"),
    tsc         = require("gulp-typescript"),
    runSequence = require("run-sequence");

//******************************************************************************
//* LINT ALL
//******************************************************************************
gulp.task("lint", function() {
    
    var config =  { emitError: (process.env.CI) ? true : false };
    
    return gulp.src([
        "src/**/**.ts",
        "test/**/**.test.ts"
    ])
    .pipe(tslint())
    .pipe(tslint.report("verbose", config));
});

//******************************************************************************
//* BUILD SOURCE
//******************************************************************************
var tsLibProject = tsc.createProject("tsconfig.json");

gulp.task("build", function() {
    return gulp.src([
        "typings/index.d.ts",
        "node_modules/immutable/dist/immutable.d.ts",
        "node_modules/redux-bootstrap/type_definitions/redux-bootstrap/redux-bootstrap.d.ts",
        "node_modules/inversify/type_definitions/inversify/inversify.d.ts",
        "node_modules/inversify-dts/inversify-logger-middleware/inversify-logger-middleware.d.ts",
        "src/interfaces/interfaces.d.ts",
        "src/**/**.ts",
        "src/**/**.tsx"
    ])
    .pipe(tsc(tsLibProject))
    .on("error", function (err) {
        process.exit(1);
    })
    .js.pipe(gulp.dest("lib/"));
});

//******************************************************************************
//* TASK GROUPS
//******************************************************************************
gulp.task("default", function (cb) {
  runSequence(
    "lint",
    "build",
    cb);
});
