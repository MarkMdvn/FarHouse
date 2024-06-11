
<h1 align="center">
  <br>
  <a><img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/hotel-logo.png" alt="Far-House-Home" width="200"></a>
  <br>
  FarHouse Hotels
  <br>
</h1>

<h4 align="center">This web app facilitates hotel management and bookings with ease.</h4>


<p align="center">
  <a href="#built-with">Built With</a> •
  <a href="#description">Description</a> •
  <a href="#functionalities">Functionalities</a> •
  <a href="#example">Examples</a> 
</p>

![screenshot](https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/1-Main-Homepage.png)

# ⚠️ Attention:
This is a really extensive project. If you just want a summary, please scroll down to the <a href="#Summary">"Summary"</a> section.

---


## 🛠️ Built With

<div align="center">
  
![Spring][Spring-Boot]
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
<br>
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)

</div>

This project was built with Spring Boot, MVC architecture, JPA with Hibernate for database interaction, MySQL for data storage, and integrated React, HTML, CSS, and Bootstrap for front-end development within the Spring Boot framework.

 * Spring Boot: Leveraging the power of Spring Boot for rapid application development and easy integration of Spring functionalities.
 * MVC Architecture: The project follows the Model-View-Controller architectural pattern, ensuring a separation of concerns and making the application easier to maintain and extend.
 * JPA with Hibernate: Utilizing JPA (Java Persistence API) with Hibernate for object-relational mapping, simplifying database interactions and enhancing database portability.
 * MySQL Database: The application interacts with a MySQL database hosted on AWS RDS (Relational Database Service), providing a scalable and reliable storage solution.
 * React: Employing React for building a dynamic and responsive user interface.
 * Bootstrap: Integrating Bootstrap for a sleek and modern front-end design, ensuring a user-friendly experience across different devices.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 📋 Description

This project is a full-featured hotel management web application designed to streamline hotel operations. It allows administrators to dynamically create, delete, and edit room details, which are immediately reflected on the user interface. Users can effortlessly make reservations through the web app. The project leverages a robust tech stack, including Spring Boot, MySQL, React, Bootstrap, and other cutting-edge technologies.

## 📱 Functionalities

* Room Management: Admins can perform CRUD operations (Create, Read, Update, Delete) on rooms. This includes adding new rooms, updating existing room details, and removing rooms from the system. Changes are dynamically reflected on the user interface.

* Reservation System: Users can browse available rooms, make reservations, update their bookings, and cancel reservations through the web app, providing a seamless booking experience.

* User Authentication: The application includes secure user authentication, allowing users to create accounts, log in, and manage their reservations.7

* Admin Dashboard: Admins have access to a dedicated dashboard where they can manage rooms, view current bookings, and oversee overall hotel operations.

* Dynamic Room Availability: The web app dynamically updates room availability based on user reservations, ensuring accurate and up-to-date information for users.


## 📷 Examples

* Dynamic Room Display: The React carousel showcases all available rooms in the hotel. This component dynamically updates whenever new rooms are added, ensuring that users always see the most current offerings.

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/2-carousell-showcase1.png" alt="FarHouse" width="900px">  
</div>
<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/3-carousell-showcase2.png" alt="FarHouse" width="900px">  
</div>
<br>

---

* Users can choose their desired check-in and check-out dates using the intuitive date picker and the desired room type from the dropdown menu. The available rooms are dynamically updated based on the selected dates and room type, ensuring accurate availability information for users.

<br>

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/4-rooms-by-date-search.png" alt="FarHouse" width="900px">
</div>

---

* If we want to make a reservation we will need an account:

   * Secure User Authentication: Users are required to log in or register before making a reservation, ensuring secure access to booking functionalities.
   * JWT Authentication: The system utilizes JSON Web Tokens (JWT) for user authentication and authorization, enhancing security and protecting user data.
   * User Registration: New users can easily create an account by providing basic information and securely storing their credentials.


<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/6-registration.png" width="900px">
</div>

* After the registration, the new user will be created in the database. Now he will be able to login.

  * Secure User Registration: Upon registration, user credentials are securely stored in the database with password encryption, ensuring data protection.
  * Default Role Assignment: New users are assigned the USER role by default, granting them access to basic functionalities within the application.
  * Role Upgrading: Admins have the ability to upgrade user roles, granting additional privileges such as access to admin-specific features.
  * Role-Based Access Control: Different user roles (e.g., USER, ADMIN) may have different access levels within the application, ensuring proper authorization and data protection.
 

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/7-database-registration.png" alt="FarHouse" width="1000px">
</div>

---

* After the login we can make the reservation choosing the roomtype, check-in and check-out dates, number of adults, children and the name of the Guest
* Users can review their reservation details, including room type, check-in and check-out dates, number of guests, and total price, before confirming the booking.   

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/8-booking-confirmation-page.png" width="900px">
</div>

* If the room is booked for the chosen dates, this error will appear:

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/11-room-already-booked.png" width="900px">
</div>

* If everything went well, the booking will be created in the database:

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/10-booking-in-database.png" width="1000px">
</div>

* And the user will see the next message:

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/9-booking-success.png" width="900px">
</div>

---
  
* The "All rooms" page shows all the available rooms, which can be filtered by the desired room type: 

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/12-all-rooms.png" alt="FarHouse" width="900px">
</div>

---

* The "Find my booking" page allows users to find their bookings by the confirmation code:  

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/13-find-booking.png" alt="FarHouse" width="900px">
</div>

---

<h2>Administration panel:</h2>

<h3>If the user has the "ADMIN" role:</h3>

* Room Management: Admins can perform CRUD operations (Create, Read, Update, Delete) on rooms, allowing them to add new rooms, update existing room details, and remove rooms from the system.
 
<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/14-administration-panel-existing-rooms.png" alt="FarHouse" width="900px">
</div>

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/15-edit-room.png" alt="FarHouse" width="900px">
</div>

* Booking Oversight: Admins can view and manage all bookings made through the web app, including checking reservation details, updating booking statuses, and canceling bookings if necessary.

<div align="center">
<img src="https://github.com/MarkMdvn/FarHouse/blob/main/Hotel-Project-Frontend/public/readme-images/16-administration-bookings.png" alt="FarHouse" width="900px">
</div>

---

<a name="Summary"><h2>🧩 Summary:</h2></a>


### Project Overview
* FarHouse Hotels is a comprehensive hotel management web application designed for easy bookings and efficient hotel operations.

### Built With
* Utilizes Spring Boot, React, MySQL, and various technologies for robust functionality and user experience.

### Description
* Facilitates hotel management with features like room management, reservation system, user authentication, and admin dashboard.

### Functionalities
- **Room Management**: CRUD operations for rooms; dynamic updates on the UI.
- **Reservation System**: Seamless booking process with real-time availability checks.
- **User Authentication**: Secure registration, login, and role-based access control.
- **Admin Dashboard**: Centralized management for rooms, bookings, and overall hotel operations.

### Examples
* Includes screenshots illustrating various functionalities like room display, reservation process, and admin panel.

### Admin Section
* Admins can manage rooms (CRUD operations) and bookings, ensuring efficient hotel management.


[product-screenshot]: images/screenshot.png
[Spring-Boot]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white
