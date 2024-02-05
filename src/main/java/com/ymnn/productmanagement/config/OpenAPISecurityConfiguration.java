package com.ymnn.productmanagement.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Product Management REST APIs",
                version = "v1",
                contact = @Contact(
                        name = "Numan Yaman", url = "https://www.github.com/yamanNuman"
                ),
                license = @License(
                        name = "Apache 2.0", url = "https://www.apache.org/licenses/LICENSE-2.0"
                )
        )
)
public class OpenAPISecurityConfiguration {
}
