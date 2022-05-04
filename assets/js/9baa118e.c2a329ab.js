"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9743],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return a?o.createElement(m,n(n({ref:t},p),{},{components:a})):o.createElement(m,n({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var d=2;d<r;d++)n[d]=a[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6177:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var o=a(7462),i=a(3366),r=(a(7294),a(3905)),n=["components"],l={title:"API Guides"},s=void 0,d={unversionedId:"apis",id:"apis",title:"API Guides",description:"Moodle has a number of core APIs that provide tools for Moodle scripts.",source:"@site/docs/apis.md",sourceDirName:".",slug:"/apis",permalink:"/devdocs/docs/apis",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis.md",tags:[],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1651626342,formattedLastUpdatedAt:"04/05/2022",frontMatter:{title:"API Guides"},sidebar:"docs",previous:{title:"JavaScript",permalink:"/devdocs/docs/guides/javascript/"},next:{title:"Common files",permalink:"/devdocs/docs/apis/commonfiles/"}},p={},c=[{value:"Most-used General API",id:"most-used-general-api",level:2},{value:"Access API (access)",id:"access-api-access",level:3},{value:"Data manipulation API (dml)",id:"data-manipulation-api-dml",level:3},{value:"File API (files)",id:"file-api-files",level:3},{value:"Form API (form)",id:"form-api-form",level:3},{value:"Logging API (log)",id:"logging-api-log",level:3},{value:"Navigation API (navigation)",id:"navigation-api-navigation",level:3},{value:"Page API (page)",id:"page-api-page",level:3},{value:"Output API (output)",id:"output-api-output",level:3},{value:"String API (string)",id:"string-api-string",level:3},{value:"Upgrade API (upgrade)",id:"upgrade-api-upgrade",level:3},{value:"Moodlelib API (core)",id:"moodlelib-api-core",level:3},{value:"Other General API",id:"other-general-api",level:2},{value:"Admin settings API (admin)",id:"admin-settings-api-admin",level:3},{value:"Admin presets API (adminpresets)",id:"admin-presets-api-adminpresets",level:3},{value:"Analytics API (analytics)",id:"analytics-api-analytics",level:3},{value:"Availability API (availability)",id:"availability-api-availability",level:3},{value:"Backup API (backup)",id:"backup-api-backup",level:3},{value:"Cache API (cache)",id:"cache-api-cache",level:3},{value:"Calendar API (calendar)",id:"calendar-api-calendar",level:3},{value:"Check API (check)",id:"check-api-check",level:3},{value:"Comment API (comment)",id:"comment-api-comment",level:3},{value:"Competency API (competency)",id:"competency-api-competency",level:3},{value:"Data definition API (ddl)",id:"data-definition-api-ddl",level:3},{value:"Editor API",id:"editor-api",level:3},{value:"Enrolment API (enrol)",id:"enrolment-api-enrol",level:3},{value:"Events API (event)",id:"events-api-event",level:3},{value:"Experience API (xAPI)",id:"experience-api-xapi",level:3},{value:"External functions API (external)",id:"external-functions-api-external",level:3},{value:"Favourites API",id:"favourites-api",level:3},{value:"H5P API (h5p)",id:"h5p-api-h5p",level:3},{value:"Lock API (lock)",id:"lock-api-lock",level:3},{value:"Message API (message)",id:"message-api-message",level:3},{value:"Media API (media)",id:"media-api-media",level:3},{value:"My profile API",id:"my-profile-api",level:3},{value:"OAuth 2 API (oauth2)",id:"oauth-2-api-oauth2",level:3},{value:"Payment API (payment)",id:"payment-api-payment",level:3},{value:"Preference API (preference)",id:"preference-api-preference",level:3},{value:"Portfolio API (portfolio)",id:"portfolio-api-portfolio",level:3},{value:"Privacy API (privacy)",id:"privacy-api-privacy",level:3},{value:"Rating API (rating)",id:"rating-api-rating",level:3},{value:"Report builder API (reportbuilder)",id:"report-builder-api-reportbuilder",level:3},{value:"RSS API (rss)",id:"rss-api-rss",level:3},{value:"Search API (search)",id:"search-api-search",level:3},{value:"Tag API (tag)",id:"tag-api-tag",level:3},{value:"Task API (task)",id:"task-api-task",level:3},{value:"Time API (time)",id:"time-api-time",level:3},{value:"Testing API (test)",id:"testing-api-test",level:3},{value:"User-related APIs (user)",id:"user-related-apis-user",level:3},{value:"Web services API (webservice)",id:"web-services-api-webservice",level:3},{value:"Badges API (badges)",id:"badges-api-badges",level:3},{value:"Custom fields API",id:"custom-fields-api",level:3},{value:"Activity module APIs",id:"activity-module-apis",level:2},{value:"Activity completion API (completion)",id:"activity-completion-api-completion",level:3},{value:"Advanced grading API (grading)",id:"advanced-grading-api-grading",level:3},{value:"Conditional activities API (condition) - deprecated in 2.7",id:"conditional-activities-api-condition---deprecated-in-27",level:3},{value:"Groups API (group)",id:"groups-api-group",level:3},{value:"Gradebook API (grade)",id:"gradebook-api-grade",level:3},{value:"Plagiarism API (plagiarism)",id:"plagiarism-api-plagiarism",level:3},{value:"Question API (question)",id:"question-api-question",level:3},{value:"See also",id:"see-also",level:2}],u={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,n);return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Moodle has a number of core APIs that provide tools for Moodle scripts."),(0,r.kt)("p",null,"They are essential when writing ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Plugins"},"Moodle plugins"),"."),(0,r.kt)("h2",{id:"most-used-general-api"},"Most-used General API"),(0,r.kt)("p",null,"These APIs are critical and will be used by nearly every Moodle plugin."),(0,r.kt)("h3",{id:"access-api-access"},"Access API (access)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"./apis/subsystems/access"},"Access API")," gives you functions so you can determine what the current user is allowed to do, and it allows modules to extend Moodle with new capabilities."),(0,r.kt)("h3",{id:"data-manipulation-api-dml"},"Data manipulation API (dml)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Data%20manipulation%20API"},"Data manipulation API")," allows you to read/write to databases in a consistent and safe way."),(0,r.kt)("h3",{id:"file-api-files"},"File API (files)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/subsystems/files/"},"File API")," controls the storage of files in connection to various plugins."),(0,r.kt)("h3",{id:"form-api-form"},"Form API (form)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Form%20API"},"Form API")," defines and handles user data via web forms."),(0,r.kt)("h3",{id:"logging-api-log"},"Logging API (log)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Events%20API"},"Events API")," allows you to log events in Moodle, while ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Logging%202"},"Logging 2")," describes how logs are stored and retrieved."),(0,r.kt)("h3",{id:"navigation-api-navigation"},"Navigation API (navigation)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Navigation%20API"},"Navigation API")," allows you to manipulate the navigation tree to add and remove items as you wish."),(0,r.kt)("h3",{id:"page-api-page"},"Page API (page)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Page%20API"},"Page API")," is used to set up the current page, add JavaScript, and configure how things will be displayed to the user."),(0,r.kt)("h3",{id:"output-api-output"},"Output API (output)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Output%20API"},"Output API")," is used to render the HTML for all parts of the page."),(0,r.kt)("h3",{id:"string-api-string"},"String API (string)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/String%20API"},"String API")," is how you get language text strings to use in the user interface. It handles any language translations that might be available."),(0,r.kt)("h3",{id:"upgrade-api-upgrade"},"Upgrade API (upgrade)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Upgrade%20API"},"Upgrade API")," is how your module installs and upgrades itself, by keeping track of its own version."),(0,r.kt)("h3",{id:"moodlelib-api-core"},"Moodlelib API (core)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodlelib%20API"},"Moodlelib API")," is the central library file of miscellaneous general-purpose Moodle functions. Functions can over the handling of request parameters, configs, user preferences, time, login, mnet, plugins, strings and others. There are plenty of defined constants too."),(0,r.kt)("h2",{id:"other-general-api"},"Other General API"),(0,r.kt)("h3",{id:"admin-settings-api-admin"},"Admin settings API (admin)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Admin%20settings"},"Admin settings")," API deals with providing configuration options for each plugin and Moodle core."),(0,r.kt)("h3",{id:"admin-presets-api-adminpresets"},"Admin presets API (adminpresets)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/AdminPresetsAPI"},"Admin presets API")," allows plugins to make some decisions/implementations related to the Site admin presets."),(0,r.kt)("h3",{id:"analytics-api-analytics"},"Analytics API (analytics)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Analytics%20API"},"Analytics API")," allow you to create prediction models and generate insights."),(0,r.kt)("h3",{id:"availability-api-availability"},"Availability API (availability)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Availability%20API"},"Availability API")," controls access to activities and sections."),(0,r.kt)("h3",{id:"backup-api-backup"},"Backup API (backup)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Backup%20API"},"Backup API")," defines exactly how to convert course data into XML for backup purposes, and the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Restore%20API"},"Restore API")," describes how to convert it back the other way."),(0,r.kt)("h3",{id:"cache-api-cache"},"Cache API (cache)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/The%20Moodle%20Universal%20Cache%20(MUC)"},"The Moodle Universal Cache (MUC)")," is the structure for storing cache data within Moodle. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Cache_API"},"Cache API")," explains some of what is needed to use a cache in your code."),(0,r.kt)("h3",{id:"calendar-api-calendar"},"Calendar API (calendar)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Calendar%20API"},"Calendar API")," allows you to add and modify events in the calendar for user, groups, courses, or the whole site."),(0,r.kt)("h3",{id:"check-api-check"},"Check API (check)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Check%20API"},"Check API")," allows you to add security, performance or health checks to your site."),(0,r.kt)("h3",{id:"comment-api-comment"},"Comment API (comment)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Comment%20API"},"Comment API")," allows you to save and retrieve user comments, so that you can easily add commenting to any of your code."),(0,r.kt)("h3",{id:"competency-api-competency"},"Competency API (competency)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Competency%20API"},"Competency API")," allows you to list and add evidence of competencies to learning plans, learning plan templates, frameworks, courses and activities."),(0,r.kt)("h3",{id:"data-definition-api-ddl"},"Data definition API (ddl)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Data%20definition%20API"},"Data definition API")," is what you use to create, change and delete tables and fields in the database during upgrades."),(0,r.kt)("h3",{id:"editor-api"},"Editor API"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Editor%20API"},"Editor API")," is used to control HTML text editors."),(0,r.kt)("h3",{id:"enrolment-api-enrol"},"Enrolment API (enrol)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Enrolment%20API"},"Enrolment API")," deals with course participants."),(0,r.kt)("h3",{id:"events-api-event"},"Events API (event)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Events%20API"},"Events API"),' allows to define "events" with payload data to be fired whenever you like, and it also allows you to define handlers to react to these events when they happen. This is the recommended form of inter-plugin communication. This also forms the basis for logging in Moodle.'),(0,r.kt)("h3",{id:"experience-api-xapi"},"Experience API (xAPI)"),(0,r.kt)("p",null,"The Experience API (xAPI) is an e-learning standard that allows learning content and learning systems to speak to each other. The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Experience%20API%20(xAPI)"},"Experience API (xAPI)"),"\nallows any plugin to generate and handle xAPI standard statements."),(0,r.kt)("h3",{id:"external-functions-api-external"},"External functions API (external)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/External%20functions%20API"},"External functions API")," allows you to create fully parametrised methods that can be accessed by external programs (such as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Web%20services"},"Web services"),")."),(0,r.kt)("h3",{id:"favourites-api"},"Favourites API"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Favourites%20API"},"Favourites API")," allows you to mark items as favourites for a user and manage these favourites. This is often referred to as 'Starred'."),(0,r.kt)("h3",{id:"h5p-api-h5p"},"H5P API (h5p)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/H5P%20API"},"H5P API")," allows plugins to make some decisions/implementations related to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/H5P"},"H5P integration"),"."),(0,r.kt)("h3",{id:"lock-api-lock"},"Lock API (lock)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Lock%20API"},"Lock API")," lets you synchronise processing between multiple requests, even for separate nodes in a cluster."),(0,r.kt)("h3",{id:"message-api-message"},"Message API (message)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Message%20API"},"Message API")," lets you post messages to users. They decide how they want to receive them."),(0,r.kt)("h3",{id:"media-api-media"},"Media API (media)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Media_players#Using_media_players"},"Media")," API can be used to embed media items such as audio, video, and Flash."),(0,r.kt)("h3",{id:"my-profile-api"},"My profile API"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/My%20profile%20API"},"My profile API")," is used to add things to the profile page."),(0,r.kt)("h3",{id:"oauth-2-api-oauth2"},"OAuth 2 API (oauth2)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/OAuth%202%20API"},"OAuth 2 API")," is used to provide a common place to configure and manage external systems using OAuth 2."),(0,r.kt)("h3",{id:"payment-api-payment"},"Payment API (payment)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Payment%20API"},"Payment API")," deals with payments."),(0,r.kt)("h3",{id:"preference-api-preference"},"Preference API (preference)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Preference%20API"},"Preference API")," is a simple way to store and retrieve preferences for individual users."),(0,r.kt)("h3",{id:"portfolio-api-portfolio"},"Portfolio API (portfolio)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Portfolio%20API"},"Portfolio API")," allows you to add portfolio interfaces on your pages and allows users to package up data to send to their portfolios."),(0,r.kt)("h3",{id:"privacy-api-privacy"},"Privacy API (privacy)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Privacy%20API"},"Privacy API")," allows you to describe the personal data that you store, and provides the means for that data to be discovered, exported, and deleted on a per-user basis.\nThis allows compliance with regulation such as the General Data Protection Regulation (GDPR) in Europe."),(0,r.kt)("h3",{id:"rating-api-rating"},"Rating API (rating)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Rating%20API"},"Rating API")," lets you create AJAX rating interfaces so that users can rate items in your plugin. In an activity module, you may choose to aggregate ratings to form grades."),(0,r.kt)("h3",{id:"report-builder-api-reportbuilder"},"Report builder API (reportbuilder)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Report%20builder%20API"},"Report builder API")," allows you to create reports in your plugin, as well as providing custom reporting data which users can use to build their own reports."),(0,r.kt)("h3",{id:"rss-api-rss"},"RSS API (rss)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/RSS%20API"},"RSS API")," allows you to create secure RSS feeds of data in your module."),(0,r.kt)("h3",{id:"search-api-search"},"Search API (search)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Search%20API"},"Search API")," allows you to index contents in a search engine and query the search engine for results."),(0,r.kt)("h3",{id:"tag-api-tag"},"Tag API (tag)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Tag%20API"},"Tag API")," allows you to store tags (and a tag cloud) to items in your module."),(0,r.kt)("h3",{id:"task-api-task"},"Task API (task)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Task%20API"},"Task API")," lets you run jobs in the background. Either once off, or on a regular schedule."),(0,r.kt)("h3",{id:"time-api-time"},"Time API (time)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Time%20API"},"Time API")," takes care of translating and displaying times between users in the site."),(0,r.kt)("h3",{id:"testing-api-test"},"Testing API (test)"),(0,r.kt)("p",null,"The testing API contains the Unit test API (",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/PHPUnit"},"PHPUnit"),") and Acceptance test API (",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Acceptance%20testing"},"Acceptance testing"),"). Ideally all new code should have unit tests written FIRST."),(0,r.kt)("h3",{id:"user-related-apis-user"},"User-related APIs (user)"),(0,r.kt)("p",null,"This is a rather informal grouping of miscellaneous ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/User-related%20APIs"},"User-related APIs")," relating to sorting and searching lists of users."),(0,r.kt)("h3",{id:"web-services-api-webservice"},"Web services API (webservice)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Web%20services%20API"},"Web services API")," allows you to expose particular functions (usually external functions) as web services."),(0,r.kt)("h3",{id:"badges-api-badges"},"Badges API (badges)"),(0,r.kt)("p",null,"The ","[https://docs.moodle.org/dev/OpenBadges_User_Documentation Badges]"," user documentation (is a temp page until we compile a proper page with all the classes and APIs that allows you to manage particular badges and OpenBadges Backpack)."),(0,r.kt)("h3",{id:"custom-fields-api"},"Custom fields API"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Custom%20fields%20API"},"Custom fields API")," allows you to configure and add custom fields for different entities"),(0,r.kt)("h2",{id:"activity-module-apis"},"Activity module APIs"),(0,r.kt)("p",null,"Activity modules are the most important plugin in Moodle. There are several core APIs that service only Activity modules."),(0,r.kt)("h3",{id:"activity-completion-api-completion"},"Activity completion API (completion)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Activity%20completion%20API"},"Activity completion API")," is to indicate to the system how activities are completed."),(0,r.kt)("h3",{id:"advanced-grading-api-grading"},"Advanced grading API (grading)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Advanced%20grading%20API"},"Advanced grading API")," allows you to add more advanced grading interfaces (such as rubrics) that can produce simple grades for the gradebook."),(0,r.kt)("h3",{id:"conditional-activities-api-condition---deprecated-in-27"},"Conditional activities API (condition) - deprecated in 2.7"),(0,r.kt)("p",null,"The deprecated ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Conditional%20activities%20API"},"Conditional activities API")," used to provide conditional access to modules and sections in Moodle 2.6 and below. It has been replaced by the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Availability%20API"},"Availability API"),"."),(0,r.kt)("h3",{id:"groups-api-group"},"Groups API (group)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Groups%20API"},"Groups API")," allows you to check the current activity group mode and set the current group."),(0,r.kt)("h3",{id:"gradebook-api-grade"},"Gradebook API (grade)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Gradebook%20API"},"Gradebook API")," allows you to read and write from the gradebook. It also allows you to provide an interface for detailed grading information."),(0,r.kt)("h3",{id:"plagiarism-api-plagiarism"},"Plagiarism API (plagiarism)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Plagiarism%20API"},"Plagiarism API")," allows your activity module to send files and data to external services to have them checked for plagiarism."),(0,r.kt)("h3",{id:"question-api-question"},"Question API (question)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Question%20API"},"Question API")," (which can be divided into the Question bank API and the Question engine API), can be used by activities that want to use questions from the question bank."),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Plugins"},"Plugins")," - plugin types also have their own APIs"),(0,r.kt)("li",{parentName:"ul"},"",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Callbacks"},"Callbacks")," - list of all callbacks in Moodle"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/general/development/policies/codingstyle"},"Coding style")," - general information about writing PHP code for Moodle"),(0,r.kt)("li",{parentName:"ul"},"",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Session%20locks"},"Session locks"),"")))}h.isMDXComponent=!0}}]);