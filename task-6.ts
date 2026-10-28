interface User {
  id: number;
  name: string;
  address?: {
    city?: string;
  };
}

function isUser(playload: unknown): playload is User {
  return (
    typeof playload === "object" &&
    playload !== null &&
    "id" in playload &&
    typeof (playload as { id: unknown }).id === "number" &&
    "name" in playload &&
    typeof (playload as { name: unknown }).name === "string"
  );
}

function parseUserData(data: unknown): void {
  if (isUser(data)) {
    const city = data.address?.city ?? "Unknown City";
    console.log(`User:${data.name} | City: ${city}`);
  } else {
    console.log("User data not fouond");
  }
}

const uerOne: unknown = {
  id: 1,
  name: "Rahim",
  address: { city: "Moulvibazar" },
};

const userTwo: unknown = {
  id: 2,
  name: "Karim",
};

const userThree: unknown = {
  name: "Sakib",
};

parseUserData(uerOne);
parseUserData(userTwo);
parseUserData(userThree);
