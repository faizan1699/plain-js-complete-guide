/**
 * JAVASCRIPT DOCUMENTATION GUIDE - APPLICATION LOGIC
 * Contains all page content and navigation functionality
 */

// ============================================
// API REFERENCE NAVIGATION ITEMS (50 Functions)
// ============================================

const API_NAV_ITEMS = [
  { id: 'api-array-map', index: 'A1', title: 'Array.prototype.map', tag: 'Array' },
  { id: 'api-array-filter', index: 'A2', title: 'Array.prototype.filter', tag: 'Array' },
  { id: 'api-array-reduce', index: 'A3', title: 'Array.prototype.reduce', tag: 'Array' },
  { id: 'api-array-forEach', index: 'A4', title: 'Array.prototype.forEach', tag: 'Array' },
  { id: 'api-array-find', index: 'A5', title: 'Array.prototype.find', tag: 'Array' },
  { id: 'api-array-some', index: 'A6', title: 'Array.prototype.some', tag: 'Array' },
  { id: 'api-array-every', index: 'A7', title: 'Array.prototype.every', tag: 'Array' },
  { id: 'api-array-includes', index: 'A8', title: 'Array.prototype.includes', tag: 'Array' },
  { id: 'api-array-slice', index: 'A9', title: 'Array.prototype.slice', tag: 'Array' },
  { id: 'api-array-splice', index: 'A10', title: 'Array.prototype.splice', tag: 'Array' },
  { id: 'api-array-sort', index: 'A11', title: 'Array.prototype.sort', tag: 'Array' },
  { id: 'api-array-concat', index: 'A12', title: 'Array.prototype.concat', tag: 'Array' },
  { id: 'api-array-flat', index: 'A13', title: 'Array.prototype.flat', tag: 'Array' },
  { id: 'api-array-flatMap', index: 'A14', title: 'Array.prototype.flatMap', tag: 'Array' },
  { id: 'api-string-includes', index: 'S1', title: 'String.prototype.includes', tag: 'String' },
  { id: 'api-string-replace', index: 'S2', title: 'String.replace / replaceAll', tag: 'String' },
  { id: 'api-string-split', index: 'S3', title: 'String.prototype.split', tag: 'String' },
  { id: 'api-string-trim', index: 'S4', title: 'String.prototype.trim', tag: 'String' },
  { id: 'api-string-case', index: 'S5', title: 'String.toUpperCase / toLowerCase', tag: 'String' },
  { id: 'api-number-parse', index: 'N1', title: 'Number.parseInt / parseFloat', tag: 'Number' },
  { id: 'api-math-random', index: 'M1', title: 'Math.random', tag: 'Math' },
  { id: 'api-math-maxmin', index: 'M2', title: 'Math.max / Math.min', tag: 'Math' },
  { id: 'api-date-now', index: 'D1', title: 'Date.now / new Date', tag: 'Date' },
  { id: 'api-json', index: 'J1', title: 'JSON.parse / JSON.stringify', tag: 'JSON' },
  { id: 'api-settimeout', index: 'T1', title: 'setTimeout / setInterval', tag: 'Timers' },
  { id: 'api-fetch', index: 'F1', title: 'fetch', tag: 'Network' },
  { id: 'api-promise-resolve', index: 'P1', title: 'Promise.resolve / reject', tag: 'Promise' },
  { id: 'api-promise-all', index: 'P2', title: 'Promise.all', tag: 'Promise' },
  { id: 'api-promise-race', index: 'P3', title: 'Promise.race', tag: 'Promise' },
  { id: 'api-promise-allSettled', index: 'P4', title: 'Promise.allSettled', tag: 'Promise' },
  { id: 'api-promise-any', index: 'P5', title: 'Promise.any', tag: 'Promise' },
  { id: 'api-object-keys', index: 'O1', title: 'Object.keys / values / entries', tag: 'Object' },
  { id: 'api-object-assign', index: 'O2', title: 'Object.assign', tag: 'Object' },
  { id: 'api-object-freeze', index: 'O3', title: 'Object.freeze', tag: 'Object' },
  { id: 'api-object-create', index: 'O4', title: 'Object.create', tag: 'Object' },
  { id: 'api-map-setget', index: 'C1', title: 'Map.set / get / has', tag: 'Collection' },
  { id: 'api-set-addhas', index: 'C2', title: 'Set.add / has / delete', tag: 'Collection' },
  { id: 'api-function-bind', index: 'F2', title: 'Function.prototype.bind', tag: 'Function' },
  { id: 'api-array-from', index: 'A15', title: 'Array.from', tag: 'Array' },
  { id: 'api-array-of', index: 'A16', title: 'Array.of', tag: 'Array' },
  { id: 'api-console-log', index: 'C3', title: 'console.log & friends', tag: 'Debug' },
  { id: 'api-intl-number', index: 'I1', title: 'Intl.NumberFormat', tag: 'Intl' },
  { id: 'api-intl-date', index: 'I2', title: 'Intl.DateTimeFormat', tag: 'Intl' },
  { id: 'api-dom-query', index: 'DOM1', title: 'document.querySelector', tag: 'DOM' },
  { id: 'api-dom-event', index: 'DOM2', title: 'addEventListener', tag: 'DOM' },
  { id: 'api-dom-classlist', index: 'DOM3', title: 'classList.add / remove', tag: 'DOM' },
  { id: 'api-storage', index: 'S6', title: 'localStorage.getItem / setItem', tag: 'Storage' },
  { id: 'api-history', index: 'H1', title: 'history.pushState', tag: 'History' },
  { id: 'api-url', index: 'U1', title: 'URL & URLSearchParams', tag: 'URL' },
];

// ============================================
// PAGE CONTENT DEFINITIONS
// ============================================

