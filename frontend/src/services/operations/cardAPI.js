import { apiConnector } from "../apiConnector"
import { cardEndpoints } from "../apis"

const {
    CARD_DETAILS_API,
    GET_ALL_CARD_API,
    CREATE_CARD_API,
  } = cardEndpoints

export const getAllCards = async () => {
    let result = []
    try {
      const response = await apiConnector("GET", GET_ALL_CARD_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Card Categories")
      }
      result = response?.data?.allCard
    } catch (error) {
        console.log("GET_ALL_CARD_API API ERROR............", error)
    }
    return result
}
  
export const fetchCardDetails = async (title) => {
    let result = null;
    try {
        const url = CARD_DETAILS_API.replace(':title', encodeURIComponent(title)); // Replace :title with the actual title
        const response = await apiConnector("GET", url); // Use GET instead of POST
        console.log("CARD_DETAILS_API API RESPONSE............", response);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        result = response.data.card;
    } catch (error) {
        console.log("CARD_DETAILS_API API ERROR............", error);
        result = error.response.data;
    }
    return result;
};


// add the card details
export const createCard = async (data, token) => {
    let result = null
    try {
      const response = await apiConnector("POST", CREATE_CARD_API, data)
      console.log("CREATE CARD API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Add Card Details")
      }
      result = response?.data?.data
    } catch (error) {
        console.log("CREATE Card API ERROR............", error)
    }
    return result
}