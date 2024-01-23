import './Tours.css'
import Card from './Card.js'

export default function Tours({tours, removeTour}){
    return(<div className='container'>
        <div>
            <h2 className='title'>Plan with Love</h2>
        </div>
        <div className='cards'>
           {
                tours.map((tour) =>{
                    return <Card {...tour} removeTour = {removeTour}></Card>
                })
            }
        </div>
    </div>)

}