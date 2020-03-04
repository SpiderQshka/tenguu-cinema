export type TabsType =
  | "users"
  | "genres"
  | "sessions"
  | "tickets"
  | "films"
  | "halls";

export interface IAdminPagePayload {
  pending: boolean;
  error: { code: number; message: string } | null;
  currentTab: TabsType;
}

export type IAdminPageActionTypes =
  | "FETCH_ADMIN_PAGE_PENDING"
  | "FETCH_ADMIN_PAGE_SUCCESS"
  | "FETCH_ADMIN_PAGE_ERROR"
  | "FETCH_ADMIN_PAGE_REQUEST"
  | "CHANGE_CURRENT_TAB";

export interface IAdminPageAction {
  type: IAdminPageActionTypes;
  payload: IAdminPagePayload;
}

export interface IMainPagePayload {
  pending: boolean;
  error: { code: number; message: string } | null;
}

export type IMainPageActionTypes =
  | "FETCH_PAGE_PENDING"
  | "FETCH_PAGE_SUCCESS"
  | "FETCH_PAGE_ERROR"
  | "FETCH_PAGE_REQUEST";

export interface IMainPageAction {
  type: IMainPageActionTypes;
  payload: IMainPagePayload;
}
