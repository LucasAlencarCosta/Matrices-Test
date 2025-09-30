#!/bin/bash

# Script to create a new page from template
# Usage: ./create-page.sh PageName

if [ $# -eq 0 ]; then
    echo "Usage: ./create-page.sh PageName"
    echo "Example: ./create-page.sh LoginPage"
    exit 1
fi

PAGE_NAME=$1
PAGES_DIR="src/pages"
TEMPLATE_DIR="$PAGES_DIR/_template"
NEW_PAGE_DIR="$PAGES_DIR/$PAGE_NAME"

# Check if template exists
if [ ! -d "$TEMPLATE_DIR" ]; then
    echo "Error: Template directory not found at $TEMPLATE_DIR"
    exit 1
fi

# Check if page already exists
if [ -d "$NEW_PAGE_DIR" ]; then
    echo "Error: Page $PAGE_NAME already exists"
    exit 1
fi

# Create new page directory from template
cp -r "$TEMPLATE_DIR" "$NEW_PAGE_DIR"

# Replace template placeholders
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s/TemplatePage/${PAGE_NAME}/g" "$NEW_PAGE_DIR/index.tsx"
    sed -i '' "s/TemplatePage/${PAGE_NAME}/g" "$NEW_PAGE_DIR/types.ts"
    sed -i '' "s/Template Page/${PAGE_NAME}/g" "$NEW_PAGE_DIR/index.tsx"
else
    # Linux
    sed -i "s/TemplatePage/${PAGE_NAME}/g" "$NEW_PAGE_DIR/index.tsx"
    sed -i "s/TemplatePage/${PAGE_NAME}/g" "$NEW_PAGE_DIR/types.ts"
    sed -i "s/Template Page/${PAGE_NAME}/g" "$NEW_PAGE_DIR/index.tsx"
fi

echo "✅ Created new page: $PAGE_NAME"
echo "📁 Location: $NEW_PAGE_DIR"
echo ""
echo "Next steps:"
echo "1. Update the component logic in $NEW_PAGE_DIR/index.tsx"
echo "2. Add your styles in $NEW_PAGE_DIR/styles.ts"
echo "3. Define your types in $NEW_PAGE_DIR/types.ts"
echo "4. Import the page in your App.tsx or router"