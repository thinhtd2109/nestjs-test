# E-commerce API

API này hỗ trợ các hoạt động như: quản lý sản phẩm, bình luận, đăng ký, đăng nhập.

## Mục lục

- [Yêu cầu hệ thống](#yeu-cau-he-thong)
- [Cài đặt](#cai-dat)
- [Tài liệu API](#tai-lieu-api)
- [Hỗ trợ](#ho-tro)

## Yêu cầu hệ thống <a name="yeu-cau-he-thong"></a>

- Node.js v14 trở lên.

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

**Response:**
```json
[
    {
        "username": "thinhtd",
        "password": "123456"
    }
]
```
### 2. Đăng ký
- **Endpoint:** `/auth/signup`
- **Method:** `POST`

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

### 3. Tạo sản phẩm
- **Endpoint:** `/product/:code`
- **Method:** `GET`

**Response:**
```json
{
  "id": "7a424c47-351f-4de4-b881-63092945b463",
  "code": "UML100",
  "name": "IPHONE 14 PROMAX",
  "price": 10000000,
  "description": "",
  "brandId": null,
  "categoryId": null,
  "created": "2023-07-25T13:45:08.617Z",
  "deleted": false,
  "updated": null,
  "createdBy": null,
  "updatedBy": null,
  "deletedBy": null,
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
      }
  ]
}
```


