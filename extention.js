window.onload = function() {
    // ======================================== Start animation js =====================================================
    var timeout1, timeout2, timeout3, timeout4;
    document.onmousemove = function() {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);

        let divAnimation = document.getElementsByClassName('snowflakes');
        if(divAnimation.length > 0) {
            divAnimation[0].parentNode.removeChild(divAnimation[0]);
        }
        timeout1 = setTimeout(function() {
            showAnimation();
        }, 10000);

        timeout2 = setTimeout(function() {
            showAnimation();
        }, 32000);

        timeout3 = setTimeout(function() {
            showAnimation();
        }, 55000);

        timeout4 = setTimeout(function() {
            showAnimation();
        }, 62000);
    }
    // ======================================== End animation js =====================================================


    // ======================================== Start extention2 js =====================================================
    let removeLog = setInterval(()=> {
        console.clear();
       let countRemoveLog = parseInt(window.sessionStorage.getItem('countRemoveLog'));
       if(countRemoveLog == 20) {
        window.sessionStorage.removeItem('countRemoveLog');
        clearInterval(removeLog);
       } else {
        window.sessionStorage.setItem('countRemoveLog', countRemoveLog + 1);
       }
    }, 100);
    // ======================================== End extention2 js =====================================================
};

function showAnimation() {
    let icon1 = document.createTextNode('❅');
    let icon2 = document.createTextNode('❆');
    let icon3 = document.createTextNode('❅');
    let icon4 = document.createTextNode('❆');
    let icon5 = document.createTextNode('❅');
    let icon6 = document.createTextNode('❆');
    let icon7 = document.createTextNode('❅');
    let icon8 = document.createTextNode('❆');
    let icon9 = document.createTextNode('❅');
    let icon10 = document.createTextNode('❆');

    let element1 = document.createElement("div");
    element1.classList.add("snowflake");
    element1.appendChild(icon1);
    
    let element2 = document.createElement("div");
    element2.classList.add("snowflake");
    element2.appendChild(icon2);

    let element3 = document.createElement("div");
    element3.classList.add("snowflake");
    element3.appendChild(icon3);

    let element4 = document.createElement("div");
    element4.classList.add("snowflake");
    element4.appendChild(icon4);

    let element5 = document.createElement("div");
    element5.classList.add("snowflake");
    element5.appendChild(icon5);

    let element6 = document.createElement("div");
    element6.classList.add("snowflake");
    element6.appendChild(icon6);

    let element7 = document.createElement("div");
    element7.classList.add("snowflake");
    element7.appendChild(icon7);

    let element8 = document.createElement("div");
    element8.classList.add("snowflake");
    element8.appendChild(icon8);

    let element9 = document.createElement("div");
    element9.classList.add("snowflake");
    element9.appendChild(icon9);

    let element10 = document.createElement("div");
    element10.classList.add("snowflake");
    element10.appendChild(icon10);


    let divElement = document.createElement("div");
    divElement.classList.add("snowflakes");
    divElement.setAttribute("aria-hidden", "true");

    divElement.appendChild(element1);
    divElement.appendChild(element2);
    divElement.appendChild(element3);
    divElement.appendChild(element4);
    divElement.appendChild(element5);
    divElement.appendChild(element6);
    divElement.appendChild(element7);
    divElement.appendChild(element8);
    divElement.appendChild(element9);
    divElement.appendChild(element10);

    document.body.appendChild(divElement);
}
