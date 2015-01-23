

        function checkConnection() {  //checkConnection specifies the type ofconnection

        		//The message depends on the type of the connection
            var State = navigator.connection.type;

			if (State == Connection.ETHERNET)
			{
				console.log("Device is connected to Ethernet");
			}
			else if(State == Connection.WIFI)
			{
				console.log("Device is connected to WiFi");
			}
			else if(State == Connection.CELL_2G)
			{
				console.log("Device is connected to 2G");
			}
			else if(State == Connection.CELL_3G)
			{
				console.log("Device is connected to 3G");
			}
			else if(State == Connection.CELL_4G)
			{
				console.log("Device is connected to 4G");
			}
		}