# grunt-ie-friendly

> Remove media queries for IE desktop styles and split large stylesheets into smaller sizes

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ie-friendly --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ie-friendly');
```

## The "iefriendly" task

### Overview
In your project's Gruntfile, add a section named `iefriendly` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  iefriendly: {
    default_options: {
      options: {
        // No current options.
      },
      files: {
        'filepath/output.css': 'filepath/source.css',
      }
    }
  },
});
```

### Options

#### options.minify

Earmarked for release 0.2


### Roadmap

0.1 testing against current project

0.2 Add minification option


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1 Initial release

0.1.0 package.json updates

0.1.1 plugin testing
