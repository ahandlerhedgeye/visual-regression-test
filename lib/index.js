import phantomcss from 'phantomcss';
import billingEngineUrls from './billingEngineUrls';

phantomcss.init({
  rebase: casper.cli.get('rebase'),
  outputSettings: {
    errorType: 'movement',
    transparency: 0.3
  },
});

billingEngineUrls.urls.forEach((url) => {
  casper.test.begin(url.fileName, function(test) {
    casper.start(`http://accounts.hedgeye.dev${url.path}`);
    casper.viewport(1024, 768);
    casper.then(function() {
      phantomcss.screenshot('body', `billing_engine/${url.fileName}`);
    });
    casper.then(function now_check_the_screenshots() {
      phantomcss.compareAll();
    });
    casper.run(function() {
      console.log('\nTHE END.');
      casper.test.done();
    });
  });
});