const PAGES = {
  // ============================================
  // SECTION 1: INTRODUCTION
  // ============================================
  'section-1-intro': {
    title: 'Section 1 · Introduction to JavaScript',
    type: 'Guide Section',
    level: 'Beginner → Advanced',
    body: `
      <div class="content-body">
        <h3>What is JavaScript?</h3>
        <p>
          JavaScript is a <strong>high-level, dynamic, prototype-based programming language</strong> primarily used for web development. 
          It runs in browsers (client-side), on servers (Node.js, Deno, Bun), on edge runtimes (Cloudflare Workers, Vercel Edge), 
          and powers desktop and mobile apps via frameworks like Electron and React Native.
        </p>

        <h4>Key Characteristics</h4>
        <ul>
          <li><strong>Interpreted / JIT-compiled</strong>: Modern engines compile hot code paths to machine code for performance</li>
          <li><strong>Garbage-collected</strong>: Automatic memory management</li>
          <li><strong>Single-threaded event loop</strong>: Non-blocking I/O with an event-driven model</li>
          <li><strong>Multi-paradigm</strong>: Supports procedural, object-oriented, and functional programming</li>
        </ul>

        <h4>Why JavaScript is Used</h4>
        <ul>
          <li><strong>Client-side interactivity</strong>: Dynamic UIs, form validation, animations, real-time updates</li>
          <li><strong>Server-side logic</strong>: Node.js enables REST APIs, GraphQL, microservices, full-stack applications</li>
          <li><strong>Full-stack consistency</strong>: Same language on frontend and backend reduces context switching</li>
          <li><strong>Huge ecosystem</strong>: npm registry, vast libraries, frameworks, and tooling</li>
          <li><strong>Cross-platform</strong>: Browser, server, mobile, desktop, IoT devices</li>
        </ul>

        <h4>JavaScript vs Other Languages</h4>
        <ul>
          <li><strong>vs Python</strong>: JS is native to browsers; Python is not. JS is event-driven by default; Python excels in scripting, data science, backend</li>
          <li><strong>vs Java</strong>: JS is dynamic and prototype-based; Java is statically-typed and class-based</li>
          <li><strong>vs C++</strong>: JS is higher-level and garbage-collected; C++ is low-level with manual memory management</li>
          <li><strong>vs TypeScript</strong>: TypeScript is a <strong>superset</strong> of JS adding static types; compiles to JS</li>
        </ul>

        <h4>JavaScript Runtime Environments</h4>
        <h5>Browser JavaScript</h5>
        <p>
          Runs inside the browser's JavaScript engine (V8 in Chrome/Edge, SpiderMonkey in Firefox, JavaScriptCore in Safari). 
          Has access to DOM (<code>document</code>, <code>window</code>) and Browser APIs (<code>fetch</code>, <code>localStorage</code>, etc.). 
          No direct file system access (security restriction).
        </p>

        <h5>Node.js</h5>
        <p>
          Server-side JavaScript runtime built on V8. Adds file system (<code>fs</code>), networking (<code>http</code>, <code>net</code>), 
          process management (<code>process</code>), and module system (<code>require</code>, ES modules). No DOM or browser APIs by default.
        </p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Simple Node.js HTTP server</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-1/node-server-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-1/node-server-example.js"></code></pre>
        </div>

        <h5>Deno</h5>
        <p>
          Secure runtime for JavaScript and TypeScript. Built on V8 and Rust. Features: first-class TypeScript support, 
          permission system (file, net, env), Web-standard APIs (like <code>fetch</code>) on the server.
        </p>

        <h5>Bun</h5>
        <p>
          Modern JavaScript runtime focused on <strong>speed</strong>. Implements Node.js APIs, includes bundler, test runner, 
          package manager. Uses <strong>JavaScriptCore</strong> engine (from Safari).
        </p>

        <h4>How JavaScript Works with HTML &amp; CSS</h4>
        <p>
          <strong>HTML</strong> provides structure, <strong>CSS</strong> provides presentation, and <strong>JavaScript</strong> provides behavior. 
          Together they create interactive web applications.
        </p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · HTML + CSS + JS layout</span>
            <span class="pill-small">html</span>
            <span class="code-ref">Source: <code>examples/section-1/html-layout-example.html</code></span>
          </div>
          <pre><code data-src="examples/section-1/html-layout-example.html"></code></pre>
        </div>

        <h4>How JavaScript is Executed (JIT, V8 Overview)</h4>
        <p>
          Modern JavaScript engines use <strong>Just-In-Time (JIT) compilation</strong>:
        </p>
        <ol>
          <li><strong>Parsing</strong>: Source code → Abstract Syntax Tree (AST)</li>
          <li><strong>Interpreter</strong>: Quickly converts AST to bytecode</li>
          <li><strong>JIT Compiler</strong>: Hot code paths compiled to optimized machine code</li>
          <li><strong>Garbage Collector</strong>: Frees unused memory automatically</li>
        </ol>
        <p>
          <strong>V8</strong> (used by Chrome, Node.js, Deno) uses <strong>Ignition</strong> (interpreter) and <strong>TurboFan</strong> (optimizing compiler). 
          It performs optimizations based on runtime type information and de-optimizes when assumptions break.
        </p>
      </div>
    `
  },

  // ============================================
  // SECTION 2: HISTORY & ECMASCRIPT
  // ============================================
  'section-2-history': {
    title: 'Section 2 · JavaScript History & ECMAScript Versions',
    type: 'Guide Section',
    level: 'ES1 → ES2024+',
    body: `
      <div class="content-body">
        <h3>Creation & Standardization Timeline</h3>
        <ul>
          <li><strong>1995</strong>: Brendan Eich creates JavaScript at Netscape (originally "Mocha", then "LiveScript", then "JavaScript")</li>
          <li><strong>1997</strong>: ECMA-262 standard published: <strong>ECMAScript 1 (ES1)</strong></li>
          <li><strong>1999</strong>: <strong>ES3</strong> - Widely implemented, stable baseline</li>
          <li><strong>2009</strong>: <strong>ES5</strong> - Modernized the language</li>
          <li><strong>2015</strong>: <strong>ES6 / ES2015</strong> - Major overhaul, foundation of modern JavaScript</li>
          <li><strong>2016+</strong>: <strong>Yearly releases</strong> (ES2016, ES2017, ..., ES2024+)</li>
        </ul>

        <h4>ES3 (1999)</h4>
        <p><strong>Year</strong>: 1999</p>
        <p><strong>Key Features</strong>:</p>
        <ul>
          <li>Regular expressions</li>
          <li><code>try...catch</code> exception handling</li>
          <li><code>do...while</code>, better <code>switch</code></li>
          <li>Better string handling</li>
        </ul>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · ES3 try/catch</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-2/es3-trycatch-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-2/es3-trycatch-example.js"></code></pre>
        </div>
        <p><strong>Impact</strong>: Stable baseline for early browsers.</p>

        <h4>ES5 (2009)</h4>
        <p><strong>Year</strong>: 2009</p>
        <p><strong>Key Features</strong>:</p>
        <ul>
          <li><strong>Strict mode</strong>: <code>"use strict";</code> for safer code</li>
          <li><strong>Array methods</strong>: <code>forEach</code>, <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>some</code>, <code>every</code></li>
          <li><strong>Object methods</strong>: <code>Object.create</code>, <code>Object.defineProperty</code>, <code>Object.keys</code></li>
          <li><strong>JSON</strong>: <code>JSON.parse</code>, <code>JSON.stringify</code></li>
          <li><strong>Getters/setters</strong></li>
        </ul>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · ES5 Array methods</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-2/es5-array-methods-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-2/es5-array-methods-example.js"></code></pre>
        </div>
        <p><strong>Impact</strong>: Enabled more reliable, structured, functional-style JavaScript.</p>

        <h4>ES6 / ES2015 (2015)</h4>
        <p><strong>Year</strong>: 2015</p>
        <p><strong>Major Features</strong>:</p>
        <ul>
          <li><code>let</code> / <code>const</code> block-scoped variables</li>
          <li><strong>Arrow functions</strong>: <code>() => {}</code></li>
          <li><strong>Classes</strong>: <code>class</code> syntax</li>
          <li><strong>Template literals</strong>: <code>\`Hello \${name}\`</code></li>
          <li><strong>Destructuring</strong>: <code>{ a } = obj</code>, <code>[x, y] = arr</code></li>
          <li><strong>Default parameters</strong></li>
          <li><strong>Rest & spread</strong>: <code>...</code> operator</li>
          <li><strong>Map</strong>, <strong>Set</strong> collections</li>
          <li><strong>Promises</strong></li>
          <li><strong>Modules</strong>: <code>import</code> / <code>export</code></li>
          <li><strong>Symbol</strong> primitive</li>
        </ul>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · ES2015 features</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-2/es2015-features-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-2/es2015-features-example.js"></code></pre>
        </div>
        <p><strong>Impact</strong>: Massive leap forward; foundation of "modern JavaScript".</p>

        <h4>ES2016 (ES7)</h4>
        <p><strong>Year</strong>: 2016</p>
        <p><strong>Features</strong>:</p>
        <ul>
          <li><code>Array.prototype.includes</code></li>
          <li>Exponentiation operator: <code>**</code></li>
        </ul>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · ES2016</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-2/es2016-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-2/es2016-example.js"></code></pre>
        </div>

        <h4>ES2017 (ES8)</h4>
        <p><strong>Year</strong>: 2017</p>
        <p><strong>Features</strong>:</p>
        <ul>
          <li><code>async</code> / <code>await</code></li>
          <li><code>Object.values</code>, <code>Object.entries</code></li>
          <li><code>String.prototype.padStart</code>, <code>padEnd</code></li>
        </ul>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · async/await</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-2/es2017-async-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-2/es2017-async-example.js"></code></pre>
        </div>

        <h4>ES2018 (ES9)</h4>
        <p><strong>Year</strong>: 2018</p>
        <p><strong>Features</strong>:</p>
        <ul>
          <li>Rest/spread for objects: <code>{ ...obj }</code></li>
          <li><code>Promise.prototype.finally</code></li>
          <li>Asynchronous iteration: <code>for await...of</code></li>
        </ul>

        <h4>ES2019 (ES10)</h4>
        <p><strong>Year</strong>: 2019</p>
        <p><strong>Features</strong>:</p>
        <ul>
          <li><code>Array.prototype.flat</code>, <code>flatMap</code></li>
          <li><code>Object.fromEntries</code></li>
          <li><code>String.prototype.trimStart</code>, <code>trimEnd</code></li>
          <li>Optional <code>catch</code> binding: <code>catch { ... }</code></li>
        </ul>

        <h4>ES2020</h4>
        <p><strong>Features</strong>:</p>
        <ul>
          <li><code>BigInt</code> for large integers</li>
          <li>Nullish coalescing: <code>??</code></li>
          <li>Optional chaining: <code>?.</code></li>
          <li><code>Promise.allSettled</code></li>
          <li><code>globalThis</code></li>
        </ul>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Optional chaining & nullish coalescing</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-2/es2020-optional-chaining-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-2/es2020-optional-chaining-example.js"></code></pre>
        </div>

        <h4>ES2021</h4>
        <p><strong>Features</strong>:</p>
        <ul>
          <li><code>String.prototype.replaceAll</code></li>
          <li>Logical assignment operators: <code>&&=</code>, <code>||=</code>, <code>??=</code></li>
          <li><code>Promise.any</code></li>
          <li>WeakRefs (advanced, rarely used directly)</li>
        </ul>

        <h4>ES2022</h4>
        <p><strong>Features</strong>:</p>
        <ul>
          <li>Class fields & private fields: <code>#private</code></li>
          <li><code>Object.hasOwn</code></li>
          <li>Top-level <code>await</code> in modules</li>
        </ul>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Private fields</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-2/es2022-private-fields-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-2/es2022-private-fields-example.js"></code></pre>
        </div>

        <h4>ES2023 - ES2024+</h4>
        <p>
          Ongoing additions include array helpers (<code>toSorted</code>, <code>toReversed</code>, <code>toSpliced</code>, <code>with</code>), 
          new Promise helpers, pattern matching proposals, and more ergonomic improvements.
        </p>
      </div>
    `
  },

  // ============================================
  // SECTION 3: BASICS
  // ============================================
  'section-3-basics': {
    title: 'Section 3 · JavaScript Basics',
    type: 'Guide Section',
    level: 'Core Syntax',
    body: `
      <div class="content-body">
        <h3>Variables: var, let, const</h3>
        <p>
          <strong>var</strong>: Function-scoped or globally-scoped. Hoisted (declared at top of scope, initialized as <code>undefined</code>). 
          Can cause subtle bugs. <strong>Avoid in modern code</strong>.
        </p>
        <p>
          <strong>let</strong>: Block-scoped. Not initialized until declaration is executed (temporal dead zone). Re-assignable.
        </p>
        <p>
          <strong>const</strong>: Block-scoped. Must be initialized. Cannot be reassigned (but object contents can change).
        </p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Variable scoping</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/variables-scoping-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/variables-scoping-example.js"></code></pre>
        </div>
        <p><strong>Best Practice</strong>: Use <code>const</code> by default, <code>let</code> when re-assignment is needed. Avoid <code>var</code>.</p>

        <h4>Data Types</h4>
        <h5>Primitive Types</h5>
        <ul>
          <li><code>string</code></li>
          <li><code>number</code></li>
          <li><code>bigint</code></li>
          <li><code>boolean</code></li>
          <li><code>undefined</code></li>
          <li><code>symbol</code></li>
          <li><code>null</code> (special: <code>typeof null === "object"</code>)</li>
        </ul>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Primitive types</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/primitive-types-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/primitive-types-example.js"></code></pre>
        </div>

        <h5>Reference Types</h5>
        <ul>
          <li><code>Object</code></li>
          <li><code>Array</code></li>
          <li><code>Function</code></li>
          <li><code>Date</code></li>
          <li><code>Map</code>, <code>Set</code>, <code>WeakMap</code>, <code>WeakSet</code></li>
          <li>Built-in objects like <code>RegExp</code>, custom objects, etc.</li>
        </ul>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Reference types</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/reference-types-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/reference-types-example.js"></code></pre>
        </div>
        <p><strong>Edge Case</strong>: Primitives are immutable; objects are mutable. But primitive wrappers exist (<code>new String</code>, <code>new Number</code>) - avoid them.</p>

        <h4>Type Coercion</h4>
        <p><strong>Implicit</strong>: JavaScript converts types automatically in many operators.</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Implicit coercion</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/implicit-coercion-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/implicit-coercion-example.js"></code></pre>
        </div>
        <p><strong>Explicit</strong>:</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Explicit conversion</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/explicit-conversion-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/explicit-conversion-example.js"></code></pre>
        </div>
        <p><strong>Edge Cases</strong>:</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Coercion edge cases</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/coercion-edge-cases-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/coercion-edge-cases-example.js"></code></pre>
        </div>

        <h4>Operators</h4>
        <h5>Arithmetic</h5>
        <p><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code>, unary <code>+</code> and <code>-</code></p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Arithmetic operators</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/arithmetic-operators-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/arithmetic-operators-example.js"></code></pre>
        </div>

        <h5>Comparison</h5>
        <p>
          <strong>Loose equality</strong> (<code>==</code>): Allows coercion - <strong>avoid</strong>.<br>
          <strong>Strict equality</strong> (<code>===</code>): No coercion - <strong>prefer</strong>.<br>
          <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>
        </p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Comparison operators</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/comparison-operators-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/comparison-operators-example.js"></code></pre>
        </div>

        <h5>Logical</h5>
        <p><code>&&</code>, <code>||</code>, <code>!</code>, <code>??</code> (nullish coalescing)</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Logical operators</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/logical-operators-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/logical-operators-example.js"></code></pre>
        </div>

        <h5>Assignment</h5>
        <p><code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>**=</code>, <code>&&=</code>, <code>||=</code>, <code>??=</code></p>

        <h5>Bitwise</h5>
        <p><code>&</code>, <code>|</code>, <code>^</code>, <code>~</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code>, <code>&gt;&gt;&gt;</code></p>
        <p>Used for low-level operations, flags, performance tricks.</p>

        <h4>Control Flow</h4>
        <h5>if / else</h5>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · if/else</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/if-else-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/if-else-example.js"></code></pre>
        </div>

        <h5>switch</h5>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · switch statement</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/switch-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/switch-example.js"></code></pre>
        </div>

        <h5>Loops</h5>
        <p><strong>for</strong> (classic):</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · for loop</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/for-loop-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/for-loop-example.js"></code></pre>
        </div>

        <p><strong>while</strong>:</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · while loop</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/while-loop-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/while-loop-example.js"></code></pre>
        </div>

        <p><strong>do...while</strong>:</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · do...while loop</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/dowhile-loop-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/dowhile-loop-example.js"></code></pre>
        </div>

        <p><strong>for...of</strong>: Iterate <strong>values</strong> of iterables (arrays, strings, etc.)</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · for...of loop</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/forof-loop-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/forof-loop-example.js"></code></pre>
        </div>

        <p><strong>for...in</strong>: Iterate <strong>keys</strong> of objects (enumerable properties)</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · for...in loop</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-3/forin-loop-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-3/forin-loop-example.js"></code></pre>
        </div>
        <p><strong>Edge Case</strong>: Don't use <code>for...in</code> on arrays (it iterates keys, including inherited). Use <code>for</code>, <code>for...of</code>, or array methods.</p>
      </div>
    `
  },

  // Continue with remaining sections... (Sections 4-21 will follow similar pattern)
  // For brevity, I'll add key sections and all API pages

  'section-4-functions': {
    title: 'Section 4 · Functions Deep Dive',
    type: 'Guide Section',
    level: 'Core',
    body: `
      <div class="content-body">
        <h3>Function Declaration</h3>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Function declaration</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-4/function-declaration-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-4/function-declaration-example.js"></code></pre>
        </div>
        <p>Hoisted (available before declaration in scope).</p>

        <h3>Function Expression</h3>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Function expression</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-4/function-expression-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-4/function-expression-example.js"></code></pre>
        </div>
        <p>Not hoisted as a whole (only variable name is hoisted). Useful for passing as arguments.</p>

        <h3>Arrow Functions</h3>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Arrow functions</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-4/arrow-functions-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-4/arrow-functions-example.js"></code></pre>
        </div>
        <p><strong>Lexical <code>this</code></strong> (no own <code>this</code>, <code>arguments</code>, <code>super</code>, <code>new.target</code>). Cannot be used as constructors (<code>new</code>).</p>
        <p><strong>Edge Case</strong>: Don't use arrow functions as methods when you need <code>this</code> pointing to the object.</p>

        <h3>Parameters & Arguments</h3>
        <p><strong>Default parameters</strong>:</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Default parameters</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-4/default-parameters-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-4/default-parameters-example.js"></code></pre>
        </div>

        <p><strong>Rest parameters</strong>:</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Rest parameters</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-4/rest-parameters-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-4/rest-parameters-example.js"></code></pre>
        </div>

        <h3>Closures</h3>
        <p>A <strong>closure</strong> is when a function remembers variables from its outer scope even after that scope has returned.</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Closure</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-4/closure-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-4/closure-example.js"></code></pre>
        </div>
        <p><strong>Use Cases</strong>: Data privacy, function factories, memoization.</p>

        <h3>IIFE (Immediately Invoked Function Expression)</h3>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · IIFE</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-4/iife-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-4/iife-example.js"></code></pre>
        </div>
        <p>Used historically for <strong>scoping</strong> before modules and <code>let/const</code>. Still useful for encapsulation.</p>

        <h3>Higher-Order Functions</h3>
        <p>Functions that <strong>take functions as arguments or return functions</strong>.</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Higher-order function</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-4/higher-order-function-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-4/higher-order-function-example.js"></code></pre>
        </div>

        <h3>Pure vs Impure Functions</h3>
        <p><strong>Pure</strong>: Same inputs → same output. No side effects.</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Pure function</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-4/pure-function-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-4/pure-function-example.js"></code></pre>
        </div>

        <p><strong>Impure</strong>: Depends on or modifies external state.</p>
        <div class="code-block">
          <div class="code-block-header">
            <span>Example · Impure function</span>
            <span class="pill-small">js</span>
            <span class="code-ref">Source: <code>examples/section-4/impure-function-example.js</code></span>
          </div>
          <pre><code data-src="examples/section-4/impure-function-example.js"></code></pre>
        </div>
        <p>Pure functions are easier to test and reason about; widely used in functional and UI frameworks.</p>
      </div>
    `
  },

  // Add placeholder sections for 5-21 (you can expand these with full content)
  'section-5-objects': {
    title: 'Section 5 · Objects & Prototypes',
    type: 'Guide Section',
    level: 'OO',
    body: `<div class="content-body"><h3>Object Creation Methods</h3><p>Object literals, constructors, classes, Object.create(). Prototypes and prototype chain. Classes (ES6), inheritance, encapsulation, polymorphism.</p></div>`
  },
  'section-6-arrays': {
    title: 'Section 6 · Arrays & Collections',
    type: 'Guide Section',
    level: 'Data',
    body: `<div class="content-body"><h3>Array Methods</h3><p>map, filter, reduce (deep), find, some, every, flat, flatMap. Sets, Maps, WeakMap & WeakSet.</p></div>`
  },
  'section-7-primitives': {
    title: 'Section 7 · Strings, Numbers & Dates',
    type: 'Guide Section',
    level: 'Core',
    body: `<div class="content-body"><h3>String Methods</h3><p>Template literals, Number methods, Math object, Date object, Intl API.</p></div>`
  },
  'section-8-async': {
    title: 'Section 8 · Asynchronous JavaScript',
    type: 'Guide Section',
    level: 'Critical',
    body: `<div class="content-body"><h3>Promises & async/await</h3><p>Synchronous vs asynchronous, call stack, event loop, callbacks, Promises, async/await, error handling, Promise combinators.</p><div class="code-block"><div class="code-block-header"><span>Example · async/await</span><span class="pill-small">js</span><span class="code-ref">Source: <code>examples/section-8/async-await-example.js</code></span></div><pre><code data-src="examples/section-8/async-await-example.js"></code></pre></div></div>`
  },
  'section-9-dom': {
    title: 'Section 9 · DOM & Events',
    type: 'Guide Section',
    level: 'Browser',
    body: `<div class="content-body"><h3>DOM Manipulation</h3><p>DOM tree, selecting elements, modifying elements, styling via JS, creating & removing elements, event handling, bubbling & capturing, delegation.</p></div>`
  },
  'section-10-browser-apis': {
    title: 'Section 10 · Browser APIs',
    type: 'Guide Section',
    level: 'Web',
    body: `<div class="content-body"><h3>Browser APIs</h3><p>Fetch API, XMLHttpRequest, LocalStorage, SessionStorage, Cookies, Geolocation, Clipboard, History API, IntersectionObserver, MutationObserver.</p></div>`
  },
  'section-11-data-fetching': {
    title: 'Section 11 · Data Fetching',
    type: 'Guide Section',
    level: 'HTTP',
    body: `<div class="content-body"><h3>Data Fetching</h3><p>REST APIs, public APIs, third-party services, backend servers, JSON files. Fetch examples, error handling, pagination, authentication, environment variables.</p></div>`
  },
  'section-12-modules': {
    title: 'Section 12 · Modules & Organization',
    type: 'Guide Section',
    level: 'Architecture',
    body: `<div class="content-body"><h3>ES Modules</h3><p>import/export, dynamic imports, CommonJS, folder structures, scalable architecture.</p></div>`
  },
  'section-13-state': {
    title: 'Section 13 · Storage & State Management',
    type: 'Guide Section',
    level: 'State',
    body: `<div class="content-body"><h3>Storage</h3><p>Local storage, IndexedDB, Cookies, in-memory state, state patterns.</p></div>`
  },
  'section-14-errors': {
    title: 'Section 14 · Error Handling & Debugging',
    type: 'Guide Section',
    level: 'Reliability',
    body: `<div class="content-body"><h3>Error Handling</h3><p>try/catch, custom errors, debugging tools, console methods, common runtime errors.</p></div>`
  },
  'section-15-performance': {
    title: 'Section 15 · Performance & Optimization',
    type: 'Guide Section',
    level: 'Perf',
    body: `<div class="content-body"><h3>Performance</h3><p>Debouncing, throttling, lazy loading, memory leaks, code splitting.</p></div>`
  },
  'section-16-security': {
    title: 'Section 16 · Security',
    type: 'Guide Section',
    level: 'Security',
    body: `<div class="content-body"><h3>Security</h3><p>XSS, CSRF, CORS, secure data handling, best practices.</p></div>`
  },
  'section-17-real-apps': {
    title: 'Section 17 · Real Applications',
    type: 'Guide Section',
    level: 'Practical',
    body: `<div class="content-body"><h3>Real Applications</h3><p>SPAs, dashboards, forms & validation, authentication flows, file uploads, real-time apps, data visualization.</p></div>`
  },
  'section-18-frameworks': {
    title: 'Section 18 · Frameworks & Libraries',
    type: 'Guide Section',
    level: 'Ecosystem',
    body: `<div class="content-body"><h3>Frameworks</h3><p>React, Vue, Angular, Svelte, jQuery (legacy), Node.js, Express. Why they exist, when to use them, how they build on JS.</p></div>`
  },
  'section-19-modern': {
    title: 'Section 19 · Modern Features',
    type: 'Guide Section',
    level: 'ESNext',
    body: `<div class="content-body"><h3>Modern Features</h3><p>Optional chaining, nullish coalescing, destructuring, spread operator, top-level await, Web Workers.</p></div>`
  },
  'section-20-api': {
    title: 'Section 20 · API & Method Reference',
    type: 'Guide Section',
    level: 'Reference',
    body: `<div class="content-body"><h3>API Reference</h3><p>A–Z reference of global objects, methods, properties. Each with description, syntax, example. See the API Reference section in the sidebar for individual function pages.</p></div>`
  },
  'section-21-best': {
    title: 'Section 21 · Best Practices & Interviews',
    type: 'Guide Section',
    level: 'Expert',
    body: `<div class="content-body"><h3>Best Practices</h3><p>Clean code principles, design patterns, common mistakes, interview questions, real-world tips.</p></div>`
  },
};

