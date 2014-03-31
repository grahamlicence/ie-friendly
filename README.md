# IE friendly - mobile first styles for IE8
## grunt-ie-friendly

> Remove media queries for IE desktop styles and split large stylesheets into smaller sizes

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
  },
});
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
