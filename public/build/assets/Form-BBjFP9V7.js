import{j as B,r as S,T,Q as d,o as m,c as w,a,u as s,w as p,F as D,Z as F,b as r,t as $,d as P,k as j,v as q,f as U,e as y,n as z,g as O,h as I,O as M}from"./app-BlJLqFdN.js";import{_ as A}from"./AuthenticatedLayout-zNw4nl1m.js";import{_ as i}from"./InputError-BlDklDqR.js";import{_ as n}from"./InputLabel-C9n5onsd.js";import{P as Q}from"./PrimaryButton-DC70GI4w.js";import{_ as c}from"./TextInput-CREshyq_.js";import{d as Z}from"./theme-sugar-POYPeZjD.js";import{s as G}from"./multiSelectDarkMode-sMWSELI0.js";import{L as H}from"./Loading-DqV32Eu_.js";const J={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},K={class:"py-6"},R={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},W={class:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"},X={class:"p-6 text-gray-900 dark:text-gray-100"},Y=["value"],ee={class:"flex items-center gap-4"},se={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},me={__name:"Form",props:{user:{type:Object},responsaveis:{type:Array,default:[]}},setup(_){var k,V,x,h;const u=B(()=>d().props.auth.user),E=_,L=S(null),f=Z.useToast(),v={position:"top-right",duration:5e3},e=T({name:((k=d().props)==null?void 0:k.user.name)??"",email:((V=d().props)==null?void 0:V.user.email)??"",telefone:((x=d().props)==null?void 0:x.user.telefone)??"",responsavel_id:u.value.role=="discipulador"?u.value.id:((h=d().props)==null?void 0:h.user.responsavel_id)??"",password:"",password_confirmation:""}),g=S(E.responsaveis.find(t=>t.id===e.responsavel_id)),C=()=>{e.patch(route("discipulador.lideres.update",d().props.user.id),{preserveScroll:!0,onSuccess:()=>b(),onError:()=>{f.error("Ops! Ocorreu um erro!",v)}})},N=()=>{e.post(route("discipulador.lideres.store"),{preserveScroll:!0,onSuccess:()=>b(!0),onError:()=>{f.error("Ops! Ocorreu um erro!",v)}})},b=(t=!1)=>{t?f.success("Lider criado com sucesso!",v):f.success("Lider atualizado com sucesso!",v),e.password="",e.password_confirmation="",M.reload()};return(t,o)=>(m(),w(D,null,[a(s(F),{title:u.value.id?"Editar Líder":"Cadastrar Líder"},null,8,["title"]),a(A,null,{header:p(()=>[r("h2",J,$(u.value.id?"Editar":"Cadastrar")+" Líder",1)]),default:p(()=>[r("div",K,[r("div",R,[r("div",W,[r("div",X,[r("form",{onSubmit:o[8]||(o[8]=P(l=>u.value.id?C():N(),["prevent"])),class:"mt-6 space-y-6"},[r("div",null,[a(n,{for:"name",value:"Nome"}),a(c,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",null,[a(n,{for:"email",value:"Email"}),a(c,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).email=l),required:"",autocomplete:"username",placeholder:"email@email.com"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",null,[a(n,{for:"telefone",value:"Telefone"}),a(c,{id:"telefone",type:"text",class:"mt-1 block w-full",modelValue:s(e).telefone,"onUpdate:modelValue":o[2]||(o[2]=l=>s(e).telefone=l),autocomplete:"telefone",placeholder:"(##) #####-####",mask:"(##) #####-####"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.telefone},null,8,["message"])]),r("div",null,[a(n,{for:"responsavel",value:"Discipulador"}),t.$page.props.auth.user.role=="discipulador"?j((m(),w("select",{key:0,class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full","onUpdate:modelValue":o[3]||(o[3]=l=>s(e).responsavel_id=l),disabled:""},[r("option",{value:t.$page.props.auth.user.id,selected:""},$(t.$page.props.auth.user.name),9,Y)],512)),[[q,s(e).responsavel_id]]):(m(),U(s(G),{key:1,name:"responsavel","track-by":"name",label:"name","select-label":"","deselect-label":"",tagPlaceholder:"",placeholder:"Selecionar Discipulador","selected-label":"Selecionado",taggable:!0,multiple:!1,"show-labels":!1,options:_.responsaveis,modelValue:g.value,"onUpdate:modelValue":o[4]||(o[4]=l=>g.value=l),onSelect:o[5]||(o[5]=l=>s(e).responsavel_id=g.value.id)},{noOptions:p(()=>[y("Nenhum discipulador cadastrado no sistema")]),_:1},8,["options","modelValue"])),a(i,{message:s(e).errors.responsavel_id,class:"mt-2"},null,8,["message"])]),r("div",null,[a(n,{for:"password",value:"Senha"}),a(c,{id:"password",ref_key:"passwordInput",ref:L,modelValue:s(e).password,"onUpdate:modelValue":o[6]||(o[6]=l=>s(e).password=l),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:"********"},null,8,["modelValue"]),a(i,{message:s(e).errors.password,class:"mt-2"},null,8,["message"])]),r("div",null,[a(n,{for:"password_confirmation",value:"Confirmação da Senha"}),a(c,{id:"password_confirmation",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[7]||(o[7]=l=>s(e).password_confirmation=l),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:"********"},null,8,["modelValue"]),a(i,{message:s(e).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),r("div",ee,[a(Q,{class:z({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:p(()=>[y("Salvar")]),_:1},8,["class","disabled"]),y(),s(e).processing?(m(),U(H,{key:0})):O("",!0),a(I,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:p(()=>[s(e).recentlySuccessful?(m(),w("p",se," Salvo.")):O("",!0)]),_:1})])],32)])])])])]),_:1})],64))}};export{me as default};
