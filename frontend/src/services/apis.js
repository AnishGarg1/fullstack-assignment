const BASE_URL = process.env.REACT_APP_BASE_URL;

export const cardEndpoints = {
    GET_ALL_CARD_API: `${BASE_URL}/card/cards`,
    CARD_DETAILS_API: `${BASE_URL}/card/cards/:title`,
    CREATE_CARD_API: `${BASE_URL}/card/createCard`,
};
