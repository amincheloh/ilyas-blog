function addDirAuto() {
  const content = document.querySelector('.content');
  if (content) {
    const p = content.querySelectorAll('p'); 
    for (var i = 0; i < p.length; i++) {
      p[i].setAttribute('dir', 'auto');
    }
    const blockquote = content.querySelectorAll('blockquote');
    for (let i = 0; i < blockquote.length; i++) {
      blockquote[i].setAttribute('dir', 'auto');
    }  
  } else {
    setTimeout(addDirAuto, 100);
  }
}

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  router.afterEach(() => {
    setTimeout(addDirAuto, 100);
  });
}
