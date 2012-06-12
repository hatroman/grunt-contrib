var grunt = require("grunt");

exports.requirejs = {
  main: function(test) {
     var expect = 'define("hello",[],function(){return"hello"}),define("world",[],function(){return"world"}),require(["hello","world"],function(a,b){console.log(a,b)}),define("project",function(){})';
     var result = grunt.file.read("fixtures/output/requirejs.js");

     test.expect(1);
     test.equal(expect, result, "should optimize javascript modules with requireJS");
     test.done();
  }
};
