import{aL as l,o as i,c,b as o,a as d,w as m,u,k as g,a$ as f}from"./app-2PRw8n00.js";const p={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900"},v=o("img",{src:"/android-chrome-512x512.png",class:"w-20 h-20 fill-current text-gray-500"},null,-1),_={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg"},k={__name:"GuestLayout",setup(h){var t=null;window.addEventListener("beforeinstallprompt",s,n);function s(e){t=e,document.getElementById("installBtn").removeAttribute("disabled")}function n(e){console.log("error: "+e)}const a=()=>{console.log("click"),t&&t.prompt()};return l(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(e=>{console.log("Registration succesful, scope: "+e.scope)}).catch(e=>{console.log(e)})}),(e,r)=>(i(),c("div",p,[o("div",null,[d(u(g),{href:"/"},{default:m(()=>[v]),_:1})]),o("div",_,[f(e.$slots,"default",{onInstalar:r[0]||(r[0]=w=>a())})])]))}};export{k as _};
