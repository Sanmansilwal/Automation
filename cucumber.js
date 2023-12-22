const common = [
    '--require world.js',  // Load the custom world constructor

    'features/**/*.feature',                // Specify our feature files
    '--require step-definitions/**/*.js',   // Load step definitions (JavaScript files)
    '--format progress-bar'                 // Specify the format of the output
  ].join(' ');
  
  module.exports = {
    default: common
  };
  