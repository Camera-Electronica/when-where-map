import { APIProvider } from '@vis.gl/react-google-maps';
import EventMap from './components/map/EventMap';

function App() {
  return (
    <div title="Main" className="App">
      <APIProvider apiKey={'AIzaSyBACtK57ZxOTew4nKxADL7dvsdEyMHiaZ4'} onLoad={() => console.log('Maps API has loaded.')}>
        <h3>When-Where Events</h3>
        <EventMap />
      </APIProvider>
    </div>
  );
}

export default App;
