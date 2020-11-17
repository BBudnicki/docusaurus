(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{62:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var o=a(2),r=a(6),n=(a(0),a(92)),i=a(93),c={id:"overview",title:"Overview",description:"Overview of the PPSR Core standard"},s={unversionedId:"overview",id:"overview",isDocsHomePage:!0,title:"Overview",description:"Overview of the PPSR Core standard",source:"@site/docs\\overview.md",permalink:"/docs/",editUrl:"https://github.com/citizen-science-association/ppsr-core/edit/master/docs/overview.md",lastUpdatedBy:"BBudnicki",lastUpdatedAt:1604871741,sidebar:"coreSidebar",next:{title:"Common Data Model",permalink:"/docs/common"}},l=[{value:"Rationale",id:"rationale",children:[]},{value:"How to Use",id:"how-to-use",children:[]},{value:"Other Standards",id:"other-standards",children:[]}],b={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"PPSR Core is a set of global, transdisciplinary data and metadata standards for ",Object(n.b)("strong",{parentName:"p"},"P"),"ublic ",Object(n.b)("strong",{parentName:"p"},"P"),"articipation in ",Object(n.b)("strong",{parentName:"p"},"S"),"cientific ",Object(n.b)("strong",{parentName:"p"},"R"),"esearch ",Object(n.b)("strong",{parentName:"p"},"(Citizen Science)"),". This standard includes: "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Project Metadata Model or (",Object(n.b)("strong",{parentName:"li"},"PMM"),")"),Object(n.b)("li",{parentName:"ul"},"Dataset Metadata Model, (",Object(n.b)("strong",{parentName:"li"},"DMM"),")"),Object(n.b)("li",{parentName:"ul"},"Observation Data Model (",Object(n.b)("strong",{parentName:"li"},"ODM"),")")),Object(n.b)("p",null,"These standards are united, supported, and underlined by a common framework, the Common Data Model (",Object(n.b)("strong",{parentName:"p"},"CDM"),"), which illustrates how information is structured within the citizen science domain (figure 1)."),Object(n.b)("img",{alt:"PPSR Core overview",src:Object(i.a)("img/ppsr-overview-2020-0.png")}),";",Object(n.b)("h2",{id:"rationale"},"Rationale"),Object(n.b)("p",null,"Sharing information across databases maximizes everyone\u2019s efforts, getting more \u201cbang for the buck\u201d out of information about citizen science projects everywhere. It leads to current, up-to-date, synchronized project lists and promotes a broader understanding of the global practice of citizen science."),Object(n.b)("h2",{id:"how-to-use"},"How to Use"),Object(n.b)("p",null,"PPSR-Core  may be used as individual component schemas, as partial combinations of schemas or in it\u2019s entirety as a set of schemas coupled together by the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/common"}),"Common Data Model")," schema. Your choice of configuration will be determined by the use case(s) applicable to your situation. "),Object(n.b)("p",null,"For example, if you already have a projects catalog, or are planning to develop one, the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/project"}),"Project Metadata Model")," will be applicable for you. This may be sufficient if it is simply a stand-alone catalog to aid in the discovery and sharing of projects, but if you also want to provide information about datasets associated with projects you will also want to use the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/dataset"}),"Dataset Metadata Model")," schema."),Object(n.b)("p",null,"If you are developing a single project web and/or mobile app to collect data, you\u2019ll need to use the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/project"}),"PMM"),", ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/dataset"}),"DMM")," and domain-specific ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/observation"}),"ODM")," profile combination, coupled together in accordance with the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/common"}),"CDM")," schema."),Object(n.b)("p",null,"If you currently operate or are planning to develop a platform for collecting data for multiple projects, then the full PPSR-Core schema will be applicable to you."),Object(n.b)("p",null,"The standard is currently only available in human-readable format on this website and it is recommended that you develop or retrofit your schema to reflect the architecture of the schema as published in this site. The PPSR-Core team is currently working on machine readable formats for download as JSON, JSON-LD, XML and RDF-S and these will be published on this website as they become available."),Object(n.b)("h2",{id:"other-standards"},"Other Standards"),Object(n.b)("p",null,"The PPSR-Core is not setting out to create a new data standard for the sake of creating a new standard. Instead it aims to unify a suite of existing data and metadata standards and ontologies into a standardized framework for application in the citizen science domain. In this respect it either uses the terms already applied in existing standards or provides attribute-level mappings between terms used in the PPSR-Core and equivalent terms used in other applicable standards (sometimes several). Where the PPSR context requires it or where there is no equivalent term available in other applicable standards, this standard will specify new attribute terms in the ppsr namespace."),Object(n.b)("div",{class:"row margin-top--lg"},Object(n.b)("div",{class:"col col--6 margin-bottom--lg"},Object(n.b)("div",{className:"card card--full-height shadow--tl"},Object(n.b)("div",{className:"card__body"},Object(n.b)("h3",{className:"margin--none"},"Dublin Core Metadata Element Set"),Object(n.b)("div",{className:"margin-bottom--md text--bold text--primary"},"dct / dcterms / dcmitype"),Object(n.b)("p",null,'A set of fifteen "core" elements for describing resources. It was originally developed for a digital "library card catalog" for the Web (Wikipedia). It is now commonly used as the basis of metadata for many catalogs.')),Object(n.b)("div",{className:"card__footer"},Object(n.b)("a",{class:"button button--outline button--info",target:"_blank",href:"https://dublincore.org/specifications/dublin-core/dcmi-terms/"},"Metadata Website")))),Object(n.b)("div",{class:"col col--6 margin-bottom--lg"},Object(n.b)("div",{className:"card card--full-height shadow--tl"},Object(n.b)("div",{className:"card__body"},Object(n.b)("h3",{className:"margin--none"},"Darwin Core Terms"),Object(n.b)("div",{className:"margin-bottom--md text--bold text--primary"},"dwc / dwcterms"),Object(n.b)("p",null,"Darwin Core is an extension of Dublin Core for biodiversity informatics. It is meant to provide a stable standard reference for sharing information on biological diversity.")),Object(n.b)("div",{className:"card__footer"},Object(n.b)("a",{class:"button button--outline button--info",target:"_blank",href:"http://rs.tdwg.org/dwc/terms.htm"},"TDWG Website")))),Object(n.b)("div",{class:"col col--6 margin-bottom--lg"},Object(n.b)("div",{className:"card card--full-height shadow--tl"},Object(n.b)("div",{className:"card__body"},Object(n.b)("h3",{className:"margin--none"},"Core Ontology of Scientific Investigation"),Object(n.b)("div",{className:"margin-bottom--md text--bold text--primary"},"cosi"),Object(n.b)("p",null,"An ontology for the representation of scientific investigations. It includes classes of attributes for describing research activities and associated publications.")),Object(n.b)("div",{className:"card__footer"},Object(n.b)("a",{class:"button button--outline button--info",target:"_blank",href:"http://oneo.net/cosi"},"Website")))),Object(n.b)("div",{class:"col col--6 margin-bottom--lg"},Object(n.b)("div",{className:"card card--full-height shadow--tl"},Object(n.b)("div",{className:"card__body"},Object(n.b)("h3",{className:"margin--none"},"Data Catalog Vocabulary"),Object(n.b)("div",{className:"margin-bottom--md text--bold text--primary"},"dcat"),Object(n.b)("p",null,"An RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. By using DCAT to describe datasets in catalogs, publishers increase discoverability and enable applications to consume metadata from multiple catalogs.")),Object(n.b)("div",{className:"card__footer"},Object(n.b)("a",{class:"button button--outline button--info",target:"_blank",href:"https://www.w3.org/TR/vocab-dcat/"},"W3.org Specification")))),Object(n.b)("div",{class:"col col--6 margin-bottom--lg"},Object(n.b)("div",{className:"card card--full-height shadow--tl"},Object(n.b)("div",{className:"card__body"},Object(n.b)("h3",{className:"margin--none"},"PROVenance Interchange Ontology "),Object(n.b)("div",{className:"margin-bottom--md text--bold text--primary"},"prov"),Object(n.b)("p",null,"A set of Dublin Core extensions of the W3C PROVenance Interchange Ontology (PROV-O) ")),Object(n.b)("div",{className:"card__footer"},Object(n.b)("a",{class:"button button--outline button--info",target:"_blank",href:"https://www.w3.org/ns/prov"},"W3.org Specification")))),Object(n.b)("div",{class:"col col--6 margin-bottom--lg"},Object(n.b)("div",{className:"card card--full-height shadow--tl"},Object(n.b)("div",{className:"card__body"},Object(n.b)("h3",{className:"margin--none"},"Friend of a Friend Ontology"),Object(n.b)("div",{className:"margin-bottom--md text--bold text--primary"},"foaf"),Object(n.b)("p",null,"A machine-readable ontology describing persons, their activities and their relations to other people and objects. Anyone can use FOAF to describe themselves. FOAF allows groups of people to describe social networks without the need for a centralised database.")),Object(n.b)("div",{className:"card__footer"},Object(n.b)("a",{class:"button button--outline button--info",target:"_blank",href:"http://xmlns.com/foaf/0.1/"},"Official Specification")))),Object(n.b)("div",{class:"col col--6 margin-bottom--lg"},Object(n.b)("div",{className:"card card--full-height shadow--tl"},Object(n.b)("div",{className:"card__body"},Object(n.b)("h3",{className:"margin--none"},"ISO 19115 Geographic information \u2014 Metadata"),Object(n.b)("div",{className:"margin-bottom--md text--bold text--primary"},"ISO 19115"),Object(n.b)("p",null,"An internationally-adopted schema for describing geographic information and services. It provides information about the identification, the extent, the quality, the spatial and temporal schema, spatial reference, and distribution of digital geographic data.")),Object(n.b)("div",{className:"card__footer"},Object(n.b)("a",{class:"button button--outline button--info",target:"_blank",href:"https://www.iso.org/obp/ui/#iso:std:iso:19115:ed-1:v1:en"},"V1 Official ISO Standard")))),Object(n.b)("div",{class:"col col--6 margin-bottom--lg"},Object(n.b)("div",{className:"card card--full-height shadow--tl"},Object(n.b)("div",{className:"card__body"},Object(n.b)("h3",{className:"margin--none"}," OGC Oberservations and Measurements"),Object(n.b)("div",{className:"margin-bottom--md text--bold text--primary"},"om"),Object(n.b)("p",null,"The O&M standard provides a generic structure and database naming principles for any kind of observation or measurement and is generally applicable across all ODM domain profiles in which observations and/or measurements are applicable in the ODM schema.")),Object(n.b)("div",{className:"card__footer"},Object(n.b)("a",{class:"button button--outline button--info",target:"_blank",href:"https://www.ogc.org/standards/om/"},"Website")))),Object(n.b)("div",{class:"col col--6 margin-bottom--lg"},Object(n.b)("div",{className:"card card--full-height shadow--tl"},Object(n.b)("div",{className:"card__body"},Object(n.b)("h3",{className:"margin--none"}," OGC Earth Observations GeoJSON"),Object(n.b)("div",{className:"margin-bottom--md text--bold text--primary"},"eo-geojson"),Object(n.b)("p",null,"The EO GeoJSON standard defines the JSON encoding format for a range of geometry features derived from the OGC Simple Features specification. It is applicable for all of the geometry objects in the PPSR-Core standard across the PMM, DMM and ODM schemas.")),Object(n.b)("div",{className:"card__footer"},Object(n.b)("a",{class:"button button--outline button--info",target:"_blank",href:"https://www.ogc.org/standards/eo-geojson"},"Website"))))))}d.isMDXComponent=!0},91:function(e,t,a){"use strict";var o=a(0),r=a(21);t.a=function(){const e=Object(o.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(a),u=o,p=d["".concat(i,".").concat(u)]||d[u]||m[u]||n;return a?r.a.createElement(p,c(c({ref:t},l),{},{components:a})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<n;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var o=a(91),r=a(94);function n(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.a)();return{withBaseUrl:(a,o)=>function(e,t,a,{forcePrependBaseUrl:o=!1,absolute:n=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;const i=!a.startsWith(t)?t+a.replace(/^\//,""):a;return n?e+i:i}(t,e,a,o)}}function i(e,t={}){const{withBaseUrl:a}=n();return a(e,t)}},94:function(e,t,a){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r}))}}]);