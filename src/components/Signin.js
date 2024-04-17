import '../css/Signin.css';


function Signin() {
    return (
        <div id='container'>
            <div className="new_login_bg_wrap">
                <div className='find_mem_wrap mem_wrap2'>
                    <div className='find_mem_inner'>
                        <form id="frmLogin" action="/login/login_proc.do" method="post">
                            <fieldset>
                                <legend className="hid">회원가입 이용약관 동의, 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간 및 파기절차, 파기 방법에 관한 폼</legend>
                                <strong className="new_login_ttl">로그인</strong>
                                <section className="renew_joinform_v2">
                                    <p className="find_form_txt">
                                        <span className="t_006633">Welcome!</span> 스타벅스 코리아에 오신 것을 환영합니다.
                                    </p>
                                    <div className="renew_input_box bd_none">
                                        <label htmlFor="txt_user_id" className="hid">아이디</label>
                                        <input className="login_id mb10" id="txt_user_id" name="user_id" type="text" maxLength="20" placeholder="아이디를 입력해 주세요." required />
                                        <p className="limit_txt user_id_txt"></p>
                                        <label htmlFor="txt_user_pwd" className="hid">비밀번호</label>
                                        <input className="login_pw mb10" id="txt_user_pwd" name="user_pwd" type="password" maxLength="20" placeholder="비밀번호를 입력해 주세요." required autoComplete="off" />
                                        <p className="limit_txt user_pwd_txt"></p>
                                        <span className="checkWrap">
                                            <input type="checkbox" name="idRemb" id="idRemb" className="mem2" />
                                            <label htmlFor="idRemb">아이디 저장</label>
                                        </span>
                                        <p className="btn_mem_login">
                                            <a class="btn_login" href="javascript:void(0);" role="submit">로그인</a>
                                        </p>
                                        <p className="input_warn_text t_006633">
                                            * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이 있으므로, 정기적인 비밀번호 변경을 해주시길 바랍니다.<br />
                                            * 스타벅스 코리아의 공식 홈페이지는 Internet Explorer 9.0 이상, Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.
                                        </p>
                                    </div>
                                    <div className="login_btn_wrap">
                                        <ul>
                                            <li><a href="/mem/join1.do">회원가입</a></li>
                                            <li><a href="/mem/find_id1.do">아이디 찾기</a></li>
                                            <li className="last"><a href="/mem/find_pwd1.do">비밀번호 찾기</a></li>
                                        </ul>
                                    </div>
                                </section>

                            </fieldset>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Signin;