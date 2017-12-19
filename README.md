### to try locally clone project cd in then run the following:

```bash
$ npm install
$ npm run build
$ npm start
```

baseline images are stored in `/screenshots` these images are then run against
urls, those images taken during a run are stored in `/results` if there
is a diff on any of the results vs the baseline images
the test fails. Image diffs are then stored in `/failures`
where they can be viewed. Once images and changed are verified Run `$ npm start -- --rebase`.
this sets the current images as accepted and set a new baseline. the tests then run and pass.

#### tested on node 6.4.0, npm 5.0.0
