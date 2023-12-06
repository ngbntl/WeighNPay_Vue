// import { useAuthStore } from "../stores/modules/auth";

// export function adminMiddleware(to, from, next) {
//   if (to.meta.requiresAuth) {
//     // Kiểm tra điều kiện xác thực hoặc các điều kiện khác
//     if (!useAuthStore().isLoggedIn) {
//       next("/login"); // Hoặc next("/login") tùy thuộc vào logic của bạn
//     } else {
//       next();
//     }
//   } else {
//     next(); // Cho phép chuyển hướng nếu không yêu cầu xác thực
//   }
// }
