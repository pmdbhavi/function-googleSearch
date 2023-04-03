import {Li,Para,Im,Button} from './styledComponents'

const SuggestionItem=(props)=>{
    const {details,search}=props
    const {suggestion}=details
    const onSearch=()=>{
        search(suggestion)
    }

    return(
        <Li>
            <Para>{suggestion}</Para>
            <Button onClick={onSearch} type="button"><Im src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="arrow"/></Button>
        </Li>
    )
}

export default SuggestionItem