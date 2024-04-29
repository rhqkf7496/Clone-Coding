import React from 'react';
import '../css/Content.css';

function Content() {
    return (
        <div id='container'>
            <div id='topWrap'>
                <div className="layer_floating">

                    <div className="badge_cont2">
                        <a href="https://www.starbucks.co.kr/footer/co_sales/index.do" onclick="GaFloating('B2B 기업 구매 페이지')">
                            <img src="https://image.istarbucks.co.kr/upload/banner/floatingbnr/Mn0ecH_20220711153123340.png" alt="B2B 기업 구매 페이지" class="pc-badge" />
                            <img src="https://image.istarbucks.co.kr/upload/banner/floatingbnr/Mn0ecH_20220711153127215.png" alt="B2B 기업 구매 페이지" class="mobile-badge" />
                        </a>
                    </div>

                </div>

                <div className='main-visual_wrap'>
                    <div className='main-visual_inner'>
                        <div class="main-visual_slogan">
                            <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_4_dreamy_top_logo.png" alt="MEET THE ENERGETIC MOMENT" class="pc-slogan" />
                            <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_4_dreamy_top_logo_m.png" alt="MEET THE ENERGETIC MOMENT" class="m-slogan" />
                        </div>
                        <div className="main-visual_set">
                            <div className="set_common set_01">
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_4_dreamy_top_drink1.png" alt="라이트 핑크 자몽 피지오" class="pc-drink" />
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_4_dreamy_top_drink1_m.png" alt="라이트 핑크 자몽 피지오" class="m-drink" />
                            </div>
                            <div className="set_common set_02">
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_4_dreamy_top_drink2.png" alt="피스타치오 크림 콜드 브루" class="pc-drink" />
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_4_dreamy_top_drink2_m.png" alt="피스타치오 크림 콜드 브루" class="m-drink" />
                            </div>
                            <div className="set_common set_03">
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_4_dreamy_top_drink3.png" alt="슈크림 라떼" class="pc-drink" />
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_4_dreamy_top_drink3_m.png" alt="슈크림 라떼" class="m-drink" />
                            </div>
                        </div>

                        <div class="btn_slogan">
                            <a href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=2447">자세히 보기</a>
                        </div>

                    </div>

                </div>
            </div>

            <section className='line_notice'>
                <div className="line_notice_left"></div>
                <div className="line_notice_right"></div>
                <div className='line_notice_bg'>
                    <div className='line_notice_bgl'>
                        <div className="line_notice_inner">
                            <dl className="line_notice_inner_l">
                                <dt className="notice_ttl">
                                    <img src="https://image.istarbucks.co.kr/common/img/common/notice_ttl.png" alt="공지사항" />
                                </dt>
                                <dd>
                                    <ul className="news_result">
                                        <li><a href="/whats_new/noticeView.do?seq=5376">My DT Pass 삼성신용/체크카드 서비스 종료 안내</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <p className="line_notice_inner_r">
                                <span><a href="/whats_new/notice_list.do" title="공지사항 더보기">더보기</a></span>
                            </p>
                        </div>
                    </div>

                    <div className='line_botice_bgr'>
                        <a href="javascript:void(0);">
                            <p className="prom_ttl">스타벅스 프로모션</p>
                            <span className="btn_prom"><img src="https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png" alt="스타벅스 프로모션 펼쳐보기" role="button" /></span>
                        </a>

                    </div>
                </div>
            </section>
            <section className='new-rewards_wrap'>
                <div className='new-rewards_inner'>
                    <div className="new-rewards_logo">
                        <img src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png" alt="Starbucks Rewards" />
                    </div>
                    <div className='new-rewards_conts'>
                        <div className='info-cont'>
                            <div className='info-cont-txt'>
                                <h2 className='h2'>스타벅스만의 특별한 혜택,
                                    {/* <br className='mobile-br'/>
                                    <br className='pc-br'/> */}
                                    <strong>스타벅스 리워드</strong>
                                </h2>
                                <p className='p'>
                                    <strong>스타벅스 회원이세요?</strong> 로그인을 통해 나만의 리워드를 확인해보세요.
                                    <br />
                                    <strong>스타벅스 회원이 아니세요?</strong> 가입을 통해 리워드 혜택을 즐기세요.
                                </p>
                            </div>
                            <div className="btn-signin_group">
                                <a href="/mem/join.do" className="btn-signin_join">회원가입</a>
                                <a href="javascript:$.loginLib.showLayerLogin();" className="btn-signin_login">로그인</a>
                            </div>
                        </div>
                        <div className='gift-cont'>
                            <div className="gift-cont_txt">
                                <p>
                                    회원 가입 후, 스타벅스 e-Gift Card를 <strong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</strong><br></br>
                                    카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!
                                </p>
                            </div>
                            <div className="btn_egift">
                                <a href="/msr/sceGift/gift_step1.do">e-Gift Card 선물하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='main-bean_wrap'>
                <div className="main-bean_inner">
                    <div className="bean_img_box">
                        <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_Spring_promotion.png" alt="스프링 시즌 블렌드 250g" class="pc-bean" />
                        <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_m_Spring_promotion.png" alt="스프링 시즌 블렌드 250g" class="m-bean" />
                    </div>

                    <div className="bean_txt_box">
                        <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_Spring_promotion_txt_1.png" alt="코코아와 꿀처럼 달콤한 향과 부담스럽지 않은 산미와 바디로 누구나 편하게 즐길 수 있는 시즌 한정 원두" class="pc-bean-txt" />
                        <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_m_Spring_promotion_txt_1.png" alt="코코아와 꿀처럼 달콤한 향과 부담스럽지 않은 산미와 바디로 누구나 편하게 즐길 수 있는 시즌 한정 원두" class="m-bean-txt" />
                        <div className="btn_bean_detail">
                            <a href="https://www.starbucks.co.kr/coffee/product_view.do?PRODUCT_CD=11148767">자세히 보기</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='reserve_wrap'>
                <div className="reserve_inner">
                    <div className="reserve_title">
                        <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/240219_pc_reserve_logo.png" alt="EL SALVADOR" class="reserve_visual-pc" />
                    </div>

                    <div className="reserve_visual">
                        <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/240219_pc_reserve_coffee_bg.png" alt="" class="reserve_visual-pc" />
                        <img src="https://image.istarbucks.co.kr/upload/common/img/main/2024/240219_m_reserve_bg.jpg" alt="" class="reserve_visual-m" />
                    </div>

                    <div className="reserve_detail-btn_wrap">
                        <div className="reserve_detail-btn">
                            <a href="https://www.starbucks.co.kr/whats_new/newsView.do?seq=5330">자세히 보기</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id='favWrap' className='winter_fav_bg'>
                <div className='wrap_inner'>
                    <div className="fav_prod_txt01">PICK YOUR FAVORITE</div>
                    <div className="fav_prod_txt02">다양한 메뉴를 스타벅스에서 즐겨보세요. 스타벅스만의 특별함을 경험할 수 있는 최상의 선택 음료, 스타벅스 커피와 완벽한 어울림을 자랑하는 푸드, 다양한 시도와 디자인으로 가치를 더하는 상품, 소중한 사람에게 마음을 전하는 가장 좋은 방법 스타벅스 카드</div>
                    <div className="fav_img"></div>
                    <div className="btn_fav_prod"><a href="https://www.starbucks.co.kr/menu/index.do">자세히 보기</a></div>
                </div>
            </section>
            <section className='reserve_magazine_wrap'>
                <div className="reserve_inner">
                    <div className="reserve_title">
                        <img src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_text_pc.png" alt="리저브 매거진에서 일상 속 특별함을 만나보세요." class="reserve_visual-pc" />
                    </div>

                    <div className="reserve_visual">
                        <img src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_visual_pc.png" alt="" className="reserve_visual-pc" />
                        <img src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_visual_m.jpg" alt="" className="reserve_visual-m" />
                    </div>

                    <div className="reserve_detail-btn_wrap">
                        <div className="reserve_detail-btn">
                            <a href="/coffee/reserve_magazine_list.do">자세히 보기</a>
                        </div>
                    </div>
                </div><div className="reserve_inner">
                    <div className="reserve_title">
                        <img src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_text_pc.png" alt="리저브 매거진에서 일상 속 특별함을 만나보세요." class="reserve_visual-pc" />
                    </div>

                    <div class="reserve_visual">
                        <img src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_visual_pc.png" alt="" class="reserve_visual-pc" />
                        <img src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_visual_m.jpg" alt="" class="reserve_visual-m" />
                    </div>

                    <div class="reserve_detail-btn_wrap">
                        <div class="reserve_detail-btn">
                            <a href="/coffee/reserve_magazine_list.do">자세히 보기</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id='storeWrap'>
                <div class="wrap_inner">
                    <div class="store_exp_img01"></div>
                    <div class="store_exp_img02"></div>
                    <div class="store_exp_img03"></div>
                    <div class="store_exp_img04"></div>
                    <div class="store_txt01">스타벅스를 가까이에서 경험해보세요. 고객님과 가장 가까이 있는 매장을 찾아보세요!</div>
                    <div class="store_txt02">차별화된 커피 경험을 누릴 수 있는 리저브 매장, 다양한 방법으로 편리하게 즐길 수 있는 드라이브 스루 매장, 함께해서 더 따뜻할수 있는 지역사회 소통 공간 커뮤니티 매장</div>
                    <div class="store_btn"><a href="/store/store_map.do">매장 찾기</a></div>
                </div>

            </section>
        </div>
    );
}

export default Content;