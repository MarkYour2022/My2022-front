//Init KAKAO API
if (!window.Kakao.isInitialized()) {
  // @ts-ignore
  //REST API KEY
  window.Kakao.init('9ac1829fbbfee48aff621ccf2440ac96');
  //@ts-ignore
  console.log(window.Kakao.isInitialized());
}

const userId = 'psb04027@naver.com';

const shareKakaoLink = (userId) => {
  // @ts-ignore
  window.Kakao.Link.createCustomButton({
    container: '#kakao-link-btn',
    templateId: 84780,
    templateArgs: {
      userId: `${userId}`,
    },
  });
};

const onShareKakaoClick = () => {
  shareKakaoLink(userId);
};