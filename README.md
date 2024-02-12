
# Product Management

The project is used to simply add products, enter information about the product, and list prices by date.
In my project, I used the power of Spring Boot on the backend and React on the frontend.


## Tech Stack

**Client:** React

**Server:** Java, Spring Boot

**Other:** Spring Security, Spring Data JPA, JWT, Lombok, H2 DB (File), Swagger


## Installation

```bash
git clone https://github.com/yamanNuman/spring-boot-product-management.git
```

First, let's import our project into Intellij or Eclipse IDE. After that

```bash
  cd frontend
  npm install
  npm start
```
Let's run the necessary commands. Then let's run our Spring Boot project.

Spring Boot => localhost:8080/

React => localhost:3000/

## Documentation

First Step - Sign Up


```bash
http://localhost:8080/api/v1/auth/swagger-ui/index.html#/
api/v1/auth/register
```
Second Step - Authentication and Receiving Token

```bash
/api/v1/auth/authenticate
```
Then, click on the Authorize button in the Swagger interface and enter the given token. Now you can use APIs. However, you must log in as admin for POST, PUT, DELETE operations.

You can view previously saved users.

```bash
http://localhost:8080/api/v1/auth/h2-console
User name : root
Password : root

admin@admin.com
admin
```

OR

You can also log in and register from the interface.
```bash
http://localhost:3000/
http://localhost:3000/login
http://localhost:3000/signup
```

In the UI, you first add the product and add the price to the product externally. The most current price of each product is listed. Updates can be made for the product and product price.
## API Reference

#### Get All Products

```http
  GET /api/v1/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Product

```http
  GET /api/v1/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Get Price

```http
  GET /api/v1/product/{id}/price
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


## License

[Apache](https://www.apache.org/licenses/LICENSE-2.0)

