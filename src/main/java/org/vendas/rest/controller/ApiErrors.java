package org.vendas.rest.controller;

import lombok.Data;

import java.util.Arrays;
import java.util.List;
@Data
public class ApiErrors {

    private List<String> errors;

    public ApiErrors(List<String> error){
        errors = error;
    }

    public ApiErrors(String error){
        errors = Arrays.asList(error);
    }

}
