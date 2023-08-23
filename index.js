const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const rootElement = document.getElementById("root");

    // Add an h1 element
    const heading = document.createElement("h1");
    heading.textContent = "FREELANCERS";
    rootElement.appendChild(heading);

    // Create an unordered list
    const userList = document.createElement("ul");

    // Loop through users and create list items
    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.name}, ${user.age}, ${user.occupation}`;
        userList.appendChild(listItem);
    });

    // Append the list to the root element
    rootElement.appendChild(userList);
}

// Call the main function when the page loads
window.onload = main;
