cat > "iTermocil.yml" <<EOF
windows:
  - name: $PROJECT_NAME
    root: $(pwd)
    layout: main-vertical
    panes:
      - commands:
        - nvm use
        - code .
      - commands:
        - nvm use
        - ./task test-watch
      - commands:
        - nvm use
        - ./task start
      - commands:
        - nvm use
        - ./task indexgen-watch
EOF

itermocil