import{_ as n}from"./AuthenticatedLayout-zNw4nl1m.js";import{l as m,m as c,o as u,c as p,a as e,u as i,w as o,F as _,Z as f,b as t,p as y,e as g}from"./app-BlJLqFdN.js";import{i as h,_ as x}from"./Table-BNt5FrXx.js";import{_ as b}from"./SecondaryButton-DBnsDqdp.js";import"./DangerButton-DzsKFAxk.js";import"./theme-sugar-POYPeZjD.js";import"./Loading-DqV32Eu_.js";import"./PrimaryButton-DC70GI4w.js";import"./TextInput-CREshyq_.js";const w=t("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},"Lista de Células",-1),k={class:"py-6"},v={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},B={class:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"},q={class:"p-6 text-gray-900 dark:text-gray-100"},C=["id"],L=t("div",{class:"tooltip-arrow","data-popper-arrow":""},null,-1),M={__name:"List",props:{celulas:{type:Object},query:{type:Object}},setup(s){m(()=>{h()});const l=[{key:"id",name:"ID"},{key:"name",name:"Nome"},{key:"lider",name:"Líder",not_sortable:!0}];return(r,N)=>{const d=c("font-awesome-icon");return u(),p(_,null,[e(i(f),{title:"Lista de Células"}),e(n,null,{header:o(()=>[w]),default:o(()=>[t("div",k,[t("div",v,[t("div",B,[t("div",q,[e(x,{items:s.celulas,columns:l,query:s.query,routeBase:"lider.celulas"},{default:o(a=>[e(i(y),{"data-tooltip-target":"tooltip-default-"+a.item.id,href:r.route("lider.relatorios.index",a.item.id),class:"mr-3"},{default:o(()=>[e(b,null,{default:o(()=>[e(d,{icon:["fas","file-invoice"]})]),_:1})]),_:2},1032,["data-tooltip-target","href"]),t("div",{id:"tooltip-default-"+a.item.id,role:"tooltip",class:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"},[g(" Relatórios "),L],8,C)]),_:1},8,["items","query","routeBase"])])])])])]),_:1})],64)}}};export{M as default};
