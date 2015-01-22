 // Wait for device API libraries to load

    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available

		function onDeviceReady() {

	//Every 5sec check if there is a connection
			setInterval(function(){
					//If there is no connection there is an alert
			if (navigator.connection.type == Connection.NONE)
				{
				 alert('Please Connect!' );

				}
			else
					//If there is connection call checkConnection
				{
					 checkConnection();
				 }

			},5000);
		}


        function checkConnection() {  //checkConnection specifies thetype ofconnection

        		//The message depends on the type of the connection
            var State = navigator.connection.type;

			if (State == Connection.ETHERNET)
			{
				console.log("Device is connected to Ethernet");
			}
			else if(State == Connection.WIFI)
			{
				alert("Device is connected to WiFi");
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