import{r as k,T as C,Q as d,o as g,c as S,a,u as s,w as m,F as D,Z as N,b as r,t as B,d as P,e as w,n as T,f as F,g as h,h as q,O as z}from"./app-DnKDrPVM.js";import{_ as I}from"./AuthenticatedLayout-DmJ9O_D9.js";import{_ as t,a as n}from"./InputLabel-Du2OvpC9.js";import{P as L}from"./PrimaryButton-B4dNHRv5.js";import{_ as u}from"./TextInput-DB0ck1kv.js";import{d as j}from"./theme-sugar-jPFqOBsR.js";import{s as A}from"./multiSelectDarkMode-D1SjQTRa.js";import{L as M}from"./Loading-BvlMGmzW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Q={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},Z={class:"py-6"},G={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},H={class:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"},J={class:"p-6 text-gray-900 dark:text-gray-100"},K={class:"flex items-center gap-4"},R={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},te={__name:"Form",props:{user:{type:Object},responsaveis:{type:Array,default:[]}},setup(i){var _,x,V,b;const O=i,U=k(null),p=j.useToast(),c={position:"top-right",duration:5e3},e=C({name:((_=d().props)==null?void 0:_.user.name)??"",email:((x=d().props)==null?void 0:x.user.email)??"",telefone:((V=d().props)==null?void 0:V.user.telefone)??"",responsavel_id:((b=d().props)==null?void 0:b.user.responsavel_id)??"",password:"",password_confirmation:""}),v=k(O.responsaveis.find(f=>f.id===e.responsavel_id)),E=()=>{e.patch(route("admin.discipuladores.update",d().props.user.id),{preserveScroll:!0,onSuccess:()=>y(),onError:()=>{p.error("Ops! Ocorreu um erro!",c)}})},$=()=>{e.post(route("admin.discipuladores.store"),{preserveScroll:!0,onSuccess:()=>y(!0),onError:()=>{p.error("Ops! Ocorreu um erro!",c)}})},y=(f=!1)=>{f?p.success("Discipulador criado com sucesso!",c):p.success("Discipulador atualizado com sucesso!",c),e.password="",e.password_confirmation="",z.reload()};return(f,o)=>(g(),S(D,null,[a(s(N),{title:i.user.id?"Editar Discipulador":"Cadastrar Discipulador"},null,8,["title"]),a(I,null,{header:m(()=>[r("h2",Q,B(i.user.id?"Editar":"Cadastrar")+" Discipulador",1)]),default:m(()=>[r("div",Z,[r("div",G,[r("div",H,[r("div",J,[r("form",{onSubmit:o[7]||(o[7]=P(l=>i.user.id?E():$(),["prevent"])),class:"mt-6 space-y-6"},[r("div",null,[a(t,{for:"name",value:"Nome"}),a(u,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",null,[a(t,{for:"email",value:"Email"}),a(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).email=l),required:"",autocomplete:"username",placeholder:"email@email.com"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",null,[a(t,{for:"telefone",value:"Telefone"}),a(u,{id:"telefone",type:"text",class:"mt-1 block w-full",modelValue:s(e).telefone,"onUpdate:modelValue":o[2]||(o[2]=l=>s(e).telefone=l),autocomplete:"telefone",placeholder:"(##) #####-####",mask:"(##) #####-####"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.telefone},null,8,["message"])]),r("div",null,[a(t,{for:"responsavel",value:"Pastor"}),a(s(A),{name:"responsavel","track-by":"name",label:"name","select-label":"","deselect-label":"",tagPlaceholder:"",placeholder:"Selecionar Pastor","selected-label":"Selecionado",taggable:!0,multiple:!1,"show-labels":!1,options:i.responsaveis,modelValue:v.value,"onUpdate:modelValue":o[3]||(o[3]=l=>v.value=l),onSelect:o[4]||(o[4]=l=>s(e).responsavel_id=v.value.id)},{noOptions:m(()=>[w("Nenhum pastor cadastrado no sistema")]),_:1},8,["options","modelValue"]),a(n,{message:s(e).errors.responsavel_id,class:"mt-2"},null,8,["message"])]),r("div",null,[a(t,{for:"password",value:"Senha"}),a(u,{id:"password",ref_key:"passwordInput",ref:U,modelValue:s(e).password,"onUpdate:modelValue":o[5]||(o[5]=l=>s(e).password=l),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:"********"},null,8,["modelValue"]),a(n,{message:s(e).errors.password,class:"mt-2"},null,8,["message"])]),r("div",null,[a(t,{for:"password_confirmation",value:"Confirmação da Senha"}),a(u,{id:"password_confirmation",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[6]||(o[6]=l=>s(e).password_confirmation=l),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:"********"},null,8,["modelValue"]),a(n,{message:s(e).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),r("div",K,[a(L,{class:T({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:m(()=>[w(" Salvar ")]),_:1},8,["class","disabled"]),w(),s(e).processing?(g(),F(M,{key:0})):h("",!0),a(q,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:m(()=>[s(e).recentlySuccessful?(g(),S("p",R," Salvo.")):h("",!0)]),_:1})])],32)])])])])]),_:1})],64))}};export{te as default};
