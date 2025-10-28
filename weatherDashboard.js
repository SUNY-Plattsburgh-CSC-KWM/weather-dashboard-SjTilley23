
class APICalls {


    // Creating the Base URL that includes correct units and correct type calls
    constructor() {
        this.baseURL = "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,precipitation&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
    }

    //Default Latitude and Longitude to input on top of the Base URL
    DefaultSettings() {
        let URL = this.baseURL
        URL += "&latitude=44.7&longitude=-73.45"
        return URL
    }


    async GetData(URL) {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Could not get names: ${error}`);
        }
    }
} // End of Class


async function Main() {

    try {
        // Fetches data using the default settings
        const api = new APICalls()
        const data = await api.GetData(api.DefaultSettings())
        console.log(data)
    }
    catch(e) {
        console.log("Error: " + e)
    }
} // End of Funciton

Main()

