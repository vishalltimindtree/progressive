package com.wecp.progressive.exception;

public class AccountNotFoundException extends Exception {

    public AccountNotFoundException() {
    }

    public AccountNotFoundException(String message) {
        super(message);
    }

}