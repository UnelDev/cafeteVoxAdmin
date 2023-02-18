import { useEffect, useState } from 'react';
import LogoutImg from '../Assets/Logout.svg';

export default function MenuBar() {
    return (
        <div className="menubar">
            {exitButton()}
            <div onClick={() => { window.location.href = '/' }} className='MenuBarTitle'>Cafeteria Vox</div>
            {Clock()}
        </div>
    );
}

function exitButton() {

    return (
        <img src={LogoutImg as unknown as string} alt='Déconnexion' onClick={() => { window.localStorage.clear(); window.location.href = '/'; }} className='LogoutButton' />
    );
}

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <div className='clock'>{time}</div>;
}
