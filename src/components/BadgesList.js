import React from "react";
import { Link } from "react-router-dom";
import BadgesListItem from "./BadgesListItem";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

export default function BadgesList(props) {
  const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);
  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            placeholder="Text something!"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <div>
          <h3 className="mt-5 mb-3">No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          placeholder="Text something!"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="card my-2 p-2">
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <BadgesListItem badge={badge} />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
