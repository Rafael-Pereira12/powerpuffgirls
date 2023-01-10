import { SET_SEASON_DETAILS } from "../actions";
import React, { useCallback, useContext, useReducer } from "react";
import reducer from "../reducer/globalReducer";
import { Season } from "../components/containers/TVShowSeasons/TVShowSeasonsTypes";

const initialState = {
  seasonDetails: {
    number: 0,
    id: 0,
  },
};

const GlobalContext = React.createContext<{
  setSeasonDetails: Function;
  seasonDetails: Season;
}>({
  setSeasonDetails: () => {},
  seasonDetails: {
    number: 0,
    id: 0,
  },
});

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSeasonDetails = useCallback((seasonDetails: Season[]) => {
    dispatch({ type: SET_SEASON_DETAILS, payload: seasonDetails });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setSeasonDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
