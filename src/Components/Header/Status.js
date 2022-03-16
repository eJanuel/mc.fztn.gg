import { useEffect } from "react";

import { ReactComponent as Pinging } from "../../Assets/Images/pinging.svg";
import { ReactComponent as Ping } from "../../Assets/Images/ping.svg";

const Status = ({ loading, status }) => {
  useEffect(() => {
    if (!loading) {
      if (status.error === undefined) {
        let ping = Math.round(status.roundTripLatency / 20);

        for (var i = 5; i >= ping; i--) {
          document.querySelector('svg#ping .col-' + i).classList.add('hl');
        }

        console.log(status?.roundTripLatency);
        console.log(ping);
      }
    }
  }, [loading, status]);

  return (
    <div id="status">
      {loading ? (
        <Pinging />
      ) : (
        <div>
          <span>
            {status.players.online} / {status.players.max}
          </span>
          <Ping />
        </div>
      )}
    </div>
  );
};

export default Status;
