package com.grtsinry43.grtojbackend.controller;

import com.yunlugu.xiaokangehomebackend.dto.ApiResponse;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author： grtsinry43
 * @Date： 2024/7/13 下午12:25
 * 这个只是一个测试类，没有实际含义，验证可用就好
 */
@RestController
@RequestMapping("/hello")
public class HelloWorldController {
    @RequestMapping("/world")
    public ApiResponse<String> helloWorld(@RequestParam String text) {
        // 假设这里直接返回请求参数text的内容
        return ApiResponse.success(text);
    }

    @RequestMapping("/world2")
    public ApiResponse<String> helloWorldErr() {
        // 这里看一下错误返回的格式
        return ApiResponse.error(400, "请求参数错误");
    }
}
