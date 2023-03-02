 import React, { useState } from 'react'
 import clsx from 'clsx'
 import './BookTicket.css'
 
 const movies = [
   {
     title: 'Pulp Fiction',
     time:['19:00','20:30','21:00','22:00'],
     occupied: [20, 21, 30, 1, 2, 8],
   },
   {
     title: 'Guardians of the galaxy',
     time:['20:00','20:30','21:00','22:00'],
     occupied: [9, 41, 35, 11, 65, 26],
   },
   {
     title: 'Despicable Me',
     time:['15:00','17:30','18:00','19:00'],
     occupied: [37, 25, 44, 13, 2, 3],
   },
   {
     title: 'Inception',
     time:['19:00','19:30','20:00','22:00'],
     occupied: [10, 12, 50, 33, 28, 47],
   },
   {
    title: 'The Dark Knight',
    time:['19:00','20:30','20:50','22:00'],
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    title: 'Interstellar',
    time:['20:00','21:30','21:50','22:00'],
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    title: 'Toy Story',
    time:['15:00','17:30','18:00','19:00'],
    occupied: [37, 25, 44, 13, 2, 3],
  },
 
 ]
 
 const seats = Array.from({ length: 8 * 8 }, (_, i) => i)
 
 export default function BookTicket() {
   const [selectedMovie, setSelectedMovie] = useState(movies[0])
   const [selectedSeats, setSelectedSeats] = useState([])

 
   return (
     <div className="BookTicket">
       <Movies
         movie={selectedMovie}
         onChange={movie => {
           setSelectedSeats([])
           setSelectedMovie(movie)
           
         }}
       />
    
       <ShowCase />
       <Cinema
         movie={selectedMovie}
         selectedSeats={selectedSeats}
         onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
       />
 
       <p className="info">
         Ukupna cijena odabranih mjesta: <span> {' '} </span>
         <span className="total">
           {selectedSeats.length * 30}HRK / 
           {(selectedSeats.length * 30 /7.52).toFixed(2)}EUR
         </span>
       </p>
       <p>(Tečaj EUR = 7,52 HRK)</p>
       <button type='button'><span></span><a href='/prijava'>Potvrdi</a></button>
     </div>
   )
 }



 
 function Movies({ movie, onChange }) {
    return (
      <div className="Movies">
        <label htmlFor="movie">Odaberi film: </label>
        <select
          id="movie"
          value={movie.title}
          onChange={e => {
            onChange(movie.find(time => time.value === e.target.value))
          }}
        >
          {movies.map(movie => (
            <option key={movie.title} value={movie.title}>
              {movie.title} 
            </option>
          ))}console.log(selectedMovie)
        </select>
      </div>
    )
  }

//  function Time({ movie, time, onClick }) {
    
//     return (
//       <div className="Movies">
//         <label htmlFor="movie">Vrijeme prikaza:</label>
//         <select
//           id="time"
//           value={time}
//           onClick={e => {
//             onClick(movies.find(movie => movie.title === e.target.value))
//           }}
        
//         >
//           {movie.map(time => (
//             <option key={time} value={time}>
                
//           </option>
//           ))}
//         </select>
//       </div>
//     )
//   }
 
 function ShowCase() {
   return (
     <ul className="ShowCase">
       <li>
         <span className="seat" /> <small>Slobodno</small>
       </li>
       <li>
         <span className="seat selected" /> <small>Odabrano</small>
       </li>
       <li>
         <span className="seat occupied" /> <small>Zauzeto</small>
       </li>
     </ul>
   )
 }
 
 function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
   function handleSelectedState(seat) {
     const isSelected = selectedSeats.includes(seat)
     if (isSelected) {
       onSelectedSeatsChange(
         selectedSeats.filter(selectedSeat => selectedSeat !== seat),
       )
     } else {
       onSelectedSeatsChange([...selectedSeats, seat])
     }
   }
 
   return (
     <div className="Cinema">
       <div className="screen" />
 
       <div className="seats">
         {seats.map(seat => {
           const isSelected = selectedSeats.includes(seat)
           const isOccupied = movie.occupied.includes(seat)
           return (
             <span
               tabIndex="0"
               key={seat}
               className={clsx(
                 'seat',
                 isSelected && 'selected',
                 isOccupied && 'occupied',
               )}
               onClick={isOccupied ? null : () => handleSelectedState(seat)}
               onKeyPress={
                 isOccupied
                   ? null
                   : e => {
                       if (e.key === 'Enter') {
                         handleSelectedState(seat)
                       }
                     }
               }
             />
           )
         })}
       </div>
     </div>
   )
 }
 