// ============================================
// API REFERENCE PAGES (50 Functions)
// ============================================

// Array Methods
PAGES['api-array-map'] = {
  title: 'API · Array.prototype.map',
  type: 'API Reference',
  level: 'Array',
  body: `
    <div class="content-body">
      <h3>Description</h3>
      <p><code>map</code> creates a new array by applying a callback function to each element of the source array, without mutating the original array.</p>
      <h4>Syntax</h4>
      <div class="code-block">
        <div class="code-block-header"><span>Signature</span><span class="pill-small">js</span></div>
        <pre><code>array.map(callback(element, index, array), thisArg?)</code></pre>
      </div>
      <h4>Examples</h4>
      <div class="code-block">
        <div class="code-block-header">
          <span>Example · Basic usage</span>
          <span class="pill-small">js</span>
          <span class="code-ref">Source: <code>examples/api/array-map-basic-example.js</code></span>
        </div>
        <pre><code data-src="examples/api/array-map-basic-example.js"></code></pre>
      </div>
      <div class="code-block">
        <div class="code-block-header">
          <span>Example · Map objects to specific fields</span>
          <span class="pill-small">js</span>
          <span class="code-ref">Source: <code>examples/api/array-map-objects-example.js</code></span>
        </div>
        <pre><code data-src="examples/api/array-map-objects-example.js"></code></pre>
      </div>
      <h4>Common Edge Cases</h4>
      <ul>
        <li><code>map</code> skips empty slots in sparse arrays.</li>
        <li>Always return from your callback; forgetting <code>return</code> yields <code>undefined</code> items.</li>
      </ul>
    </div>
  `
};

