import { connect } from "react-redux";

import { CarouselComponent } from "pages/homepage/components/now-playing/Carousel";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.films;
const connector = connect(mapStateToProps);

export default connector(CarouselComponent);
