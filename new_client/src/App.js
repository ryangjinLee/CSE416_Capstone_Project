import * as React from 'react';
import Header from "./components/Header";
import StateSelectionMap from "./components/main_map/Map"

const App = () => {
    return (
        <>
            <Header />
            <div>
                <StateSelectionMap />
            </div>

        </>
    );
}

export default App;
