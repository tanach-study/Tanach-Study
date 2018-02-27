#!/bin/bash
# script to build the webpack bundle and push it up to S3
# steps:
# 1. bump up the version number
# 2. bundle the source code with webpack
# 3. push the new bundle up to S3 for serving

########################################################################
#                               Step 1                                 #
########################################################################



########################################################################
#                               Step 2                                 #
########################################################################

# remove old files
npm run clean

# install dev dependencies, ignoring scripts - see here: http://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability
npm i --only=dev --ignore-scripts

# build out the bundle using the production flags (can use -p as shortcut, but we like being verbose)
webpack --optimize-minimize --define process.env.NODE_ENV="production" --progress

# remove dev dependencies - no need to have them lying around
rm -rf node_modules
