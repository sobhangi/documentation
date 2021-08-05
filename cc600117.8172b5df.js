(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(274)),r={title:"Android Chatbot SDK",sidebar_label:"Android Chatbot SDK"},c={unversionedId:"platform_concepts/channelConfiguration/android",id:"platform_concepts/channelConfiguration/android",isDocsHomePage:!1,title:"Android Chatbot SDK",description:"Installation",source:"@site/docs/platform_concepts/channelConfiguration/android.md",slug:"/platform_concepts/channelConfiguration/android",permalink:"/docs/platform_concepts/channelConfiguration/android",version:"current",sidebar_label:"Android Chatbot SDK",sidebar:"platform_concepts",previous:{title:"Web Client",permalink:"/docs/platform_concepts/channelConfiguration/web"},next:{title:"iOS Chatbot SDK",permalink:"/docs/platform_concepts/channelConfiguration/ios"}},l=[{value:"Installation",id:"installation",children:[{value:"Gradle",id:"gradle",children:[]},{value:"strings.xml (Only for version v1.4.0 &amp; above)",id:"stringsxml-only-for-version-v140--above",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Basic",id:"basic",children:[]},{value:"YMConfig",id:"ymconfig",children:[]},{value:"Starting the bot",id:"starting-the-bot",children:[]},{value:"Close bot",id:"close-bot",children:[]},{value:"Bot close event",id:"bot-close-event",children:[]},{value:"Events from bot",id:"events-from-bot",children:[]}]},{value:"Custom Base URL",id:"custom-base-url",children:[]},{value:"Push Notifications",id:"push-notifications",children:[{value:"Authentication Token",id:"authentication-token",children:[]},{value:"Device Token",id:"device-token",children:[]}]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Important",id:"important",children:[]},{value:"Demo App",id:"demo-app",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"gradle"},"Gradle"),Object(i.b)("p",null,"To integrate YMChat into your Android project using gradle, specify the following configurations in App level ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle")," file"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gradle"}),'repositories {\n    jcenter()\n    // Add these two lines \n    maven { url "https://jitpack.io" }\n    maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }\n}\n\n...\n...\n...\n\ndependencies {\n    ...\n    ...\n       implementation \'com.github.yellowmessenger:YMChatbot-Android:v1.4.0\n}\n')),Object(i.b)("h3",{id:"stringsxml-only-for-version-v140--above"},"strings.xml (Only for version v1.4.0 & above)"),Object(i.b)("p",null,'Add following key in your strings.xml file, this will override default file provider used by SDK.\nOverriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"\nExample - applicationId : "com.abc.xyz" then  application_id_for_provider = com.abc.xyz.fileprovider'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'    <string name="application_id_for_provider">your.application.id.fileprovider</string>\n')),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("p",null,"Import the YMChat library in your Activity."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"import com.yellowmessenger.ymchat.YMChat;\nimport com.yellowmessenger.ymchat.YMConfig;\n")),Object(i.b)("p",null,"After the library is imported the basic bot can be presented with few lines as below "),Object(i.b)("p",null,"Example ",Object(i.b)("inlineCode",{parentName:"p"},"onCreate")," method of the Activity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\n@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    // Dummy bot id. (Purrs a lot)\n    String botID = "x1587041004122";\n    //Get YMChat instance\n    YMChat ymChat = YMChat.getInstance();\n    ymChat.config = new YMConfig(botId);\n    setContentView(R.layout.activity_main);\n    FloatingActionButton fab = findViewById(R.id.fab);\n    fab.setOnClickListener(view -> {\n        //Starting the bot activity\n        try {\n            ymChat.startChatbot(this);\n          } catch (Exception e) {\n           //Catch and handle the exception\n            e.printStackTrace();\n          }\n    });\n}\n\n')),Object(i.b)("h3",{id:"ymconfig"},"YMConfig"),Object(i.b)("p",null,"YMConfig can be used to set the bot id and other bot related settings. It is recommended to set all appropriate config ",Object(i.b)("strong",{parentName:"p"},"before")," starting the bot"),Object(i.b)("h4",{id:"initialize"},"Initialize"),Object(i.b)("p",null,"YMConfig requires botID to initialize. All other settings are optional and they can be changed after initialisation of YMConfig"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'ymChat.config = new YMConfig("<BOT-ID>");\n')),Object(i.b)("h4",{id:"speech-recognition"},"Speech recognition"),Object(i.b)("p",null,"Speech to text can be enabled by setting the enableSpeech flag present in config. Default value is ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"ymChat.config.enableSpeech = true\n")),Object(i.b)("h4",{id:"payload"},"Payload"),Object(i.b)("p",null,"Additional payload can be added in the form of key value pair, which is then passed to the bot. The value of payload can be either Primitive type or json convertible value"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'HashMap<String, Object> payloadData = new HashMap<>();\n//Setting Payload Data\npayloadData.put("some-key", "some-value");\nymChat.config.payload = payloadData;\n')),Object(i.b)("h4",{id:"history"},"History"),Object(i.b)("p",null,"Chat history can be enabled by setting the ",Object(i.b)("inlineCode",{parentName:"p"},"enableHistory")," flag and by passing ",Object(i.b)("inlineCode",{parentName:"p"},"UserId")," in payloadData. Default value for is ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'ymChat.config.enableHistory = true\npayloadData.put("UserId","user_id_of_customer");\n')),Object(i.b)("h3",{id:"starting-the-bot"},"Starting the bot"),Object(i.b)("p",null,"Chat bot can be presented by calling ",Object(i.b)("inlineCode",{parentName:"p"},"startChatbot()")," and passing your Activity context as an argument"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"ymChat.startChatbot(this);\n")),Object(i.b)("h3",{id:"close-bot"},"Close bot"),Object(i.b)("p",null,"Bot can be programatically closed using ",Object(i.b)("inlineCode",{parentName:"p"},"closeBot()")," function"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"ymChat.closeBot();\n")),Object(i.b)("h3",{id:"bot-close-event"},"Bot close event"),Object(i.b)("p",null,"Bot close event is separately sent and it can be handled by listening to onBotClose event as mentioned below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'ymChat.onBotClose(() -> {\n  Log.d("Example App", "Bot Was closed");\n });\n')),Object(i.b)("h3",{id:"events-from-bot"},"Events from bot"),Object(i.b)("p",null,"Events from bot can be handled using event Listeners.  Simply define the ",Object(i.b)("inlineCode",{parentName:"p"},"onSuccess")," method of ",Object(i.b)("inlineCode",{parentName:"p"},"onEventFromBot")," listener."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'ymChat.onEventFromBot(botEvent -> {\n    switch (botEvent.getCode()) {\n    case "event-name": break;\n    }\n});\n')),Object(i.b)("h2",{id:"custom-base-url"},"Custom Base URL"),Object(i.b)("p",null,"For on-prem deployments a different URL can be set to ",Object(i.b)("inlineCode",{parentName:"p"},"customBaseUrl")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'ymChat.config.customBaseUrl = "https://yourcustomurl.com";\n')),Object(i.b)("h2",{id:"push-notifications"},"Push Notifications"),Object(i.b)("p",null,"YMChat supports firebase notifications. Push notifications needs ",Object(i.b)("inlineCode",{parentName:"p"},"authentication token")," and ",Object(i.b)("inlineCode",{parentName:"p"},"device token")),Object(i.b)("h3",{id:"authentication-token"},"Authentication Token"),Object(i.b)("p",null,"A unique identifier like email or UUID can be assigneed to ",Object(i.b)("inlineCode",{parentName:"p"},"ymAuthenticationToken")," to uniquely identify a user."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'ymChat.config.ymAuthenticationToken = "your-token"\n')),Object(i.b)("h3",{id:"device-token"},"Device Token"),Object(i.b)("p",null,"Assign your ",Object(i.b)("inlineCode",{parentName:"p"},"FCM token")," to device token"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'ymChat.config.deviceToken = "your-firebase-device-token"\n')),Object(i.b)("h4",{id:"note"},"Note:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Firebase service account key is required to send notifications. You can share the service account key with us. More info ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"}),"here"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It is recommended to set authentication token and device token before calling startChatbot()"))),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"Following dependencies are used in chat bot SDK"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"    implementation 'androidx.appcompat:appcompat:1.3.0'\n    implementation 'androidx.legacy:legacy-support-v4:1.0.0'\n    implementation 'com.google.android.material:material:1.3.0'\n    implementation 'com.squareup.okhttp3:okhttp:4.7.2'\n    implementation 'com.google.code.gson:gson:2.8.6'\n    implementation 'androidx.multidex:multidex:2.0.1'\n\n    testImplementation 'junit:junit:4.13.2'\n    androidTestImplementation 'androidx.test.ext:junit:1.1.2'\n    androidTestImplementation 'androidx.test.espresso:espresso-core:3.3.0'\n")),Object(i.b)("h2",{id:"permissions"},"Permissions"),Object(i.b)("p",null,"We are declaring and asking for following permission in our manifest file"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n    <uses-permission android:name="android.permission.RECORD_AUDIO" />\n\n')),Object(i.b)("p",null,"All permissions will be asked at run time except INTERNET.\nFor attachment (picking  file/images from phone storage)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n')),Object(i.b)("p",null,"For voice input"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'    <uses-permission android:name="android.permission.RECORD_AUDIO" />\n')),Object(i.b)("h2",{id:"important"},"Important"),Object(i.b)("p",null,"If facing problem in release build, add the following configuration in the app's proguard-rules.pro file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"-keep public class com.yellowmessenger.ymchat.** {\n   *;\n}\n")),Object(i.b)("h2",{id:"demo-app"},"Demo App"),Object(i.b)("p",null,"A demo has been created to better understand the integration of SDK in Android app\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yellowmessenger/YmChatBot-Android-DemoApp"}),"https://github.com/yellowmessenger/YmChatBot-Android-DemoApp")))}b.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);