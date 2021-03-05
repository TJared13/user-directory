import React from 'react'

const UserCards = (props) => {
    const {index, data} = props;
    
    return (
        <div>
            <div className='indexNum'>
               <p> {data[index].id} / {data.length}</p>
            </div>
            
            <div className='info'>
                <h2>{data[index].name.first} {data[index].name.last}</h2>

                <div className="infoAlign">
                     <span><strong>From:</strong>   {data[index].city}, {data[index].country}</span>
                     <span><strong>Job Title:</strong>   {data[index].title}</span>
                    <span><strong>Employer:</strong>    {data[index].employer}</span>
                </div>

                <div>
                    <h3>Favorite Movies:</h3>
                <ol>{data[index].favoriteMovies.map(movie => <li key={movie}>{movie}</li>)}</ol>
                </div>
            </div>

        </div>
    )
}

export default UserCards;