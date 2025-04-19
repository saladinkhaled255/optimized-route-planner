function addLocationInput() {
    const inputDiv = document.getElementById('locationInputs');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Enter location';
    newInput.classList.add('location');
    inputDiv.insertBefore(newInput, inputDiv.lastElementChild);
}

function generateRoute() {
    const locations = document.querySelectorAll('.location');
    const locationValues = Array.from(locations).map(input => input.value).filter(Boolean);
    if (locationValues.length < 2) {
        alert('Please enter at least two locations.');
        return;
    }
    const baseUrl = 'https://www.google.com/maps/dir/?api=1&travelmode=driving';
    const origin = `origin=${encodeURIComponent(locationValues[0])}`;
    const destination = `destination=${encodeURIComponent(locationValues[locationValues.length - 1])}`;
    const waypoints = locationValues.slice(1, -1).map(loc => encodeURIComponent(loc)).join('|');
    const waypointParam = waypoints ? `waypoints=${waypoints}` : '';
    const routeUrl = `${baseUrl}&${origin}&${destination}&${waypointParam}`;
    const routeLink = document.getElementById('routeLink');
    routeLink.href = routeUrl;
    routeLink.style.display = 'block';
}
