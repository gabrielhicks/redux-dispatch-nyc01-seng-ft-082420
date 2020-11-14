let INCREASE_COUNT = "INCREASE_COUNT"
let state = {count: 0}

function changeState(state, action){
  switch (action.type) {
    case INCREASE_COUNT:
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render(){
  let achone = document.createElement("h1")
  achone.textContent = state.count
  let thebody = document.body
  thebody.append(achone)
  // document.body.textContent = state.count
}

function dispatch(action) {
  state = changeState(state, action)
  return state
}

console.log(dispatch({type: INCREASE_COUNT}))
render()
console.log(dispatch({type: INCREASE_COUNT}))
render()
console.log(dispatch({type: INCREASE_COUNT}))
render()