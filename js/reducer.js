let state

function changeState(state={count:0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        // YOU CAN SKIP ALL THIS BY USING DEFAULT ARG
        // if (!state) {
        //   state = {count: 0}
        //   return state
        // }
        // else 


        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

dispatch ({type: '@@INIT'})