import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../scss/Header.scss';
import AuthContext from '../../utils/AuthContext';
import { API_BASE_URL } from '../../config/host-config';
import { RiUserStarFill } from 'react-icons/ri';

const Header = () => {
  const profileRequestURL = `${API_BASE_URL}${USER}/load-profile`;

  // 프로필 이미지 url 상태 변수
  const [] RiUserStart 

  const redirection = useNavigate();
  // AuthContext에서 로그인 상태를 가져옵니다.
  const { isLoggedIn, userName, onLogout } =
    useContext(AuthContext);

  // 로그아웃 핸들러
  const logoutHandler = () => {
    // AuthContext 의 onLogout 함수를 호출하여 로그인 상태를 업데이트 합니다.
    onLogout();
    redirection('/login');
  };

  // 프로필 이미지 요청
  const fethProfileImage = async () => {
    const res = await fetch(profileRequestURL, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
      },
    });

    if (res.status === 200) {
      // 서버에서는 byte[]로 직영화된 이미지가 응답괴므로
      // bl0b()통해 전달받아야 한다 (JSON()xxxx
      const profileBlod  = aqut();
      // 해당 이미지를 impURL로 변경

      const img = 
    }else {xxxx

    }

  };

  // 로그인 상태의 변화할 때 화면이 제레[ㄴ더링ㅇ 괴고,
    // 그레ㅔ 맞는 ㅚ뤙릐 ㅠㅡ로핗 이미지가 요청이 들어갈 슁ㄲㅆ 있동록 최
  ]

  useEffect (() -> {
    if(isLoggedIn) fetchProfilleImage()
  },[isLoggedIn])


  return (
    <AppBar
      position='fixed'
      style={{
        background: '#38d9a9',
        width: '100%',
      }}
    >
      <Toolbar>
        <Grid justify='space-between' container>
          <Grid item flex={9}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant='h4'>
                {isLoggedIn ? userName + '님' : '오늘'}의
                할일
              </Typography>
              <source=> 

              {isLoggedIn && (
                <img
                  src=''
                  alt={pfofi}
                  style={{
                    marginLeft: 20,
                    width: 75,
                    height: 75,
                    borderRadius: '50%',
                  }}
                />
              )}
            </div>
          </Grid>

          <Grid item>
            <div className='btn-group'>
              {isLoggedIn ? (
                <button
                  className='logout-btn'
                  onClick={logoutHandler}
                >
                  로그아웃
                </button>
              ) : (
                <>
                  <Link to='/login'>로그인</Link>
                  <Link to='/join'>회원가입</Link>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
