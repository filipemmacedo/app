import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Big sky scrapper',
        imageUrl: 'https://cdn.getyourguide.com/img/tour/29590a71c8bef650.jpeg/98.jpg',
        address: '20 W 34th St, New York, NY 10001, Estados Unidos',
        location: {
            lat: '40.7484405',
            long: '-73.9878531'
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'Big sky scrapper',
        imageUrl: 'https://cdn.getyourguide.com/img/tour/29590a71c8bef650.jpeg/98.jpg',
        address: '20 W 34th St, New York, NY 10001, Estados Unidos',
        location: {
            lat: '40.7484405',
            long: '-73.9878531'
        },
        creator: 'u2'
    }
]
//para adicionar ao url variavel usamos o useParams
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;