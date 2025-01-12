# **User Management Dashboard**

## **Project Overview**  
This project is a web application with the following features:  
- **Login Page**: For user authentication.  
- **Dashboard**: Displays an overview of data and navigation to other pages.  
- **User Page**: Lists users fetched from a mock API containing 500 records.  
- **User Details Page**: Displays detailed user information, with additional functionalities such as:  
  - Auto-generating unique User IDs (with a company abbreviation prefix).  
  - Auto-generating bank account numbers for users.  

The application is fully responsive and optimized for mobile and desktop devices.  

---

## **Features**

### **1. Login Page**  
- A basic authentication form with email and password fields.  
- Redirects to the dashboard upon successful login.  

### **2. Dashboard**  
- Displays navigation links to other pages such as the User Page.
- Contains details of registered users, Active Loan, Charts of Pending, Blacklisted, Active, Inactive Users and recent payments  

### **3. User Page**  
- Fetches and displays a paginated list of 500 user records from a mock API.  
- Provides search and filter functionality for quick user lookup.  

### **4. User Details Page**  
- Displays detailed information about a selected user.  
- **Auto-Generated User IDs**: Dynamically appends the company abbreviation (e.g., `LSQR4262gjst6`) to a random user code.  
- **Auto-Generated Bank Account Numbers**: Automatically generates unique bank account numbers for each user.  
- Caches data locally using **Local Storage** for faster access and offline support.  

---

## **Tech Stack**  
- **Frontend**: React with TypeScript  
- **State Management**: React's `useState` hook  
- **Styling**: SCSS (Sass) for modular and responsive design  
- **Data Fetching**: Fetch API  
- **Mock API**: [Mocky.io](https://mocky.io)  

---

## **Installation**

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/your-username/user-management-dashboard.git
   cd user-management-dashboard
1. **Clone the repository**:  
   ```bash
   git clone https://github.com/your-username/user-management-dashboard.git
   cd user-management-dashboard
2. **Install dependencies**:  
   ```bash
   npm install

3. **Set up the Mock API**:

  Go to Mocky.io and create a mock API with 500 user records.
  Update the API endpoint in your project (e.g., .env file or constants in your code).

4. **Start the development server**:

  bash
    npm start


## **Project Structure**

src  
├── assets
├── components 
├── pages  
│   ├── Login      
│   ├── Dashboard        
│   ├── Users           
│   ├── UserDetails    
├── styles             
├── utils                
└── App.tsx           


## **Functionality Details**
1. Responsive Design
Fully responsive layout using SCSS media queries to support both mobile and desktop devices.
2. Data Fetching
The User Page fetches user data from the Mocky.io API and displays it in a paginated format.
3. Local Storage
Caches user details on the User Details Page for offline access.
If cached data is available, it’s displayed; otherwise, it fetches the data from the API.
4. Auto-Generated User IDs
Each user is assigned a unique ID with the format:
<CompanyAbbreviation><RandomCode>
5. Auto-Generated Bank Accounts
Each user is automatically assigned a unique bank account number upon viewing their details.

## **How to Use**
1. Login

2. Enter your credentials on the login page to access the dashboard.
Navigate

3. Use the navigation menu on the dashboard to access the User Page.
View Users

4. Browse through the list of users or use the search bar to find a specific user.
View User Details

5. Click on a user to view their detailed information.
The User Details Page will generate a unique User ID and bank account for the selected user.
