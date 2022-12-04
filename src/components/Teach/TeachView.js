import { Link } from 'react-router-dom';

function TeachView() {
return(
    <div>
        <div className="T-header" id="header">
            <img src={require('../../assets/icon-tutoring.png')} alt='Tutor app Logo' className="T-logo"/>
        </div>
        <nav className="T-navbar">
            <div>
            <ul>
                <li>
                <Link className='T-link' to="/teach">TEACH</Link>
                </li>
                <li>
                <Link className='T-link' to="/learn">LEARN</Link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
);
}

export default TeachView;