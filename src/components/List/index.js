import React from 'react'
import View from '../View'
import shelterList from './shelters.json'
import {
  grid__shelters,
  card__shelter,
  card__shelter_row,
  card__shelter_row_2,
  card__shelter_info,
  no,
  yes,
  search__box,
} from './list.module.css'
import stopSign from '../../images/stop.png'
import shelterSign from '../../images/bus-stop.png'
import Modal from '../../components/Modal'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      searchTerm: '',
      isActive: false,
      selectedShelter: null,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  componentDidMount = () => {
    this.setState({
      loading: false,
    })
  }

  findShelter = (shelterId) => {
    let filteredResults = shelterList.filter(
      (shelter) =>
        shelter.sid.toLowerCase().indexOf(shelterId.toLowerCase()) !== -1
    )
    return filteredResults
  }

  modalFire = (shelterId) => {
    let shelterInfo = this.findShelter(shelterId)
    this.setState({
      isActive: true,
      selectedShelter: shelterInfo,
    })
  }

  modalStomp = () => {
    this.setState({
      isActive: false,
      selectedShelter: null,
    })
  }

  render() {
    const filteredResults = shelterList.filter(
      (shelter) =>
        shelter.sid
          .toLowerCase()
          .indexOf(this.state.searchTerm.toLowerCase()) !== -1
    )
    return (
      <View title="Bus Shelters">
        <section>
          <input
            className={search__box}
            type="text"
            placeholder="enter shelter / stop name"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </section>
        {this.state.loading && 'Loading...'}
        <section className={grid__shelters}>
          {filteredResults.map((shelter, index) => (
            <div key={shelter.id} className={card__shelter}>
              <div className={card__shelter_row}>
                <div className={card__shelter_info}>
                  <h5>{shelter.sid}</h5>
                  <h4>{shelter.name}</h4>
                </div>
                {shelter.isShelter === 'yes' ? (
                  <img src={shelterSign} alt="shelter sign" width="36px" />
                ) : (
                  <span className={no}>&#10006;</span>
                )}
                {shelter.stop_sign === 'yes' ? (
                  <img src={stopSign} alt="stop sign" width="36px" />
                ) : (
                  <span className={no}>&#10006;</span>
                )}
              </div>
              <div className={card__shelter_row_2}>
                <div>
                  <h5>AC</h5>
                  <h5>
                    {shelter.ac === 'yes' ? (
                      <span className={yes}>&#10004;</span>
                    ) : (
                      <span className={no}>&#10006;</span>
                    )}
                  </h5>
                </div>
                <div>
                  <h5>Light</h5>
                  <h5>
                    {' '}
                    {shelter.light === 'yes' ? (
                      <span className={yes}>&#10004;</span>
                    ) : (
                      <span className={no}>&#10006;</span>
                    )}
                  </h5>
                </div>
                <div>
                  <h5>Recharge Point</h5>
                  <h5>
                    {' '}
                    {shelter.recharge === 'yes' ? (
                      <span className={yes}>&#10004;</span>
                    ) : (
                      <span className={no}>&#10006;</span>
                    )}
                  </h5>
                </div>
              </div>
              <div>
                <button
                  aria-label={shelter.sid}
                  onClick={() => this.modalFire(shelter.sid)}
                >
                  report issue
                </button>
              </div>
            </div>
          ))}
        </section>
        <Modal
          isActive={this.state.isActive}
          shelterInfo={this.state.selectedShelter}
          modalStomp={this.modalStomp}
        />
      </View>
    )
  }
}

export default List
