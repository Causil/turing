import FormTest from "../../../components/FormTest/FormTest"
import {

} from './TestFormElements'

const TestForm = ({setNavbutton}) => {
    setNavbutton(false)
    return(
        <> 
            <FormTest />
        </>
    )
}
export default TestForm