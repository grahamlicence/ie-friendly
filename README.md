# IE friendly
## Parsing mobile first styles for IE8 (grunt-ie-friendly)

IE Friendly removes media queries for IE desktop styles and splits large stylesheets into smaller sizes

## Getting Started
This plugin requires Grunt `~0.4.2`

Add plugin to your package.json:

```json
{
  "devDependencies": {
    "grunt-ie-friendly": "~0.1.1"
  }
}
```

Install the plugin

```
npm install
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ie-friendly');
```

## The "ie_friendly" task

### Overview
In your project's Gruntfile, add a section named `ie_friendly` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ie_friendly: {
    default_options: {
      options: {
        // No current options.
      },
      files: {
        'filepath/output.css': 'filepath/source.css',
      }
    }
  }
});
```
You can also add a grunt task with the following:

```js
grunt.registerTask('ie','ie_friendly');
```


### Options

#### options.minify

Earmarked for release 0.2


### Roadmap

0.1 testing against current project

0.2 Add minification option


## Release History
0.0.1 Initial release

0.1.0 package.json updates

0.1.1 plugin testing
