import React from 'react';
import '../css/Header.css';

function Header({ onSignIn, onCustomer, onFindStore }) {
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
                                <li class="util_nav01_sign_in"><a href="#" onClick={onSignIn}>Sign In</a></li>
                                <li class="util_nav02"><a href="javascript:void(0);" required="login" data-href="/my/index.do">My Starbucks</a></li>
                                <li class="util_nav03"><a href="#" onClick={onCustomer}>Customer Service &amp; Ideas</a></li>
                                <li class="util_nav04"><a href="#" onClick={onFindStore}>Find a Store</a></li>
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
                                </li>

                                <li className='gnb_nav02'>
                                    <h2>
                                        <a href='/menu/index.do' class>MENU</a>
                                    </h2>
                                </li>

                                <li className='gnb_nav03'>
                                    <h2>
                                        <a href='/store/index.do' class>STORE</a>
                                    </h2>
                                </li>

                                <li className='gnb_nav04'>
                                    <h2>
                                        <a href='/responsibility/index.do' class>RESPONSIBILITY</a>
                                    </h2>
                                </li>

                                <li className='gnb_nav05'>
                                    <h2>
                                        <a href='/msr/index.do' class>STARBUCKS REWARDS</a>
                                    </h2>
                                </li>

                                <li className='gnb_nav06'>
                                    <h2>
                                        <a href="/footer/co_sales/index.do" class="">CORPORATE SALES</a>
                                    </h2>
                                </li>

                                <li className='gnb_nav07'>
                                    <h2>
                                        <a href="/whats_new/index.do" class="">WHAT'S NEW</a>
                                    </h2>
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
