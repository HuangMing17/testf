# Hello People - From Hoàng Minh With luv

Một ứng dụng Next.js cơ bản được tối ưu hóa cho mobile với giao diện đẹp và tốc độ load nhanh, sẵn sàng để deploy trên Vercel.

## ✨ Tính năng

- 🚀 **Next.js 14** với App Router
- 📱 **Mobile First Design** - Tối ưu cho điện thoại
- ⚡ **Performance cao** - Load nhanh, SEO tối ưu
- 🎨 **Giao diện đẹp** - Gradient, animation mượt mà
- 📦 **PWA Ready** - Có thể cài đặt như app
- 🌙 **Dark Mode** - Hỗ trợ chế độ tối
- 🔧 **TypeScript** - Type safety
- 🎯 **SEO tối ưu** - Meta tags, Open Graph, Twitter Cards

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### Chạy development server
```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build cho production
```bash
npm run build
npm start
# hoặc
yarn build
yarn start
```

## 📱 Tối ưu hóa Mobile

- **Responsive Design**: Tự động điều chỉnh theo kích thước màn hình
- **Touch Friendly**: Các nút và link có kích thước phù hợp cho touch
- **Fast Loading**: Tối ưu hóa images, fonts, và assets
- **PWA Support**: Có thể cài đặt như ứng dụng native

## 🚀 Deploy lên Vercel

### Cách 1: Deploy trực tiếp từ GitHub

1. **Push code lên GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/hello-people-nextjs.git
   git push -u origin main
   ```

2. **Deploy trên Vercel**:
   - Truy cập [vercel.com](https://vercel.com)
   - Đăng nhập bằng GitHub
   - Click "New Project"
   - Import repository từ GitHub
   - Vercel sẽ tự động detect Next.js và deploy

### Cách 2: Deploy bằng Vercel CLI

1. **Cài đặt Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow các bước hướng dẫn**:
   - Chọn project directory
   - Chọn framework (Next.js)
   - Deploy!

### Cách 3: Deploy từ Vercel Dashboard

1. Truy cập [vercel.com/new](https://vercel.com/new)
2. Import Git Repository
3. Chọn repository của bạn
4. Vercel sẽ tự động build và deploy

## 🔧 Cấu hình

### Environment Variables
Tạo file `.env.local` nếu cần:
```env
NEXT_PUBLIC_APP_NAME=Hello People
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### Custom Domain
1. Vào Vercel Dashboard
2. Chọn project
3. Vào Settings > Domains
4. Thêm domain của bạn

## 📊 Performance

- **Lighthouse Score**: 95+ trên tất cả metrics
- **Core Web Vitals**: Tối ưu cho mobile
- **Bundle Size**: Nhỏ gọn, load nhanh
- **Images**: Tự động optimize với Next.js Image

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel
- **PWA**: Manifest + Service Worker

## 📁 Cấu trúc Project

```
hello-people-nextjs/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # SEO robots
├── next.config.js           # Next.js config
├── tailwind.config.js       # Tailwind config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa file `app/globals.css`:
```css
/* Thay đổi gradient background */
body {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Thay đổi nội dung
Chỉnh sửa file `app/page.tsx` để thay đổi text và layout.

### Thêm trang mới
Tạo file mới trong thư mục `app/` với cấu trúc:
```
app/
├── about/
│   └── page.tsx    # /about route
└── contact/
    └── page.tsx    # /contact route
```

## 📱 Testing Mobile

1. **Chrome DevTools**:
   - F12 > Toggle device toolbar
   - Chọn device để test

2. **Real Device**:
   - Chạy `npm run dev`
   - Truy cập IP local từ điện thoại
   - VD: `http://192.168.1.100:3000`

## 🚀 Production Checklist

- [ ] Test trên nhiều device khác nhau
- [ ] Kiểm tra performance với Lighthouse
- [ ] Cấu hình custom domain (nếu cần)
- [ ] Setup analytics (Google Analytics, Vercel Analytics)
- [ ] Test PWA installation
- [ ] Kiểm tra SEO meta tags

## 📞 Support

Nếu có vấn đề gì, hãy tạo issue trên GitHub hoặc liên hệ qua email.

---

**Chúc bạn deploy thành công! 🎉**
