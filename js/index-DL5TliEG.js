import{a as i}from"./axios-rIf3pRQ6.js";l();document.addEventListener("click",function(n){var t=n.target||window.event.srcElement;t.className==="lei"&&(a(".lie").classList.remove("show"),t.classList.add("show"),a(".play").classList.add("synSize"),a(".play").classList.remove("play")),t.className==="lie"&&(a(".lei").classList.remove("show"),t.classList.add("show"),a(".synSize").classList.add("play"),a(".synSize").classList.remove("synSize")),t.className==="searchInp"&&(this.location.href="./search.html"),t.classList.contains("li1")&&(a(".active").classList.remove("active"),t.classList.add("active"),l()),t.classList.contains("li2")&&(a(".active").classList.remove("active"),t.classList.add("active"),e()),t.classList.contains("li3")&&(a(".active").classList.remove("active"),t.classList.add("active"),c()),t.classList.contains("li4"),t.nodeName==="DL"&&(this.location.href="./info.html")});async function l(){const t=(await i.get("https://zyxcl.xyz/exam_api/zh")).data.items;a(".show").nextElementSibling===a(".lie")?a(".synSize").innerHTML=t.map(s=>`
            <dl>
                <dt><img src="${s.img}" alt=""></dt>
                <dd>
                    <p class="cont">${s.title}</p>
                    <p class="mont">月销${s.totalSoldQuantity}笔</p>
                    <p class="monney">￥${s.price}</p>
                </dd>
            </dl>
        `).join(""):a(".play").innerHTML=t.map(s=>`
            <dl>
                <dt><img src="${s.img}" alt=""></dt>
                <dd>
                    <p class="cont">${s.title}</p>
                    <p class="mont">月销${s.totalSoldQuantity}笔</p>
                    <p class="monney">￥${s.price}</p>
                </dd>
            </dl>
        `).join("")}async function e(){const t=(await i.get("https://zyxcl.xyz/exam_api/xl")).data.items;a(".show").nextElementSibling===a(".lie")?a(".synSize").innerHTML=t.map(s=>`
            <dl>
                <dt><img src="${s.img}" alt=""></dt>
                <dd>
                    <p class="cont">${s.title}</p>
                    <p class="mont">月销${s.totalSoldQuantity}笔</p>
                    <p class="monney">￥${s.price}</p>
                </dd>
            </dl>
        `).join(""):a(".play").innerHTML=t.map(s=>`
            <dl>
                <dt><img src="${s.img}" alt=""></dt>
                <dd>
                    <p class="cont">${s.title}</p>
                    <p class="mont">月销${s.totalSoldQuantity}笔</p>
                    <p class="monney">￥${s.price}</p>
                </dd>
            </dl>
        `).join("")}async function c(){const t=(await i.get("https://zyxcl.xyz/exam_api/sx")).data.items;a(".show").nextElementSibling===a(".lie")?a(".synSize").innerHTML=t.map(s=>`
            <dl>
                <dt><img src="${s.img}" alt=""></dt>
                <dd>
                    <p class="cont">${s.title}</p>
                    <p class="mont">月销${s.totalSoldQuantity}笔</p>
                    <p class="monney">￥${s.price}</p>
                </dd>
            </dl>
        `).join(""):a(".play").innerHTML=t.map(s=>`
            <dl>
                <dt><img src="${s.img}" alt=""></dt>
                <dd>
                    <p class="cont">${s.title}</p>
                    <p class="mont">月销${s.totalSoldQuantity}笔</p>
                    <p class="monney">￥${s.price}</p>
                </dd>
            </dl>
        `).join("")}function a(n,t=document){return document.querySelector(n)}
