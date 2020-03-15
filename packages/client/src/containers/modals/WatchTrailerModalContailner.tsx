import { connect } from "react-redux";
import { IState } from "interfaces/IState";
import { closeWatchTrailerModal } from "actions/modals";
import { activeForShowTrailerFilmSelector } from "selectors";
import { WatchTrailerModal } from "components/modals/WatchTrailerModal";

const mapStateToProps = (state: IState) => {
  return {
    isModalOpen: state.modals.isWatchTrailerModalOpen,
    film: activeForShowTrailerFilmSelector(state)
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    closeModal: () => {
      dispatch(closeWatchTrailerModal());
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(WatchTrailerModal);
