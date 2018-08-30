import { connect } from "react-redux";
import Edit from "../../components/Articles/Edit";

const mapStateToProps = (state, { id }) => {
  return {
    article: state.articles[id]
  };
};

export default connect(mapStateToProps)(Edit);
