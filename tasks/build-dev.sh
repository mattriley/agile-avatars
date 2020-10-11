PROFILE="dev"
PROFILE_OUTPUT="$BUILD_OUTPUT/$PROFILE"
tasks/pre-build.sh "$PROFILE"
npx parcel "$PUBLIC_INDEX_HTML" -d "$PROFILE_OUTPUT" --no-cache $@
