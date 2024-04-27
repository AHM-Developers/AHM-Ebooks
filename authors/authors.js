var poets = [
    {
        first: 'A',
        name: 'llama Iqbal',
        intro: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry. His vision fueled the Pakistan Movement, advocating for Muslim rights in British-ruled India. His legacy endures through his literary masterpieces and pivotal role in shaping Pakistan\'s foundation.',
        poetimg: './assets/iqbal.png',
        clg: 'ABC College',
        year1: 2022,
        intro1: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry',
        uni: 'ABC University',
        year2: 2023,
        intro2: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry'
    }
    ,
    {
        first: 'A',
        name: 'llama Iqbal',
        intro: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry. His vision fueled the Pakistan Movement, advocating for Muslim rights in British-ruled India. His legacy endures through his literary masterpieces and pivotal role in shaping Pakistan\'s foundation.',
        poetimg: './assets/iqbal.png',
        clg: 'ABC College',
        year1: 2022,
        intro1: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry',
        uni: 'ABC University',
        year2: 2023,
        intro2: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry'
    }
    ,
    {
        first: 'A',
        name: 'llama Iqbal',
        intro: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry. His vision fueled the Pakistan Movement, advocating for Muslim rights in British-ruled India. His legacy endures through his literary masterpieces and pivotal role in shaping Pakistan\'s foundation.',
        poetimg: './assets/iqbal.png',
        clg: 'ABC College',
        year1: 2022,
        intro1: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry',
        uni: 'ABC University',
        year2: 2023,
        intro2: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry'
    }
    ,
    {
        first: 'A',
        name: 'llama Iqbal',
        intro: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry. His vision fueled the Pakistan Movement, advocating for Muslim rights in British-ruled India. His legacy endures through his literary masterpieces and pivotal role in shaping Pakistan\'s foundation.',
        poetimg: './assets/iqbal.png',
        clg: 'ABC College',
        year1: 2022,
        intro1: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry',
        uni: 'ABC University',
        year2: 2023,
        intro2: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry'
    }
    ,
    {
        first: 'A',
        name: 'llama Iqbal',
        intro: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry. His vision fueled the Pakistan Movement, advocating for Muslim rights in British-ruled India. His legacy endures through his literary masterpieces and pivotal role in shaping Pakistan\'s foundation.',
        poetimg: './assets/iqbal.png',
        clg: 'ABC College',
        year1: 2022,
        intro1: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry',
        uni: 'ABC University',
        year2: 2023,
        intro2: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry'
    }
    ,
    {
        first: 'A',
        name: 'llama Iqbal',
        intro: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry. His vision fueled the Pakistan Movement, advocating for Muslim rights in British-ruled India. His legacy endures through his literary masterpieces and pivotal role in shaping Pakistan\'s foundation.',
        poetimg: './assets/iqbal.png',
        clg: 'ABC College',
        year1: 2022,
        intro1: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry',
        uni: 'ABC University',
        year2: 2023,
        intro2: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry'
    }
    ,
    {
        first: 'A',
        name: 'llama Iqbal',
        intro: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry. His vision fueled the Pakistan Movement, advocating for Muslim rights in British-ruled India. His legacy endures through his literary masterpieces and pivotal role in shaping Pakistan\'s foundation.',
        poetimg: './assets/iqbal.png',
        clg: 'ABC College',
        year1: 2022,
        intro1: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry',
        uni: 'ABC University',
        year2: 2023,
        intro2: 'Muhammad Iqbal (1877–1938) was a revered South Asian Muslim philosopher, author, and politician, known as Allama, celebrated for his profound poetry'
    }
];

function showpoets() {
    var authors_cards = document.getElementById("auth-sec");
    authors_cards.innerHTML = "";
    for (var p = 0; p < poets.length; p++) {
        authors_cards.innerHTML += `
            <div class="authors-div col-lg-10 col-md-10 col-sm-10 col-xl-10 col-xxl-10 col-10">
                <div class="author-img-div col-lg-5 col-md-5 col-sm-12 col-12 col-xl-5 col-xxl-5" id="auth1">
                    <img src="${poets[p].poetimg}" alt="Allama Iqbal">
                </div>
                <div class="author-txt-div col-lg-6 col-md-6 col-sm-12 col-12 col-xl-6 col-xxl-6">
                    <div class="author-intro-div col-lg-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12 col-12">
                       <h1><span>${poets[p].first}</span>${poets[p].name}</h1>
                        <h6>${poets[p].intro}</h6>
                    </div>
                    <h3>Education Background</h3>
                    <div class="author-edu-div col-lg-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12 col-12">
                        <div class="uni1-div col-lg-5 col-xl-5 col-xxl-5 col-md-5 col-sm-5 col-5">
                            <h5>${poets[p].clg}</h5>
                            <h6>${poets[p].year1}</h6>
                            <p>${poets[p].intro1}</p>
                        </div>
                        <div class="uni2-div col-lg-5 col-xl-5 col-xxl-5 col-md-5 col-sm-5 col-5">
                            <h5>${poets[p].uni}</h5>
                            <h6>${poets[p].year2}</h6>
                            <p>${poets[p].intro2}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
window.onload = showpoets();


window.addEventListener("scroll", function() {

    var scrollPosition = window.scrollY;
    var header = document.querySelector(".navbar1");
    var name = document.getElementById("logo-txt");
    var tags = document.querySelectorAll(".links");
      
    if (scrollPosition > 100) {
    tags.forEach(function(tag) {
    tag.style.cssText = "color:darkblue;"
     });
      header.style.cssText = "box-shadow: 2px 2px 15px #bbb7b7;background-color: white;outline: 1;border: 1px solid #bbb7b7;";
      name.style.cssText = "color: darkblue;";
    } 

    else {

        tags.forEach(function(tag) {
            tag.style.cssText = "color:white;"
            });
            name.style.cssText = "color: white;";
            header.style.cssText = "background-color:#0018A8;";
    }

  });





// Call the function to initialize


















// header.style.cssText = "    box-shadow: 2px 2px 15px #bbb7b7;background-color: white;outline: 1;border: 1px solid #bbb7b7;"
// name.style.cssText = "color: darkblue;";


// }
//  changeheader();