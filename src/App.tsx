/* eslint-disable linebreak-style */
import {GlobalStyles} from './styles/GlobalStyles';
import {Header} from './components/Header/index';
import {Orders} from './components/Orders/index'

function App() {
    return(
        <>
            <GlobalStyles/>
            <Header/>
            <Orders/>
        </>
    );
}

export default App;