import './EventList.css';

function EventList() {
    return (
        <>
        <section className="events_categories">
            <ul className="category">
                <h2>Social Events</h2>
                <li>Birthday parties</li>
                <li>Anniversary celebrations</li>
                <li>Wedding receptions</li>
                <li>Baby showers</li>
                <li>Graduation parties</li>
                <li>Family reunions</li>
            </ul>
              <ul className="category">
                <h2>Entertainment Events</h2>
                <li>Concerts</li>
                <li>Music festivals</li>
                <li>Film screenings</li>
                <li>Comedy shows</li>
                <li>Art exhibitions</li>
                <li>Cultural events</li>
            </ul>
              <ul className="category">
                <h2>Community Events</h2>
                <li>Fundraising events</li>
                <li>Charity galas</li>
                <li>Volunteer drives</li>
                <li>Neighborhood block parties</li>
                <li>Community festivals</li>
                <li>Cultural celebrations</li>
            </ul>
        </section>
        </>
    );
}

export default EventList;