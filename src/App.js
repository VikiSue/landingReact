import React,  { Suspense }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/scss/App.scss';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import FirstScreen from './Components/FirstScreen/FirstScreen';
import SecondScreen from './Components/SecondScreen/SecondScreen';
import Registration from './Components/Registration/Registration';
import Loader from "./Components/Loader/Loader";
const Users = React.lazy(() => import('./Components/Users/Users'));

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <main>
                <FirstScreen />
                <SecondScreen />
                <Suspense fallback={<Loader/>}>
                    <Users />
                </Suspense>

                <Registration />
            </main>
            <Footer />
        </div>
    );
};

export default App;
