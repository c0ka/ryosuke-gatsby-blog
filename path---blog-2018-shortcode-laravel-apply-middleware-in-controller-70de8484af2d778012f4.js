webpackJsonp([60383714059621],{513:function(s,a){s.exports={data:{blog:{html:'<p>Ever needed to apply middleware to specific controller methods? Just use the <code class="language-text">middleware()</code> method in the controller\'s constructor and feed it a middleware and array of method names.</p>\n<blockquote>\n<p>Protip: You can stack middleware as much as you want (just don\'t lock yourself out!). If you need to apply different middleware, or complex \'only\' and \'except\' situations, call the middleware method as much as you need.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">//... the class</span>\n<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n<span class="token punctuation">{</span>\n    <span class="token comment">// Apply middleware to only certain routes</span>\n    <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'auth\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'only\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'create\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'store\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'edit\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'delete\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// Or apply middleware to all routes except these</span>\n    <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'auth\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'except\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'index\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'show\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">✅ <a href="https://twitter.com/hashtag/Laravel?src=hash&amp;ref_src=twsrc%5Etfw">#Laravel</a> <a href="https://twitter.com/hashtag/ProTip?src=hash&amp;ref_src=twsrc%5Etfw">#ProTip</a> You can apply your middleware to specific routes in the controller&#39;s construct method 👌 <a href="https://t.co/BU7taP0ksv">https://t.co/BU7taP0ksv</a> <a href="https://t.co/6UQc2gYMU4">pic.twitter.com/6UQc2gYMU4</a></p>&mdash; Ryosuke (@whoisryosuke) <a href="https://twitter.com/whoisryosuke/status/1001976417826017280?ref_src=twsrc%5Etfw">May 30, 2018</a></blockquote>\n<p>Before writing this post, this wasn\'t in the Laravel docs. I could have swore I\'ve seen it since, but just in case, I\'ve archived it here.</p>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1001976417826017280">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/902f2ebd3b1e0c232b85b0c6ac255105">See the code gist</a></li>\n<li><a href="https://laravel.com/docs/5.6/eloquent-resources#concept-overview">Laravel docs - Resource Collections</a></li>\n<li><a href="https://laracasts.com/discuss/channels/general-discussion/apply-middleware-for-certain-methods?page=0">Laracasts middleware thread</a></li>\n</ul>',frontmatter:{title:"shortcode - Apply middleware to Laravel controller methods",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M0 134v133h10c11 0 14-1 14-6l1-1c1 0 3-5 3-9 0-2 0-3 2-3s2-1 2-4v-4h4l4-1h8l5-3 6-4c2 0 2-1 2-4v-4h6c4 0 5 0 5-2s1-2 4-2c4 0 7 2 7 3 0 3 4 5 8 5h5v-12h8v-8h16v-8h4c4 0 4 0 4-2 0-3 0-3 4-3l4-1c0-2 1-2 4-2l4-1c0-2 2-2 8-2 8 0 8 0 8-2 0-3 0-3 4-3 3 0 4 0 4 2l1 2 3-2 3-2 1-3c0-3 2-4 4-2l2 1c2 0 4-3 3-4l3-6 2 3 2 4v-9h8v4l1 4 1-4c0-3 0-4 2-4l1-4c0-3 0-4 2-4l1-1 4-1 8-2c3-2 4-2 4-1 0 2 1 2 4 2l4-1c0-2 1-2 4-2l4-1h2c2 2 2 2 3 0 2-1 2-2-1-3l-8-2-4-1h4l9-1 7-2c4 0 4 0 4-3s0-3 4-3 4 0 4-2c0-3 0-3 4-3l4-1 4-1h4v-4c0-5 0-5 3-4l4-1c2-2 3-4 1-3s-7-1-5-2c1-1 1-1-1-1-2 1-5-4-4-9l1-5c1-3 12-1 12 3h2l1-2 4-4-1 2v1l2-2h4c2-3 1-3-3-3l-4 1-1 1-1-1c0-3 10-3 12 0 1 1 1 1 2-1 1-1 1-1 1 1-1 2 0 3 2 3l2 3 2-1 4-3 4-2v3l2 4c0 2 0 2-1 1l-1-1 1 3v3l1 3 1-5c0-8 1-9 5-9h1c-3 0-2-3 1-2 2 0 2 0 1-1s-1-1 2-1 3 0 2 1l-2 1-1 1 2 1v1l1 2 1 1c0-3 2-2 2 1s0 3 1 1l1-4c1 0 1-1-1-1-1-1-1-1 1-1 3 0 3-2 0-3h-2l2-1 3 1h1l3 2h2l-1-2 3-3c1 1 2 2 2 5v5l1-4c0-4 0-4 1-2v4l1 1 1-2 2-3c1-1 1-1-1-1-2 1-2 0-2-1 0-2 0-2 1-1l4 1 4 1h-2l-1 1 3 1h1c0 2 4 1 5-1l1-2 1-1c0-2 1-2 4-2 4 0 4 0 4-2l1-3 1-4-1-4-1-1c0-2 1-2 4-2s4 0 4 2l4 1h4v93c0 81 1 75 1-40V0H0v134m263-36l-1 3v10c-1 1-1 1-2-2l-2-2h-3c-3-2-3-4-1-4v1l1 1h1v1l1-2v-1c3 1 3-1 1-2-3-1-10 2-10 5 0 2 0 2 1 1l1-1c1 1 2 3 4 3l3 3c-1 3-3 4-6 1l-3-2 1 2v3a1139 1139 0 0 1 9 0c2-1 2-1 2 1s2 0 2-3c1-2 1-2 1 0 0 5 2 3 3-3 0-6 1-8 4-8 2 1 2 1 2 5v8c2 5 4 5 3-1 0-3 0-3 1 0l1 1v-3l-1-5c1-5-2-7-7-7-3 1-4 1-3-1v-5c-1-1-2 0-3 3' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"30 May, 2018",tags:["laravel","php","api","shortcode","code snippet","tips"],section:"blog"},fields:{slug:"/blog/2018/shortcode-laravel-apply-middleware-in-controller/"}},relatedPosts:{edges:[{node:{html:'<p>Recently, I\'ve recently been trying my best to upload as much code to open source repositories like <a href="http://github.com/whoisryosuke"><strong>Github</strong></a> and <a href="http://codepen.io/whoisryosuke"><strong>Codepen</strong></a>. It makes bootstrapping new projects much simpler when I can <code class="language-text">git clone</code> a boilerplate from my Github, or <em>copypasta</em> a CSS/JS snippet from CodePen. But what happens when I need to include a library or module into several projects? Cloning and copy paste just don\'t cut it at that point.</p>\n<p>Cut to <a href="http://npmjs.com"><strong>NPM</strong></a> and <a href="http://getcomposer.com"><strong>Composer</strong></a> ( or really <a href="http://packagist.com">Packagist</a>. NPM is a package manager for Javascript using Node, and Composer does the same for PHP. </p>\n<p>Today we\'ll be looking into submitting a PHP "package" to Composer through the Packagist, so we can use <code class="language-text">composer require</code> to install our package into any project!</p>\n<h2>The simple steps</h2>\n<p>It\'s as easy as 4 steps (<em>minus the part where you code a reusable package in PHP</em>) -- I was surprised too. Make sure before starting you\'ve created a git repository in your project and committed your code. It\'s also required to have an account on <a href="http://github.com">Github</a> and <a href="http://packagist">Packagist</a>.</p>\n<ol>\n<li>Create a <code class="language-text">composer.json</code> in your project:</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"your-brand-name/your-project"</span><span class="token punctuation">,</span>\n    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"library"</span><span class="token punctuation">,</span>\n    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Your package description goes here"</span><span class="token punctuation">,</span>\n    <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"relevant"</span><span class="token punctuation">,</span><span class="token string">"tags"</span><span class="token punctuation">,</span><span class="token string">"go"</span><span class="token punctuation">,</span><span class="token string">"here"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"homepage"</span><span class="token operator">:</span> <span class="token string">"https://yourcompany.com"</span><span class="token punctuation">,</span>\n    <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span>\n    <span class="token property">"authors"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Jordi Boggiano"</span><span class="token punctuation">,</span>\n            <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"j.boggiano@seld.be"</span><span class="token punctuation">,</span>\n            <span class="token property">"homepage"</span><span class="token operator">:</span> <span class="token string">"http://seld.be"</span><span class="token punctuation">,</span>\n            <span class="token property">"role"</span><span class="token operator">:</span> <span class="token string">"Developer"</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ol start="2">\n<li>\n<p><a href="https://github.com/new">Create a new repository on your Github</a> and push your local git (init if you haven\'t) to the remote Github repo.</p>\n</li>\n<li>\n<p><a href="https://packagist.org/packages/submit">Submit your package to the Packagist</a></p>\n</li>\n<li>\n<p>Done! Your package should be online and Packagist should provide a sample Composer require with your project name (e.g. <code class="language-text">composer require username/package-name</code>)</p>\n</li>\n</ol>\n<blockquote>\n<p>You should be able to view your package live at: <code class="language-text">https://packagist.org/packages/your-username/package-name</code></p>\n</blockquote>\n<h2>So easy, there\'s no excuse</h2>\n<p>One of the biggest principles of programming I try to apply is <strong>DRY</strong>, <em>don\'t repeat yourself</em>. When your code is probably already hosted on Github, it\'s only a two step process to get your code in a place where it\'s version controlled. </p>\n<p>Rather than relying on <code class="language-text">git clone</code> or submodules, it\'s much more efficient for your codebase to use a composer dependency. </p>\n<h2>Take my code for a test run</h2>\n<p>The package I released on the Packagist is for developers working with the Metrc API to send and receive cannabis regulatory data. It\'s basically a wrapper for their API that uses a Guzzle client to interface with it (using your authoriation credentials).</p>\n<p>If you\'re a Metrc developer, or just interested in using the code, you can add it to your projects using:</p>\n<p><code class="language-text">composer require kushy/metrc-php-sdk</code></p>\n<p>Hope that helps,\nRyo</p>',frontmatter:{title:"How to create a PHP package for Composer",cover_image:{publicURL:"/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787.png",childImageSharp:{sizes:{src:"/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-ab24c.png",srcSet:"/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-310d9.png 310w,\n/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-63c25.png 620w,\n/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-ab24c.png 1240w,\n/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-80007.png 1860w,\n/static/how-to-create-a-php-package-for-composer-1920px-74bfa9e0a3d1e8798b931686e2313787-2d6df.png 1920w"}}},date:"20 July, 2018",tags:["composer","php","open source","github","tips","tutorial"]},fields:{slug:"/blog/2018/how-to-create-a-php-package-for-composer/"}}},{node:{html:'<p>Just copy this into a <code class="language-text">docker-compose.yml</code> in your project root, and then run <code class="language-text">docker-compose up -d</code> 🚀 </p>\n<div class="gatsby-highlight">\n      <pre class="language-yml"><code class="language-yml">version: &quot;2&quot;\nservices:\n  my-wpdb:\n    image: mariadb\n    ports:\n      - &quot;8081:3306&quot;\n    environment:\n      MYSQL_ROOT_PASSWORD: root\n  my-wp:\n    image: wordpress\n    volumes:\n      - ./:/var/www/html\n    ports:\n      - &quot;8080:80&quot;\n    links:\n      - my-wpdb:mysql\n    environment:\n      WORDPRESS_DB_PASSWORD: root</code></pre>\n      </div>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1006325273900380160">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/77da2fbe1c5ce782a0908cb1e8d17fe7">See the code gist</a></li>\n</ul>',frontmatter:{title:"shortcode - 🐋 Docker for Wordpress made easy",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"11 June, 2018",tags:["laravel","php","api","shortcode","code snippet","tips"]},fields:{slug:"/blog/2018/shortcode-docker-for-wordpress-made-easy/"}}}]}},pathContext:{tag:"php",slug:"/blog/2018/shortcode-laravel-apply-middleware-in-controller/"}}}});
//# sourceMappingURL=path---blog-2018-shortcode-laravel-apply-middleware-in-controller-70de8484af2d778012f4.js.map