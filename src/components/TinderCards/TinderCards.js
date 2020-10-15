import React, {useEffect, useState} from 'react'
import './TinderCards.css'
import TinderCard from "react-tinder-card";
import database from "../../firebase";

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {

             database
            .collection('people')
            .onSnapshot(snapshot =>
                setPeople(snapshot.docs.map(doc => doc.data()))
            )

    }, [])

    return (
        <div>
            <div className="tinderCards__cartContainer">
                {people.map(person => (
                    <TinderCard
                        key={person.name}
                        className="swipe"
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards