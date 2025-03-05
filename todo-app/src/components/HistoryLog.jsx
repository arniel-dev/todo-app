import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useGetHistories from "../hooks/useGetHistories";
import { debounce } from "lodash";
import "../styles/historyLog.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const HistoryLog = ({ onClose }) => {
  const { userInfo } = useAuth();
  const {
    histories,
    loadMoreHistories,
    hasMore,
    setSearchQuery,
    applyFilters,
    isFetchingNextPage,
  } = useGetHistories(userInfo.user_id);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const delayedSearch = debounce(() => {
      setSearchQuery(searchInput);
      applyFilters();
    }, 500);

    delayedSearch();
    return () => delayedSearch.cancel();
  }, [searchInput]);

  return (
    <div className="history-log">
      <div className="header">
        <h2 className="history-log__title">Activity Logs</h2>
        <button onClick={() => onClose()} className="close-button">
          <FontAwesomeIcon icon={faTimes} className="close-icon" />
        </button>
      </div>

      <div className="history-log__filters">
        <div className="history-log__search-container">
          <input
            type="text"
            placeholder="Search history..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="history-log__search"
          />
          {searchInput && (
            <button
              onClick={() => setSearchInput("")}
              className="history-log__search-button"
            >
              ✖
            </button>
          )}
        </div>
      </div>

      <div className="history-log__list">
        {histories.length > 0 ? (
          histories.map((entry) => (
            <div key={entry.id} className="history-log__card">
              <div className="history-log__card-header">
                <span className="history-log__timestamp">
                  {new Date(entry.timestamp).toLocaleString()}
                </span>
                <span
                  className={`history-log__type ${
                    entry.type === "BOARD_UPDATE"
                      ? "history-log__type--board"
                      : "history-log__type--ticket"
                  }`}
                >
                  {entry.type === "BOARD_UPDATE"
                    ? "Board Update"
                    : "Ticket Update"}
                </span>
              </div>

              <div className="history-log__details">
                <p className="history-log__action">{entry.action}</p>
                <pre className="history-log__json">
                  {JSON.stringify(formatDetails(entry.details), null, 2)}
                </pre>
              </div>

              {entry.user_id && (
                <div className="history-log__user">
                  Performed by: {entry.display_name || `User #${entry.user_id}`}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="history-log__empty">No matching history found.</div>
        )}
      </div>

      {hasMore && (
        <button
          onClick={loadMoreHistories}
          className="history-log__load-more"
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
      {!hasMore && histories.length > 0 && (
        <div className="history-log__end">End of the list</div>
      )}
    </div>
  );
};

function formatDetails(details) {
  if (details?.oldData) {
    return {
      ...details,
      oldData: {
        ...details.oldData,
        created_at: new Date(details?.oldData?.created_at).toLocaleString(),
        expiry_date: new Date(details?.oldData?.expiry_date).toLocaleString(),
      },
    };
  } else {
    return details;
  }
}
HistoryLog.propTypes = {
  onClose: PropTypes.func,
};
export default HistoryLog;
