import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <footer id='footer'>
            <div className='footer_wrap '>
                <div className='footer_menus'>
                    <ul class="footer_first_menu">
                        <li class="footer_menu_ttl">
                            <a class="en" href="javascript:void(0);">COMPANY<span class="footer_arrow_down"></span></a>
                        </li>
                        <li><a href="/footer/company/index.do">한눈에 보기</a></li>
                        <li><a href="/footer/company/mission.do">스타벅스 사명</a></li>
                        <li class="footer_2depth_ttl"><a href="javascript:void(0)">스타벅스 소개<span class="footer_arrow_down"></span></a></li>
                        <li class="footer_2depth_ttl2"><a href="javascript:void(0)">컴플라이언스<span class="footer_arrow_down"></span></a></li>
                        <li><a href="/footer/company/news_list.do">국내 뉴스룸</a></li>
                        <li><a href="/footer/company/global_starbucks.do">세계의 스타벅스</a></li>
                        <li><a href="https://news.starbucks.com" target="_blank">글로벌 뉴스룸</a></li>
                    </ul>

                    <ul>
                        <li class="footer_menu_ttl"><a class="en txt_under" id="goPage" href="javascript:void(0);">CORPORATE SALES<span class="footer_arrow_down"></span></a></li>
                        <li><a href="/footer/co_sales/index.do" onclick="Ga('ACTION_B2B_웹_메인_푸터_단체 및 기업 구매 안내_클릭')">단체 및 기업 구매 안내</a></li>
                        <li><a href="/footer/group_order/index.do">단체 주문 배달 안내</a></li>
                        
                    </ul>

                    <ul>
                        <li class="footer_menu_ttl"><a class="en" href="javascript:void(0);">PARTNERSHIP<span class="footer_arrow_down"></span></a></li>
                        <li><a href="/footer/partnership/new_partner.do">신규 입점 제의</a></li>
                        <li><a href="/footer/partnership/portal_systems.do">협력사 포털 시스템</a></li>
                        <li><a href="/srm/agency.do">중개업체 확인</a></li>
                    </ul>

                    <ul>
                        <li class="footer_menu_ttl"><a class="en" href="javascript:void(0);">ONLINE COMMUNITY<span class="footer_arrow_down"></span></a></li>
                        <li><a href="https://www.facebook.com/starbuckskorea" target="_blank">페이스북</a></li>
                        <li><a href="https://twitter.com/StarbucksKorea" target="_blank">트위터</a></li>
                        <li><a href="https://www.youtube.com/user/starbuckskorea" target="_blank">유튜브</a></li>
                        <li><a href="https://instagram.com/starbuckskorea/" target="_blank">인스타그램</a></li>
                    </ul>

                    <ul>
                        <li class="footer_menu_ttl"><a class="en" href="javascript:void(0);">RECRUIT<span class="footer_arrow_down"></span></a></li>
                        <li><a href="https://job.shinsegae.com/job_intro/starbucks/starbucks01.jsp">채용 소개</a></li>
                        <li><a href="https://job.shinsegae.com/recruit_info/notice/notice02_list.jsp?isSearch=Y&amp;tabKey0=&amp;notino=&amp;searchWord0=&amp;orderKey0=1&amp;strCareerVals=&amp;strRtlVals=&amp;strFodhtlVals=&amp;strFshnlvngVals=&amp;strFbbsnsVals=&amp;strRtlsprtVals=&amp;rtlTogYn=Y&amp;fodhtlTogYn=Y&amp;FshnlvngTogYn=Y&amp;fbbsnsTogYn=Y&amp;rtlsprtTogYn=Y&amp;searchWord1=&amp;careerAllVal=&amp;affFbbsnsVal=EE0" target="_blank">채용 지원하기</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer_util_btn">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li>
                        <a href="javascript:$.loginLib.showLayerLogin();" class="sign_in">Sign In</a>
                        <a href="javascript:$.loginLib.logout();" class="sign_out">Sign Out</a>
                    </li>
                    <li class="last"><a href="/mem/join1.do">Join Us</a></li>
                </ul>
            </div>

            <div class="footer_awards_wrap">
                <div class="footer_awards_wrap_inner">
                    <ul class="footer_awards_slider">
                        <li><a taget="_blank" href="javascript:void(0);"><img alt="여섯가족부 2020 대한민국 일자리대상 여성가족부장관상" src="//image.istarbucks.co.kr/img/event/2022/footer_award_2211_01.jpg" /></a></li>
                        <li><a taget="_blank" href="javascript:void(0);"><img alt="행정안전부 2020 소방의 날 행정안전부장관 표창" src="//image.istarbucks.co.kr/img/event/2022/footer_award_2211_02.jpg" /></a></li>
                        <li><a taget="_blank" href="javascript:void(0);"><img alt="농림축산식품부 2020 대한민국 커피산업대상 농림축산식품부 장관상" src="//image.istarbucks.co.kr/img/event/2022/footer_award_2211_03.jpg" /></a></li>
                        <li><a taget="_blank" href="javascript:void(0);"><img alt="산업통상자원부 2020 대한민국 중소중견기업혁신 대상 국회산업통상자원중소벤처위원회장상" src="//image.istarbucks.co.kr/img/event/2022/footer_award_2211_04.jpg" /></a></li>
                        <li><a taget="_blank" href="javascript:void(0);"><img alt="일자리위원회 2020 대한민국 일자리 유공 표창 대통령직속 일자리위원회 부위원장상" src="//image.istarbucks.co.kr/img/event/2022/footer_award_2211_05.jpg" /></a></li>
                        <li><a taget="_blank" href="javascript:void(0);"><img alt="동반성장위원회 2020 사랑나눔 사회공헌대상 동반성장위원회 위원장상" src="//image.istarbucks.co.kr/img/event/2022/footer_award_2211_06.jpg" /></a></li>
                        <li><a taget="_blank" href="javascript:void(0);"><img alt="소비자중심경영 CCM인증획득" src="//image.istarbucks.co.kr/img/event/2022/footer_award_2211_07.jpg" /></a></li>
                    </ul>
                    <div class="footer_slider_controller">
                        <div class="footer_slider_controls"></div>
                        <div class="footer_slider_pagers"></div>
                    </div>
                </div>
            </div>

            <aside class="copyright">
					<a class="c_00b050" href="/footer/etc/privacy.do">개인정보처리방침</a>
					<a href="/footer/etc/rules_vod.do" class="mbn">영상정보처리기기 운영관리 방침</a>
					<a href="/footer/etc/rules.do">홈페이지 이용약관</a>
					<a href="/footer/etc/rules_loc.do" class="mbn c_00b050">위치정보 이용약관</a>
					<a href="/footer/etc/rules_msr.do" class="mbn">스타벅스 카드 이용약관</a>
					<a href="/footer/etc/rules_membership.do">신세계 유니버스 클럽 이용약관</a>
					<a href="/footer/etc/rules_non.do" class="mbn">비회원 이용약관</a>
					<span class="br">
					<a href="/footer/etc/rules_mdp.do">My DT Pass 서비스 이용약관</a></span>
					<a href="/footer/etc/hotline.do" class="last">윤리경영 핫라인</a>
                    <br></br>
					<a class="btned_link" href="/footer/etc/coming_route.do">찾아오시는 길</a>
					<a class="btned_link" href="/footer/partnership/new_partner.do">신규입점제의</a>
					<a class="btned_link" href="/footer/etc/sitemap.do">사이트 맵</a>
					<ul class="copy_menu">
						<li>사업자등록번호 : 201-81-21515</li>
						<li>주식회사 에스씨케이컴퍼니 대표이사 : 손정현</li>
						<li>TEL : 1522-3232</li>
						<li>개인정보 보호책임자 : 이찬우</li>
					</ul>
					<span class="en">ⓒ 2024 Starbucks Coffee Company. All Rights Reserved.</span>
				</aside>
        </footer>

    );
}

export default Footer;