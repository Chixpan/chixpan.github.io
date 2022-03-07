// Chipan

// 开启事件
window.onload = function(){
    watch_size();
    setTimeout(function(){hide_loader();}, 1000);
    setInterval(function(){fun_img_next();}, 5000);
}
window.onresize = function(){
    watch_size();
}
//

/* Page Loader开始 */
/* Page Loader开始 */
/* Page Loader开始 */
function hide_loader(){
    document.getElementById('page_loader').style.display='none';
}
/* Page Loader结束 */
/* Page Loader结束 */
/* Page Loader结束 */

// Navigation开始
// Navigation开始
// Navigation开始

var scroll_height = 0;
var scroll_x = 0;
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if(scroll >= scroll_height && scroll_x == 0){
        scroll_x = 1;
        document.getElementById("header_background_color").style.backgroundColor = "#202020";
    }
    else if(scroll >= scroll_height && scroll_x == 1){}
    else if(scroll < scroll_height && scroll_x == 0){}
    else if(scroll < scroll_height && scroll_x == 1){
        scroll_x = 0;
        document.getElementById("header_background_color").style.backgroundColor = "transparent";
    }
    else{}
});
function target_fix(target_fix_id){ 
    document.getElementById(target_fix_id).scrollIntoView();
}
// Navigation结束
// Navigation结束
// Navigation结束

// Slider开始
// Slider开始
// Slider开始

// 动态高度开始
function watch_size(){
    var web_height = document.documentElement.clientHeight;
    document.getElementById("flexslider_height").style.height = web_height + "px";
    scroll_height = web_height - 100;
}
// 动态高度结束
// banner动画开始
var img_all = 5;
var img_index = 1;

var img_previous_id;
var img_active_id;
var img_next_id;
var img_hidden_id;

function fun_img_next(){
    if(img_index == 1){
        img_previous_id = img_all;
        img_active_id = img_index;
        img_next_id = img_index + 1;
        img_hidden_id = img_index + 2;
    }
    else if(img_index > 1 && img_index < img_all - 1){
        img_previous_id = img_index - 1;
        img_active_id = img_index;
        img_next_id = img_index + 1;
        img_hidden_id = img_index + 2;
    }
    else if(img_index == img_all - 1){
        img_previous_id = img_index - 1;
        img_active_id = img_index;
        img_next_id = img_index + 1;
        img_hidden_id = 1;
    }
    else if(img_index == img_all){
        img_previous_id = img_index - 1;
        img_active_id = img_index;
        img_next_id = 1;
        img_hidden_id = img_next_id + 1;
        img_index = 0;
    }
    else{
        console.log("R_banner_error");
    }

    document.getElementById(String("img_holder_" + img_active_id)).classList.remove("img_holder_active");
    document.getElementById(String("img_holder_" + img_active_id)).classList.add("img_holder_hidden");
    document.getElementById(String("img_holder_" + img_next_id)).classList.remove("img_holder_hidden");
    document.getElementById(String("img_holder_" + img_next_id)).classList.add("img_holder_active");

    document.getElementById(String("dot_" + img_active_id)).classList.remove("dot_active");
    document.getElementById(String("dot_" + img_next_id)).classList.add("dot_active");

    img_index = img_index + 1;
}

function fun_img_prev(){
    if(img_index == img_all){
        img_previous_id = 1;
        img_active_id = img_index;
        img_next_id = img_index - 1;
        img_hidden_id = img_index - 2;
    }
    else if(img_index < img_all && img_index > 2){
        img_previous_id = img_index + 1;
        img_active_id = img_index;
        img_next_id = img_index - 1;
        img_hidden_id = img_index - 2;
    }
    else if(img_index == 2){
        img_previous_id = img_index + 1;
        img_active_id = img_index;
        img_next_id = img_index - 1;
        img_hidden_id = img_all;
    }
    else if(img_index == 1){
        img_previous_id = img_index + 1;
        img_active_id = img_index;
        img_next_id = img_all;
        img_hidden_id = img_all - 1;
        img_index = img_all + 1;
    }
    else{
        console.log("L_banner_error");
    }

    document.getElementById(String("img_holder_" + img_active_id)).classList.remove("img_holder_active");
    document.getElementById(String("img_holder_" + img_active_id)).classList.add("img_holder_hidden");
    document.getElementById(String("img_holder_" + img_next_id)).classList.remove("img_holder_hidden");
    document.getElementById(String("img_holder_" + img_next_id)).classList.add("img_holder_active");

    document.getElementById(String("dot_" + img_active_id)).classList.remove("dot_active");
    document.getElementById(String("dot_" + img_next_id)).classList.add("dot_active");

    img_index = img_index - 1;
}

function move_slider(move_id){
    document.getElementById(String("img_holder_" + img_index)).classList.remove("img_holder_active");
    document.getElementById(String("img_holder_" + img_index)).classList.add("img_holder_hidden");
    document.getElementById(String("img_holder_" + move_id)).classList.remove("img_holder_hidden");
    document.getElementById(String("img_holder_" + move_id)).classList.add("img_holder_active");

    document.getElementById(String("dot_" + img_index)).classList.remove("dot_active");
    document.getElementById(String("dot_" + move_id)).classList.add("dot_active");

    img_index = move_id;
}
// banner动画结束



// Slider结束
// Slider结束
// Slider结束

// 测试用
// window.alert("");
// console.log("");
// 结束