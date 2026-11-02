# Phantom Blade Zero — Digital Deluxe Edition · Landing Page Tải Torrent

Trang web tĩnh (HTML + CSS + JS thuần) giới thiệu và cho phép tải game **Phantom Blade Zero (影之刃零) — Digital Deluxe Edition** qua torrent. Giao diện theo chủ đề **dark fantasy / dark wuxia / kungfupunk**.

---

## 🎮 Giới thiệu game

### Phantom Blade Zero là gì?

**Phantom Blade Zero** là game **hành động nhập vai (action RPG) góc nhìn thứ ba** do studio **S-Game** phát triển, sử dụng **Unreal Engine 5**, phát hành toàn cầu ngày **29/10/2026** trên **PC (Steam)** và **PlayStation 5**.

Bối cảnh là thế giới võ hiệp mang tên **"Ảnh Cảnh" (Phantom World)**, lấy cảm hứng từ thời Minh nhưng pha trộn **steampunk, cyberpunk, giả tưởng đen tối và kinh dị** — phong cách mà CEO Lương Kỳ Vỹ gọi là **"kungfupunk"** (võ hiệp pha công nghệ). Đây được xem là sự tái sinh tinh thần của series **Rainblood (Vũ Huyết)** vốn nổi tiếng trong giới game độc lập Trung Quốc.

### Cốt truyện — 66 ngày sinh tử

Người chơi vào vai **Soul** — sát thủ hàng đầu của tổ chức bí ẩn **"Order"**. Soul bị vu oan sát hại giáo chủ và trở thành mục tiêu truy sát của chính đồng đội cũ. Trong trận quyết đấu với người anh em kết nghĩa **Zuo Shang**, cả hai cùng bị đâm xuyên tim.

Được một thầy thuốc bí ẩn cứu sống bằng trái tim **"nhiễm độc"**, Soul chỉ còn đúng **66 ngày** để sống. Anh phải lần ra âm mưu bao trùm võ lâm và tìm cách chữa lành trái tim. Trò chơi có nhiều nhiệm vụ phụ ảnh hưởng diễn biến, dẫn tới tối đa **8 cái kết** khác nhau.

### Lối chơi & độ khó

- **Hệ thống chiến đấu** là điểm nhấn lớn nhất: cả người chơi lẫn kẻ địch đều có thanh máu và thanh **"sát khí" (sha-chi)**. Đỡ đòn và tấn công hạng nặng tiêu hao sát khí; cạn thanh thì bị **vỡ thế (guard break)**.
- Soul mang **2 vũ khí chính** (kiếm dài, vòng đao, đại đao, nhuyễn kiếm…) và **2 vũ khí phụ "Ảnh Chi Vũ Trang"** (cung, rìu khổng lồ, đầu lân phun lửa…) có giới hạn đạn.
- Game có **50+ boss, 30 vũ khí chính, 20 vũ khí phụ**, kết hợp parry, né tránh, chạy tường, dịch chuyển ra sau lưng và các đòn kết liễu góc máy điện ảnh. **Không phải Soulslike thuần túy.**
- Bản đồ **bán thế giới mở (semi-open world)**: nhiều màn lớn liên thông, gõ "chuông" để nghỉ/hồi sinh/dịch chuyển nhanh.
- **4 mức độ khó:** Wayfarer · Pathbreaker · Hellwalker · **66 Days** (giống Hellwalker + bộ đếm 66 lần chết, hết lượt là permadeath). Có **New Game Plus**.

### Đánh giá & sức hút

- **Metacritic:** PC **88**, PS5 **87** — cao hơn Black Myth: Wukong (81). **OpenCritic ~90–91**, ~96% phê bình khuyên chơi.
- IGN China 10/10 ("truyền thuyết võ hiệp pha punk"), IGN 9/10, GameSpot 8/10, Fextralife 8/10.
- Ngôi sao võ thuật **Chân Tử Đan (Donnie Yen)** làm cố vấn sáng tạo kiêm lồng tiếng/mocap cho nhân vật **Mo Yuan**; **Kenji Tanigaki** đạo diễn võ thuật; bản Anh có **Roger Craig Smith** lồng tiếng Soul.
- ~850.000 lượt đặt trước, ~43 triệu USD (theo Alinea Analytics, ước tính bên thứ ba).

### Giá bán

| Phiên bản | Giá tham khảo |
|---|---|
| Tiêu chuẩn | 59,99 USD (TQ: 268 tệ) |
| **Digital Deluxe** | **69,99 USD (TQ: 328 tệ)** |

---

## 🎨 Tông màu chủ đạo

