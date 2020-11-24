export default function ({ $axios }) {

    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })
    
    // $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded');
    // $axios.setHeader('Accept', 'application/json');
    // $axios.setBaseURL('https://api.airtable.com/v0/' + app_id);

// // Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests
//     $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
//     'post'
//   ])


// // Removes default Content-Type header from `post` scope
// $axios.setHeader('Content-Type', false, ['post'])
  


    $axios.onError(error => {
        console.log('error is ', error);
    })
}