PAGES['api-array-filter'] = {
  title: 'API · Array.prototype.filter',
  type: 'API Reference',
  level: 'Array',
  body: `
    <div class="content-body">
      <h3>Description</h3>
      <p><code>filter</code> returns a new array containing only the elements for which the callback returns a truthy value.</p>
      <div class="code-block">
        <div class="code-block-header">
          <span>Example</span>
          <span class="pill-small">js</span>
          <span class="code-ref">Source: <code>examples/api/array-filter-example.js</code></span>
        </div>
        <pre><code data-src="examples/api/array-filter-example.js"></code></pre>
      </div>
    </div>
  `
};

PAGES['api-array-reduce'] = {
  title: 'API · Array.prototype.reduce',
  type: 'API Reference',
  level: 'Array',
  body: `
    <div class="content-body">
      <h3>Description</h3>
      <p><code>reduce</code> accumulates array values into a single result (number, object, etc.) using a reducer callback.</p>
      <div class="code-block">
        <div class="code-block-header">
          <span>Example · Sum numbers</span>
          <span class="pill-small">js</span>
          <span class="code-ref">Source: <code>examples/api/array-reduce-example.js</code></span>
        </div>
        <pre><code data-src="examples/api/array-reduce-example.js"></code></pre>
      </div>
    </div>
  `
};

