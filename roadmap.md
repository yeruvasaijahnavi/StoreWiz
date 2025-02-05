# Final Changes for 10

-   [x] ~~_fix add staff button_~~ [2025-02-04]
    -   ng g c views/staff/staff-add
    -   [x] ~~_start from backend (create working api, then frontend)_~~ [2025-02-04]
    -   [x] ~~_flow: backend [model schema -> crud route -> controller] -> frontend [model -> service -> component]_~~ [2025-02-04]
-   [x] ~~_fix user avatar img_~~ [2025-02-03]
-   [x] ~~_add edit and delete staff buttons_~~ [2025-02-05]
    -   [x] ~~_create edit view_~~ [2025-02-04]
    -   [x] ~~_create delete view_~~ [2025-02-04]
-   [x] ~~_fix negative values of stock_~~ [2025-02-04]
-   [x] ~~_fix breadcrumbs for inventory_~~ [2025-02-04]

EXTRA

-   [ ] add search/filter feature for tables
-   [x] ~~_pagination_~~ [2025-02-05]
-   [ ] side by side dashboard using CARDS?
-   [x] ~~_fix CRUD buttons using flexbox_~~ [2025-02-04]
-   [ ] include db schema in ppt
-   [ ] dont use class + inject

T10 steps

-   [x] ~~_add db schema to ppt_~~ [2025-02-05]
-   [x] ~~_remove 404 pgs_~~ [2025-02-05]
-   [x] ~~_change email_~~ [2025-02-05]
-   [ ] remove extra things (comps, folders)
-   [ ] redeploy
    -   backend
        -   commit all changes
        -   open railway and redeploy
    -   frontend
        -   update environment link from local host to railway
        -   npm run build:prod
        -   commit everything
        -   reploy on netlify
        -   reploy on AZURE
-   [ ] revise angular basics
-   [ ] test EVVERYTHING

## **Backend Roadmap for Warehouse Management System**

---

-   [x] ~~\*### **Phase 1: Setup and Initial Configuration\***~~ [2024-12-01]

1. **Initialize Node.js Project:**

    - Create a new project folder (if not already created).
    - Initialize a Node.js project with `npm init -y`.
    - Install necessary dependencies:

        ```bash
        npm install express mongoose dotenv bcryptjs jsonwebtoken
        ```

        - **express**: Framework for handling HTTP requests and routing.
        - **mongoose**: MongoDB ORM for handling data.
        - **bcryptjs**: For password hashing and comparison.
        - **jsonwebtoken**: For generating and verifying JWT tokens for user authentication.

2. **Create Folder Structure:**

    - Create the following folders:
        ```bash
        mkdir models routes controllers middleware config
        ```
    - Folder Descriptions:
        - `models`: To store all the Mongoose schema models.
        - `routes`: To define API routes for CRUD operations.
        - `controllers`: To handle the logic for processing requests.
        - `middleware`: For custom middleware like authentication.
        - `config`: For configuration files, including MongoDB connection.

3. **Environment Configuration (`.env` File):**

    - Create a `.env` file in the root of the project.
    - Add the following content:
        ```env
        MONGO_URI=your_mongodb_connection_string_here
        JWT_SECRET=your_jwt_secret_key_here
        PORT=3000
        ```
    - **MONGO_URI**: MongoDB Atlas or local connection string.
    - **JWT_SECRET**: Secret key for signing JWT tokens.

4. **Create the `server.js` File:**
    - Set up the basic server with Express.
    - Import necessary modules and configure environment variables.
    - Set up middleware for JSON parsing.
    - Implement MongoDB connection using `mongoose`.
    - Add routes for testing, e.g., a basic `/` route.

---

-   [x] ~~\*### **Phase 2: User Authentication\***~~ [2024-12-01]

*   [x] ~~**_Create User Schema (Model):_**~~ [2024-12-01]
    -   Define the schema to store user data (username, email, password, role).
    -   Password should be hashed before saving (using bcrypt).
*   [x] ~~**_User Registration Endpoint:_**~~ [2024-12-01]

    -   Create a `POST` route to register users.
    -   Hash passwords and save user details to the database.

*   [x] ~~**_User Login Endpoint:_**~~ [2024-12-01]

    -   Create a `POST` route for logging in users.
    -   Compare provided password with stored hashed password.
    -   If valid, generate a JWT token for the user.

*   [x] ~~**_Authentication Middleware:_**~~ [2024-12-01]
    -   Create middleware to verify JWT tokens on protected routes (for example, Admin routes).

---

-   [x] ~~_### **Phase 3: Inventory Management** (3/4)_~~ [2024-12-01]

