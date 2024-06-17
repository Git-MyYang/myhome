import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as i}from"./main-C1a3tRKj.js";async function o(){const n=(await i.get("https://zyxcl.xyz/exam_api/zh")).data.items;e(".info").innerHTML=n.map(a=>`
            <div class="info"><h2>${a.title}</2><img src="${a.img}" alt=""></div>

        `).join("")}o();function e(t,n=document){return document.querySelector(t)}
