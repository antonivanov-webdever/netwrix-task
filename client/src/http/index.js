import axios from 'axios';

export const getAllPartners = async () => {
    return await axios.get(process.env.REACT_APP_API_URL)
}

export const getPartnersByType = async (type) => {
    return await axios.get(process.env.REACT_APP_API_URL + type)
}