// Add remaining API pages (continuing pattern)...
PAGES['api-array-forEach'] = {
  title: 'API · Array.prototype.forEach',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Executes a callback for each element. Does not return a new array.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>[1, 2, 3].forEach(console.log);</code></pre></div></div>`
};

PAGES['api-array-find'] = {
  title: 'API · Array.prototype.find',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Returns the first element that satisfies the callback, or undefined.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const item = [1, 3, 5].find(n => n > 2); // 3</code></pre></div></div>`
};

PAGES['api-array-some'] = {
  title: 'API · Array.prototype.some',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Returns true if at least one element satisfies the callback.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const hasNeg = [1, -1, 2].some(n => n < 0); // true</code></pre></div></div>`
};

PAGES['api-array-every'] = {
  title: 'API · Array.prototype.every',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Returns true if all elements satisfy the callback.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const allPos = [1, 2, 3].every(n => n > 0); // true</code></pre></div></div>`
};

PAGES['api-array-includes'] = {
  title: 'API · Array.prototype.includes',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Returns true if array contains the value.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>[1, 2, 3].includes(2); // true</code></pre></div></div>`
};

PAGES['api-array-slice'] = {
  title: 'API · Array.prototype.slice',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Returns a shallow copy of a portion of an array.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>[1, 2, 3, 4].slice(1, 3); // [2, 3]</code></pre></div></div>`
};

