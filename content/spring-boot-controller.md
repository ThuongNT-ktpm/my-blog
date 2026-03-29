---
date: "2026-03-25"
---

# @RestController là gì? Hiểu rõ Controller trong Spring Boot

Trong quá trình làm việc với Spring Boot để xây dựng các RESTful API, chắc chắn bạn sẽ bắt gặp annotation `@RestController`. Vậy nó hoạt động như thế nào?

## 1. Khái niệm cơ bản

`@RestController` là một annotation đặc biệt trong Spring Framework, được kết hợp từ hai annotation khác:
* `@Controller`: Báo cho Spring IoC Container biết lớp này là một Controller (tầng giao tiếp với client).
* `@ResponseBody`: Chỉ định rằng dữ liệu trả về từ các phương thức (method) sẽ được tự động chuyển đổi sang định dạng JSON hoặc XML và ghi thẳng vào HTTP Response Body (thay vì trả về một trang HTML).

## 2. Code mẫu Clean Code

Dưới đây là một ví dụ về cách viết UserController chuẩn, sử dụng **Constructor Injection** thay vì `@Autowired` trực tiếp trên field:

```java
package com.myblog.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    // Khuyên dùng Constructor Injection để dễ dàng viết Unit Test
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody UserDTO userDTO) {
        User savedUser = userService.save(userDTO);
        return ResponseEntity.ok(savedUser);
    }
}