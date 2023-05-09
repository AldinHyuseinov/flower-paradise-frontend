import { useEffect, useRef } from "react";
import { getUserData } from "../utils/UserUtils";

const API_URL = ""

function useUser() {
    const user = useRef(getUserData())

    useEffect(() => {
        const requestOptions = {
            headers: {
                'Authorization': 'Bearer ' + user.authorization
            }
        }

        fetch(API_URL, requestOptions)
            .then(response => response.json())
            .catch(() => {

                if (user.current) {
                    user.current = null
                }
            })
    }, [])

    return user.current
}

export default useUser;