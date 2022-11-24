import apiInstance from '../AxiosConect'
import { ITEMS_ENDPOINTS } from '../constants/GlobalConstants';

export const ItemListAPI = {
    itemList: () => {
        return apiInstance.get(ITEMS_ENDPOINTS.ITEM_LIST).then(({ data }) => data);
    },
}
export const ItemRegisterAPI = {
    itemRegister: (username, email, pass) => {
        return apiInstance.get(ITEMS_ENDPOINTS.ITEM_REGISTER, { params: { username: username, email: email, password: pass } }).then(({ data }) => data);

    },

    articleUpdate: (_id, referencia, title, description, url, stock, price, categoria, typePet, status) => {
        return apiInstance.get(ITEMS_ENDPOINTS.ARTICLE_UPDATE, { params: 
            {
             _id:_id,
             referencia: referencia,
             title: title,
             description: description,
             url: url,
             stock: stock,
             price: price,
             categoria: categoria,
             typePet: typePet,
             status: status
            }}).then(({ data }) => data);
    }
}

export const ItemRequestAPI = {
    itemRequest: (username, email, pass) => {
        return apiInstance.get(ITEMS_ENDPOINTS.ITEM_REQUEST, { params: { username: username, email: email, password: pass } }).then(({ data }) => data);

    },
}
