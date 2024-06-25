import{r as i,H as x,j as t,b as p}from"./index-eR21lxcp.js";import{G as h}from"./GoBackButton-7dWRaNet.js";function g(){const{userHistory:n,setUserHistory:r,setGoBackRoute:o}=i.useContext(x);i.useEffect(()=>{o("/Find-GitHub-User/")},[]);const l=e=>{if(!e)return;const s=new Date(e),a=s.getDate().toString().padStart(2,"0"),m=(s.getMonth()+1).toString().padStart(2,"0"),u=s.getFullYear().toString();return`${a}-${m}-${u}`},c=e=>{const s=n.filter(a=>a.id!==e);r(s)},d=()=>{r([])};return t.jsxs(t.Fragment,{children:[t.jsx(h,{backURL:"/Find-GitHub-User/"}),t.jsxs("div",{className:`
            flex flex-col items-center mb-4 p-2 pt-4 mx-auto
            max-w-4xl w-[95%] h-[65vh]
            relative
            overflow-y-auto
            bg-slate-800
            rounded-b-2xl`,children:[n.length>0?n.map(e=>t.jsxs("div",{className:`
                        text-sm w-full flex justify-between items-center
                        border-b border-slate-500 p-1
                        md:text-lg md:p-3`,children:[t.jsx(p,{to:`/Find-GitHub-User/username/${e.name}`,onClick:()=>{o("/Find-GitHub-User/history")},children:t.jsxs("p",{className:"w-full",children:[t.jsx("span",{className:"",children:l(e.id)}),t.jsx("span",{className:"pl-4 md:pl-7",children:e.name})]})}),t.jsx("button",{className:`
                            hover:opacity-80 hover:bg-slate-900 p-2 rounded`,onClick:()=>{c(e.id)},children:t.jsx("img",{src:"https://raw.githubusercontent.com/Aayush259/Dictionary/c4256ba868a07d677bcc25ff861a58f8606969d8/src/images/xmark-light.svg",alt:"Remove item",width:15})})]},e.id)):t.jsx("span",{className:`
                        text-2xl block m-auto`,children:"Your search history will appear here. 😊"}),n.length>0&&t.jsx("button",{className:`
                        sticky z-10 bottom-4 ml-auto mr-4 mt-auto
                        bg-sky-800 py-1 px-2 rounded-md
                        hover:bg-sky-600
                        active:bg-sky-400
                        focus:outline-sky-400 focus:outline-4 focus:outline`,onClick:d,children:"Clear All"})]})]})}export{g as default};
