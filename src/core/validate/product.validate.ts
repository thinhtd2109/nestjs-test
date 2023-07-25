import { isEmpty } from "../helper/user.helper"

export const validateCommentProduct = ({ product, user }) => {
    if (!user) {
        return {
            status: false,
            error: `Người dùng không tồn tại, kiểm tra lại.`,
            data: null
        }
    }
    if (!product) {
        return {
            status: false,
            error: `Sản phẩm không tồn tại, kiểm tra lại.`,
            data: null
        }
    };

    return {
        status: true,
        data: null,
        error: null
    }
}

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