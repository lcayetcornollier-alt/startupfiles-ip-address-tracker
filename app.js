const IPdonnat = document.querySelector("#IPdonnat");
const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const ipaddressvalue = document.querySelector("#ip-address-value");
const ipaddresslocation = document.querySelector("#ip-address-location");
const ipaddresstimezone = document.querySelector("#ip-address-timezone");
const ipaddressisp = document.querySelector("#ip-address-isp");

async function trouvercarte(IP) {
	console.log(IP);
	const a = await fetch(
		"https://geo.ipify.org/api/v2/country,city?apiKey=at_4BD8oIH05wen7ZtVo11F1wyVhp21Q&ipAddress=" +
			IP,
		{
			method: "GET",
		},
	);
	const data = await a.json();
	console.log(data);
	ipaddressvalue.textContent = data.ip;
	ipaddresslocation.textContent = data.location.city + data.location.country;
	ipaddresstimezone.textContent = "UTC" + data.location.timezone;
	ipaddressisp.textContent = data.isp;
}
form.addEventListener("submit", (e) => {
	e.preventDefault();
	trouvercarte(IPdonnat.value);
    const map = L.map('map').setView([51.505, -0.09], 13);
});