*   [x] ~~\*1. **Create Inventory Schema (Model):\***~~ [2024-12-01]

    -   [x] ~~_Define the schema for the inventory (item ID, SKU, name, description, quantity, etc.)._~~ [2024-12-01]
    -   [x] ~~_Ensure `itemId` and `sku` are unique._~~ [2024-12-01]

*   [x] ~~\*2. **Create CRUD Routes for Inventory:\***~~ [2024-12-01]

    -   [x] ~~_POST `/inventory`: Create a new inventory item._~~ [2024-12-01]
    -   [x] ~~**\*GET** `/inventory`: Retrieve all inventory items.\*~~ [2024-12-01]
    -   [x] ~~**\*GET** `/inventory/:id`: Get a specific inventory item by its ID.\*~~ [2024-12-01]
    -   [x] ~~**\*PUT** `/inventory/:id`: Update an existing inventory item.\*~~ [2024-12-01]
    -   [x] ~~**\*DELETE** `/inventory/:id`: Delete an inventory item.\*~~ [2024-12-01]

*   [ ] 3. **Implement Inventory Controller:**

    -   In the controller, implement the logic for interacting with the Inventory schema.
    -   Implement validation for required fields (e.g., SKU, name).

*   [x] ~~\*4. **Testing Inventory Routes\***~~ [2024-12-01]
    -   Test the above routes using Postman to ensure CRUD operations work properly.

---

-   [x] ~~\*### **Phase 4: Order Management\***~~ [2024-12-01]

*   [x] ~~\*1. **Create Order Schema (Model):\***~~ [2024-12-01]
    -   [x] ~~_Define the schema for orders (orderId, customerId, itemId, quantity, status, etc.)._~~ [2024-12-01]
    -   [x] ~~_Add support for tracking order status (`pending`, `in progress`, `shipped`, `delivered`)._~~ [2024-12-01]
*   [x] ~~\*2. **Create CRUD Routes for Orders:\***~~ [2024-12-01]
    -   [x] ~~**\*POST** `/orders`: Create a new order.\*~~ [2024-12-01]
    -   [x] ~~**\*GET** `/orders`: Retrieve all orders.\*~~ [2024-12-01]
    -   [x] ~~**\*GET** `/orders/:id`: Get a specific order by ID.\*~~ [2024-12-01]
    -   [x] ~~**\*PUT** `/orders/:id`: Update the status of an order.\*~~ [2024-12-01]
    -   [x] ~~**\*DELETE** `/orders/:id`: Delete an order.\*~~ [2024-12-01]
*   [x] ~~\*3. **Order Processing Logic:\***~~ [2024-12-01]
    -   [x] ~~_Implement logic for processing orders, changing the order status, and notifying staff._~~ [2024-12-01]

---

-   [ ] ### **Phase 5: Stock Alerts**

*   [ ] 1. **Create Stock Alerts Schema (Model):**

    -   [ ] Define the schema to track low-stock alerts (itemId, threshold, alertDate, status).
    -   [ ] Implement a way to monitor stock levels and generate alerts when a threshold is reached.

*   [ ] 2. **Create Routes for Stock Alerts:**
*   [ ] -   [ ] **GET** `/alerts`: Retrieve all stock alerts.
    -   [ ] **POST** `/alerts`: Manually create stock alerts.
    -   [ ] **PUT** `/alerts/:id`: Resolve a stock alert.

*   [ ] 3. **Automatic Low Stock Alerts:**
    -   [ ] Implement a logic to automatically generate stock alerts if inventory items drop below a defined threshold.

---

-   [ ] ### **Phase 6: Staff Management**

*   [x] ~~\*1. **Create Staff Schema (Model):\***~~ [2024-12-01]

    -   [x] ~~_Define the schema for warehouse staff (name, role, shift, status)._~~ [2024-12-01]
    -   [x] ~~_Roles can be `operator`, `packer`, etc._~~ [2024-12-01]

*   [x] ~~\*2. **Create CRUD Routes for Staff:\***~~ [2024-12-01]

    -   [x] ~~**\*POST** `/staff`: Add a new staff member.\*~~ [2024-12-01]
    -   [x] ~~**\*GET** `/staff`: Retrieve all staff members.\*~~ [2024-12-01]
    -   [x] ~~**\*GET** `/staff/:id`: Get a specific staff member by ID.\*~~ [2024-12-01]
    -   [x] ~~**\*PUT** `/staff/:id`: Update staff member details.\*~~ [2024-12-01]
    -   [x] ~~**\*DELETE** `/staff/:id`: Remove a staff member.\*~~ [2024-12-01]

