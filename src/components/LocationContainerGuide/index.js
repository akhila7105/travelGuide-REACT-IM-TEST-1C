/* eslint-disable import/extensions */
import {
  LocationCardContainer,
  Heading,
  HeadingDescriptionContainer,
  Paragraph,
} from './styledComponents'

import './index.css'

const LocationContainerGuide = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="list-location">
      <LocationCardContainer>
        <img src={imageUrl} alt={name} className="Location-image" />
        <HeadingDescriptionContainer>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingDescriptionContainer>
      </LocationCardContainer>
    </li>
  )
}
export default LocationContainerGuide