| Màu | Mã | Vai trò |
|---|---|---|
| Đen | `#050506 → #14141a` | Nền chính, thế giới võ lâm tăm tối |
| Xám | `#0f0f13`, `#26252d` | Panel, viền, tàn tích cơ khí |
| Đỏ máu | `#c8102e` | Điểm nhấn: tiêu đề, nút tải, mạch máu |
| Bạc kim loại | `#c4c9cf` | Chữ "thép", chip, giáp/kiếm Blood-Steel |

## 📁 Cấu trúc thư mục

```
Rugame/
├── index.html                        # Cấu trúc trang (nội dung tiếng Việt)
├── style.css                         # Toàn bộ giao diện (bảng màu chủ đề)
├── script.js                         # Tương tác: countdown, magnet, torrent, hạt nền
├── PhantomBladeZero-Deluxe.torrent   # File torrent thật (đặt cạnh index.html)
└── README.md
```

## 🚀 Chạy trang

Không cần build. Mở trực tiếp:

- **Cách 1:** Nhấp đúp vào `index.html`.
- **Cách 2:** Serve bằng server tĩnh (khuyến nghị để ảnh/font load chuẩn):
  ```bash
  python -m http.server 8080      # hoặc: npx serve .
  ```
  Rồi mở <http://127.0.0.1:8080>.

> ⚠️ Mở qua `file://` vẫn chạy được, nhưng file `.torrent` và vài tài nguyên ngoài (Google Fonts) có thể bị trình duyệt chặn.

## 📦 Thông tin torrent (đã gắn thật)

| Trường | Giá trị |
|---|---|
| Tên | `Phantom.Blade.Zero-InsaneRamZes` |
| Info hash | `297f6134c625b297ce34f81931f0dcedf573fde7` |
| Kích thước | 140.5 GB (140.55 GiB, 298 file) |
| Định dạng | Portable repack — InsaneRamZes · 2 DLC |
| Trackers | `bt2.t-ru.org` · `retracker.local` |

Magnet link:
```
magnet:?xt=urn:btih:297f6134c625b297ce34f81931f0dcedf573fde7&dn=Phantom.Blade.Zero-InsaneRamZes&tr=http%3A%2F%2Fbt2.t-ru.org%2Fann%3Fpk%3Db464b7c20c8649d432f8f0770e94e7dd&tr=http%3A%2F%2Fretracker.local%2Fannounce
```

## 🧩 Các phần của trang

- **Hero** — ảnh nền full màn, đếm ngược, hiệu ứng tia lửa cơ khí (canvas)
- **Dải chạy (ticker)** — cụm từ chủ đề ✦ 66 NGÀY ✦ BLOOD-STEEL
- **Tổng quan** — 4 card tính năng (Combo, Kungfupunk, Blood-Steel Form, Phantom Edge)
- **Digital Deluxe Edition** — nội dung bản Deluxe + giá
- **Thư viện ảnh** — dùng ảnh bìa, crop nhiều góc
- **Cấu hình** — tối thiểu / khuyến nghị
- **Tải torrent** — sao chép magnet, tải `.torrent`, seeders/leechers "sống", thanh tiến trình mô phỏng
- **FAQ — Footer**

## 🔧 Tùy chỉnh

Mọi thứ cần sửa đều nằm đầu file `script.js`:

| Biến | Mục đích |
|---|---|
| `TORRENT_MAGNET` | Magnet link hiển thị + sao chép |
| `TORRENT_FILE_URL` | Đường dẫn file `.torrent` |
| `RELEASE_DATE` | Ngày đếm ngược hiển thị |

- **Đổi torrent khác:** thả file `.torrent` mới vào thư mục, trích xuất magnet (qBittorrent → "Copy magnet link"), cập nhật 2 biến trên.
- **Đổi ảnh nền:** sửa URL trong `<div class="hero__bg">` (CSS `style.css`) và thẻ `<img>` trong gallery.
- **Lưu ý ngày ra mắt:** game đã phát hành **29/10/2026**. Biến `RELEASE_DATE` trong `script.js` hiện là giá trị demo — đổi hoặc ẩn khối đếm ngược nếu không cần.

## ℹ️ Ghi chú

- Nút **"Bắt đầu tải Torrent"** là mô phỏng tiến trình trong trang; tải thật bằng cách **Sao chép magnet** → dán vào qBittorrent / uTorrent, hoặc tải file `.torrent`.
- Đây là trang demo giao diện, không phải trang tải chính thức. Hãy ủng hộ S-GAME bằng cách mua bản quyền.
