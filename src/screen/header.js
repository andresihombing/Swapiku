import React, {Component} from 'react'
import {Route, NavLink, HashRouter} from 'react-router-dom'
import '../styles/styleHeaders.css';
import Films from './films';
import People from './people';
import detailPeople from './detailPeople';

class Header extends Component{
    render(){
        return(
            <HashRouter>            
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul class="navbar-nav">
                        <li className="nav-item-active">
                            <NavLink className="nav-link" exact to='/'>Swapiku</NavLink>
                        </li>
                        <li className="nav-item-active">
                            <NavLink className="nav-link" to='/films'>Film</NavLink>
                        </li>
                        <li className="nav-item-active">
                            <NavLink className="nav-link" to='/people'>People</NavLink>
                        </li>
                    </ul>                    
                </nav>
                <div className="content">
                    <Route exact path="/" component={Films}/>
                    <Route path="/films" component={Films}/>
                    <Route path="/people" component={People}/>
                    <Route path="/detailPeople" component={detailPeople}/>
                </div>
            </HashRouter>
        )
    }
}

export default Header;