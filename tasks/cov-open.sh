npx c8 \
    --all \
    --include "$SRC" \
    --reporter=text-summary \
    --reporter=html \
    ./tasks/test.sh


open "coverage/index.html"
