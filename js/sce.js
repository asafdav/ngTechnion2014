angular.module('technion')
  .config(function($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    $sceProvider.enabled(false);
  });