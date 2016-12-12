var gitlabhook = require('gitlabhook');
var gitlab = gitlabhook({ logger: {info:console.log, error:console.error},configPathes:'./',port:'3420' });
gitlab.listen();
