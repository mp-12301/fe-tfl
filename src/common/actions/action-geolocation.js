export const ACTION_TYPES = {
  GET_GEOLOCATION: "GET_GEOLOCATION",
  NO_SUPPORT_GEOLOCATION: "NO_SUPPORT_GEOLOCATION",
};

export function getGeoLocation() {
  return (dispatch) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        dispatch({
          type: ACTION_TYPES.GET_GEOLOCATION,
          latitude,
          longitude,
        });
      });
    } else {
      dispatch({
        type: ACTION_TYPES.NO_SUPPORT_GEOLOCATION,
      });
    }
  };
}
