# Audio Inspection Challenge

## Preparation

### Step 1: Clone this repository.

```sh
$ git clone https://github.com/Storyboard-fm/sb-fs-test1.git
```

### Step 2: Install dependencies.

After unpacking the repository, `cd` into it and install the `npm`
dependencies:

```sh
$ cd sb-fs5-test
$ npm install
```

## Background

This project probes the file, `example.wav` for file metadata and logs a
portion of the results obtained to the console. To do this, we are utilizing a
Node module I've authored called `little-media-box`:

* [Documentation](https://github.com/little-core-labs/little-media-box/blob/master/README.md)
* [Examples](https://github.com/little-core-labs/little-media-box/tree/master/example)

After performing the above preparation steps, running this in your terminal:

```sh
$ node app.js
```

Should yield the below results.

```sh
Probe results for file at URI: file:///home/gwohl/code/storyboard/sb-fs5-test/example.wav


File format...	 WAV / WAVE (Waveform Audio)
File size...	 1920044 bytes
Codec type...	 audio
Channel count... 2
Duration...	 10 seconds
```

## Challenge Description

**Let's turn this simple, dumb console app into a simple, dumb web app!**

Using whatever tools/libraries/frameworks you'd like (i.e., Express, React,
etc.), please design a simple web user interface to display these metrics to the
user. Feel free to include any additional information you think may be
of interest, while ensuring your work meets the below requirements.

We anticipate that this challenge should take approximately one hour or so to
complete.

### Requirements

**Requirement 1**

At a minimum, your interface should display the following information about
the `example.wav` file:

* File type
* File size
* Codec type
* Duration
* Channel count

**Requirement 2**

Your `package.json` should be prepared with all of the `npm` dependencies and
scripts necessary to successfully clone down your code and run it on
`localhost`.

**Requirement 3**

Please provide a README, if necessary to document how to prepare the development
environment and run the application.

## Have Fun!

Please feel encouraged to have fun with this challenge. Your work will not be
judged on the merits of any design or UI/UX concerns. We are interested in
seeing how you scaffold your project and will also be looking for clean,
readable, idiomatic ES6 code in general.

Feel free to ping me at andrew@storyboard.fm with any questions you may have.
