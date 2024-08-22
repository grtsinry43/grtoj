package com.grtsinry43.grtojbackend.controller;

import com.grtsinry43.grtojbackend.dto.ApiResponse;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * @author grtsinry43
 * @date 2024/7/21 下午12:26
 * @description 规定触发异常时的返回格式，依然是HTTP状态码200，只会根据code字段和msg来提供错误信息
 */
@ControllerAdvice
public class GlobalExceptionHandler {
    /**
     * 处理缺少请求参数异常
     */
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<ApiResponse<Object>> handleMissingServletRequestParameterException(Exception ex) {
        String errorMessage = "缺少请求参数：" + ex.getMessage();
        ApiResponse<Object> apiResponse = ApiResponse.error(400, errorMessage);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    /**
     * 处理参数校验异常（注释声明即可）
     */
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ApiResponse<Object>> handleConstraintViolationException(ConstraintViolationException ex) {
        String errorMessage = ex.getMessage();
        ApiResponse<Object> apiResponse = ApiResponse.error(400, errorMessage);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    /**
     * 处理请求方法不支持异常
     */
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ApiResponse<Object>> handleHttpRequestMethodNotSupportedException(Exception ex) {
        String errorMessage = "请求方法不支持：" + ex.getMessage();
        ApiResponse<Object> apiResponse = ApiResponse.error(405, errorMessage);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }


    /**
     * 处理其他异常（注释声明即可）
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Object>> handleException(Exception ex) {
        String errorMessage = ex.getMessage();
        ApiResponse<Object> apiResponse = ApiResponse.error(500, errorMessage);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}