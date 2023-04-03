import {useState} from 'react'
import SuggestionItem from '../SuggestionItem'

import {Maincontainer,Container,Image,SearchCon,Img,Input,Con,Ul} from './styledComponents'

const GoogleSuggestions=(props)=>{
    const {suggestionsList}=props
    const [input,setInput]=useState('')

    const searchValue=(event)=>{
        setInput(event.target.value)
    }

    const getValue=(suggestion)=>{
        setInput(suggestion)
    }

    const searchResult=suggestionsList.filter(each=>each.suggestion.toLowerCase().includes(input.toLowerCase()))

    return(
        <Maincontainer>
            <Container>
                <Image src="https://assets.ccbp.in/frontend/react-js/google-logo.png" alt="google logo"/>
                <SearchCon>
                    <Con>
                        <Img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="search icon"/>
                        <Input type="search" placeholder="Search Google" value={input} onChange={searchValue} />
                    </Con>
                    <Ul>
                        {searchResult.map(each=>
                            <SuggestionItem details={each} search={getValue} key={each.id}/>
                            )}
                    </Ul>
                </SearchCon>
            </Container>
        </Maincontainer>
    )

}

export default GoogleSuggestions