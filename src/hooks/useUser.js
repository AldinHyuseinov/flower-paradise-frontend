import { useState, useEffect } from "react";
import { clearUserData, getUserData } from "../utils/UserUtils";
import useFetch from "./useFetch";

const API_URL = ""

function useUser() {
    const [user, setUser] = useState(getUserData());
    const requestOptions = {
        headers: {
            'Authorization': 'Bearer ' + user?.authorization
        }
    }
    const [data, error] = useFetch(API_URL, requestOptions)

    useEffect(() => {
        if (error) {

            if (user) {
                //setUser(null)
                //clearUserData()
            }
        }
    }, [user])

    return user
}

export default useUser;