*   [ ] 3. **Staff Management Logic:**
    -   [ ] Implement role-based access control (RBAC) to assign permissions based on role (admin, staff).

---

### **Phase 7: Shipping and Barcode Scanning**

-   [ ] 1. **Create Shipping Info Schema (Model):**

    -   [ ] Define the schema for shipping (shippingId, orderId, courier, trackingNumber, etc.).

-   [ ] 2. **Create Barcode Logs Schema (Model):**

    -   [ ] Define a schema for barcode scanning events (barcodeId, itemId, scanDate, actionType).

-   [ ] 3. **Create Routes for Shipping and Barcode Scanning:**
    -   [ ] **POST** `/shipping`: Create shipping info for an order.
    -   [ ] **POST** `/barcode`: Log a barcode scan.

---

### **Phase 8: Audit Logs**

1. **Create Audit Logs Schema (Model):**

    - Define a schema for auditing actions (actionType, userId, itemId, description).
    - Record every update to inventory or orders for transparency and security.

2. **Create Route for Viewing Logs:**
    - **GET** `/auditLogs`: Retrieve all audit logs.

---

### **Phase 9: Reporting and Analytics**

1. **Create Reports Schema (Model):**

    - Define a schema to store generated reports (type, data, createdBy).

2. **Create Route for Report Generation:**
    - **POST** `/reports`: Generate and store a report.
    - **GET** `/reports`: Retrieve all reports.

---

### **Phase 10: Integrations and Finalization**

1. **Shipping Integration:**

    - Integrate third-party courier services for shipment tracking.
    - Automatically generate shipping labels based on order details.

2. **Barcode Scanning Integration:**
    - Implement real-time barcode scanning for stock updates.

---

## **Angular Frontend Roadmap for Warehouse Management System**

### **Phase 1: Setup and Initial Configuration**

1. **Initialize Angular Project:**

    - Run the following commands to set up the Angular project:
        ```bash
        ng new warehouse-management-frontend
        ```
    - Choose "Yes" for routing and select SCSS for styles (or CSS based on your preference).

2. **Install Dependencies:**

    - Install required dependencies for Angular HTTP requests and any UI libraries:
        ```bash
        npm install @angular/material @angular/cdk @angular/animations
        npm install axios
        ```
        - **@angular/material**: For UI components like buttons, tables, forms, etc.
        - **axios**: For making HTTP requests to the backend.

3. **Set Up Angular Modules:**

    - Navigate to the `src/app` directory and set up the following basic structure:
        ```bash
        mkdir components services models
        ```
        - **components**: Store Angular components like login, dashboard, inventory, etc.
        - **services**: Store services for interacting with the backend.
        - **models**: Store TypeScript interfaces for the data models (e.g., User, Inventory).

4. **Configure Angular Material:**
    - Import necessary Angular Material modules in `app.module.ts` to enable UI components:
        ```typescript
        import { MatButtonModule } from "@angular/material/button";
        import { MatFormFieldModule } from "@angular/material/form-field";
        import { MatInputModule } from "@angular/material/input";
        import { MatTableModule } from "@angular/material/table";
        ```

---

### **Phase 2: Authentication System**

1. **Create User Model:**

    - In the `models` folder, create a `user.model.ts` file:
        ```typescript
        export interface User {
        	userId: string;
        	username: string;
        	passwordHash: string;
        	role: string;
        	email: string;
        	isActive: boolean;
        }
        ```

2. **Login Component:**

    - Create a `login` component:
        ```bash
        ng generate component components/login
        ```
    - In `login.component.html`, create a login form using Angular Material components (username, password fields).
    - Add logic in `login.component.ts` to handle form submission and authentication via JWT.

3. **Authentication Service:**

    - Create an authentication service to interact with the backend’s login route (`POST /login`).
    - This service will:
        - Send login requests.
        - Store JWT tokens in local storage (for keeping users logged in).
        - Handle errors and successful login.

4. **Route Guard:**
    - Implement route guards to protect certain routes (like the Admin dashboard).
    - The guard will check if a valid JWT token exists and whether the user is authorized (admin or staff).

---

### **Phase 3: Dashboard and Navigation**

1. **Create Sidebar Navigation:**

    - Create a sidebar for the Admin and Staff dashboards.
    - Implement dynamic navigation based on user roles (`admin` or `staff`).

2. **Admin Dashboard:**

    - Create an `admin-dashboard` component.
    - Display general warehouse metrics such as stock levels, number of orders, etc.
    - Implement charts or tables to visualize key performance indicators (KPIs).

