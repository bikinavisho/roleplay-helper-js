import { createStore, applyMiddleware } from 'redux';
import rootReducer from  './reducers';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default(initialState) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(ReduxThunk)
        )
    );
}
