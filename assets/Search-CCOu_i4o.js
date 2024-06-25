import{r as o,j as e,L as a,u as i}from"./index-DtLwENRu.js";const r="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M416%20208c0%2045.9-14.9%2088.3-40%20122.7L502.6%20457.4c12.5%2012.5%2012.5%2032.8%200%2045.3s-32.8%2012.5-45.3%200L330.7%20376c-34.4%2025.2-76.8%2040-122.7%2040C93.1%20416%200%20322.9%200%20208S93.1%200%20208%200S416%2093.1%20416%20208zM208%20352a144%20144%200%201%200%200-288%20144%20144%200%201%200%200%20288z'/%3e%3c/svg%3e",u="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M75%2075L41%2041C25.9%2025.9%200%2036.6%200%2057.9V168c0%2013.3%2010.7%2024%2024%2024H134.1c21.4%200%2032.1-25.9%2017-41l-30.8-30.8C155%2085.5%20203%2064%20256%2064c106%200%20192%2086%20192%20192s-86%20192-192%20192c-40.8%200-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6%207.9s-6.6%2034.4%207.9%2044.6C151.2%20495%20201.7%20512%20256%20512c141.4%200%20256-114.6%20256-256S397.4%200%20256%200C185.3%200%20121.3%2028.7%2075%2075zm181%2053c-13.3%200-24%2010.7-24%2024V256c0%206.4%202.5%2012.5%207%2017l72%2072c9.4%209.4%2024.6%209.4%2033.9%200s9.4-24.6%200-33.9l-65-65V152c0-13.3-10.7-24-24-24z'/%3e%3c/svg%3e";function m(){const[n,t]=o.useState(null),c=()=>(fetch("https://api.adviceslip.com/advice").then(s=>s.json()).then(s=>t(s)).catch(s=>console.log("Error:",s)),()=>{t(null)});return o.useEffect(c,[]),e.jsx("div",{className:`
            p-4 text-center
            font-Manrope text-2xl font-semibold h-full`,children:n?e.jsx(e.Fragment,{children:e.jsxs("p",{className:"mt-24",children:[e.jsx("span",{className:"text-4xl",children:"“"})," ",n.slip.advice," ",e.jsx("span",{className:"text-4xl",children:"”"})]})}):e.jsx(a,{})})}function h(){const n=i(),t=o.useRef(),c=()=>{t.current.value&&n(`/Find-GitHub-User/username/${t.current.value}`)},s=()=>{n("/Find-GitHub-User/history")};return e.jsxs("div",{className:`
                flex flex-col mb-4 p-1 mx-auto mt-1
                max-w-4xl w-[95%] min-h-[75vh]
                bg-slate-800
                rounded-2xl`,children:[e.jsx("div",{className:"m-4 mb-0 ml-auto",children:e.jsx("button",{className:`
                    p-[10.5px] rounded
                    focus:outline-sky-400 focus:outline-4 focus:outline
                    hover:bg-sky-700`,onClick:s,children:e.jsx("img",{src:u,alt:"history",width:20})})}),e.jsx("label",{htmlFor:"searchInput",className:`
                    text-lg tracking-wide 
                    m-4 mt-0 ml-6`,children:"Enter GitHub username:"}),e.jsxs("div",{className:`
                    w-full 
                    flex items-center justify-center`,children:[e.jsx("input",{type:"text",id:"searchInput",ref:t,"aria-label":"Enter GitHub username",onKeyDown:l=>{l.key==="Enter"&&c()},className:`
                        bg-white text-slate-950
                        w-4/5 h-5 p-5
                        rounded-l-lg 
                        focus:outline-sky-400 focus:outline-4 focus:outline focus:z-10`}),e.jsx("button",{type:"button",className:`
                        bg-sky-700
                        p-[10.5px] rounded-r-lg focus:outline-sky-400 focus:outline-4 focus:outline
                        hover:opacity-80`,onClick:c,children:e.jsx("img",{className:"h-5",src:r,alt:"Search"})})]}),e.jsx(m,{})]})}export{h as default};
