import * as yup from "yup"

const formSchema = yup.object().shape({
    name: yup   
        .string()
        .min(2, "Name must be at least 2 characters long")
        .required("Must include Name"),
    size: yup
        .string()
        .oneOf(["Small", "Medium", "Large", "Extra Large"], "You must select a size")
        .required("You must select a size"),
    sauce: yup 
        .string()
        .oneOf(["Original Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"], "You must select a sauce")
        .required("You must select a sauce"),
    specialInstructions: yup
        .string()
        .min(0, "")
        .required("")
})

export default formSchema;