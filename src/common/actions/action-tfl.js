
export const ACTION_TYPES = {
  GET_DISRUPTIONS: "GET_DISRUPTIONS",
  GET_CLOSE_STATIONS: "GET_CLOSE_STATIONS",
  TFL_ERROR: "TFL_ERROR",
};

export function getDisruptions(modes) {
  return (dispatch) => {
    const fetches = [];
    for (let i = 0; i < modes.length; i += 1) {
      fetches.push(fetch(`https://api.tfl.gov.uk/Line/Mode/${modes[i]}/Disruption`)
        .then(response => response.json())
        .then((response) => {
          const obj = { mode: modes[i], response };
          return obj;
        }));
    }
    Promise.all(fetches).then((responses) => {
      dispatch({
        type: ACTION_TYPES.GET_DISRUPTIONS,
        payload: responses,
      });
    });
  };
}
