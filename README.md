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

### 1. Lấy danh sách items

- **Endpoint:** `/auth/signin`
- **Method:** `POST`

**Response:**
**Lưu ý:** mật khẩu sẽ do FRONTEND HASH và gửi xuống server, đây chỉ là ví dụ
```json
[
    {
        "username": "thinhtd",
        "password": "123456"
    }
]


