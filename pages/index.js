import { GoogleApiWrapper } from "google-maps-react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"

function Home() {
  return (
    <div className="container">
       <GooglePlacesAutocomplete onSelect={console.log} />
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(Home)
