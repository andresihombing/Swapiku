import React, {Component} from 'react'
import Config from '../config'
import * as filmAction from '../redux/actions/filmsAction'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

class Films extends Component{
    componentDidMount(){
        this.getList()
    }

    getList() {
        const {actions} = this.props        
        let urlFetch = Config.API_BASE_URL + `/films/`
        fetch(urlFetch,
            {
                method: 'GET',
            }).then((response) => response.json()).then(async (responseJson) => {
                console.log(responseJson)
                actions.changeFilm(responseJson)
            }).catch((error) => {
                console.log(error)
            });
    }

    render(){
        const {films} = this.props        
        return(
            <div class="container">
                <div className="row">
                {
                    films.length !== 0 &&
                    films.results.map((item) => {
                        return(
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-header font-weight-bold">{item.title}</div>
                                    <div class="card-body">{item.opening_crawl}
                                        <i> more info</i>
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
    films: state.films.listFilm
})

const ActionCreators = Object.assign(
    {},
    filmAction
)

const mapDispatchProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchProps)(Films)