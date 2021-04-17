import { createStore } from "redux";

const OPENQUESTION = "OPENQUESTION";
const openQuestion = (id) => ({
  type: OPENQUESTION
  , id
})

const initialState = {
  currentlyOpen: ""
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case OPENQUESTION
    : {
      return state.currentlyOpen === action.id
        ? {...state, currentlyOpen: ""}
        : {...state, currentlyOpen: action.id}
    }
    default
    : return state
  }
}

export const store = createStore(reducer);

export const mapStateToProps = (state) => ({
  currentlyOpen: state.currentlyOpen
})

export const mapDispatchToProps = (dispatch) => ({
  openQuestion: (id) => dispatch(openQuestion(id))
})