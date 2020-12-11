import React, {Component} from 'react'
import Config from '../config'
import * as filmAction from '../redux/actions/filmsAction'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

class People extends Component{
    componentDidMount(){
        this.getList()
    }

    getList() {
        const {actions, index} = this.props
        let urlFetch = Config.API_BASE_URL + `/people/${index}/`
        fetch(urlFetch,
            {
                method: 'GET',
            }).then((response) => response.json()).then(async (responseJson) => {
                console.log(responseJson)  
                actions.changePeopleById(responseJson)              
            }).catch((error) => {
                console.log(error)
            });
    }

    render(){
        const {peopleById} = this.props                
        return(
            <div class="container">
                <div className="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header font-weight-bold text-center">{peopleById.name}</div>
                            <div class="card-body">
                                <p><b>Height    :</b>{peopleById.height}</p>
                                <p><b>Mass    :</b>{peopleById.mass}</p>
                                <p><b>Hair Color    :</b>{peopleById.hair_color}</p>
                                <p><b>Skin Color    :</b>{peopleById.skin_color}</p>
                                <p><b>Eye Color    :</b>{peopleById.eye_color}</p>
                                <p><b>Birth Year    :</b>{peopleById.birth_year}</p>
                                <p><b>Gender    :</b>{peopleById.gender}</p>
                                <p><b>Home World    :</b>{peopleById.homeworld}</p>
                                <p><b>Films    :</b>
                                {
                                peopleById.films.length !== 0 &&
                                peopleById.films.map((item, index) =>{
                                    return(
                                       <p>{`${index+1}. ${item}`}</p> 
                                    )
                                })}
                                </p>

                                <p><b>Specialis    :</b>
                                {
                                peopleById.species.length !== 0 ?
                                peopleById.species.map((item, index) =>{
                                    return(
                                       <p>{`${index+1}. ${item}`}</p> 
                                    )
                                }) : <p>-</p>}
                                </p>

                                <p><b>Vehicles    :</b>
                                {
                                peopleById.vehicles.length !== 0 &&
                                peopleById.vehicles.map((item, index) =>{
                                    return(
                                       <p>{`${index+1}. ${item}`}</p> 
                                    )
                                })}
                                </p>

                                <p><b>Starships    :</b>
                                {
                                peopleById.starships.length !== 0 &&
                                peopleById.starships.map((item, index) =>{
                                    return(
                                       <p>{`${index+1}. ${item}`}</p> 
                                    )
                                })}
                                </p>
                            </div>
                        </div>
                    </div>                                                                  
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({    
    index: state.films.index,
    peopleById: state.films.people
})

const ActionCreators = Object.assign(
    {},
    filmAction
)

const mapDispatchProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchProps)(People)