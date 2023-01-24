package org.vendas.rest.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ApplicationControllerAdvice {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiErrors> validatorErrors(MethodArgumentNotValidException exception){
        BindingResult bindingResult = exception.getBindingResult();
        List<String> errors = bindingResult.getAllErrors()
                .stream()
                .map( error -> error.getDefaultMessage())
                .collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiErrors(errors));

        }

    @ExceptionHandler(ResponseStatusException.class) //só tratando os erros do responseEntity para fazer retornos dinâmicos
    public ResponseEntity responseStatusException(ResponseStatusException exception){
                String messageError = exception.getMessage();
                HttpStatus codigoStatus = exception.getStatus();
                ApiErrors apiErrors = new ApiErrors(messageError);
                return new ResponseEntity(apiErrors,codigoStatus);
        }
}
