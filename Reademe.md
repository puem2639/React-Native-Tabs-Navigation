install node 12.22.12
===> nvm install 12.22.12 (first time only)
===> nvm use 12.22.12
===> npm i (package)

start node 16.16.0
===> nvm use 16.16.0
===> npm start




const onPressButton1 = async () => {
    try {
      console.log(11211)
      // await axios.get('https://f57a-2001-fb1-108-9ce5-bd7b-4098-2edc-1a7c.ap.ngrok.io/')
      // console.log(1122211)

      const response = await axios.get(
        'https://bb04-2001-fb1-108-9ce5-bd7b-4098-2edc-1a7c.ap.ngrok.io',
      );
      console.log(JSON.stringify(response.data))

      Alert.alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      console.log('error')
      console.log(error)
      Alert.alert(error.message);
    }
  };



  //get data 
  try {
      console.log(11211);
      // await axios.get('https://f57a-2001-fb1-108-9ce5-bd7b-4098-2edc-1a7c.ap.ngrok.io/')
      // console.log(1122211)
      const response = await axios.get(
        "https://9c0b-124-122-20-185.ap.ngrok.io"
      );
      console.log(JSON.stringify(response.data));
      Alert.alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      console.log("error");
      console.log(error);
      Alert.alert(error.message);
    }