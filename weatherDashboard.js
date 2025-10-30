class APICalls {


    // Creating the Base URL that includes correct units and correct type calls
    constructor() {
        this.baseURL = "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,precipitation&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
        this.latitude = "44.7"
        this.longitude = "-73.45"
    }

    //Default Latitude and Longitude to input on top of the Base URL
    ChangeSettings() {
        let URL = this.baseURL
        URL += "&latitude=" + this.latitude + "&longitude=" + this.longitude
        return URL
    }

    ChangeLatitude(inputLatitude) {
        this.latitude = inputLatitude
    }

    ChangeLongitude(inputLongitude) {
        this.longitude = inputLongitude
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
        const data = await api.GetData(api.ChangeSettings())
        console.log(data)
        $('form')[0].addEventListener("submit", async function () {
            api.ChangeLatitude($('#Latitude').val())
            api.ChangeLongitude($('#Longitude').val())
            const data = await api.GetData(api.ChangeSettings())
            console.log(data)
        });

    }
    catch(e) {
        console.log("Error: " + e)
    }
} // End of Function


const api = new APICalls()
Main()


