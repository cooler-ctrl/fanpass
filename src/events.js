import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './events.css';
import TicketPurchase from './blerja';

const allEvents = [

  {
  title: "Ballkani vs Drita",
  date: "27 Maj 2025",
  time: "17:00",
  city: "Suharekë",
  venue: "Stadiumi i Qytetit",
  league: "Liga e Kosovës",
  type: "Derby",
  sport: "Soccer",
  image: "/img/ballkanivsdrita.png",
},
{
  title: "Prishtina vs Llapi",
  date: "29 Maj 2025",
  time: "18:30",
  city: "Prishtinë",
  venue: "Fadil Vokrri",
  league: "Liga e Kosovës",
  type: "League Match",
  sport: "Soccer",
  image: "/img/prishtinavsllapi.png",
},
{
  title: "Gjilani vs Feronikeli",
  date: "31 Maj 2025",
  time: "19:00",
  city: "Gjilan",
  venue: "Stadiumi i Qytetit",
  league: "Liga e Kosovës",
  type: "Classic",
  sport: "Soccer",
  image: "/img/gjilanivsferonikeli.png",
},

  
  {
    title: "Manchester City vs Liverpool",
    date: "12 Maj 2025",
    time: "20:00",
    city: "Manchester",
    venue: "Etihad Stadium",
    league: "Premier League",
    type: "Derby",
    sport: "Soccer",
    image: "/img/man-liv.jpg",
  },
  {
    title: "Arsenal vs Chelsea",
    date: "15 Maj 2025",
    time: "18:30",
    city: "London",
    venue: "Emirates Stadium",
    league: "Premier League",
    type: "League Match",
    sport: "Soccer",
    image: "/img/ars-chelesa.jpg",
  },
  {
    title: "Barcelona vs Real Madrid",
    date: "20 Maj 2025",
    time: "21:00",
    city: "Barcelona",
    venue: "Camp Nou",
    league: "La Liga",
    type: "El Clasico",
    sport: "Soccer",
    image: "/img/barc-real.avif",
  },
  {
    title: "Bayern Munich vs Borussia Dortmund",
    date: "22 Maj 2025",
    time: "19:00",
    city: "Munich",
    venue: "Allianz Arena",
    league: "Bundesliga",
    type: "Derby",
    sport: "Soccer",
    image: "/img/bayernvsdortmund.webp",
  },
  {
    title: "Juventus vs AC Milan",
    date: "25 Maj 2025",
    time: "21:30",
    city: "Turin",
    venue: "Allianz Stadium",
    league: "Serie A",
    type: "Classic",
    sport: "Soccer",
    image: "/img/juventusvsmilan.jpeg",
  },

  
  {
    title: "Lakers vs Celtics",
    date: "14 Maj 2025",
    time: "19:30",
    city: "Los Angeles",
    venue: "Staples Center",
    league: "NBA",
    type: "Regular Season",
    sport: "Basketball",
    image: "/img/lakersvsceltics.jpeg",
  },
  {
    title: "Bulls vs Knicks",
    date: "18 Maj 2025",
    time: "20:00",
    city: "Chicago",
    venue: "United Center",
    league: "NBA",
    type: "Regular Season",
    sport: "Basketball",
    image: "/img/bullsvsknicks.webp",
  },


  {
    title: "Monaco Grand Prix",
    date: "25 Maj 2025",
    time: "15:00",
    city: "Monte Carlo",
    venue: "Circuit de Monaco",
    league: "F1",
    type: "Race",
    sport: "F1",
    image: "/img/monaco.webp",
  },
  {
    title: "British Grand Prix",
    date: "28 Maj 2025",
    time: "14:00",
    city: "Silverstone",
    venue: "Silverstone Circuit",
    league: "F1",
    type: "Race",
    sport: "F1",
    image: "/img/british.jpg",
  },


  {
    title: "Patriots vs Giants",
    date: "30 Maj 2025",
    time: "16:00",
    city: "New York",
    venue: "MetLife Stadium",
    league: "NFL",
    type: "Regular Season",
    sport: "NFL",
    image: "/img/patriotsvsgiants.jpeg",
  },
  {
    title: "Cowboys vs Packers",
    date: "1 Qershor 2025",
    time: "18:00",
    city: "Dallas",
    venue: "AT&T Stadium",
    league: "NFL",
    type: "Regular Season",
    sport: "NFL",
    image: "/img/cowboyvspackers.jpg",
  },
];
const leagues = ["Liga e Kosovës", "Premier League", "La Liga", "Bundesliga", "Serie A", "NBA", "F1", "NFL"];
const types = ["Derby", "League Match", "El Clasico", "Classic", "Regular Season", "Race"];

