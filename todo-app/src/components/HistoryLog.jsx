import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useGetHistories from "../hooks/useGetHistories";
import { debounce } from "lodash";
import "../styles/historyLog.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";

const HistoryLog = ({ isOpen, onClose }) => {
  const { userInfo } = useAuth();
  const {
    histories,
    loadMoreHistories,
    hasMore,
    setSearchQuery,
    applyFilters,
    isFetchingNextPage,
    setFilter,
    filter,
    isApplyingFilters,
    queryClient,
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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    applyFilters();
  };
  useEffect(() => {
    queryClient.invalidateQueries(["histories", userInfo.user_id]);
    applyFilters();
  }, [isOpen]);

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
          <select
            value={filter}
            onChange={handleFilterChange}
            className="history-log__filter"
            aria-label="Filter by type"
          >
            <option value="all">All</option>
            <option value="BOARD_UPDATE">Board Updates</option>
            <option value="TICKET_UPDATE">Ticket Updates</option>
          </select>
          <span></span>
          <input
            type="text"
            placeholder="Search history..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="history-log__search"
            aria-label="Search history"
          />
          {searchInput && (
            <button
              onClick={() => setSearchInput("")}
              className="history-log__search-button"
              aria-label="Clear search"
            >
              ✖
            </button>
          )}
          {isApplyingFilters && (
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              className="history-log__spinner"
            />
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
        created_at: details.oldData?.created_at
          ? new Date(details.oldData.created_at).toLocaleString()
          : details.oldData.created_at,
        expiry_date: details.oldData?.expiry_date
          ? new Date(details.oldData.expiry_date).toLocaleString()
          : details.oldData.expiry_date,
      },
    };
  } else {
    return details;
  }
}

HistoryLog.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default HistoryLog;
