import styled from 'styled-components';
import { AccentBlue } from '../../styles/variables/style';
import { SecondaryText } from '../../styles/variables/style';
import { THotel } from '../../types/types';


const HotelItem = ({hotel}:{hotel:THotel}) => {
    return (
        <Apartments>
            <HotelImages src={hotel.imageUrl} alt={hotel.name}/>
            <HotelName href='/'>{hotel.name}</HotelName>
            <HotelLocation>{hotel.city}, {hotel.country}</HotelLocation>
        </Apartments>
    );
};

export default HotelItem;

export const Apartments = styled.article`
    width: 296px;
    height: 435px;
    margin-left: 8px;
`;

export const HotelImages = styled.img`
    width: 296px;
    height: 296px;
    margin-bottom: 24px;
`;

export const HotelName = styled.a`
    font-size: 24px;
    font-weight: 400;
    color: ${AccentBlue};
    text-decoration: none;
`;

export const HotelLocation = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: ${SecondaryText};
`;
