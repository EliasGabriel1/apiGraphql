<div class="markdown prose w-full break-words dark:prose-invert dark">
    <h1>GraphQL Server</h1>
    <p>This is a GraphQL server implemented using Node.js and Express.js. It connects to a SQLite3
        database to fetch data.</p>
    <h2>Installation</h2>
    <ol>
        <li>Clone this repository:</li>
    </ol>
    <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/&lt;username&gt;/graphql-server.git
</code></div></div></pre>
    <ol start="2">
        <li>Install dependencies:</li>
    </ol>
    <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">cd</span> graphql-server
npm install
</code></div></div></pre>
    <ol start="3">
        <li>Run the server:</li>
    </ol>
    <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm start
</code></div></div></pre>
    <h2>Usage</h2>
    <p>You can access the GraphQL playground by navigating to <code>http://localhost:3000/graphql</code>
        in your browser. This allows you to run queries and mutations against the server.</p>
    <h2>Dependencies</h2>
    <p>The server depends on the following packages:</p>
    <ul>
        <li>express</li>
        <li>express-graphql</li>
        <li>graphql</li>
        <li>sqlite3</li>
    </ul>
    <h2>Code structure</h2>
    <p>The server code is contained in <code>index.js</code>. It first creates a connection to the
        SQLite3 database and defines the GraphQL schema. The schema defines two types, <code>
        Clientes</code> and <code>Lojas</code>, each with its own set of fields. The <code>Query</code>
        type is also defined, which allows the client to fetch data from the server.</p>
    <p>The root resolver for the <code>clientes</code> query fetches data from the <code>clientes</code>
        table in the database and maps it to the expected GraphQL format. The root resolver for the <code>
        lojas</code> query does the same for the <code>lojas</code> table.</p>
    <p>The server is created using Express.js and the <code>graphqlHTTP</code> middleware is added
        to create the GraphQL endpoint. The schema and root resolver are passed to the middleware as
        options. The server listens on port 3000.</p>
    <h2>Contributing</h2>
    <p>If you find a bug or would like to suggest a new feature, please open an issue on GitHub.
        Pull requests are welcome!</p>
</div>