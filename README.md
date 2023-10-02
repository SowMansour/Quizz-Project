# Quizz Project

## What is the goal of the Quizz Project :thinking:

In this project, I have adopted the Model-View-Controller (MVC) architectural pattern, which enables me to effectively organize and structure my application based on different components. MVC is renowned and widely employed across various industries for its proven efficiency and maintainability.

Furthermore, I have leveraged the Sequelize ORM (Object-Relational Mapping) to interact with my database, making it easier to manage data models and database operations.

The primary focus of the Quiz project lies in my extensive exploration of Object-Oriented Programming (OOP) principles. Through this endeavor, I have gained valuable experience in managing classes, leveraging inheritance, and implementing setter and getter methods. OOP provides a robust framework for designing and modeling software systems by encapsulating data and behavior into classes and objects, fostering code reusability, and enhancing the overall maintainability of the codebase.

By embracing MVC, Sequelize, and OOP in the development of the Quiz project, I have established a solid foundation for creating scalable, modular, and well-organized applications. This architectural approach not only enhances code clarity but also simplifies the process of adding new features or making modifications, ultimately contributing to a more efficient and maintainable software development process.

### Review stack used :
 - Express
 - express-session
 - PostgeSQL
 - Sequelize
 - Bcrypt
 - email-validator
 - Ejs

### Database set up step by step :

1 - Connexion to the database --> psql postgres

2 - Create user --> CREATE ROLE username WITH LOGIN PASSWORD 'username';

3 - Create the database --> CREATE DATABASE DBname OWNER DBname;

4 - Insert the data/tables --> psql -U username -d DBname -f /path/to/data.sql
