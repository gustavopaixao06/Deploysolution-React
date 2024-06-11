import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Servico } from './pages/Servicos';
import { Iluminacao } from './pages/Iluminacao';
import { Ambientacao } from './pages/Ambientacao';
import { Controle } from './pages/Controle';
import { Sala } from './pages/Sala';
import { Rede } from './pages/Rede';
import { Wifi } from './pages/Wifi';
import { Seguranca } from './pages/Seguranca';
import { Contato } from './pages/Contato';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path='/sobre' element={ <Sobre />} />
                <Route path='/servico' element={ <Servico />} />
                <Route path='/iluminacao' element={<Iluminacao />} />
                <Route path='/ambientacao' element={<Ambientacao />}/>
                <Route path='/controle' element={<Controle />}/>
                <Route path='/sala' element={<Sala />}/>
                <Route path='/rede' element={<Rede/>}/>
                <Route path='/wifi' element={<Wifi />}/>
                <Route path='/seguranca' element={<Seguranca />}/>
                <Route path='/contato' element={<Contato />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
