export const SET_LINE_ACTIVE = "OPEN_EDIT_USER_MODAL";
export const CLOSE_EDIT_USER_MODAL = "CLOSE_EDIT_USER_MODAL";
export const CLOSE_EDIT_USER_MODAL_REQUEST = "CLOSE_EDIT_USER_MODAL_REQUEST";

export const setLineActive = (index: number) => {
  return {
    type: SET_LINE_ACTIVE,
    payload: {
      index
    }
  };
};

//   export const closeEditUserModel = () => {
//     return {
//       type: CLOSE_EDIT_USER_MODAL
//     };
//   };
//   export const closeEditUserModelRequest = () => {
//     return {
//       type: CLOSE_EDIT_USER_MODAL_REQUEST
//     };
//   };
