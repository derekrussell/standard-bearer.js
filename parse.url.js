/* Parse URL Variables
-------------------------------------------------- */
function parseURL() {

  // Initiliase Empty Object
  var vars = {};

  // Extract Variables from URL
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });

  // Return Variables
  return vars;
}
