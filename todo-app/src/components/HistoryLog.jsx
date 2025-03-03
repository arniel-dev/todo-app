import React, { useState } from "react";
import "../styles/historyLog.scss";
import useAuth from "../hooks/useAuth";
import useGetHistories from "../hooks/useGetHistories";

const HistoryLog = () => {
  const { userInfo } = useAuth();
  console.log(userInfo);
  const { histories } = useGetHistories();
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHistory = histories?.filter((entry) => {
    const matchesFilter =
      filter === "all" || entry.type.toLowerCase().includes(filter);
    const matchesSearch = JSON.stringify(entry.details)
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="history-log">
      <h1 className="history-log__title">Activity logs</h1>

      <div className="history-log__filters">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="history-log__filter"
        >
          <option value="all">All</option>
          <option value="ticket">Ticket Updates</option>
          <option value="board">Board Updates</option>
        </select>

        <input
          type="text"
          placeholder="Search history..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="history-log__search"
        />
      </div>

      {/* History List */}
      <div className="history-log__list">
        {filteredHistory.map((entry) => (
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
                {JSON.stringify(hanleDetails(entry.details), null, 2)}
              </pre>
            </div>

            {entry.user_id && (
              <div className="history-log__user">
                Performed by: {entry.display_name || `User #${entry.user_id}`}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
function hanleDetails(details) {
  console.log(details);
  const formatDetails = {
    ...details,
    oldData: {
      ...details.oldData,
      created_at: new Date(details?.oldData?.created_at).toLocaleString(),
      expiry_date: new Date(details?.oldData?.expiry_date).toLocaleString(),
    },
  };
  return formatDetails;
}
export default HistoryLog;
