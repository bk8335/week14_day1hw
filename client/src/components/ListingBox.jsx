import React from 'react'
import FilmList from './FilmList.jsx'


class ListingBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: [{
        id: 1, title: "Wonder Woman", showtimes: "[10:00, 12:00, 14:00, 18:00, 22:00]", price: 8.75
      },
      {
        id: 2, title: "King Arthur", showtimes: "[11:00, 13:00, 13:00, 17:00, 21:30]", price: 6.50
      }]
    }
  }

  render() {
    return (
      <div className = "listing-box">
        <FilmList data = {this.state.data} />
      </div>
    )
  }


}

export default ListingBox