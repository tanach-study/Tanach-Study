#!/bin/bash
# script to build the webpack bundle and push it up to S3
# steps:
# 1. bump up the version number
# 2. bundle the source code with webpack
# 3. push the new bundle up to S3 for serving

########################################################################
#                               Step 1                                 #
########################################################################

# first we need to bump the package version
# TODO: add the ability to bumo up a minor or major version
npm --no-git-tag-version version patch

# get the new version number from the package file
# not needed
# PACKAGE_VERSION=$(cat package.json \
#   | grep version \
#   | head -1 \
#   | awk -F: '{ print $2 }' \
#   | sed 's/[",]//g' \
#   | tr -d '[[:space:]]')

# echo $PACKAGE_VERSION

########################################################################
#                               Step 2                                 #
########################################################################

# remove old files
npm run clean

# # install dev dependencies, ignoring scripts - see here: http://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability
npm i --only=dev --ignore-scripts

# # build out the bundle using the production flags (can use -p as shortcut, but we like being verbose)
webpack --optimize-minimize --define process.env.NODE_ENV="production" --progress

# # remove dev dependencies - no need to have them lying around
rm -rf node_modules

########################################################################
#                               Step 3                                 #
########################################################################

# TODO: implement uploading to S3
