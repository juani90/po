import{a,r as o}from"./app-34a30715.js";function c({message:r,className:t="",...e}){return r?a("p",{...e,className:"text-sm text-red-600 dark:text-red-400 "+t,children:r}):null}const f=o.forwardRef(function({type:t="text",className:e="",isFocused:n=!1,...i},s){const d=s||o.useRef();return o.useEffect(()=>{n&&d.current.focus()},[]),a("div",{className:"flex flex-col items-start",children:a("input",{...i,type:t,className:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "+e,ref:d})})});export{c as I,f as T};
