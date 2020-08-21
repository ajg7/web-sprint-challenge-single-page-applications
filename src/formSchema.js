import * as yup from "yup"

const formSchema = yup.object().shape({
    name: yup   
        .string()
        .min(2, "Name must be at least 2 characters long")
        .required("Must include Name")
})

export default formSchema;