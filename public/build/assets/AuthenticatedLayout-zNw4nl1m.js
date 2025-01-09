import{bM as B,o as i,c as h,l as S,aW as N,j as $,r as C,b as r,q as l,k as D,s as M,a,w as t,n as f,h as P,f as g,u as k,p as x,e as o,g as p,t as y}from"./app-BlJLqFdN.js";const z={},E={class:"logoApplication"};function q(n,s){return i(),h("div",E)}const j=B(z,[["render",q]]),V={class:"relative"},A={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white dark:bg-gray-700"}},setup(n){const s=n,e=_=>{v.value&&_.key==="Escape"&&(v.value=!1)};S(()=>document.addEventListener("keydown",e)),N(()=>document.removeEventListener("keydown",e));const u=$(()=>({48:"w-48"})[s.width.toString()]),b=$(()=>s.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":s.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),v=C(!1);return(_,m)=>(i(),h("div",V,[r("div",{onClick:m[0]||(m[0]=L=>v.value=!v.value)},[l(_.$slots,"trigger")]),D(r("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=L=>v.value=!1)},null,512),[[M,v.value]]),a(P,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:t(()=>[D(r("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[u.value,b.value]]),style:{display:"none"},onClick:m[2]||(m[2]=L=>v.value=!1)},[r("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",n.contentClasses])},[l(_.$slots,"content")],2)],2),[[M,v.value]])]),_:3})]))}},w={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(n){return(s,e)=>(i(),g(k(x),{href:n.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:t(()=>[l(s.$slots,"default")]),_:3},8,["href"]))}},c={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(n){const s=n,e=$(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out");return(u,b)=>(i(),g(k(x),{href:n.href,class:f(e.value)},{default:t(()=>[l(u.$slots,"default")]),_:3},8,["href","class"]))}},d={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(n){const s=n,e=$(()=>s.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(u,b)=>(i(),g(k(x),{href:n.href,class:f(e.value)},{default:t(()=>[l(u.$slots,"default")]),_:3},8,["href","class"]))}},W={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},R={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},T={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},U={class:"flex justify-between h-16"},O={class:"flex"},F={class:"shrink-0 flex items-center"},G={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},H={class:"hidden sm:flex sm:items-center sm:ms-6"},I={class:"ms-3 relative"},J={class:"inline-flex rounded-md"},K={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"},Q=r("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),X={class:"-me-2 flex items-center sm:hidden"},Y={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Z={class:"pt-2 pb-3 space-y-1"},ee={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},re={class:"px-4"},te={class:"font-medium text-base text-gray-800 dark:text-gray-200"},se={class:"font-medium text-sm text-gray-500"},ae={class:"mt-3 space-y-1"},oe={key:0,class:"bg-white dark:bg-gray-800 shadow"},ie={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},de={__name:"UserLayout",setup(n){const s=C(!1);return(e,u)=>(i(),h("div",null,[r("div",W,[r("nav",R,[r("div",T,[r("div",U,[r("div",O,[r("div",F,[a(k(x),{href:e.route("admin.dashboard")},{default:t(()=>[a(j,{class:"h-9 w-9"})]),_:1},8,["href"])]),r("div",G,[a(c,{href:e.route("home"),active:e.route().current("home")},{default:t(()=>[o(" Dashboard ")]),_:1},8,["href","active"]),e.$page.props.auth.user.role=="pastor-adm"?(i(),g(c,{key:0,href:e.route("admin.pastores.index"),active:e.route().current("admin.pastores.index")},{default:t(()=>[o(" Pastores ")]),_:1},8,["href","active"])):p("",!0),e.$page.props.auth.user.role=="pastor"?(i(),g(c,{key:1,href:e.route("pastor.discipuladores.index"),active:e.route().current("pastor.discipuladores.index")},{default:t(()=>[o(" Discipuladores ")]),_:1},8,["href","active"])):p("",!0),e.$page.props.auth.user.role=="discipulador"||e.$page.props.auth.user.role=="pastor"?(i(),g(c,{key:2,href:e.route("discipulador.lideres.index"),active:e.route().current("discipulador.lideres.index")},{default:t(()=>[o(" Líderes ")]),_:1},8,["href","active"])):p("",!0),e.$page.props.auth.user.role=="lider"||e.$page.props.auth.user.role=="discipulador"||e.$page.props.auth.user.role=="pastor"?(i(),g(c,{key:3,href:e.route("lider.celulas.index"),active:e.route().current("lider.celulas.index")},{default:t(()=>[o(" Células ")]),_:1},8,["href","active"])):p("",!0)])]),r("div",H,[r("div",I,[a(A,{align:"right",width:"48"},{trigger:t(()=>[r("span",J,[r("button",K,[o(y(e.$page.props.auth.user.name)+" ",1),Q])])]),content:t(()=>[a(w,{href:e.route("profile.edit")},{default:t(()=>[o(" Perfil ")]),_:1},8,["href"]),a(w,{href:e.route("logout"),method:"post",as:"button"},{default:t(()=>[o(" Sair ")]),_:1},8,["href"])]),_:1})])]),r("div",X,[r("button",{onClick:u[0]||(u[0]=b=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"},[(i(),h("svg",Y,[r("path",{class:f({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),r("path",{class:f({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),r("div",{class:f([{block:s.value,hidden:!s.value},"sm:hidden"])},[r("div",Z,[a(d,{href:e.route("admin.dashboard"),active:e.route().current("dashboard")},{default:t(()=>[o(" Admin Dashboard ")]),_:1},8,["href","active"]),a(d,{href:e.route("admin.admins.index"),active:e.route().current("admin.admins.index")},{default:t(()=>[o(" Admins ")]),_:1},8,["href","active"]),a(d,{href:e.route("admin.pastores.index"),active:e.route().current("admin.pastores.index")},{default:t(()=>[o(" Pastores ")]),_:1},8,["href","active"]),a(d,{href:e.route("pastor.discipuladores.index"),active:e.route().current("pastor.discipuladores.index")},{default:t(()=>[o(" Discipuladores ")]),_:1},8,["href","active"]),a(d,{href:e.route("discipulador.lideres.index"),active:e.route().current("discipulador.lideres.index")},{default:t(()=>[o(" Líderes ")]),_:1},8,["href","active"]),a(d,{href:e.route("lider.celulas.index"),active:e.route().current("lider.celulas.index")},{default:t(()=>[o(" Células ")]),_:1},8,["href","active"])]),r("div",ee,[r("div",re,[r("div",te,y(e.$page.props.auth.user.name),1),r("div",se,y(e.$page.props.auth.user.email),1)]),r("div",ae,[a(d,{href:e.route("profile.edit")},{default:t(()=>[o(" Perfil ")]),_:1},8,["href"]),a(d,{href:e.route("logout"),method:"post",as:"button"},{default:t(()=>[o(" Sair ")]),_:1},8,["href"])])])],2)]),e.$slots.header?(i(),h("header",oe,[r("div",ie,[l(e.$slots,"header")])])):p("",!0),r("main",null,[l(e.$slots,"default")])])]))}},ne={key:0},le={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},ue={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},ce={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},he={class:"flex justify-between h-16"},fe={class:"flex"},pe={class:"shrink-0 flex items-center"},ge={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},ve={class:"hidden sm:flex sm:items-center sm:ms-6"},me={class:"ms-3 relative"},ye={class:"inline-flex rounded-md"},be={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"},ke=r("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),xe={class:"-me-2 flex items-center sm:hidden"},_e={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},$e={class:"pt-2 pb-3 space-y-1"},we={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},Ce={class:"px-4"},Le={class:"font-medium text-base text-gray-800 dark:text-gray-200"},De={class:"font-medium text-sm text-gray-500"},Me={class:"mt-3 space-y-1"},Se={key:0,class:"bg-white dark:bg-gray-800 shadow"},je={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Ae={__name:"AdminLayout",setup(n){const s=C(!1);return(e,u)=>e.$page.props.auth.user.role=="admin"?(i(),h("div",ne,[r("div",le,[r("nav",ue,[r("div",ce,[r("div",he,[r("div",fe,[r("div",pe,[a(k(x),{href:e.route("admin.dashboard")},{default:t(()=>[a(j,{class:"h-9 w-9"})]),_:1},8,["href"])]),r("div",ge,[a(c,{href:e.route("admin.dashboard"),active:e.route().current("admin.dashboard")},{default:t(()=>[o(" Admin Dashboard ")]),_:1},8,["href","active"]),a(c,{href:e.route("admin.admins.index"),active:e.route().current("admin.admins.index")},{default:t(()=>[o(" Admins ")]),_:1},8,["href","active"]),a(c,{href:e.route("admin.pastores.index"),active:e.route().current("admin.pastores.index")},{default:t(()=>[o(" Pastores ")]),_:1},8,["href","active"]),a(c,{href:e.route("pastor.discipuladores.index"),active:e.route().current("pastor.discipuladores.index")},{default:t(()=>[o(" Discipuladores ")]),_:1},8,["href","active"]),a(c,{href:e.route("discipulador.lideres.index"),active:e.route().current("discipulador.lideres.index")},{default:t(()=>[o(" Líderes ")]),_:1},8,["href","active"]),a(c,{href:e.route("lider.celulas.index"),active:e.route().current("lider.celulas.index")},{default:t(()=>[o(" Células ")]),_:1},8,["href","active"])])]),r("div",ve,[r("div",me,[a(A,{align:"right",width:"48"},{trigger:t(()=>[r("span",ye,[r("button",be,[o(y(e.$page.props.auth.user.name)+" ",1),ke])])]),content:t(()=>[a(w,{href:e.route("profile.edit")},{default:t(()=>[o(" Perfil ")]),_:1},8,["href"]),a(w,{href:e.route("logout"),method:"post",as:"button"},{default:t(()=>[o(" Sair ")]),_:1},8,["href"])]),_:1})])]),r("div",xe,[r("button",{onClick:u[0]||(u[0]=b=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"},[(i(),h("svg",_e,[r("path",{class:f({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),r("path",{class:f({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),r("div",{class:f([{block:s.value,hidden:!s.value},"sm:hidden"])},[r("div",$e,[a(d,{href:e.route("admin.dashboard"),active:e.route().current("dashboard")},{default:t(()=>[o(" Admin Dashboard ")]),_:1},8,["href","active"]),a(d,{href:e.route("admin.admins.index"),active:e.route().current("admin.admins.index")},{default:t(()=>[o(" Admins ")]),_:1},8,["href","active"]),a(d,{href:e.route("admin.pastores.index"),active:e.route().current("admin.pastores.index")},{default:t(()=>[o(" Pastores ")]),_:1},8,["href","active"]),a(d,{href:e.route("pastor.discipuladores.index"),active:e.route().current("pastor.discipuladores.index")},{default:t(()=>[o(" Discipuladores ")]),_:1},8,["href","active"]),a(d,{href:e.route("discipulador.lideres.index"),active:e.route().current("discipulador.lideres.index")},{default:t(()=>[o(" Líderes ")]),_:1},8,["href","active"]),a(d,{href:e.route("lider.celulas.index"),active:e.route().current("lider.celulas.index")},{default:t(()=>[o(" Células ")]),_:1},8,["href","active"])]),r("div",we,[r("div",Ce,[r("div",Le,y(e.$page.props.auth.user.name),1),r("div",De,y(e.$page.props.auth.user.email),1)]),r("div",Me,[a(d,{href:e.route("profile.edit")},{default:t(()=>[o(" Perfil ")]),_:1},8,["href"]),a(d,{href:e.route("logout"),method:"post",as:"button"},{default:t(()=>[o(" Sair ")]),_:1},8,["href"])])])],2)]),e.$slots.header?(i(),h("header",Se,[r("div",je,[l(e.$slots,"header")])])):p("",!0),r("main",null,[l(e.$slots,"default")])])])):p("",!0)}},Be={key:0,class:"bg-white dark:bg-gray-800 shadow"},Ne={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Pe={key:0,class:"bg-white dark:bg-gray-800 shadow"},ze={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},qe={__name:"AuthenticatedLayout",setup(n){return S(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(s=>{console.log("Registration succesful, scope: "+s.scope)}).catch(s=>{console.log(s)})}),(s,e)=>s.$page.props.auth.user.role=="admin"?(i(),g(Ae,{key:0},{default:t(()=>[s.$slots.header?(i(),h("header",Be,[r("div",Ne,[l(s.$slots,"header")])])):p("",!0),r("main",null,[l(s.$slots,"default")])]),_:3})):(i(),g(de,{key:1},{default:t(()=>[s.$slots.header?(i(),h("header",Pe,[r("div",ze,[l(s.$slots,"header")])])):p("",!0),r("main",null,[l(s.$slots,"default")])]),_:3}))}};export{qe as _};
