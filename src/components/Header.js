import React from 'react';
import '../css/Header.css';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id='mstopWrap'>
            <div id='gnb'>
                <div className='sub_gnb_wrap'>
                    <div className='sub_gnb_wrap_inner'>
                        <h1 class="logo">
                            <a href="/" title="스타벅스 메인페이지">스타벅스 코리아</a>
                        </h1>
                        <nav class="util_nav">
                            <ul>
                                <li class="util_nav01_sign_out" ><a href="javascript:void(0);">Sign out</a></li>
                                <li class="util_nav01_sign_in"><Link to="/signIn">Sign In</Link></li>
                                <li class="util_nav02"><a href="javascript:void(0);" required="login" data-href="/my/index.do">My Starbucks</a></li>
                                <li class="util_nav03"><Link to="/customer">Customer Service &amp; Ideas</Link></li>
                                <li class="util_nav04"><Link to="/findstore">Find a Store</Link></li>
                            </ul>
                        </nav>
                        <p class="btn_search">
                            <a href="javascript:void(0);"><img alt="통합검색" src="//image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png" /></a>
                            <label for="totalSearch" class="a11y">통합검색</label><input id="totalSearch" placeholder="통합검색" type="text" /></p>
                    </div>
                    <nav className='sub_gnb_nav'>
                        <div className='sub_gnb_nav_inner'>
                            <ul>
                                <li className='gnb_nav01'>
                                    <h2>
                                        <a href='/coffee/index.do' class>COFFEE</a>
                                    </h2>
                                    <div class="gnb_sub_wrap">
                                        <div class="gnb_sub">
                                            <div class="gnb_sub_inner">
                                                <ul>
                                                    <li class="gnb_sub_ttl"><a href="/coffee/product_list.do">커피</a></li>
                                                    <li><a href="/coffee/product_list.do">스타벅스 원두</a></li>
                                                    <li><a href="/coffee/product_list.do?PACKAGE=01">스타벅스 비아</a></li>
                                                    <li><a href="/coffee/product_list.do?PACKAGE=05">스타벅스앳홈 by 캡슐</a></li>
                                                    <li><a href="/coffee/productFinder.do">나와 어울리는 커피</a></li>
                                                </ul>
                                                <ul>
                                                    <li class="gnb_sub_ttl"><a href="/coffee/story.do">커피 이야기</a></li>
                                                    <li><a href="/coffee/story.do">농장에서 우리의 손으로</a></li>
                                                    <li><a href="/coffee/story.do?PACKAGE=02">최상의 아라비카 원두</a></li>
                                                    <li><a href="/coffee/story.do?PACKAGE=03">스타벅스 로스트 스펙트럼</a></li>
                                                    <li><a href="/coffee/story.do?PACKAGE=05">스타벅스 디카페인</a></li>
                                                </ul>
                                                <ul>
                                                    <li class="gnb_sub_ttl"><a href="/coffee/reserve_info.do">스타벅스 리저브</a></li>
                                                    <li><a href="/coffee/reserve_magazine_list.do">RESERVE MAGAZINE</a></li>
                                                </ul>
                                                <ul>
                                                    <li class="gnb_sub_ttl"><a href="/coffee/espresso.do">에스프레소 음료</a></li>
                                                    <li><a href="/coffee/doppio.do">도피오</a></li>
                                                    <li><a href="/coffee/espresso_macchiato.do">에스프레소 마키아또</a></li>
                                                    <li><a href="/coffee/americano.do">아메리카노</a></li>
                                                    <li><a href="/coffee/caramel_macchato.do">마키아또</a></li>
                                                    <li><a href="/coffee/cappuccino.do">카푸치노</a></li>
                                                    <li><a href="/coffee/latte.do">라떼</a></li>
                                                    <li><a href="/coffee/mocha.do">모카</a></li>
                                                </ul>
                                                <ul>
                                                    <li class="gnb_sub_ttl"><a href="/coffee/higher_enjoy.do">최상의 커피를 즐기는 법</a></li>
                                                    <li><a href="/coffee/higher_enjoy.do">커피 프레스</a></li>
                                                    <li><a href="/coffee/higher_enjoy.do?PACKAGE=01">푸어 오버</a></li>
                                                    <li><a href="/coffee/higher_enjoy.do?PACKAGE=02">아이스 푸어 오버</a></li>
                                                    <li><a href="/coffee/higher_enjoy.do?PACKAGE=03">커피 메이커</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className='gnb_nav02'>
                                    <h2>
                                        <a href='/menu/index.do' class>MENU</a>
                                    </h2>
                                    <div className="gnb_sub_wrap">
                                        <div className="gnb_sub">
                                            <div className="gnb_sub_inner">
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/menu/drink_list.do">음료</a></li>
                                                    <li><a href="/menu/drink_list.do?CATE_CD=product_cold_brew">콜드 브루</a></li>
                                                    <li><a href="/menu/drink_list.do?CATE_CD=product_brewed">브루드 커피</a></li>
                                                    <li><a href="/menu/drink_list.do?CATE_CD=product_espresso">에스프레소</a></li>
                                                    <li><a href="/menu/drink_list.do?CATE_CD=product_frappuccino">프라푸치노</a></li>
                                                    <li><a href="/menu/drink_list.do?CATE_CD=product_blended">블렌디드</a></li>
                                                    <li><a href="/menu/drink_list.do?CATE_CD=product_refresher">스타벅스 리프레셔</a></li>
                                                    <li><a href="/menu/drink_list.do?CATE_CD=product_fizzio">스타벅스 피지오</a></li>
                                                    <li><a href="/menu/drink_list.do?CATE_CD=product_tea">티(티바나)</a></li>
                                                    <li><a href="/menu/drink_list.do?CATE_CD=product_etc">기타 제조 음료</a></li>
                                                    <li><a href="/menu/drink_list.do?CATE_CD=product_juice">스타벅스 주스(병음료)</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/menu/food_list.do">푸드</a></li>
                                                    <li><a href="/menu/food_list.do?CATE_CD=product_bakery">브레드</a></li>
                                                    <li><a href="/menu/food_list.do?CATE_CD=product_cake">케이크</a></li>
                                                    <li><a href="/menu/food_list.do?CATE_CD=product_sandwich">샌드위치 &amp; 샐러드</a></li>
                                                    <li><a href="/menu/food_list.do?CATE_CD=product_hot_food">따뜻한 푸드</a></li>
                                                    <li><a href="/menu/food_list.do?CATE_CD=product_fruit_yogurt">과일 &amp; 요거트</a></li>
                                                    <li><a href="/menu/food_list.do?CATE_CD=product_snack">스낵 &amp; 미니 디저트</a></li>
                                                    <li><a href="/menu/food_list.do?CATE_CD=product_icecream">아이스크림</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/menu/product_list.do">상품</a></li>
                                                    <li><a href="/menu/product_list.do?CATE_CD=product_mug">머그</a></li>
                                                    <li><a href="/menu/product_list.do?CATE_CD=product_glass">글라스</a></li>
                                                    <li><a href="/menu/product_list.do?CATE_CD=product_plastic">플라스틱 텀블러</a></li>
                                                    <li><a href="/menu/product_list.do?CATE_CD=product_stainless">스테인리스 텀블러</a></li>
                                                    <li><a href="/menu/product_list.do?CATE_CD=product_vacuum">보온병</a></li>
                                                    <li><a href="/menu/product_list.do?CATE_CD=product_accessories">액세서리</a></li>
                                                    <li><a href="/menu/product_list.do?CATE_CD=product_present">선물세트</a></li>
                                                    <li><a href="/menu/product_list.do?CATE_CD=product_coffee">커피 용품</a></li>
                                                    <li><a href="/menu/product_list.do?CATE_CD=product_teaPackage">패키지 티(티바나)</a></li>
                                                    <li><a href="/menu/product_list.do?CATE_CD=product_syrup">시럽</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/menu/card_list.do">카드</a></li>
                                                    <li><a href="/menu/card_list.do?CATE_CD=product_offline">실물카드</a></li>
                                                    <li><a href="/menu/card_list.do?CATE_CD=product_egift">e-Gift 카드</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a>메뉴 이야기</a></li>
                                                    <li><a href="/menuStory/teavana.do">스타벅스 티바나</a></li>
                                                    <li><a href="/store/store_coldbrew.do">스타벅스 콜드 브루</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className='gnb_nav03'>
                                    <h2>
                                        <a href='/store/index.do' class>STORE</a>
                                    </h2>
                                    <div className="gnb_sub_wrap">
                                        <div className="gnb_sub">
                                            <div className="gnb_sub_inner">
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/store/store_map.do">매장 찾기</a></li>
                                                    <li><a href="/store/store_map.do?disp=quick">퀵 검색</a></li>
                                                    <li><a href="/store/store_map.do?disp=locale">지역 검색</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/store/store_drive.do">드라이브 스루 매장</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/store/store_reserve.do">스타벅스 리저브 매장</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/store/store_community.do">커뮤니티 스토어 매장</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className='gnb_nav04'>
                                    <h2>
                                        <a href='/responsibility/index.do' class>RESPONSIBILITY</a>
                                    </h2>
                                    <div className="gnb_sub_wrap">
                                        <div className="gnb_sub">
                                            <div className="gnb_sub_inner">
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/responsibility/starbucks_shared_planet.do">사회공헌 캠페인 소개</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/responsibility/hope_delivery.do">지역 사회 참여 활동</a></li>
                                                    <li><a href="/responsibility/hope_delivery.do">희망배달 캠페인</a></li>
                                                    <li><a href="/responsibility/talent_donation.do">재능기부 카페 소식</a></li>
                                                    <li><a href="/responsibility/community_store.do">커뮤니티 스토어</a></li>
                                                    <li><a href="/responsibility/youth_resource.do">청년 지원 프로그램</a></li>
                                                    <li><a href="/responsibility/our_agriculture.do">우리 농산물 사랑 캠페인</a></li>
                                                    <li><a href="/responsibility/our_culture_defend.do">우리 문화 지키기</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/responsibility/environment.do">환경보호 활동</a></li>
                                                    <li><a href="/responsibility/environment.do">친환경 활동</a></li>
                                                    <li><a href="/responsibility/no_disposable_cup.do">일회용 컵 없는 매장</a></li>
                                                    <li><a href="/responsibility/bean_recycling.do">커피 원두 재활용</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/responsibility/ethically_sourcing.do">윤리 구매</a></li>
                                                    <li><a href="/responsibility/ethically_sourcing.do">윤리적 원두 구매</a></li>
                                                    <li><a href="/responsibility/fair_trade.do">공정무역 인증</a></li>
                                                    <li><a href="/responsibility/farmer_support.do">커피 농가 지원 활동</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/responsibility/sp_ethical_management.do">글로벌 사회 공헌</a></li>
                                                    <li><a href="/responsibility/sp_ethical_management.do">윤리경영 보고서</a></li>
                                                    <li><a href="/responsibility/starbucks_foundation.do">스타벅스 재단</a></li>
                                                    <li><a href="/responsibility/sp_global_month.do">지구촌 봉사의 달</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className='gnb_nav05'>
                                    <h2>
                                        <a href='/msr/index.do' class>STARBUCKS REWARDS</a>
                                    </h2>
                                    <div className="gnb_sub_wrap">
                                        <div className="gnb_sub">
                                            <div className="gnb_sub_inner">
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/msr/msreward/about.do">스타벅스 리워드</a></li>
                                                    <li><a href="/msr/msreward/about.do">스타벅스 리워드 소개</a></li>
                                                    <li><a href="/msr/msreward/level_benefit.do">등급 및 혜택</a></li>
                                                    <li><a href="/msr/msreward/star.do">스타벅스 별</a></li>
                                                    <li><a href="/community/faq.do?menu_cd=STB2703&cate=F17">자주 하는 질문</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/msr/scard/about.do">스타벅스 카드</a></li>
                                                    <li><a href="/msr/scard/about.do">스타벅스 카드 소개</a></li>
                                                    <li><a href="/msr/scard/scard_gallery.do">스타벅스 카드 갤러리</a></li>
                                                    <li><a href="/msr/scard/register_inquiry.do">등록 및 조회</a></li>
                                                    <li><a href="/msr/scard/charge_information.do">충전 및 이용안내</a></li>
                                                    <li><a href="/msr/scard/lost_report.do">분실신고/환불신청</a></li>
                                                    <li><a href="/community/faq.do?menu_cd=STB2703&cate=F05">자주 하는 질문</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/msr/sceGift/egift_information.do">스타벅스 e-Gift Card</a></li>
                                                    <li><a href="/msr/sceGift/egift_information.do">스타벅스 e-Gift Card 소개</a></li>
                                                    <li><a href="/msr/sceGift/msr_useguide.do">이용안내</a></li>
                                                    <li><a href="javascript:void(0);" required="login" data-href="/msr/sceGift/gift_step1.do">선물하기</a></li>
                                                    <li><a href="/community/faq.do?menu_cd=STB2703&cate=F22">자주 하는 질문</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className='gnb_nav07'>
                                    <h2>
                                        <a href="/footer/co_sales/index.do" class="">CORPORATE SALES</a>
                                    </h2>
                                    <div className="gnb_sub_wrap">
                                        <div className="gnb_sub">
                                            <div className="gnb_sub_inner">
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/footer/co_sales/index.do">단체 및 기업 구매 안내</a></li>
                                                    <li><a href="/footer/co_sales/index.do?PRODUCT=md">MD 상품</a></li>
                                                    <li><a href="/footer/co_sales/index.do?PRODUCT=card">실물카드</a></li>
                                                    <li><a href="/footer/co_sales/index.do?PRODUCT=mms">e-Gift Card(MMS)</a></li>
                                                    <li><a href="/footer/co_sales/index.do?PRODUCT=bulk">e-Gift Card(BULK)</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/footer/group_order/index.do">단체 주문 배달 안내</a></li>
                                                    <li><a href="/footer/group_order/index.do">단체 주문 배달 안내</a></li>
                                                    <li><a href="/footer/group_order/order.do">단체 주문 신청</a></li>
                                                    <li><a href="/footer/group_order/list.do">신청 내역 조회</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="gnb_sub_txbg">
                                            <div className="gnb_sub_tx_inner">
                                                <div className="gnb_sub_tx_left"></div>
                                                <div className="gnb_sub_tx_right"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className='gnb_nav06'>
                                    <h2>
                                        <a href="/whats_new/index.do" class="">WHAT'S NEW</a>
                                    </h2>
                                    <div className="gnb_sub_wrap">
                                        <div className="gnb_sub">
                                            <div className="gnb_sub_inner">
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/whats_new/campaign_list.do">이벤트</a></li>
                                                    <li><a href="/whats_new/campaign_list.do">전체</a></li>
                                                    <li><a href="/whats_new/campaign_list.do?menu_cd=STB2812">스타벅스 카드</a></li>
                                                    <li><a href="/whats_new/campaign_list.do?menu_cd=STB2813">스타벅스 리워드</a></li>
                                                    <li><a href="/whats_new/campaign_list.do?menu_cd=STB2814">온라인</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/whats_new/news_list.do">뉴스</a></li>
                                                    <li><a href="/whats_new/news_list.do">전체</a></li>
                                                    <li><a href="/whats_new/news_list.do?cate=N01">상품 출시</a></li>
                                                    <li><a href="/whats_new/news_list.do?cate=N02">스타벅스와 문화</a></li>
                                                    <li><a href="/whats_new/news_list.do?cate=N03">스타벅스 사회공헌</a></li>
                                                    <li><a href="/whats_new/news_list.do?cate=N04">스타벅스 카드출시</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/whats_new/store_event_list.do">매장별 이벤트</a></li>
                                                    <li><a href="/whats_new/store_event_list.do">일반 매장</a></li>
                                                    <li><a href="/whats_new/store_event_list.do?search_date=1&amp;tab=1">신규 매장</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/whats_new/notice_list.do">공지사항</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="gnb_sub_ttl"><a href="/whats_new/wallpaper.do">월페이퍼</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </div>



    );
}

export default Header;
