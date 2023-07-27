# E-commerce API

API này hỗ trợ các hoạt động như: quản lý sản phẩm, bình luận, đăng ký, đăng nhập.

## Mục lục

- [Yêu cầu hệ thống](#yeu-cau-he-thong)
- [Cài đặt](#cai-dat)
- [Tài liệu API](#tai-lieu-api)
- [Hỗ trợ](#ho-tro)

## Yêu cầu hệ thống <a name="yeu-cau-he-thong"></a>

- Node.js v14 trở lên.
- NestJS CLI

## Cài đặt <a name="cai-dat"></a>

1. **Clone repository:**

    ```bash
    https://github.com/thinhtd2109/nestjs-test.git
    cd nestjs-test
    ```

2. **Cài đặt dependencies:**

    ```bash
    npm install
    ```

3. **Cấu hình biến môi trường:**

    Tạo một file `.env` trong thư mục root của dự án và thêm các biến môi trường sau:

    ```
    DB_HOST=ep-old-snowflake-877762-pooler.ap-southeast-1.aws.neon.tech
    DB_PORT=5432
    DB_USER=thinhtd2109
    DB_PASS=lZYL7PBvD9fg
    DB_DIALECT=postgres
    DB_NAME_DEVELOPMENT=example-test
    secret_key=abc12345
    ```

4. **Khởi động server:**

    ```bash
    npm run start:dev
    ```

    Sau khi chạy lệnh trên, API sẽ khởi động và lắng nghe tại `http://localhost:3000`.

## Tài liệu API <a name="tai-lieu-api"></a>

### 1. Đăng nhập
- **Endpoint:** `/auth/signin`
- **Method:** `POST`

**Definition:**
#### 1. Trường 1:

- **Tên trường**: username
- **Loại dữ liệu**: string
- **Mô tả**: Tên tài khoản

#### 2. Trường 2:

- **Tên trường**: password
- **Loại dữ liệu**: string
- **Mô tả**: Mật khẩu

**Request:**
```json
{
  "username": "thinhtd",
  "password": "123456"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiOWZhMjc4MjktMjFkZi00MDIwLTliMzYtZWM3NDNmNjVhMDFiIiwidXNlck5hbWUiOiJ0aGluaHRkMjEwOSIsImVtYWlsIjoidGhpbmh0ZDIxMDkxQGdtYWlsLmNvbSIsImRhdGVSZWdpc3RlcmVkIjpudWxsLCJsYXN0TG9naW4iOm51bGwsImlzQWN0aXZlIjp0cnVlLCJibG9ja2VkIjpmYWxzZSwicXR5X2ZhaWwiOjAsImNyZWF0ZWQiOiIyMDIzLTA3LTI2VDAzOjUwOjU4LjUwNFoiLCJkZWxldGVkIjpmYWxzZSwidXBkYXRlZCI6bnVsbCwiY3JlYXRlZEJ5IjpudWxsLCJ1cGRhdGVkQnkiOm51bGwsImRlbGV0ZWRCeSI6bnVsbH0sImlhdCI6MTY5MDM0MzU3NX0.uEGXiQZ4wu4DZhJ_DViAyWC12o6pNr_KA6hae1XkAG0"
}
```

### 2. Đăng ký
- **Endpoint:** `/auth/signup`
- **Method:** `POST`

**Definition:**
#### 1. Trường 1:

- **Tên trường**: username
- **Loại dữ liệu**: string
- **Mô tả**: Tên tài khoản

#### 2. Trường 2:

- **Tên trường**: password
- **Loại dữ liệu**: string
- **Mô tả**: Mật khẩu

#### 3. Trường 3:

- **Tên trường**: email
- **Loại dữ liệu**: string
- **Mô tả**: email

#### 4. Trường 4:

- **Tên trường**: phone
- **Loại dữ liệu**: string
- **Mô tả**: Số điện thoại

#### 5. Trường 5:

- **Tên trường**: full_name
- **Loại dữ liệu**: string
- **Mô tả**: Họ và tên

#### 6. Trường 6:

- **Tên trường**: birth_day
- **Loại dữ liệu**: string
- **Mô tả**: Ngày sinh

**Request:**
```json
{
  "username": "thinhtd",
  "password": "123456",
  "email": "thinhtd2109@gmail.com",
  "user_info": {
    "phone": "0335644678",
    "full_name":"Tran Duc Thinh",
    "birth_day": "1989-10-21"
  }
}
```

**Response**
```json
{
  "status": true,
  "data": {
      "id": "9fa27829-21df-4020-9b36-ec743f65a01b",
      "blocked": false,
      "created": "2023-07-26T03:50:58.504Z",
      "deleted": false,
      "userName": "thinhtd2109",
      "passwordHash": "123456",
      "email": "thinhtd21091@gmail.com",
      "dateRegistered": null,
      "lastLogin": null,
      "isActive": true,
      "qty_fail": 0,
      "updated": null,
      "createdBy": null,
      "updatedBy": null,
      "deletedBy": null,
      "userInfo": {
          "id": "ae8a1918-4c8c-42eb-8f75-4f9df78f4be7",
          "created": "2023-07-26T03:50:58.710Z",
          "deleted": false,
          "birthDay": "1989-10-21T00:00:00.000Z",
          "userId": "9fa27829-21df-4020-9b36-ec743f65a01b",
          "fullName": "Tran Duc Thinh",
          "phone": "0335644678",
          "updated": null,
          "createdBy": null,
          "updatedBy": null,
          "deletedBy": null
      }
  },
  "error": null
}
```

### 3. Lấy sản phẩm theo mã
- **Endpoint:** `/product/UML100`
- **Method:** `GET`

**Response:**
```json
{
    "status": true,
    "error": null,
    "data": {
        "id": "7a424c47-351f-4de4-b881-63092945b463",
        "code": "UML100",
        "name": "IPHONE 14 PROMAX",
        "price": 10000000,
        "description": "",
        "brandId": 2,
        "categoryId": 2,
        "created": "2023-07-25T13:45:08.617Z",
        "deleted": false,
        "updated": null,
        "createdBy": null,
        "updatedBy": null,
        "deletedBy": null,
        "brand": {
            "id": 2,
            "code": "TGDD",
            "name": "Thế giới di động",
            "created": "2023-07-25T13:37:40.789Z",
            "deleted": false,
            "updated": null,
            "createdBy": null,
            "updatedBy": null,
            "deletedBy": null
        },
        "category": {
            "id": 2,
            "code": "IPH",
            "name": "Điện thoại",
            "created": "2023-07-25T13:38:57.420Z",
            "deleted": false,
            "updated": null,
            "createdBy": null,
            "updatedBy": null,
            "deletedBy": null
        },
        "comments": [
            {
                "id": 3,
                "productId": "7a424c47-351f-4de4-b881-63092945b463",
                "commentId": "9dba8476-3974-4654-bb49-d663529120a8",
                "created": "2023-07-25T14:15:30.049Z",
                "deleted": false,
                "updated": null,
                "updatedBy": null,
                "deletedBy": null,
                "comment": {
                    "id": "9dba8476-3974-4654-bb49-d663529120a8",
                    "commentText": "Hello!!!",
                    "created": "2023-07-25T14:15:29.955Z",
                    "deleted": false,
                    "updated": null,
                    "createdBy": null,
                    "updatedBy": null,
                    "deletedBy": null,
                    "createdByUser": null,
                    "replies": [
                        {
                            "id": "86f77741-ec47-42e7-9cc4-8e80282f7796",
                            "commentId": "9dba8476-3974-4654-bb49-d663529120a8",
                            "commentText": "Hello!!!",
                            "created": "2023-07-25T14:24:26.944Z",
                            "deleted": false,
                            "updated": null,
                            "createdBy": "4dd27067-19fa-4f18-a00f-96ddd4e214ae",
                            "updatedBy": null,
                            "deletedBy": null,
                            "user": {
                                "id": "4dd27067-19fa-4f18-a00f-96ddd4e214ae",
                                "userName": "thinhtd",
                                "email": "thinhtd2109@gmail.com",
                                "passwordHash": "123456",
                                "dateRegistered": null,
                                "lastLogin": "2023-07-26T02:36:41.495Z",
                                "isActive": true,
                                "blocked": false,
                                "qty_fail": 0,
                                "created": "2023-07-24T14:24:41.920Z",
                                "deleted": false,
                                "updated": null,
                                "createdBy": null,
                                "updatedBy": null,
                                "deletedBy": null,
                                "userInfos": [
                                    {
                                        "id": "7c606ce4-b7bb-4f42-af6e-d86153abf540",
                                        "phone": "0335644678",
                                        "fullName": "Tran Duc Thinh",
                                        "userId": "4dd27067-19fa-4f18-a00f-96ddd4e214ae",
                                        "created": "2023-07-24T14:24:41.965Z",
                                        "birthDay": "2023-09-21T00:00:00.000Z",
                                        "deleted": false,
                                        "updated": null,
                                        "createdBy": null,
                                        "updatedBy": null,
                                        "deletedBy": null
                                    }
                                ]
                            }
                        },
                        {
                            "id": "89842d2d-926d-4da0-b6f0-d6a45870b4e4",
                            "commentId": "9dba8476-3974-4654-bb49-d663529120a8",
                            "commentText": "Fine, thanks.",
                            "created": "2023-07-25T14:28:29.113Z",
                            "deleted": false,
                            "updated": null,
                            "createdBy": "4dd27067-19fa-4f18-a00f-96ddd4e214ae",
                            "updatedBy": null,
                            "deletedBy": null,
                            "user": {
                                "id": "4dd27067-19fa-4f18-a00f-96ddd4e214ae",
                                "userName": "thinhtd",
                                "email": "thinhtd2109@gmail.com",
                                "passwordHash": "123456",
                                "dateRegistered": null,
                                "lastLogin": "2023-07-26T02:36:41.495Z",
                                "isActive": true,
                                "blocked": false,
                                "qty_fail": 0,
                                "created": "2023-07-24T14:24:41.920Z",
                                "deleted": false,
                                "updated": null,
                                "createdBy": null,
                                "updatedBy": null,
                                "deletedBy": null,
                                "userInfos": [
                                    {
                                        "id": "7c606ce4-b7bb-4f42-af6e-d86153abf540",
                                        "phone": "0335644678",
                                        "fullName": "Tran Duc Thinh",
                                        "userId": "4dd27067-19fa-4f18-a00f-96ddd4e214ae",
                                        "created": "2023-07-24T14:24:41.965Z",
                                        "birthDay": "2023-09-21T00:00:00.000Z",
                                        "deleted": false,
                                        "updated": null,
                                        "createdBy": null,
                                        "updatedBy": null,
                                        "deletedBy": null
                                    }
                                ]
                            }
                        },
                        {
                            "id": "d35a8b2c-1d0f-43a7-9cb5-74575fc04c25",
                            "commentId": "9dba8476-3974-4654-bb49-d663529120a8",
                            "commentText": "Hi, How are you?",
                            "created": "2023-07-25T14:25:02.608Z",
                            "deleted": false,
                            "updated": null,
                            "createdBy": "4dd27067-19fa-4f18-a00f-96ddd4e214ae",
                            "updatedBy": null,
                            "deletedBy": null,
                            "user": {
                                "id": "4dd27067-19fa-4f18-a00f-96ddd4e214ae",
                                "userName": "thinhtd",
                                "email": "thinhtd2109@gmail.com",
                                "passwordHash": "123456",
                                "dateRegistered": null,
                                "lastLogin": "2023-07-26T02:36:41.495Z",
                                "isActive": true,
                                "blocked": false,
                                "qty_fail": 0,
                                "created": "2023-07-24T14:24:41.920Z",
                                "deleted": false,
                                "updated": null,
                                "createdBy": null,
                                "updatedBy": null,
                                "deletedBy": null,
                                "userInfos": [
                                    {
                                        "id": "7c606ce4-b7bb-4f42-af6e-d86153abf540",
                                        "phone": "0335644678",
                                        "fullName": "Tran Duc Thinh",
                                        "userId": "4dd27067-19fa-4f18-a00f-96ddd4e214ae",
                                        "created": "2023-07-24T14:24:41.965Z",
                                        "birthDay": "2023-09-21T00:00:00.000Z",
                                        "deleted": false,
                                        "updated": null,
                                        "createdBy": null,
                                        "updatedBy": null,
                                        "deletedBy": null
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                "id": 4,
                "productId": "7a424c47-351f-4de4-b881-63092945b463",
                "commentId": "79e878da-20ec-4102-9670-87d45fffb3c8",
                "created": "2023-07-26T03:58:13.601Z",
                "deleted": false,
                "updated": null,
                "updatedBy": null,
                "deletedBy": null,
                "comment": {
                    "id": "79e878da-20ec-4102-9670-87d45fffb3c8",
                    "commentText": "Hello World.",
                    "created": "2023-07-26T03:58:13.469Z",
                    "deleted": false,
                    "updated": null,
                    "createdBy": null,
                    "updatedBy": null,
                    "deletedBy": null,
                    "createdByUser": null,
                    "replies": [
                        {
                            "id": "2ff99f51-ea3a-41a6-9d59-b0f8fd1ae858",
                            "commentId": "79e878da-20ec-4102-9670-87d45fffb3c8",
                            "commentText": "Hello World.",
                            "created": "2023-07-26T04:07:00.023Z",
                            "deleted": false,
                            "updated": null,
                            "createdBy": "9fa27829-21df-4020-9b36-ec743f65a01b",
                            "updatedBy": null,
                            "deletedBy": null,
                            "user": {
                                "id": "9fa27829-21df-4020-9b36-ec743f65a01b",
                                "userName": "thinhtd2109",
                                "email": "thinhtd21091@gmail.com",
                                "passwordHash": "123456",
                                "dateRegistered": null,
                                "lastLogin": "2023-07-26T03:52:55.136Z",
                                "isActive": true,
                                "blocked": false,
                                "qty_fail": 0,
                                "created": "2023-07-26T03:50:58.504Z",
                                "deleted": false,
                                "updated": null,
                                "createdBy": null,
                                "updatedBy": null,
                                "deletedBy": null,
                                "userInfos": [
                                    {
                                        "id": "ae8a1918-4c8c-42eb-8f75-4f9df78f4be7",
                                        "phone": "0335644678",
                                        "fullName": "Tran Duc Thinh",
                                        "userId": "9fa27829-21df-4020-9b36-ec743f65a01b",
                                        "created": "2023-07-26T03:50:58.710Z",
                                        "birthDay": "1989-10-21T00:00:00.000Z",
                                        "deleted": false,
                                        "updated": null,
                                        "createdBy": null,
                                        "updatedBy": null,
                                        "deletedBy": null
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
}
```

### 4. Tạo sản phẩm
- **Endpoint:** `/product/insert`
- **Method:** `POST`

**Definition:**
#### 1. Trường 1:

- **Tên trường**: code
- **Loại dữ liệu**: string
- **Mô tả**: Mã sản phẩm

#### 2. Trường 2:

- **Tên trường**: name
- **Loại dữ liệu**: string
- **Mô tả**: Tên sản phẩm

#### 3. Trường 3:

- **Tên trường**: category_code
- **Loại dữ liệu**: string
- **Mô tả**: Mã danh mục

#### 4. Trường 4:

- **Tên trường**: brand_code
- **Loại dữ liệu**: string
- **Mô tả**: Mã thương hiệu

#### 5. Trường 5:

- **Tên trường**: description
- **Loại dữ liệu**: string
- **Mô tả**: Mô tả

#### 6. Trường 6:

- **Tên trường**: price
- **Loại dữ liệu**: string
- **Mô tả**: Giá sản phẩm

**Request**
```json
{
  "code": "UML202",
  "name": "IPHONE 12 PROMAX",
  "category_code": "IPH",
  "brand_code": "TGDD",
  "description": "",
  "price": 15000000
}
```

**Headers**
- `Authorization`: Bearer {{Token}}

**Response**
```json
{
    "status": true,
    "error": null,
    "data": {
        "id": "32c61659-1026-45df-a3c7-1578a98f784c",
        "created": "2023-07-26T04:24:31.782Z",
        "deleted": false,
        "code": "UML202",
        "name": "IPHONE 12 PROMAX",
        "categoryId": 2,
        "brandId": 2,
        "description": "",
        "price": 15000000,
        "updated": null,
        "createdBy": null,
        "updatedBy": null,
        "deletedBy": null
    }
}
```

### 5. Bình luận trên sản phẩm
- **Endpoint:** `/product/comment`
- **Method:** `POST`

**Definition:**
### 1. Trường 1:

- **Tên trường**: product_code
- **Loại dữ liệu**: string
- **Mô tả**: Mã sản phẩm

### 2. Trường 2:

- **Tên trường**: comment_text
- **Loại dữ liệu**: string
- **Mô tả**: Bình luận

### 3. Trường 3:

- **Tên trường**: user_id
- **Loại dữ liệu**: uuid
- **Mô tả**: Mã người dùng

**Headers**
- `Authorization`: Bearer {{Token}}
**Request**
```json 
{
  "product_code": "UML100",
  "comment_text": "Hello World.",
  "user_id": "9fa27829-21df-4020-9b36-ec743f65a01b"
}
```

**Response**
```json 
{
  "status": true,
  "data": {
      "created": "2023-07-26T03:58:13.601Z",
      "deleted": false,
      "id": 4,
      "productId": "7a424c47-351f-4de4-b881-63092945b463",
      "commentId": "79e878da-20ec-4102-9670-87d45fffb3c8",
      "updated": null,
      "updatedBy": null,
      "deletedBy": null
  },
  "error": null
}
```

### 6. Trả lời bình luận
- **Endpoint:** `/product/comment`
- **Method:** `POST`

**Definition:**
#### 1. Trường 1:

- **Tên trường**: product_code
- **Loại dữ liệu**: string
- **Mô tả**: Mã sản phẩm

#### 2. Trường 2:

- **Tên trường**: comment_text
- **Loại dữ liệu**: string
- **Mô tả**: Bình luận

#### 3. Trường 3:

- **Tên trường**: user_id
- **Loại dữ liệu**: uuid
- **Mô tả**: Mã người dùng

#### 4. Trường 4:

- **Tên trường**: reply_comment
- **Loại dữ liệu**: uuid
- **Mô tả**: Trả lời bình luận

**Headers**
- `Authorization`: Bearer {{Token}}

**Request**
```json
{
  "product_code": "UML100",
  "comment_text": "Hello World.",
  "user_id": "9fa27829-21df-4020-9b36-ec743f65a01b",
  "reply_comment": "79e878da-20ec-4102-9670-87d45fffb3c8"
}
```

**Response**
```json
{
  "status": true,
  "data": {
      "id": "2ff99f51-ea3a-41a6-9d59-b0f8fd1ae858",
      "created": "2023-07-26T04:07:00.023Z",
      "deleted": false,
      "commentText": "Hello World.",
      "commentId": "79e878da-20ec-4102-9670-87d45fffb3c8",
      "createdBy": "9fa27829-21df-4020-9b36-ec743f65a01b",
      "updated": null,
      "updatedBy": null,
      "deletedBy": null
  },
  "error": null
}
```
### 7. Lấy danh sách sản phẩm
- **Endpoint:** `/product`
- **Method:** `GET`

**Definition:**
#### 1. Trường 1:

- **Tên trường**: code
- **Loại dữ liệu**: string
- **Mô tả**: Mã sản phẩm

#### 2. Trường 2:

- **Tên trường**: name
- **Loại dữ liệu**: string
- **Mô tả**: Tên sản phẩm

#### 3. Trường 3:

- **Tên trường**: brand_id
- **Loại dữ liệu**: number
- **Mô tả**: Mã thương hiệu

#### 4. Trường 4:

- **Tên trường**: category_id
- **Loại dữ liệu**: number
- **Mô tả**: Mã danh mục

**Request**
```json
{
    "code": "UML001",
    "search_string": "IPHONE",
    "category_id": 2,
    "brand_id": 2
}
```

**Response**
```json
{
    "status": true,
    "error": null,
    "data": [
        {
            "id": "32c61659-1026-45df-a3c7-1578a98f784c",
            "code": "UML202",
            "name": "IPHONE 12 PROMAX",
            "price": 15000000,
            "description": "",
            "brandId": 2,
            "categoryId": 2,
            "created": "2023-07-26T04:24:31.782Z",
            "deleted": false,
            "updated": null,
            "createdBy": null,
            "updatedBy": null,
            "deletedBy": null
        },
        {
            "id": "4246c3a8-9b63-42f8-a2e4-4f1a0148b52e",
            "code": "UML200",
            "name": "IPHONE 12 PROMAX",
            "price": 15000000,
            "description": "",
            "brandId": 2,
            "categoryId": 2,
            "created": "2023-07-26T04:20:29.658Z",
            "deleted": false,
            "updated": null,
            "createdBy": null,
            "updatedBy": null,
            "deletedBy": null
        },
        {
            "id": "4deb884c-263b-4cf6-8d7f-d87552dc57d7",
            "code": "UML201",
            "name": "IPHONE 12 PROMAX",
            "price": 15000000,
            "description": "",
            "brandId": 2,
            "categoryId": 2,
            "created": "2023-07-26T04:24:01.362Z",
            "deleted": false,
            "updated": null,
            "createdBy": null,
            "updatedBy": null,
            "deletedBy": null
        },
        {
            "id": "7a424c47-351f-4de4-b881-63092945b463",
            "code": "UML100",
            "name": "IPHONE 14 PROMAX",
            "price": 10000000,
            "description": "",
            "brandId": 2,
            "categoryId": 2,
            "created": "2023-07-25T13:45:08.617Z",
            "deleted": false,
            "updated": null,
            "createdBy": null,
            "updatedBy": null,
            "deletedBy": null
        }
    ]
}
```

## Hỗ trợ <a name="ho-tro"></a>
Nếu bạn gặp vấn đề hoặc cần trợ giúp, vui lòng mở một issue tại https://github.com/thinhtd2109/nestjs-test.