PAGES['api-array-splice'] = {
  title: 'API · Array.prototype.splice',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Mutates array by removing/replacing elements. Returns removed elements.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const arr = [1, 2, 3];
arr.splice(1, 1); // remove one at index 1</code></pre></div></div>`
};

PAGES['api-array-sort'] = {
  title: 'API · Array.prototype.sort',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Sorts array in place. Provide compare function for numbers.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]</code></pre></div></div>`
};

PAGES['api-array-concat'] = {
  title: 'API · Array.prototype.concat',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Returns new array combining original with other arrays/values.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>[1, 2].concat([3, 4]); // [1, 2, 3, 4]</code></pre></div></div>`
};

PAGES['api-array-flat'] = {
  title: 'API · Array.prototype.flat',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Flattens nested arrays by specified depth (default 1).</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>[1, [2, 3]].flat(); // [1, 2, 3]</code></pre></div></div>`
};

PAGES['api-array-flatMap'] = {
  title: 'API · Array.prototype.flatMap',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Maps each element then flattens result by depth 1.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>[1, 2].flatMap(n => [n, n * 2]); // [1, 2, 2, 4]</code></pre></div></div>`
};

// String Methods
PAGES['api-string-includes'] = {
  title: 'API · String.prototype.includes',
  type: 'API Reference',
  level: 'String',
  body: `<div class="content-body"><h3>Description</h3><p>Returns true if string contains substring.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>'hello'.includes('el'); // true</code></pre></div></div>`
};

PAGES['api-string-replace'] = {
  title: 'API · String.replace / replaceAll',
  type: 'API Reference',
  level: 'String',
  body: `<div class="content-body"><h3>Description</h3><p>Replaces first/all occurrences of pattern.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>'abcabc'.replace('a', 'x'); // 'xbcabc'
'abcabc'.replaceAll('a', 'x'); // 'xbcxbc'</code></pre></div></div>`
};

PAGES['api-string-split'] = {
  title: 'API · String.prototype.split',
  type: 'API Reference',
  level: 'String',
  body: `<div class="content-body"><h3>Description</h3><p>Splits string into array by separator.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>'a,b,c'.split(','); // ['a','b','c']</code></pre></div></div>`
};

PAGES['api-string-trim'] = {
  title: 'API · String.prototype.trim',
  type: 'API Reference',
  level: 'String',
  body: `<div class="content-body"><h3>Description</h3><p>Removes whitespace from both ends.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>'  hi  '.trim(); // 'hi'</code></pre></div></div>`
};

PAGES['api-string-case'] = {
  title: 'API · String.toUpperCase / toLowerCase',
  type: 'API Reference',
  level: 'String',
  body: `<div class="content-body"><h3>Description</h3><p>Converts string case.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>'js'.toUpperCase(); // 'JS'</code></pre></div></div>`
};

// Number & Math
PAGES['api-number-parse'] = {
  title: 'API · Number.parseInt / parseFloat',
  type: 'API Reference',
  level: 'Number',
  body: `<div class="content-body"><h3>Description</h3><p>Parses string to integer/float.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>Number.parseInt('10px', 10); // 10
parseFloat('3.14'); // 3.14</code></pre></div></div>`
};

PAGES['api-math-random'] = {
  title: 'API · Math.random',
  type: 'API Reference',
  level: 'Math',
  body: `<div class="content-body"><h3>Description</h3><p>Returns random number between 0 and 1.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>Math.floor(Math.random() * 10); // 0-9</code></pre></div></div>`
};

PAGES['api-math-maxmin'] = {
  title: 'API · Math.max / Math.min',
  type: 'API Reference',
  level: 'Math',
  body: `<div class="content-body"><h3>Description</h3><p>Returns max/min of arguments.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>Math.max(1, 5, 3); // 5</code></pre></div></div>`
};