function Events() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [cityFilter, setCityFilter] = useState('');
  const [leagueFilter, setLeagueFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [timeFilter, setTimeFilter] = useState(23); 
  const [filteredEvents, setFilteredEvents] = useState(allEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    filterEvents();
  }, [searchTerm, cityFilter, leagueFilter, typeFilter, timeFilter]);

  const handleLeagueChange = (league) => {
    setLeagueFilter(prev => 
      prev.includes(league) ? prev.filter(l => l !== league) : [...prev, league]
    );
  };

  const handleTypeChange = (type) => {
    setTypeFilter(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const filterEvents = () => {
    const filtered = allEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = cityFilter === '' || event.city === cityFilter;
      const matchesLeague = leagueFilter.length === 0 || leagueFilter.includes(event.league);
      const matchesType = typeFilter.length === 0 || typeFilter.includes(event.type);
      const eventHour = parseInt(event.time.split(':')[0], 10);
      const matchesTime = eventHour <= timeFilter;

      return matchesSearch && matchesCity && matchesLeague && matchesType && matchesTime;
    });
    setFilteredEvents(filtered);
  };

  return (
    <div className="events-container">
      <aside className="sidebar">
        <h3>Filtro sipas:</h3>

        <label htmlFor="city-select">Qyteti</label>
        <select id="city-select" onChange={e => setCityFilter(e.target.value)} value={cityFilter}>
          <option value="">Të gjitha</option>
          {[...new Set(allEvents.map(e => e.city))].map(city => (
            <option key={city}>{city}</option>
          ))}
        </select>

        <fieldset className="filter-group">
          <legend>Liga</legend>
          {leagues.map(league => (
            <label key={league} className="checkbox-label">
              <input
                type="checkbox"
                checked={leagueFilter.includes(league)}
                onChange={() => handleLeagueChange(league)}
              />
              {league}
            </label>
          ))}
        </fieldset>

        <fieldset className="filter-group">
          <legend>Lloji i Ndeshjes</legend>
          {types.map(type => (
            <label key={type} className="checkbox-label">
              <input
                type="checkbox"
                checked={typeFilter.includes(type)}
                onChange={() => handleTypeChange(type)}
              />
              {type}
            </label>
          ))}
        </fieldset>

        <label htmlFor="timeRange">Ora maksimum ndeshjes (deri në): {timeFilter}:00</label>
        <input
          id="timeRange"
          type="range"
          min="0"
          max="23"
          value={timeFilter}
          onChange={e => setTimeFilter(Number(e.target.value))}
        />
      </aside>

      <main className="event-list">
        <h1>Ngjarjet Sportive</h1>

        <input
          type="text"
          placeholder="Kërko ndeshje..."
          className="search-bar"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div className="event" key={index}>
              <div className="event-text">
                <h2>{event.title}</h2>
                <p>Data: {event.date}</p>
                <p>Ora: {event.time}</p>
                <p>Vendi: {event.venue}</p>
                <button className="buy-button" onClick={() => setSelectedEvent(event)}>
                  Bli Biletën
                </button>
              </div>
              <img src={event.image} alt={event.title} />
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>Nuk u gjet asnjë ndeshje.</p>
        )}
      </main>

      {selectedEvent && (
        <TicketPurchase event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default Events;