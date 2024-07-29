import{Q as p}from"./QImg.222921e7.js";import{B as r,C as n,E as t,H as s,G as i,R as g,S as f,aM as d,aF as m,I as u}from"./index.9edba5f1.js";import{Q as h}from"./QForm.6c489b8e.js";import{Q as b}from"./QPage.8e64ec2d.js";import{Q as y,a as _}from"./QLayout.0f56a70f.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import"./QScrollObserver.4aba2b6c.js";import"./QResizeObserver.7ee9484d.js";const x={name:"LoginLayout",data(){return{loading:!1,visible:!1,user:{username:"admin",password:"admin"}}},mounted(){localStorage.getItem("tokenEco")&&this.$router.push("/menu")},methods:{login(){this.loading=!0,this.$axios.post("/login",this.user).then(l=>{this.$store.user=l.data.user,this.$store.isLogged=!0,localStorage.setItem("tokenEco",l.data.token),this.$axios.defaults.headers.common.Authorization=`Bearer ${l.data.token}`,this.$router.push("/menu")}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})}}},Q={class:"row q-pt-lg"},k={class:"col-12 col-sm-6 offset-sm-3 col-md-4 offset-md-4"},w={class:"text-center"},C=i("div",{class:"text-h6 text-bold"},"Iniciar sesi\xF3n",-1),I=i("div",{class:"text-grey q-py-xs"}," Inicia sesi\xF3n para acceder a tu cuenta ",-1),V=i("div",{class:"bg-indigo text-center q-ma-xs text-white"}," El usuario es admin y la contrase\xF1a es admin ",-1);function L(l,o,q,B,e,c){return r(),n(y,{style:{"background-image":"url(./fondoLogin.jpg)","background-size":"cover"}},{default:t(()=>[s(_,null,{default:t(()=>[s(b,{class:"q-pa-md"},{default:t(()=>[i("div",Q,[i("div",k,[s(g,{class:"bg-white"},{default:t(()=>[s(f,null,{default:t(()=>[i("div",w,[s(p,{src:"logo.png",class:"col-12",style:{"max-width":"100px"}})]),C,I,V,s(h,{onSubmit:c.login},{default:t(()=>[s(d,{modelValue:e.user.username,"onUpdate:modelValue":o[0]||(o[0]=a=>e.user.username=a),filled:"",label:"Usuario","lazy-rules":"",rules:[a=>!!a||"Campo requerido"]},null,8,["modelValue","rules"]),s(d,{modelValue:e.user.password,"onUpdate:modelValue":o[3]||(o[3]=a=>e.user.password=a),filled:"",label:"Contrase\xF1a","lazy-rules":"",type:e.visible?"text":"password",rules:[a=>!!a||"Campo requerido"]},{append:t(()=>[e.visible?(r(),n(m,{key:1,name:"visibility_off",class:"cursor-pointer",onClick:o[2]||(o[2]=a=>e.visible=!1)})):(r(),n(m,{key:0,name:"visibility",class:"cursor-pointer",onClick:o[1]||(o[1]=a=>e.visible=!0)}))]),_:1},8,["modelValue","type","rules"]),s(u,{rounded:"",color:"primary",label:"Iniciar sesi\xF3n",class:"full-width",loading:e.loading,type:"submit","no-caps":""},null,8,["loading"]),s(u,{flat:"","no-caps":"",loading:e.loading,label:"\xBFOlvidaste tu contrase\xF1a?",class:"full-width"},null,8,["loading"]),s(u,{outline:"",rounded:"","no-caps":"",loading:e.loading,label:"Pagina principal",class:"full-width",onClick:o[4]||(o[4]=()=>this.$router.push("/"))},null,8,["loading"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1})]),_:1})}var j=v(x,[["render",L]]);export{j as default};
