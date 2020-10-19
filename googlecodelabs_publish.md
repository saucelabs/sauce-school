# Sauce School Publishing Guide

## Prerequisites

### Mac Users:

* Install [NPM/Node.js](https://nodejs.org/en/download/)
* Install Homebrew
  ```sh
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
  ```
* Install `python3.7` and `pip3`:
  ```sh
  brew install python@3.7 && /
  echo 'export PATH="/usr/local/opt/python@3.7/bin:$PATH"' >> ~/.zshrc && /
  export LDFLAGS="-L/usr/local/opt/python@3.7/lib"
  ```
* Install `gsutil`, Google Cloud Storage's CLI utility:
```sh
curl https://sdk.cloud.google.com | bash
```
* Restart your shell:
```sh
exec -l $SHELL
```
* [Run `gcloud init`](https://cloud.google.com/storage/docs/gsutil_install) in order to intialize your `gcloud` environment and link to the appropriate project:
```sh
gcloud init
```
> NOTE: if you don't have read and publish access to the GCS bucket and project, you won't be able to proceed any further.

### Windows Users:

> Coming Soon!

## Publishing the Site
1. Navigate to the `site` directory
```sh
cd site
```
2. Install Node dependencies:
```sh
npm i
```
3. Install `crcmod`:
```sh
pip3 install -U crcmod
```
> This is a VERY important tool for `gsutil`. Without `crcmod`, Google is not able to verify object integrity. For more details please refer to this doc: [CRC32 and Installing crcmod](https://cloud.google.com/storage/docs/gsutil/addlhelp/CRC32CandInstallingcrcmod)

4. Use `claat export` in the _/sauce-schools/codelabs_ directory
  * Option 1: Manually move exported file into _../site/codelabs_.
  * Option 2: change the `id` in the markdown file to export to the correct dir. Old `Module5_SeleniumJs.md` New `../site/codelabs/Module5_SeleniumJava`

After the export, back out and go to the site directory:
```
cd ..
cd site
```


5. Build the website using `gulp.js`. You must specify the `codelabs-dir`, otherwise you may not see your modules in the site: (_Note that you must commit first_)
```sh
npm run gulp -- dist --codelabs-dir=codelabs
```
6. Test the site locally with `gulp serve`:
```sh
npm run gulp serve:dist
```
7. Publish the `views` directory (the frontend stuff) with `publish:staging:views`:
```sh
npm run gulp -- publish:staging:views --staging-bucket=$GCS_STAGING_BUCKET
```
8. Publish the `codelabs` directory with `publish:staging:codelabs`:
```sh
npm run gulp -- publish:staging:codelabs --staging-bucket=$GCS_STAGING_BUCKET
```
> :warning: if you receive errors during this fnal step, it's most likely due to:
> * `gsutil init` didn't properly run or you don't have access to the GCS_STAGING_BUCKET.
> * you're running the incorrect version of `python3`. Run `python3 --version` to verfiy you're running `Python 3.7.X`.
