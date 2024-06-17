import{a as e}from"./axios-rIf3pRQ6.js";async function i(){const n=(await e.get("https://zyxcl.xyz/exam_api/zh")).data.items;o(".info").innerHTML=n.map(a=>`
            <div class="info"><h2>${a.title}</2><img src="${a.img}" alt=""></div>

        `)}i();function o(t,n=document){return document.querySelector(t)}
