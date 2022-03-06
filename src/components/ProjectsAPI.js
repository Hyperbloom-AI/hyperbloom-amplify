import Amplify, { API } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
API.configure(awsconfig);

function ProjectsAPI() {
    // Fetches Databrew Projects

    /*
    
    Add API Calls Like so: 

        async function functionName(stuffToSend) {
        try {
            const apiName = "SomethingAPI";
            const path = "/apiPath/";

            const data = { 
                body: {
                    "key": value,
                    "key2": value
                } 
            };

            const response = await API.post(apiName, path, data);

            return response
        } catch(error) {
            console.log("Error in API Call (Call Name): ", error);
            return null;
        }
    }

    */




    /*
            Here we return functions so that they can be called.
            We return them like this:

            return {
                functionOne: functionOne,
                functionTwo: functionTwo
            }

            It's important that the key and value share the same name for continuity.
    */

    return {
        getInference: getInference,
        getFileInference: getFileInference,
        checkfileinference: checkfileinference
    }
}

export default ProjectsAPI;