// Date
PAGES['api-date-now'] = {
  title: 'API · Date.now / new Date',
  type: 'API Reference',
  level: 'Date',
  body: `<div class="content-body"><h3>Description</h3><p>Gets current timestamp or creates Date object.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const now = Date.now();
const date = new Date();</code></pre></div></div>`
};

// JSON
PAGES['api-json'] = {
  title: 'API · JSON.parse / JSON.stringify',
  type: 'API Reference',
  level: 'JSON',
  body: `<div class="content-body"><h3>Description</h3><p>Converts between JSON strings and JavaScript objects.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const obj = JSON.parse('{"a":1}');
const str = JSON.stringify(obj);</code></pre></div></div>`
};

// Timers
PAGES['api-settimeout'] = {
  title: 'API · setTimeout / setInterval',
  type: 'API Reference',
  level: 'Timers',
  body: `<div class="content-body"><h3>Description</h3><p>Schedules function execution after delay or repeatedly.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const id = setTimeout(() => console.log('later'), 1000);
clearTimeout(id);</code></pre></div></div>`
};

// Fetch
PAGES['api-fetch'] = {
  title: 'API · fetch',
  type: 'API Reference',
  level: 'Network',
  body: `
    <div class="content-body">
      <h3>Description</h3>
      <p><code>fetch</code> performs HTTP requests and returns a Promise that resolves to a Response object. Modern replacement for XMLHttpRequest.</p>
      <div class="code-block">
        <div class="code-block-header">
          <span>Example · GET JSON</span>
          <span class="pill-small">js</span>
          <span class="code-ref">Source: <code>examples/api/fetch-example.js</code></span>
        </div>
        <pre><code data-src="examples/api/fetch-example.js"></code></pre>
      </div>
    </div>
  `
};

// Promises
PAGES['api-promise-resolve'] = {
  title: 'API · Promise.resolve / reject',
  type: 'API Reference',
  level: 'Promise',
  body: `<div class="content-body"><h3>Description</h3><p>Creates resolved/rejected promises.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>Promise.resolve(42).then(console.log);</code></pre></div></div>`
};

PAGES['api-promise-all'] = {
  title: 'API · Promise.all',
  type: 'API Reference',
  level: 'Promise',
  body: `<div class="content-body"><h3>Description</h3><p>Waits for all promises to resolve, or rejects on first failure.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const [u, p] = await Promise.all([fetch('/u'), fetch('/p')]);</code></pre></div></div>`
};

PAGES['api-promise-race'] = {
  title: 'API · Promise.race',
  type: 'API Reference',
  level: 'Promise',
  body: `<div class="content-body"><h3>Description</h3><p>Returns promise that resolves/rejects with first settled promise.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>await Promise.race([p1, p2]);</code></pre></div></div>`
};

PAGES['api-promise-allSettled'] = {
  title: 'API · Promise.allSettled',
  type: 'API Reference',
  level: 'Promise',
  body: `<div class="content-body"><h3>Description</h3><p>Waits for all promises to settle (resolve or reject).</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const results = await Promise.allSettled([p1, p2]);</code></pre></div></div>`
};

PAGES['api-promise-any'] = {
  title: 'API · Promise.any',
  type: 'API Reference',
  level: 'Promise',
  body: `<div class="content-body"><h3>Description</h3><p>Returns promise that resolves with first fulfilled promise.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const first = await Promise.any([p1, p2]);</code></pre></div></div>`
};

// Object Methods
PAGES['api-object-keys'] = {
  title: 'API · Object.keys / values / entries',
  type: 'API Reference',
  level: 'Object',
  body: `<div class="content-body"><h3>Description</h3><p>Converts object properties to arrays of keys, values, or [key, value] pairs.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>Object.entries({ a: 1, b: 2 }); // [['a',1],['b',2]]</code></pre></div></div>`
};

PAGES['api-object-assign'] = {
  title: 'API · Object.assign',
  type: 'API Reference',
  level: 'Object',
  body: `<div class="content-body"><h3>Description</h3><p>Copies properties from sources to target object.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const merged = Object.assign({}, obj1, obj2);</code></pre></div></div>`
};

PAGES['api-object-freeze'] = {
  title: 'API · Object.freeze',
  type: 'API Reference',
  level: 'Object',
  body: `<div class="content-body"><h3>Description</h3><p>Prevents modification of object (shallow).</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const frozen = Object.freeze({ a: 1 });</code></pre></div></div>`
};

PAGES['api-object-create'] = {
  title: 'API · Object.create',
  type: 'API Reference',
  level: 'Object',
  body: `<div class="content-body"><h3>Description</h3><p>Creates object with specified prototype.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const child = Object.create(parent);</code></pre></div></div>`
};

// Collections
PAGES['api-map-setget'] = {
  title: 'API · Map.set / get / has',
  type: 'API Reference',
  level: 'Collection',
  body: `<div class="content-body"><h3>Description</h3><p>Map key-value pairs with any key type.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const map = new Map();
map.set('key', 'value');
map.get('key');</code></pre></div></div>`
};

PAGES['api-set-addhas'] = {
  title: 'API · Set.add / has / delete',
  type: 'API Reference',
  level: 'Collection',
  body: `<div class="content-body"><h3>Description</h3><p>Set stores unique values.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const set = new Set();
set.add(1);
set.has(1);</code></pre></div></div>`
};

// Function
PAGES['api-function-bind'] = {
  title: 'API · Function.prototype.bind',
  type: 'API Reference',
  level: 'Function',
  body: `<div class="content-body"><h3>Description</h3><p>Creates new function with bound this and arguments.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const bound = fn.bind(obj);</code></pre></div></div>`
};

PAGES['api-array-from'] = {
  title: 'API · Array.from',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Creates array from iterable or array-like object.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>Array.from('hello'); // ['h','e','l','l','o']</code></pre></div></div>`
};

PAGES['api-array-of'] = {
  title: 'API · Array.of',
  type: 'API Reference',
  level: 'Array',
  body: `<div class="content-body"><h3>Description</h3><p>Creates array from arguments.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>Array.of(1, 2, 3);</code></pre></div></div>`
};

// Console
PAGES['api-console-log'] = {
  title: 'API · console.log & friends',
  type: 'API Reference',
  level: 'Debug',
  body: `<div class="content-body"><h3>Description</h3><p>Logging and debugging helpers: log, info, warn, error, table, etc.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>console.table([{ id: 1 }, { id: 2 }]);</code></pre></div></div>`
};

