# Based on http://www.savjee.be/2014/03/Jekyll-to-S3-deploy-script-with-gzip/

##
# Configuration options
##
STAGING_BUCKET='s3://test.data4america.org/'
LIVE_BUCKET='s3://stories.data4america.org/'
SITE_DIR='build/'

##
# Usage
##
usage() {
cat << _EOF_
Usage: ${0} [staging | live]
    
    staging     Deploy to the staging bucket
    live        Deploy to the live (www) bucket
_EOF_
}

##
# Color stuff
##
NORMAL=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2; tput bold)
YELLOW=$(tput setaf 3)

function red() {
    echo "$RED$*$NORMAL"
}

function green() {
    echo "$GREEN$*$NORMAL"
}

function yellow() {
    echo "$YELLOW$*$NORMAL"
}

##
# Actual script
##

# Expecting at least 1 parameter
if [[ "$#" -ne "1" ]]; then
    echo "Expected 1 argument, got $#" >&2
    usage
    exit 2
fi

if [[ "$1" = "live" ]]; then
    BUCKET=$LIVE_BUCKET
    green 'Deploying to live bucket'
else
    BUCKET=$STAGING_BUCKET
    green 'Deploying to staging bucket'
fi


red '--> Running Wintersmith'
rm -rf $SITE_DIR
npm run build


red '--> Gzipping all html, css, js, and otf files'
find $SITE_DIR \( -iname '*.html' -o -iname '*.css' -o -iname '*.js' -o -iname '*.otf' \) -exec gzip -9 -n {} \; -exec mv {}.gz {} \;


yellow '--> Uploading css files'
s3cmd sync --cf-invalidate --no-mime-magic --exclude '*.*' --include '*.css' --add-header='Content-Type: text/css' --add-header='Cache-Control: max-age=604800' --add-header='Content-Encoding: gzip' $SITE_DIR $BUCKET

yellow '--> Uploading js files'
s3cmd sync --cf-invalidate --no-mime-magic --exclude '*.*' --include '*.js' --add-header='Content-Type: application/javascript' --add-header='Cache-Control: max-age=604800' --add-header='Content-Encoding: gzip' $SITE_DIR $BUCKET

# Sync media files (Cache: expire in 10 weeks)
yellow '--> Uploading otf fonts'
s3cmd sync --cf-invalidate --no-mime-magic --exclude '*.*' --include '*.otf' --add-header='Cache-Control: max-age=6048000' --add-header='Content-Encoding: gzip' $SITE_DIR $BUCKET

yellow '--> Uploading images (jpg, png, ico)'
s3cmd sync --cf-invalidate --no-mime-magic --exclude '*.*' --include '*.png' --include '*.jpg' --include '*.ico' --add-header='Expires: Sat, 20 Nov 2020 18:46:39 GMT' --add-header='Cache-Control: max-age=6048000' $SITE_DIR $BUCKET

# Sync html files (Cache: 2 hours)
yellow '--> Uploading html files'
s3cmd sync --cf-invalidate --no-mime-magic --exclude '*.*' --include '*.html' --add-header='Content-Type: text/html' --add-header='Cache-Control: max-age=7200, must-revalidate' --add-header='Content-Encoding: gzip' $SITE_DIR $BUCKET

# Sync everything else
yellow '--> Syncing everything else'
s3cmd sync --cf-invalidate --delete-removed $SITE_DIR $BUCKET
