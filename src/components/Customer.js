import React from 'react';
import '../css/Customer.css';

function Customer() {
    return (
        <div id='container'>
            <header class="ms_sub_tit_wrap">
                <div class="ms_sub_tit_bg">
                    <div class="ms_sub_tit_inner">
                        <h4>
                            <img alt="Customer Service &amp; Idea" src="//image.istarbucks.co.kr/common/img/util/csi/csi_ttl.png" />
                        </h4>
                        <ul class="smap">
                            <li><a href="/"><img src="//image.istarbucks.co.kr/common/img/common/icon_home_w.png" alt="홈으로" /></a></li>
                            <li><img class="arrow" src="//image.istarbucks.co.kr/common/img/common/icon_arrow_w.png" alt="하위메뉴" /></li>
                            <li><a href="/util/index.do"><span class="en">Customer
                                Service &amp; Ideas</span></a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className='mm'>
                <div className='ms_cont_wrap'>
                    <div className='ms_cont'>
                        <form className='faq_search_frm' method='post' onSubmit="return false">
                            <fieldset>
                                <legend>FAQ, 이용안내, 팁 검색폼</legend>
                                <div class="main_search_bg">
                                    <img class="m_pic" src="//image.istarbucks.co.kr/common/img/util/csi/m_main_search_bg.png" alt="" />
                                    <div class="main_search_txt">
                                        <strong>궁금하신 점을 검색해 보세요.</strong>
                                        <p>
                                            검색창에 원하는 정보를 키워드로 입력하세요.<br />
                                            FAQ, 이용 안내, 팁 등 다양한 내용을 검색을 통해 확인하실 수 있습니다.
                                        </p>
                                    </div>
                                    <div class="main_search_input">
                                        <input placeholder="검색어를 입력하세요" type="text" name="msr_bar01" id="msr_bar01" /> <a href="javascript:searchBtn('S');" class="sch_btn" id="sch_btn">검색</a>
                                    </div>
                                    <ul>
                                        <li class="main_search_key01"><a href="javascript:searchBtn('A', '카드 등록')">카드 등록</a></li>
                                        <li class="main_search_key02"><a href="javascript:searchBtn('A', '골드 레벨')">골드 레벨</a></li>
                                        <li class="main_search_key03"><a href="javascript:searchBtn('A', '별 적립')">별 적립</a></li>
                                        <li class="main_search_key04"><a href="javascript:searchBtn('A', '생일 쿠폰')">생일 쿠폰</a></li>
                                    </ul>
                                </div>
                                <div class="faq_wrap">
                                    <div class="faq_wrap_inner">
                                        <div class="faq_wrap_inner_l">
                                            <strong class="en">FAQ</strong>
                                            <p>자주 하는 질문을 모아놓았습니다. 궁금하신 내용을 검색해 주세요.</p>
                                            <ul id="bestList" className="csi_faq_list1">
                                                <li><a href="javascript:faqView('0000006920', '000', '');">[쿠폰] e-쿠폰은 어떻게 사용할 수 있나요?</a></li>
                                                <li><a href="javascript:faqView('0000007349', '000', '');">[별] 별 적립 기준은 무엇인가요?</a></li>
                                                <li><a href="javascript:faqView('0000007423', '000', '');">[카드환불] 스타벅스 카드의 환불 기준은 무엇인가요?</a></li>
                                                <li><a href="javascript:faqView('0000007370', '000', '');">[골드레벨] 골드레벨은 어떻게 진입할 수 있나요?</a></li>
                                                <li><a href="javascript:faqView('0000007049', '000', '');">[에코매장] 에코매장 리유저블컵의 반납은 어떻게 하나요?</a></li>
                                            </ul>
                                        </div>
                                        <div class="faq_wrap_inner_r">
                                            <strong>고객의 소리</strong>
                                            <p>문의에 대한 처리현황을 확인할 수 있습니다.</p>
                                            <div class="voc_login">
                                                <div class="voc_login_inner">
                                                    <figure>
                                                        <img alt="" src="//image.istarbucks.co.kr/common/img/util/csi/voc_login_pic.png" />
                                                    </figure>
                                                    <p>
                                                        <span>로그인이 필요한<br />서비스입니다.
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <a class="btn_login" href="javascript:$.loginLib.showLayerLogin();">로그인</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='sb_use_tip_wrap'>
                                    <header>
                                        <h5 id="hTap">홈페이지 이용 팁</h5>
                                        <aside>
                                            <span class="tip_num"><strong>1</strong>/2</span>
                                            <p>
                                                <a class="back" href="javascript:void(0);">앞으로</a>
                                                <a class="forward" href="javascript:void(0);">뒤로</a>
                                            </p>
                                        </aside>
                                    </header>
                                    <section className='sb_use_tip_slide'>
                                        <div className='sb_slide_wrap on web'>
                                            <div className="bx-wrapper">
                                                <div className="bx-viewport">
                                                    <ul className="webWrap">
                                                        <li className="bx-clone">
                                                            <a href="/util/website_tip_view.do?status=web&seq=2301">
                                                                <figure><img alt="" src="//image.istarbucks.co.kr/upload/tip/WvocTV_20171116064030118.jpg" /></figure>
                                                                <div>
                                                                    <p>
                                                                        <span><strong>빠르고 편리한 매장 찾기 서비스</strong></span>
                                                                        <span></span>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li class="bx-clone">
                                                            <a href="/util/website_tip_view.do?status=web&amp;seq=2300">
                                                                <figure><img alt="" src="//image.istarbucks.co.kr/upload/tip/AoJaXh_20150811140826043.jpg" /></figure>
                                                                <div>
                                                                    <p>
                                                                        <span><strong>다양한 스타벅스 콘텐츠</strong></span>
                                                                        <span></span>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="/util/website_tip_view.do?status=web&amp;seq=2304">
                                                                <figure><img alt="" src="//image.istarbucks.co.kr/upload/tip/AoJaXh_20150811141338012.jpg" /></figure>
                                                                <div>
                                                                    <p>
                                                                        <span><strong>나만의 맞춤형 통계 정보</strong></span>
                                                                        <span></span>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="/util/website_tip_view.do?status=web&amp;seq=2303">
                                                                <figure><img alt="" src="//image.istarbucks.co.kr/upload/tip/bUgEMv_20210819161042454.jpg" /></figure>
                                                                <div>
                                                                    <p>
                                                                        <span><strong>한눈에 보는 스타벅스 리워드 정보</strong></span>
                                                                        <span></span>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="/util/website_tip_view.do?status=web&amp;seq=2302">
                                                                <figure><img alt="" src="//image.istarbucks.co.kr/upload/tip/AoJaXh_20150811141057829.jpg" /></figure>
                                                                <div>
                                                                    <p>
                                                                        <span><strong>일상을 공유하는 My  캘린더</strong></span>
                                                                        <span></span>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="/util/website_tip_view.do?status=web&amp;seq=2301">
                                                                <figure><img alt="" src="//image.istarbucks.co.kr/upload/tip/WvocTV_20171116064030118.jpg" /></figure>
                                                                <div>
                                                                    <p>
                                                                        <span><strong>빠르고 편리한 매장 찾기 서비스</strong></span>
                                                                        <span></span>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="/util/website_tip_view.do?status=web&amp;seq=2300">
                                                                <figure><img alt="" src="//image.istarbucks.co.kr/upload/tip/AoJaXh_20150811140826043.jpg" /></figure>
                                                                <div>
                                                                    <p>
                                                                        <span><strong>다양한 스타벅스 콘텐츠</strong></span>
                                                                        <span></span>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li class="bx-clone">
                                                            <a href="/util/website_tip_view.do?status=web&amp;seq=2304">
                                                                <figure><img alt="" src="//image.istarbucks.co.kr/upload/tip/AoJaXh_20150811141338012.jpg" /></figure>
                                                                <div>
                                                                    <p>
                                                                        <span><strong>나만의 맞춤형 통계 정보</strong></span>
                                                                        <span></span>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bx-controls bx-has-controls-direction">
                                                    <div className="bx-controls-direction">
                                                        <a className="bx-prev" href="">Prev</a>
                                                        <a className="bx-next" href="">Next</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section className='sb_use_tip_each'>
                                        <ul>
                                            <li class="sb_use_tip_each1"><a href="/util/web_tip.do">
                                                <p>
                                                    <strong>홈페이지 이용 팁</strong><br />회원가입부터<br />카드등록까지 방법
                                                    안내
                                                </p>
                                            </a></li>

                                            <li class="sb_use_tip_each2"><a href="/util/app_tip.do">
                                                <p>
                                                    <strong>애플리케이션 이용 팁</strong><br />애플리케이션 다운로드
                                                </p>
                                            </a></li>

                                            <li class="sb_use_tip_each3"><a href="/util/partnership_card.do">
                                                <p>
                                                    <strong>제휴카드 안내</strong><br />스타벅스 할인 및 혜택<br />제휴카드
                                                    안내
                                                </p>
                                            </a></li>

                                        </ul>
                                    </section>
                                </div>
                            </fieldset >
                        </form >
                    </div >

                    <nav class="ms_nav" id="msRnb">
                        <ul className='vv'>
                            <li class="msRnb_btn"><a href="/util/faq.do">자주 하는 질문</a></li>
                            <li class="msRnb_btn"><a href="/customer/suggestionWrite.do">고객의 소리</a></li>
                            <li class="msRnb_btn"><a href="/util/storecareList.do">스토어 케어</a></li>
                            <li><a href="javascript:void(0);">스타벅스 이용 팁<span class="sbox_arrow_down"></span></a>
                                <ul>
                                    <li><a href="/util/web_tip.do">· 홈페이지 이용 팁</a></li>
                                    <li><a href="/util/app_tip.do">· 애플리케이션 이용 팁</a></li>
                                    <li><a href="/util/partnership_card.do">· 제휴카드 안내</a></li>
                                </ul></li>
                            <li class="msRnb_btn"><a href="/util/online_survey.do">고객 경험 설문조사</a></li>

                            <li class="msRnb_btn"><a href="/util/guest_eReceipt.do">비회원 전자영수증 조회</a></li>
                        </ul>
                    </nav>

                </div >
            </div >
        </div >
    );
}

export default Customer;