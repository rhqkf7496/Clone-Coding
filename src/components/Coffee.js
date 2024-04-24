import '../css/Coffee.css';

function Coffee() {
    return (
        <div id='container'>
            <div class="sub_tit_wrap">
                <div class="sub_tit_inner">
                    <h2><img src="//image.istarbucks.co.kr/common/img/coffee/coffee_tit.jpg" alt="COFFEE" /></h2>
                    <ul class="smap">
                        <li><a href="/"><img src="//image.istarbucks.co.kr/common/img/common/icon_home.png" alt="홈으로" /></a></li>
                        <li><img class="arrow" src="//image.istarbucks.co.kr/common/img/common/icon_arrow.png" alt="하위메뉴" /></li>
                        <li class="en"><a href="/coffee/index.do" class="this ">COFFEE</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Coffee;