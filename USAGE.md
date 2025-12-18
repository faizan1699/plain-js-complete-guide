# JavaScript Documentation Guide - Usage & Project Structure

## 📁 Project Structure

```
js/
├── index.html              # Main HTML file - entry point
├── styles.css              # All CSS styles and theming
├── app.js                  # Application logic and all page content
├── README.md               # Project overview and setup
├── USAGE.md                # This file - detailed usage guide
└── examples/               # All code examples in separate files
    ├── section-1/          # Introduction examples
    │   ├── node-server-example.js
    │   └── html-layout-example.html
    ├── section-2/          # ECMAScript version examples
    │   ├── es3-trycatch-example.js
    │   ├── es5-array-methods-example.js
    │   ├── es2015-features-example.js
    │   ├── es2016-example.js
    │   ├── es2017-async-example.js
    │   ├── es2020-optional-chaining-example.js
    │   └── es2022-private-fields-example.js
    ├── section-3/          # Language basics examples
    │   ├── variables-scoping-example.js
    │   ├── primitive-types-example.js
    │   ├── reference-types-example.js
    │   ├── implicit-coercion-example.js
    │   ├── explicit-conversion-example.js
    │   ├── coercion-edge-cases-example.js
    │   ├── arithmetic-operators-example.js
    │   ├── comparison-operators-example.js
    │   ├── logical-operators-example.js
    │   ├── if-else-example.js
    │   ├── switch-example.js
    │   ├── for-loop-example.js
    │   ├── while-loop-example.js
    │   ├── dowhile-loop-example.js
    │   ├── forof-loop-example.js
    │   └── forin-loop-example.js
    ├── section-4/          # Functions examples
    │   ├── function-declaration-example.js
    │   ├── function-expression-example.js
    │   ├── arrow-functions-example.js
    │   ├── default-parameters-example.js
    │   ├── rest-parameters-example.js
    │   ├── closure-example.js
    │   ├── iife-example.js
    │   ├── higher-order-function-example.js
    │   ├── pure-function-example.js
    │   └── impure-function-example.js
    ├── section-8/          # Async examples
    │   └── async-await-example.js
    └── api/                # API reference examples
        ├── array-map-basic-example.js
        ├── array-map-objects-example.js
        ├── array-filter-example.js
        ├── array-reduce-example.js
        └── fetch-example.js
```

## 🚀 How to Use

### 1. Opening the Documentation

Simply open `index.html` in your web browser. No build step or server required!

```bash
# Option 1: Double-click index.html
# Option 2: Open from terminal
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows

# Option 3: Use a local server (recommended for development)
python -m http.server 8000    # Python 3
# Then visit http://localhost:8000
```

### 2. Navigating the Documentation

- **Sidebar Navigation**: Click any section or API reference item
- **Search**: Use the search box in the header to find topics
- **Code Examples**: All examples are loaded from separate files automatically

### 3. How Code Examples Work

Each code example is stored in a separate file and referenced using `<code>` tags:

```html
<!-- In app.js, code blocks reference external files -->
<div class="code-block">
  <div class="code-block-header">
    <span>Example · Description</span>
    <span class="pill-small">js</span>
    <span class="code-ref">Source: <code>examples/section-3/variables-scoping-example.js</code></span>
  </div>
  <pre><code data-src="examples/section-3/variables-scoping-example.js"></code></pre>
</div>
```

The `loadCodeFromFiles()` function automatically:
1. Finds all `<code data-src="...">` elements
2. Fetches the code from the referenced file
3. Displays it in the code block
4. Shows error messages if loading fails

## 📝 Adding New Code Examples

### Step 1: Create the Example File

Create a new file in the appropriate `examples/` directory:

```bash
# Example: Create a new array method example
touch examples/api/array-splice-example.js
```

### Step 2: Write the Code

```javascript
// examples/api/array-splice-example.js
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2); // Remove 2 elements starting at index 1
console.log(arr);    // [1, 4, 5]
console.log(removed); // [2, 3]
```

### Step 3: Reference in app.js

Update the page content in `app.js`:

```javascript
PAGES['api-array-splice'] = {
  title: 'API · Array.prototype.splice',
  type: 'API Reference',
  level: 'Array',
  body: `
    <div class="content-body">
      <h3>Description</h3>
      <p><code>splice</code> mutates array by removing/replacing elements.</p>
      <div class="code-block">
        <div class="code-block-header">
          <span>Example</span>
          <span class="pill-small">js</span>
          <span class="code-ref">Source: <code>examples/api/array-splice-example.js</code></span>
        </div>
        <pre><code data-src="examples/api/array-splice-example.js"></code></pre>
      </div>
    </div>
  `
};
```

### Step 4: Add Navigation Item

Add to the navigation in `index.html` or dynamically in `app.js`:

```javascript
// In API_NAV_ITEMS array
{ id: 'api-array-splice', index: 'A10', title: 'Array.prototype.splice', tag: 'Array' }
```

## 🔧 Using Functions and APIs

### How Functions are Organized

#### 1. **Core Guide Sections** (Sections 1-21)
Located in `app.js` under the `PAGES` object:

