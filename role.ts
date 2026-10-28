type Role = "Admin" | "Manager" | "Employee";


interface Employee {
    id: number;
    name: string;
    role: Role;
}

const employee: Employee = {
    id: 101,
    name: "Rahim",
    role: "Manager"
};


function getPermissions(role: Role): string[] {
    switch (role) {
        case "Admin":
            return [
                "Manage Users",
                "Manage Products",
                "View Reports"
            ];

        case "Manager":
            return [
                "Manage Products",
                "View Reports"
            ];

        case "Employee":
            return [
                "View Products"
            ];
    }
};


console.log(getPermissions("Employee"));



const permissions = getPermissions(employee.role);
console.log("Name:", employee.name);
console.log("Role:", employee.role);
console.log("Permissions:", permissions.join(", "));