# Audio Inspection Readme

A React/Express application that inspects audio files for its audio properties/data.

## Preparation

### Step 1: Fork & Clone this repository.

```sh
$ git clone https://github.com/Storyboard-fm/sb-fs-test1.git
```

### Step 2: Install dependencies.

After unpacking the repository, `cd` into it and `npm install`,
from that repository `cd react-backend` and `npm install `
from that repository `cd client` and `npm install`
from there `cd ..` twice and run `npm start` 

```sh
$ cd sb-fs-test1
$ npm install
$ cd react-backend
$ npm install
$ cd client
$ npm install
$ cd ..
$ cd ..
$ npm start
```

`npm start` runs the react server (localhost:3000) and the express server (localhost:3001/audiodata)

### Additions

I added playback and volume functionality to the app as well, currently did a quick design so the app wprobably looks best on the desktop. I utilized tone.js wih React hooks and a CDN to load the file.

I also created a couple unit test for some of the reusable components I made.

Made a simple little UI as well with css styling.
### Finding Dependencies

You can find dependencies in root folder that you cloned, react-backend and reactbackend/client for package.json files.
## This was Fun!

I had fun making this hope it works well on your end!
