#1. Setting up the environment
### 1.1. Install dev dependencies
   - [Install node](http://nodejs.org/)

   - Install grunt and grunt-cli ``npm install -g grunt-cli grunt``

   - Install phonegap ``npm install -g phonegap``

   - Install the SDK's you want to work with (Android/IOS/...)

   - Create dirs *platforms*,*plugins* and *merges* inside *happiness* dir

### 1.2. Download/Install project dependencies
   - execute ``npm install``

   - execute ``bower install``


#2. Running the App
###2.1. Local run
   - execute ``grunt build``

   - execute ``grunt serve``

###2.2. Phonegap run
   - execute ``grunt build``

   - execute ``phonegap run android``
