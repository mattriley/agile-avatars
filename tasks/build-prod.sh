PROFILE="prod"
PROFILE_OUTPUT="$BUILD_OUTPUT/$PROFILE"
tasks/pre-build.sh "$PROFILE"
npx parcel build "$PUBLIC_INDEX_HTML" -d "$PROFILE_OUTPUT" --no-source-maps
