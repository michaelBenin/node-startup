[ ![Codeship Status for michaelbenin/node-startup](https://codeship.io/projects/46e2dca0-1841-0132-1aba-4eb52c1571b2/status)](https://codeship.io/projects/34223)

## Installation

    Languages needed:

    node.js
    ruby
    python
    java
    https://github.com/Ensighten/grunt-spritesmith#requirements
    google chrome web browser (latest)

    Links:

    http://nodejs.org/
    https://www.ruby-lang.org/en/installation/
    https://www.java.com/en/download/help/mac_java_update.xml
    https://www.python.org/download/
    http://google.com/chrome

## Check versions of required languages:

    $ node --version; ruby --version; python --version; java -version

    # Sample version output

    v0.10.26

    ruby 2.0.0p247 (2013-06-27 revision 41674) [x86_64-darwin12.3.0]

    Python 2.7.5

    java version "1.6.0_65"
    Java(TM) SE Runtime Environment (build 1.6.0_65-b14-462-11M4609)
    Java HotSpot(TM) 64-Bit Server VM (build 20.65-b04-462, mixed mode)

## Ruby Gems:
    $ gem install update --system
    $ gem install sass
    $ gem install scss-lint:0.18.0
    *note: sass is compiled with libsass


## *NOTE* - DOUBLE CHECK GLOBALLY INSTALLED NODE MODULE CONFLICTS!

See:https://github.com/node-inspector/node-inspector/issues/412

## Clone the repo and npm install:

    # Replace with this github url, the main project is private on bb
    $ git clone git@bitbucket.org:michaelbenin/node-startup.git && cd node-startup && npm i && npm run-script dev

## When updating package.json

    $ npm run-script yaml2json

## Full Stack Development mode:

    $ npm run-script dev

## Full stack test:

    # Note webdriverjs in phantomjs on windows hangs
    $ npm test

Based off of:
[![logo](http://nerds.airbnb.com/wp-content/files_mf/1384225374isomorphicjs.png)](http://nerds.airbnb.com)

  Isomorphic JavaScript web framework for [node](http://nodejs.org).


## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.