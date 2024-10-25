import{j as e,r as o,H as d}from"./index-D49njOID.js";import{G as h,F as n,N as x,H as g,a as p}from"./Home-D5zUURyV.js";function t({image:i,children:r}){return e.jsxs("div",{className:"grid h-[9rem] w-[9rem] items-center rounded-lg border-2 border-highlight duration-500 hover:scale-[1.1] hover:shadow-[0_0_10px_0_highlight] 2sm:mx-[1rem] sm:mx-[2rem] xl:h-[9.5rem] xl:w-[9.5rem]",children:[e.jsx("img",{className:"mx-auto mt-2 h-[5rem] w-[5rem] xl:h-[5.5rem] xl:w-[5.5rem]",src:`/TechStack/${i}`,alt:r}),e.jsx("h3",{className:"mt-4 font-semibold sm:text-lg",children:r})]})}function f(){return e.jsx("section",{id:"skills",className:"flex h-max min-h-screen w-full items-center justify-center bg-primary text-text",children:e.jsxs("div",{className:"mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center",children:[e.jsx("h2",{className:"mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl",children:"Skills"}),e.jsxs("div",{className:"grid grid-cols-1 gap-8 py-8 text-center 2sm:grid-cols-2 sm:gap-12 md:grid-cols-3 xl:grid-cols-4",children:[e.jsx(t,{image:"icons8-java-48.png",children:"Java"}),e.jsx(t,{image:"icons8-spring-boot-48.png",children:"Spring"}),e.jsx(t,{image:"icons8-react-80.png",children:"React"}),e.jsx(t,{image:"icons8-sql-50.png",children:"SQL"}),e.jsx(t,{image:"icons8-aws-48.png",children:"AWS"}),e.jsx(t,{image:"icons8-docker-48.png",children:"Docker"}),e.jsx(t,{image:"icons8-kubernetes-48.png",children:"Kubernetes"}),e.jsx(t,{image:"Cassandra_logo.svg.png",children:"Cassandra"}),e.jsx(t,{image:"icons8-redis-48.png",children:"Redis"}),e.jsx(t,{image:"icons8-mariadb-48.png",children:"MariaDB"})]})]})})}function c({image:i,description:r,techStack:s,buttons:a,children:m}){return e.jsxs("div",{className:"h-fit w-fit max-w-[320px] rounded-lg border-2 border-highlight duration-500 hover:scale-[1.05] hover:shadow-[0_0_10px_0_highlight] sm:h-full",children:[e.jsx("img",{className:"mx-auto h-fit w-fit rounded-t-md",src:`/Projects/${i}`,alt:m}),e.jsx("h3",{className:"m-4 text-xl font-bold text-highlight sm:text-2xl",children:m}),e.jsx("p",{className:"m-4 text-sm font-medium text-text 2sm:text-base",children:r}),e.jsx("p",{className:"m-4 text-sm font-semibold text-highlight 2sm:text-base",children:s}),a&&e.jsx("div",{className:a.length===1?"mt-4 flex justify-center":"mt-4 grid grid-cols-2 gap-2",children:a.map(l=>e.jsx("a",{className:"m-2 flex justify-around rounded-lg border-2 border-highlight p-3 duration-300 hover:border-highlight hover:bg-highlight 2sm:mx-4",href:l.link,target:"_blank",rel:"noreferrer",children:e.jsxs("div",{className:"grid items-center whitespace-nowrap text-xs font-semibold text-text 2sm:flex 2sm:gap-2",children:[e.jsx(l.image,{size:25,className:"mx-auto mb-2 2sm:m-0"}),l.name]})},l.link))})]})}function j(i){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"},child:[]},{tag:"path",attr:{d:"M11.5 3a16.989 16.989 0 0 0 -1.826 4"},child:[]},{tag:"path",attr:{d:"M12.5 3a16.989 16.989 0 0 1 1.828 4"},child:[]},{tag:"path",attr:{d:"M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"},child:[]},{tag:"path",attr:{d:"M11.5 21a16.989 16.989 0 0 1 -1.826 -4"},child:[]},{tag:"path",attr:{d:"M12.5 21a16.989 16.989 0 0 0 1.828 -4"},child:[]},{tag:"path",attr:{d:"M2 10l1 4l1.5 -4l1.5 4l1 -4"},child:[]},{tag:"path",attr:{d:"M17 10l1 4l1.5 -4l1.5 4l1 -4"},child:[]},{tag:"path",attr:{d:"M9.5 10l1 4l1.5 -4l1.5 4l1 -4"},child:[]}]})(i)}function u(){return e.jsx("section",{id:"projects",className:"flex h-max min-h-screen w-full items-center justify-center bg-primary text-text",children:e.jsxs("div",{className:"mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center",children:[e.jsx("h2",{className:"mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl",children:"Projects"}),e.jsxs("div",{className:"mx-14 grid grid-cols-1 gap-16 py-8 text-center md:grid-cols-2 lg:mx-0 xl:grid-cols-3",children:[e.jsx(c,{image:"Website.png",description:"",techStack:"HTML, CSS, Typescript, React",buttons:[{name:"Website",image:j,link:""},{name:"GitHub",image:n,link:""}],children:"Portfolio"}),e.jsx(c,{image:"images.png",description:"Project 1",techStack:"Java, Spring, Spring Boot, Kafka",buttons:[{name:"GitHub",image:n,link:""}],children:"Kafka"})]})]})})}function w({theme:i,setTheme:r}){return o.useEffect(()=>{const s=localStorage.getItem("nd-theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";r(s==="dark"||s==="light"?s:a)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx("title",{children:"Daniel Cirino\\"}),e.jsx("meta",{name:"description",content:"I am a Backend software engineer. This is my portfolio website."})]}),e.jsx(x,{theme:i,setTheme:r,navbarMargin:{marginLeft:"ml-[1rem] 2sm:ml-[4rem] sm:ml-[6rem] md:ml-[4rem] lg:ml-[8rem] xl:ml-[14rem] 2xl:ml-[20rem]",marginRight:"mr-[1rem] 2sm:mr-[4rem] sm:mr-[6rem] md:mr-[4rem] lg:mr-[8rem] xl:mr-[14rem] 2xl:mr-[20rem]"},logoPath:"public/Logos/icons8-computer-64.png",menu:["Home","Skills","Projects"]}),e.jsx(g,{h2Title:"Hello, I'm",h1Title:"Daniel Cirino",typedInfo:{textBefore:"A",strings:["Backend Software Engineer"],typeSpeed:80,backSpeed:50,backDelay:2e3},internalLink:{to:"projects",text:"View Projects"},externalLinks:[{link:"https://github.com/dan-cirino",image:n,text:""},{link:"https://www.linkedin.com/in/daniel-cirino-/",image:p,text:""}]}),e.jsx(f,{}),e.jsx(u,{})]})}export{w as default};