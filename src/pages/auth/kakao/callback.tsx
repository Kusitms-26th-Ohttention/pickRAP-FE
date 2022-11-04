import { useRouter } from 'next/router';

const KakaoRedirectHandler = () => {
  const router = useRouter();
  // const setIsLoggedIn = useSetRecoilState(loginState);

  const code = router.query.code as string;
  // const { data } = useQuery({
  //   queryKey: ['accessToken', code],
  //   queryFn: () => api.loginUserService.requestLogin(code),
  //   onSuccess: () => {
  //     setIsLoggedIn(true);
  //     router.push('/');
  //   },
  //   onError: () => {
  //     console.error('로그인 에러');
  //   },
  //   enabled: !!code,
  // });

  return <></>;
};

export default KakaoRedirectHandler;
