package com.example.stackit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

//@ComponentScan(basePackages = "com.example.stackit")
@SpringBootApplication
public class StackitApplication {

	public static void main(String[] args) {
		SpringApplication.run(StackitApplication.class, args);
	}

}
