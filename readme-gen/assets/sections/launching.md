The application is built with a module bundler called [Parcel](https://parceljs.org/). Given a HTML file, Parcel follows dependencies to produce a bundle. Parcel extends module loading to allow glob patterns and file types not normally recognised by JavaScript such as CSS files.

While convenient, this creates a strong coupling to Parcel, as in, the code cannot be interpreted without it. Pre-processing JavaScript, whether it be Parcel or any other tool, increases the time it takes to reflect changes. This is problematic in scenarios where speed matters, such as running unit tests.

The application is split into 2 top-level directories: public and src.

- __public__ contains the entry HTML file, static assets such as images and CSS, and the minimum amount of code needed to launch 'the application'.
- __src__ contains all the code comprising 'the application'. 

In order to isolate Parcel, only public may use Parcel loaders. This allows unit tests to cover src without having to build the application which helps keep the tests fast.

The following code is referenced by index.html and launches the application:

<%- await renderCodeFile('src/app.js') %>

#### Launch sequence

1. At build time, Parcel interprets `require('./css/*.css');`, combines each CSS file into a single file which is then referenced by a link tag that Parcel injects into the document head.
2. At run time, the compose function is invoked with the global window object and config, returning the initialised application modules.
3. The modules are assigned to `window.app` for demonstration and debugging purposes.
4. The startup function is invoked with a callback receiving an instance of the root component, app, which is then appended to the document body.

Note: `window.agileavatars` changed to `window.app`.

<%- await renderImage('readme-files/console-modules.png', 'Application modules logged to the console') %>

<%- await renderImage('readme-files/console-state.png', 'Application state logged to the console') %>
