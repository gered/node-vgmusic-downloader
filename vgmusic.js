//
//  Requires
//

var fs = require('fs');
var path = require('path');
var config = require("./config");
var helpers = require("./lib/helpers");
var crawler = require("./lib/crawler");
var colors = require('colors');
var mkdirp = require('mkdirp')

//
//  Main
//

var main = function() {
  
  console.log('========================================================================');
  console.log('============           VGMusic MIDI Files Downloader        ============');
  console.log('========================================================================\n');
  console.log(('Starting crawling '+config.pages.length+' pages.\n').yellow);

  fs.mkdirParent(config.downloadFolder);

  for (var i = 0; i < config.pages.length; i++) {
    var page = config.pages[i];
    var destination_dir = config.downloadFolder+"/"+page.split('music/')[1];
    mkdirp(destination_dir);
  }

  for (var i = 0; i < config.pages.length; i++)
    crawler.pageCrawler((config.domain + '/' + config.pages[i]), i);

  console.log('\nNow let\'s wait...\n'.yellow);

};

main();
