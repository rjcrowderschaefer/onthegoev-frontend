const URL = "http://localhost:4000";

export const carsLoader = async () => {
    const response = await fetch(URL + "/top-evs-2023");
    const cars = await response.json();
    return cars;
}