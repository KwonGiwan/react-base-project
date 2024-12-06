import { createSlice } from '@reduxjs/toolkit';

type ErrorModalState = {
  open: boolean;
  title: string;
  content: string;
  buttonText1: string;
};

const initialState: ErrorModalState = {
  open: false,
  title: '',
  content: '',
  buttonText1: '확인',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showLoginFailErrorMessage: (state) => {
      state.open = true;
      state.title = '로그인 실패';
      state.content = '이메일 또는 비밀번호를 다시 한번 확인해주세요.';
    },
    showLoginSelectFailErrorMessage: (state) => {
      state.open = true;
      state.title = '로그인 실패';
      state.content = '로그인 옵션을 다시 한번 확인해주세요.';
    },
    showCopyKeyMessage: (state, action) => {
      state.open = true;
      state.title = `${action.payload} Key`;
      state.content = 'Key가 복사 되었습니다!';
    },
    showReissueMessage: (state) => {
      state.open = true;
      state.title = 'Key 재발급';
      state.content = 'Key가 재발급 되었습니다. 새로운 Key를 이용해 주세요.';
    },
    showKeyErrorMessage: (state) => {
      state.open = true;
      state.title = 'Key 확인 오류';
      state.content =
        '계정을 확인하거나 일시적인 오류일 수 있으니 잠시 후 다시 시도해주세요.';
    },
    showDownloadUnAuthorized: (state) => {
      state.open = true;
      state.title = '권한 없음';
      state.content = 'SDK 다운로드 권한이 있는 계정으로 로그인해주세요.';
    },
    showDownloadError: (state) => {
      state.open = true;
      state.title = '다운로드 에러';
      state.content =
        '일시적인 네트워크 문제일 수 있습니다.\n문제가 계속될 시 관리자에 문의해주세요.';
    },
    showEmailSuccessMessage: (state) => {
      state.open = true;
      state.title = '문의 완료';
      state.content = '담당자가 검토 후 빠른 시일 내에 연락드릴 예정입니다.';
    },
    showEmailFailureMessage: (state) => {
      state.open = true;
      state.title = '이메일 전송 실패';
      state.content =
        '이메일 전송에 실패했습니다.\n문제가 계속될 시 관리자에 문의해주세요.';
    },
    showEmailEmptyInfoMessage: (state) => {
      state.open = true;
      state.title = '정보 미입력';
      state.content = '필수 정보를 입력해주세요.';
    },
    showNoMobileSupportMessage: (state) => {
      state.open = true;
      state.title = '모바일 미지원';
      state.content = '모바일 기기에서 지원하지 않는 기능입니다.';
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

const modalAction = modalSlice.actions;
export default modalAction;

export const modal = modalSlice.reducer;
