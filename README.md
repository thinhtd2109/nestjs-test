# Tên API Của Bạn

Mô tả ngắn gọn về API của bạn.

## Mục lục

- [Yêu cầu hệ thống](#yeu-cau-he-thong)
- [Cài đặt](#cai-dat)
- [Tài liệu API](#tai-lieu-api)
- [Hỗ trợ](#ho-tro)

## Yêu cầu hệ thống <a name="yeu-cau-he-thong"></a>

- Node.js v14 trở lên.
- MongoDB v4.4 trở lên.
- ...

## Cài đặt <a name="cai-dat"></a>

1. **Clone repository:**

    ```bash
    git clone [địa chỉ repository]
    cd [tên thư mục]
    ```

2. **Cài đặt dependencies:**

    ```bash
    npm install
    ```

3. **Cấu hình biến môi trường:**

    Tạo một file `.env` trong thư mục root của dự án và thêm các biến môi trường sau:

    ```
    DB_CONNECTION_STRING=mongodb://your-database-connection-string
    PORT=3000
    ```

    **Lưu ý:** Thay đổi giá trị tương ứng để phù hợp với môi trường của bạn.

4. **Khởi động server:**

    ```bash
    npm start
    ```

    Sau khi chạy lệnh trên, API sẽ khởi động và lắng nghe tại `http://localhost:3000`.

## Tài liệu API <a name="tai-lieu-api"></a>

### 1. Lấy danh sách items

- **Endpoint:** `/items`
- **Method:** `GET`

**Response:**

```json
[
    {
        "id": 1,
        "name": "Item 1"
    }
]
