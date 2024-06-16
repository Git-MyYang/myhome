// import {$ , $all} from '../utils/utils.js'

import './main.scss'
import javascriptLogo from '../../javascript.svg'
import viteLogo from '../../../dist/vite.svg'
import { setupCounter } from '../counter/counter.js'
import axios from 'axios'



// 初始渲染
rander()

// 页面 点击 功能实现
document.addEventListener("click",function(e){
    var target = e.target || window.event.srcElement;
    if(target.className === "lei"){
        $(".lie").classList.remove('show')
        target.classList.add("show")
       
        $(".play").classList.add("synSize")
        $(".play").classList.remove('play')

    }
    if(target.className === "lie"){
        $(".lei").classList.remove('show')
        target.classList.add("show")
        $(".synSize").classList.add("play")
        $(".synSize").classList.remove('synSize')

        
    }
    if(target.className === "searchInp"){
        this.location.href = "./vite_0616/src/pages/main/search.html"
    }
    
    if(target.classList.contains("li1")){
        $(".active").classList.remove('active')
        target.classList.add("active")
        rander()
    }
    if(target.classList.contains("li2")){
        $(".active").classList.remove('active')
        target.classList.add("active")
        randerSales()
    }
    if(target.classList.contains("li3")){
        $(".active").classList.remove('active')
        target.classList.add("active")
        randerUpdate()
    }
   
    if(target.classList.contains("li4")){
        // randerSort()
    }
})


async function rander(){
    const res = await axios.get('/api/zh')
    // console.log(res)
    const data = res.data.items
    // console.log(data)
    if($(".show").nextElementSibling === $(".lie")){
        $(".synSize").innerHTML = data.map(item => {
            return `
            <dl>
                <dt><img src="${item.img}" alt=""></dt>
                <dd>
                    <p class="cont">${item.title}</p>
                    <p class="mont">月销${item.totalSoldQuantity}笔</p>
                    <p class="monney">￥${item.price}</p>
                </dd>
            </dl>
        `
        }).join("")
    }else{
        $(".play").innerHTML = data.map(item => {
            return `
            <dl>
                <dt><img src="${item.img}" alt=""></dt>
                <dd>
                    <p class="cont">${item.title}</p>
                    <p class="mont">月销${item.totalSoldQuantity}笔</p>
                    <p class="monney">￥${item.price}</p>
                </dd>
            </dl>
        `
        }).join("")
    }
    
}

// randerSales()
async function randerSales(){
    const res = await axios.get('/api/xl')
    // console.log(res)
    const data = res.data.items
    // console.log(data)

    if($(".show").nextElementSibling === $(".lie")){
        $(".synSize").innerHTML = data.map(item => {
            return `
            <dl>
                <dt><img src="${item.img}" alt=""></dt>
                <dd>
                    <p class="cont">${item.title}</p>
                    <p class="mont">月销${item.totalSoldQuantity}笔</p>
                    <p class="monney">￥${item.price}</p>
                </dd>
            </dl>
        `
        }).join("")
    }else{
        $(".play").innerHTML = data.map(item => {
            return `
            <dl>
                <dt><img src="${item.img}" alt=""></dt>
                <dd>
                    <p class="cont">${item.title}</p>
                    <p class="mont">月销${item.totalSoldQuantity}笔</p>
                    <p class="monney">￥${item.price}</p>
                </dd>
            </dl>
        `
        }).join("")
    }
    
}

async function randerUpdate(){
    const res = await axios.get('/api/sx')
    // console.log(res)
    const data = res.data.items
    // console.log(data)

    if($(".show").nextElementSibling === $(".lie")){
        $(".synSize").innerHTML = data.map(item => {
            return `
            <dl>
                <dt><img src="${item.img}" alt=""></dt>
                <dd>
                    <p class="cont">${item.title}</p>
                    <p class="mont">月销${item.totalSoldQuantity}笔</p>
                    <p class="monney">￥${item.price}</p>
                </dd>
            </dl>
        `
        }).join("")
    }else{
        $(".play").innerHTML = data.map(item => {
            return `
            <dl>
                <dt><img src="${item.img}" alt=""></dt>
                <dd>
                    <p class="cont">${item.title}</p>
                    <p class="mont">月销${item.totalSoldQuantity}笔</p>
                    <p class="monney">￥${item.price}</p>
                </dd>
            </dl>
        `
        }).join("")
    }
}


// async function randerSort(){
//     const res = await axios.get('/api/xl')
//     console.log(res)
//     const data = res.data.items
//     console.log(data)

//     $(".synSize").innerHTML = data.map((item,index) => {
//         return `
//             <dl>
//                 <dt><img src="${item.img}" alt=""></dt>
//                 <dd>
//                     <p class="cont">${item.title}</p>
//                     <p class="mont">月销${item.totalSoldQuantity}笔</p>
//                     <p class="monney">￥${item.price}</p>
//                 </dd>
//             </dl>
//         `
//     }).join("")
    
// }







function $(el , parent = document){
    return document.querySelector(el)
}
function $all(el , parent = document){
    return document.querySelectorAll(el)
}