3. **Staff Dashboard:**
    - Create a `staff-dashboard` component.
    - Display tasks, order statuses, and allow staff to update order progress.

---

### **Phase 4: Inventory Management**

1. **Inventory Model:**

    - Create an inventory model (`inventory.model.ts`):
        ```typescript
        export interface Inventory {
        	itemId: string;
        	sku: string;
        	name: string;
        	category: string;
        	description: string;
        	quantity: number;
        	price: number;
        	location: string;
        }
        ```

2. **Inventory Service:**

    - Create an inventory service (`inventory.service.ts`) to:
        - Fetch inventory data (`GET /inventory`).
        - Add new items (`POST /inventory`).
        - Update item quantities (`PUT /inventory/:id`).
        - Delete items (`DELETE /inventory/:id`).

3. **Inventory Component:**
    - Create an `inventory` component to display inventory items in a table.
    - Implement features to add, update, and delete inventory items.
    - Use Angular Material’s `MatTable` to display the data.

---

### **Phase 5: Order Management**

1. **Order Model:**

    - Create an order model (`order.model.ts`) to represent orders:
        ```typescript
        export interface Order {
        	orderId: string;
        	customerId: string;
        	itemId: string;
        	quantity: number;
        	status: string;
        	shippingAddress: string;
        	orderDate: string;
        }
        ```

2. **Order Service:**

    - Create an order service (`order.service.ts`) to:
        - Fetch orders (`GET /orders`).
        - Create new orders (`POST /orders`).
        - Update order status (`PUT /orders/:id`).
        - Delete orders (`DELETE /orders/:id`).

3. **Order Component:**
    - Create an `order` component for the Admin and Staff to manage orders.
    - Allow Admins to assign staff for packing and updating statuses.

---

### **Phase 6: Stock Alerts and Audit Logs**

1. **Stock Alerts Model:**

    - Create a `stock-alert.model.ts` file:
        ```typescript
        export interface StockAlert {
        	alertId: string;
        	itemId: string;
        	threshold: number;
        	alertDate: string;
        	status: string;
        }
        ```

2. **Stock Alerts Service:**

    - Implement a service to fetch, resolve, and create stock alerts.

3. **Audit Logs Model:**

    - Create an `audit-log.model.ts` file to represent audit logs:
        ```typescript
        export interface AuditLog {
        	logId: string;
        	actionType: string;
        	itemId: string;
        	userId: string;
        	actionDate: string;
        	description: string;
        }
        ```

4. **Audit Logs Component:**
    - Create a component for Admins to view audit logs.

---

### **Phase 7: Shipping and Barcode Scanning**

1. **Shipping Info Model:**

    - Create a `shipping-info.model.ts` for tracking shipment details.

2. **Shipping Info Service:**

    - Create a service to handle the shipping information CRUD operations.

3. **Barcode Scanning Integration:**
    - Implement barcode scanning functionality using `ng2-barcode-scanner` or a similar library.
    - Log barcode scans into the database.

---

### **Phase 8: Reports and Analytics**

1. **Reports Model:**

    - Create a `report.model.ts` to store generated reports.

2. **Reports Service:**

    - Create a service to generate and fetch reports.

3. **Reports Component:**
    - Create a component to display reports on warehouse performance, order fulfillment, stock levels, etc.

---

### **Phase 9: Testing & Debugging**

1. **Unit Testing:**

    - Use Jasmine/Karma to write unit tests for each component and service.
    - Test login functionality, data fetch from backend, form validations, etc.

2. **Postman Testing:**
    - Test the integration between frontend and backend by sending requests via Postman.

---

### **Phase 10: Deployment**

1. **Prepare for Production:**

    - Build the Angular project for production:
        ```bash
        ng build --prod
        ```
    - Ensure all API endpoints are integrated and working as expected.

2. **Deploy to Hosting Service:**
    - Deploy the Angular frontend to a hosting service like Firebase Hosting, Vercel, or Netlify.

---

### **Final Notes:**

This roadmap is designed to build the Angular frontend step by step, ensuring that each phase integrates well with the backend we’ve already developed. You’ll implement UI components, connect them with backend APIs, and test everything thoroughly before deployment.

## Extra time

-   [ ] is the table storing past alerts or created alerts?
-   [ ] how exactly to implement barcode integration?

*   [ ] Switch to MYSQL using sequalize
*   [ ] use mysql triggers to generate stock alerts
*   [ ] add controllers for modularization (inventory etc)

## frontend

-   register
-   [ ] role should be select menu
-   [ ]
