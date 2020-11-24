const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const Firestore = admin.firestore;
const db = Firestore();

const axios = require("axios");
const cors = require("cors")({
    origin: true
});
// DEPLOY WITH firebase deploy --only functions

// GEOCODING FUNCTION  

const googleMapsApiKey = functions.config().googlemaps.key

exports.geocodeAddressAndSave = functions.https.onRequest(
    async (request, response) => {
        try {
            let address = encodeURI(request.body.address);
            let { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleMapsApiKey}`)

            if (data.status !== "OK") {
                return cors(request,response, () => {
                    response.status(200).send("No results.");
                })
            }

            const geocodedLocation = data.results[0];
            const objGeocodedLocation = {
                address: geocodedLocation.formatted_address,
                // properties returned from geocoding api - https://developers.google.com/maps/documentation/geocoding/start
                geoPoint: new admin.firestore.GeoPoint(geocodedLocation.geometry.location.lat, geocodedLocation.geometry.location.lng),
                createdAt: new admin.firestore.FieldValue.serverTimestamp()
            }

            await db.collection('geocodingLocations').add(objGeocodedLocation);

            return cors(request, response, () => {
                response.status(200).send(objGeolocation);
            });
        } catch (error) {
            return cors(request, response, () => {
                console.log(error);
                response.status(500).send();
            });
        }
    });