import { isEmpty } from "../helper/user.helper"

export const validateMasterDataInsertProduct = ({ category, brand, product }) => {
    if (isEmpty(brand)) {
        return {
            status: false,
            error: `Thương hiệu không tồn tại, kiểm tra lại.`,
            data: null
        }
    }
    if (isEmpty(category)) {
        return {
            status: false,
            error: `Danh mục không tồn tại, kiểm tra lại.`,
            data: null
        }
    }

    if (product) {
        return {
            status: false,
            error: `Sản phẩm đã tồn tại, kiểm tra lại.`,
            data: null
        }
    };

    return {
        status: true,
        error: null,
        data: null
    }
}