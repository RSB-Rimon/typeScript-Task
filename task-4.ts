interface SuccessResponse {
  status: "success";
  data: string;
}

interface ErrorResponse {
  status: "error";
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse): string {
  switch (response.status) {
    case "success":
      return `Success: ${response.data}`;

    case "error":
      return `Error: ${response.message}`;

    default: {
      const checkResponse: never = response;
      return checkResponse;
    }
  }
}

const response1: ApiResponse = {
  status: "success",
  data: "User created successfully",
};

const response2: ApiResponse = {
  status: "error",
  message: "Email already exists",
};

const response3: ApiResponse = {
  status: "success",
  data: "Product added successfully",
};

console.log(handleResponse(response1));
console.log(handleResponse(response2));
console.log(handleResponse(response3));