```javascript
PAGES['section-X-name'] = {
  title: 'Section X · Title',
  type: 'Guide Section',
  level: 'Level',
  body: `...HTML content with code references...`
}
```

#### 2. **API Reference Pages** (50 Functions)
Also in `app.js`:

```javascript
PAGES['api-function-name'] = {
  title: 'API · Function Name',
  type: 'API Reference',
  level: 'Category',
  body: `...documentation with examples...`
}
```

#### 3. **Code Examples**
Stored in `examples/` directory, organized by:
- **Section**: `examples/section-X/`
- **API**: `examples/api/`

### Key Functions in app.js

#### `renderPage(pageId)`
Renders a page and loads its content:

```javascript
renderPage('section-1-intro');  // Load introduction section
renderPage('api-array-map');    // Load array.map API page
```

#### `loadCodeFromFiles()`
Automatically loads code from external files:

```javascript
// Called automatically after renderPage()
// Finds all <code data-src="..."> elements
// Fetches and displays code
```

#### Navigation Handlers
- Click handlers for sidebar navigation
- Search functionality
- Collapsible group toggles

## 📚 Array Methods - Detailed Examples

See `examples/api/array-methods-detailed/` for comprehensive array method examples:

- **Array.prototype.map** - Transform each element
- **Array.prototype.filter** - Select elements by condition
- **Array.prototype.reduce** - Accumulate values
- **Array.prototype.forEach** - Execute callback for each
- **Array.prototype.find** - Find first matching element
- **Array.prototype.some** - Check if any element matches
- **Array.prototype.every** - Check if all elements match
- **Array.prototype.includes** - Check if value exists
- **Array.prototype.slice** - Extract portion of array
- **Array.prototype.splice** - Remove/replace elements
- **Array.prototype.sort** - Sort array elements
- **Array.prototype.concat** - Combine arrays
- **Array.prototype.flat** - Flatten nested arrays
- **Array.prototype.flatMap** - Map then flatten
- And more...

Each method includes:
- Description
- Syntax
- Basic example
- Advanced examples
- Edge cases
- Common use cases

## 🎨 Customization

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --accent: #22c55e;        /* Primary accent color */
  --bg: #0f172a;            /* Background color */
  --text: #e5e7eb;          /* Text color */
  --code-bg: #020617;       /* Code block background */
}
```

### Adding New Sections

1. Add page content to `PAGES` object in `app.js`
2. Add navigation button in `index.html`
3. Create example files in `examples/` directory
4. Reference examples using `data-src` attribute

### Modifying Layout

Edit `styles.css`:
- Grid layout: `.main-shell`
- Sidebar width: `--sidebar-width`
- Content padding: `.content`
- Header styling: `.app-header`

## 🔍 File Reference System

### How Code References Work

1. **In app.js**: Code blocks reference files:
   ```html
   <code data-src="examples/section-3/variables-scoping-example.js"></code>
   ```

2. **Automatic Loading**: `loadCodeFromFiles()` function:
   ```javascript
   async function loadCodeFromFiles() {
     const codeElements = contentEl.querySelectorAll('code[data-src]');
     for (const codeEl of codeElements) {
       const src = codeEl.getAttribute('data-src');
       const response = await fetch(src);
       const code = await response.text();
       codeEl.textContent = code;
     }
   }
   ```

3. **Visual Reference**: Each code block shows source file:
   ```
   Source: examples/section-3/variables-scoping-example.js
   ```

## 📖 Best Practices

### Code Example Files

1. **Naming**: Use descriptive names ending with `-example.js`
2. **Comments**: Include comments explaining the code
3. **Organization**: Group related examples in same directory
4. **Formatting**: Use consistent indentation (2 spaces)

### Documentation Pages

1. **Structure**: Use semantic HTML (`<h3>`, `<h4>`, `<p>`, `<ul>`)
2. **Code Blocks**: Always reference external files using `data-src`
3. **Examples**: Provide multiple examples showing different use cases
4. **Edge Cases**: Document edge cases and gotchas

### Project Maintenance

1. **Keep Examples Updated**: Update example files when APIs change
2. **Test Loading**: Verify all code files load correctly
3. **Organize Files**: Keep examples organized by topic
4. **Document Changes**: Update this guide when adding features

## 🐛 Troubleshooting

### Code Not Loading

**Problem**: Code blocks show "Error loading code"

**Solutions**:
1. Check file path is correct in `data-src` attribute
2. Verify file exists in `examples/` directory
3. Check browser console for CORS errors (use local server)
4. Ensure file has proper extension (.js, .html, etc.)

### Navigation Not Working

**Problem**: Clicking sidebar items doesn't change content

**Solutions**:
1. Check `pageId` matches key in `PAGES` object
2. Verify `data-page` attribute on navigation buttons
3. Check browser console for JavaScript errors

### Styling Issues

**Problem**: Layout looks broken

**Solutions**:
1. Clear browser cache
2. Check `styles.css` is linked in `index.html`
3. Verify CSS variables are defined
4. Check for CSS syntax errors

## 📞 Support

For issues or questions:
1. Check this `USAGE.md` file
2. Review `README.md` for setup instructions
3. Examine `app.js` for implementation details
4. Check browser console for errors

---

**Last Updated**: 2024
**Version**: 1.0.0

