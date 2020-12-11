import React, {Component} from 'react'
import Config from '../config'
import * as filmAction from '../redux/actions/filmsAction'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class People extends Component{
    componentDidMount(){
        this.getList()
    }

    getList() {
        const {actions} = this.props        
        let urlFetch = Config.API_BASE_URL + `/people/`
        fetch(urlFetch,
            {
                method: 'GET',
            }).then((response) => response.json()).then(async (responseJson) => {
                console.log(responseJson)
                actions.changePeople(responseJson)
            }).catch((error) => {
                console.log(error)
            });
    }

    changePeople(index){
        const {actions} = this.props
        actions.changePeopleIndex(index)
    }

    render(){
        const {people} = this.props                
        return(
            <div class="container">
                <div className="row">
                {
                    people.length !== 0 &&
                    people.results.map((item, index) => {
                        return(
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-header font-weight-bold">{item.name}</div>
                                    <div class="card-body">
                                        <p><b>Birth Year    :</b>{item.birth_year}</p>
                                        <p><b>Eye Color    :</b>{item.eye_color}</p>                                        
                                        <Link to={`/detailPeople`} >
                                            <button type="button" class="btn btn-primary btn-sm" onClick={() =>{
                                                this.changePeople(index+1)
                                            }}>see more</button>    
                                        </Link> 
                                    </div>
                                </div>
                            </div>                                                  
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    films: state.films.listFilm,
    people: state.films.listPeople
})

const ActionCreators = Object.assign(
    {},
    filmAction
)

const mapDispatchProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchProps)(People)