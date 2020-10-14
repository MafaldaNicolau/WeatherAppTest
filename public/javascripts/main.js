//http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=c02357c87f7e98e69fa13aeebd9add49

fetch('http://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=c02357c87f7e98e69fa13aeebd9add49&units=metric')
    .then(response => response.json())
    .then(data => {
        const {main, name, sys, weather} = data;

        document.getElementById('weatherText').innerHTML = 'The weather in ' + name + ' is ' + Math.round(main.temp) + ' degrees';
        
    })
    .catch(() => {
        console.log('something went wrong');
    });