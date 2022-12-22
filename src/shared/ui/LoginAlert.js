import { GetAuthenticated } from "redux/actions/getData";
import swal from "sweetalert";

const LoginAlert = async (err) => {

    if (err.response.status === 401) {
        await GetAuthenticated();

        return swal({
            title: "ERROR",
            text: "Please login",
            icon: "error",
            timer: 2000,
            button: false
        })
    } else {
        return swal({
            title: "ERROR",
            text: err.response.data,
            icon: "error",
            timer: 2000,
            button: false
        })
    }
}

export default LoginAlert