// Intl
PAGES['api-intl-number'] = {
  title: 'API · Intl.NumberFormat',
  type: 'API Reference',
  level: 'Intl',
  body: `<div class="content-body"><h3>Description</h3><p>Formats numbers according to locale.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>new Intl.NumberFormat('en-US').format(1000); // "1,000"</code></pre></div></div>`
};

PAGES['api-intl-date'] = {
  title: 'API · Intl.DateTimeFormat',
  type: 'API Reference',
  level: 'Intl',
  body: `<div class="content-body"><h3>Description</h3><p>Formats dates according to locale.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>new Intl.DateTimeFormat('en-GB').format(new Date());</code></pre></div></div>`
};

// DOM
PAGES['api-dom-query'] = {
  title: 'API · document.querySelector',
  type: 'API Reference',
  level: 'DOM',
  body: `<div class="content-body"><h3>Description</h3><p>Selects first element matching CSS selector.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const el = document.querySelector('#app');</code></pre></div></div>`
};

PAGES['api-dom-event'] = {
  title: 'API · addEventListener',
  type: 'API Reference',
  level: 'DOM',
  body: `<div class="content-body"><h3>Description</h3><p>Attaches event handler to element.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>button.addEventListener('click', handleClick);</code></pre></div></div>`
};

PAGES['api-dom-classlist'] = {
  title: 'API · classList.add / remove',
  type: 'API Reference',
  level: 'DOM',
  body: `<div class="content-body"><h3>Description</h3><p>Manipulates element's class list.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>el.classList.toggle('hidden');</code></pre></div></div>`
};

// Storage
PAGES['api-storage'] = {
  title: 'API · localStorage.getItem / setItem',
  type: 'API Reference',
  level: 'Storage',
  body: `<div class="content-body"><h3>Description</h3><p>Stores key-value pairs in browser storage.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>localStorage.setItem('theme', 'dark');
localStorage.getItem('theme');</code></pre></div></div>`
};

// History
PAGES['api-history'] = {
  title: 'API · history.pushState',
  type: 'API Reference',
  level: 'History',
  body: `<div class="content-body"><h3>Description</h3><p>Pushes state to browser history without reload.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>history.pushState({ page: 1 }, '', '?page=1');</code></pre></div></div>`
};

// URL
PAGES['api-url'] = {
  title: 'API · URL & URLSearchParams',
  type: 'API Reference',
  level: 'URL',
  body: `<div class="content-body"><h3>Description</h3><p>Parses and manipulates URLs and query strings.</p><div class="code-block"><div class="code-block-header"><span>Example</span><span class="pill-small">js</span></div><pre><code>const url = new URL('https://example.com?x=1');
const params = new URLSearchParams(url.search);
params.get('x'); // "1"</code></pre></div></div>`
};

// ============================================
// APPLICATION INITIALIZATION
// ============================================

(function init() {
  const contentEl = document.getElementById('content');
  const navButtons = Array.from(document.querySelectorAll('.nav-item-btn'));
  const groupLabels = Array.from(document.querySelectorAll('.nav-group-label'));
  const searchInput = document.getElementById('searchInput');
  const apiNavItems = document.getElementById('apiNavItems');

  // Populate API navigation items
  if (apiNavItems) {
    API_NAV_ITEMS.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <button class="nav-item-btn" data-page="${item.id}">
          <span class="nav-item-index">${item.index}</span>
          <span class="nav-item-title">${item.title}</span>
          <span class="nav-item-tag">${item.tag}</span>
        </button>
      `;
      apiNavItems.appendChild(li);
    });
  }

  // Re-query nav buttons after adding API items
  const allNavButtons = Array.from(document.querySelectorAll('.nav-item-btn'));

  function renderPage(pageId) {
    const page = PAGES[pageId];
    if (!page) {
      contentEl.innerHTML = `
        <div class="empty-state">
          <h3>Page not found</h3>
          <p>The page id <code>${pageId}</code> has no content defined yet.</p>
        </div>`;
      return;
    }

    // Update active state
    allNavButtons.forEach(btn => {
      if (btn.dataset.page === pageId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Render content
    contentEl.innerHTML = `
      <div class="content-header">
        <div>
          <div class="content-title">${page.title}</div>
          <p class="content-subtitle">
            ${page.type === 'API Reference'
              ? 'Focused, example-driven documentation for an individual JavaScript API.'
              : 'Guided explanation with examples and best practices for a core JavaScript topic.'}
          </p>
        </div>
        <div class="content-meta">
          <span class="badge badge--primary">${page.type}</span>
          <span class="badge">${page.level || 'All levels'}</span>
          <span class="badge badge--source">
            <code>app.js</code>
            <span>·</span>
            <code>PAGES['${pageId}']</code>
          </span>
        </div>
      </div>
      ${page.body}
      <div class="content-footer">
        <span>Use <strong>&lt;pre&gt;&lt;code&gt;</strong> for all examples to keep formatting consistent.</span>
        <a class="pill-secondary-link" href="#top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
          Back to top
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L8 4L13 9" stroke="#9CA3AF" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    `;

    // Load code from separate files
    loadCodeFromFiles();
  }

  // Function to load code from separate files
  async function loadCodeFromFiles() {
    const codeElements = contentEl.querySelectorAll('code[data-src]');
    
    for (const codeEl of codeElements) {
      const src = codeEl.getAttribute('data-src');
      if (!src) continue;

      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`Failed to load ${src}: ${response.status}`);
        }
        const code = await response.text();
        codeEl.textContent = code;
      } catch (error) {
        console.error(`Error loading code from ${src}:`, error);
        codeEl.textContent = `// Error loading code from ${src}\n// ${error.message}`;
        codeEl.style.color = '#f97373';
      }
    }
  }

  // Navigation click handlers
  allNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pageId = btn.dataset.page;
      renderPage(pageId);
    });
  });

  // Collapsible group handlers
  groupLabels.forEach(label => {
    label.addEventListener('click', () => {
      const items = label.parentElement.querySelector('.nav-items');
      const icon = label.querySelector('.nav-group-label-icon');
      const isHidden = items.style.display === 'none';
      items.style.display = isHidden ? 'block' : 'none';
      if (isHidden) {
        label.classList.remove('collapsed');
        label.setAttribute('aria-expanded', 'true');
      } else {
        label.classList.add('collapsed');
        label.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      allNavButtons.forEach(btn => {
        const title = btn.querySelector('.nav-item-title')?.textContent.toLowerCase() || '';
        const tag = btn.querySelector('.nav-item-tag')?.textContent.toLowerCase() || '';
        const matches = !query || title.includes(query) || tag.includes(query);
        btn.style.display = matches ? 'flex' : 'none';
        // Hide parent li if button is hidden
        if (btn.parentElement) {
          btn.parentElement.style.display = matches ? 'block' : 'none';
        }
      });
    });
  }

  // Load default page
  renderPage('section-1-intro');
})();

