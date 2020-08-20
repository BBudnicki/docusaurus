(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),i=(a(0),a(94)),o={id:"technical",title:"Technical",description:"How the PPSR website was built"},c={unversionedId:"technical",id:"technical",isDocsHomePage:!1,title:"Technical",description:"How the PPSR website was built",source:"@site/docs\\technical.md",permalink:"/docusaurus/docs/technical",editUrl:"https://github.com/BBudnicki/docusaurus/edit/master/docs/technical.md",lastUpdatedBy:"BBudnicki",lastUpdatedAt:1597893049,sidebar:"coreSidebar",previous:{title:"Contribute",permalink:"/docusaurus/docs/contribute"},next:{title:"History",permalink:"/docusaurus/docs/history"}},s=[{value:"Main file types",id:"main-file-types",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Running Locally",id:"running-locally",children:[{value:"Prerequisite Software",id:"prerequisite-software",children:[]},{value:"Step by Step",id:"step-by-step",children:[]}]},{value:"Publishing Process",id:"publishing-process",children:[]}],l={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This website is hosted for free by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/github/working-with-github-pages"}),"GitHub Pages")," which is a static site hosting solution. The scaffolding for this site is based on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/"}),"Docusaurus Version 2.0")," which takes Markdown and JavaScript files and generates static HTML."),Object(i.b)("p",null,"Please direct questions about the technical underpinnings of this site to Brandon Budnicki."),Object(i.b)("h3",{id:"main-file-types"},"Main file types"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Markdown - ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://v2.docusaurus.io/docs/markdown-features/"}),"Docusaurus version"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},".md")," which is plain markdown"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},".mdx")," which is used for markdown and adds additional processing to allow importing JavaScrip"))),Object(i.b)("li",{parentName:"ul"},"JavaScript ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},".js")," used for ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/getting-started.html"}),"ReactJS")," components or special pages that require additional styling"))),Object(i.b)("li",{parentName:"ul"},"JSON",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},".json")," used to store raw data")))),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("p",null,"The site follows the same standard ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/creating-pages"}),"Docusaurus")," structure."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Commonly changed files"',title:'"Commonly',changed:!0,'files"':!0}),"/root\n    /blog           - news & articles specific to PPSR core\n    /docs           - .md and .mdx pages that contain the standard. These get versioned!\n    /src\n        /pages      - special pages like the homepage\n        /components - ReactJS components\n    /static/json    - JSON Schema files\n\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"running-locally"},"Running Locally"),Object(i.b)("p",null,"This software can be run locally on your machine for testing purposes or creating larger changes. This will work on Windows, OSX, or Linux. The process is described in Docusaurus ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/installation"}),"Installation"),' except that you will be using an existing GitHub repository instead of "scaffolding" a new one.'),Object(i.b)("h3",{id:"prerequisite-software"},"Prerequisite Software"),Object(i.b)("h4",{id:"required"},"Required"),Object(i.b)("p",null,"These requirements are the same for all ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/installation"}),"Docusaurus")," sites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"GIT-SCM")," to clone, merge, and submit pull requests",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'run "git --version" in the terminal to check'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/en/download/"}),"NPM"),"  Version > 10.15.1 to build the software and run locally",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'run "node -v" in the terminal to see what version you have'))),Object(i.b)("li",{parentName:"ul"},"A plaintext editor for exiting files.")),Object(i.b)("h4",{id:"recommended"},"Recommended"),Object(i.b)("p",null,"We recommend the following additional tools to aid in content editing & ease of use. Install these if you are not experienced with software development, they will make your life easier."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code")," available for free on Windows, OSx, or Linux"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://desktop.github.com/"}),"GitHub Desktop")," a friendly user interface for GIT-SCM"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"}),"GitLens")," a GitHub management extension for VS Code."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"}),"Code Spell Checker")," extension for VS Code")),Object(i.b)("h3",{id:"step-by-step"},"Step by Step"),Object(i.b)("p",null,"After installing the Prerequisite Software:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Clone the repository from github.com/BBudnicki/docusaurus"),Object(i.b)("li",{parentName:"ol"},'Open a terminal / command line in the root folder of your repository and run "npm run start"'),Object(i.b)("li",{parentName:"ol"},"Your browser should automatically open to http://localhost:3000/docusaurus/")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Any changes you save will immediately cause the page to refresh and be visible"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"npm run start\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"publishing-process"},"Publishing Process"),Object(i.b)("p",null,"After all changes have been merged into the master branch, the publishing process can being. This follows the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/deployment"}),"standard deployment")," process for Docusaurus, specifically for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/deployment#deploying-to-github-pages"}),"GitHub pages process"),"."),Object(i.b)("p",null,"Use this command to deploy to the live site. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="linux / OSx"',title:'"linux',"/":!0,'OSx"':!0}),"GIT_USER=<GITHUB_USERNAME> npm run deploy\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh",metastring:'title="windows"',title:'"windows"'}),'cmd /C "set GIT_USER=<GITHUB_USERNAME>&& npm run deploy"\n')),Object(i.b)("p",null,"Changes should appear within 30 seconds. Be sure to do a hard refresh of the page, locally cache files from the public site might show the old site."))}u.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);