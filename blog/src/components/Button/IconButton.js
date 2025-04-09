import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BaseButton } from './BaseButton'

const StyleButton = styled(BaseButton)`
    // Inject theme styles here later
`

export const IconButton = styled(({ icon, ...rest }) => {
    let clone = React.cloneElement{icon, rest}
    return <StyleButton {...rest} className={rest.className}>{clone}</StyleButton>
})`
    //We could add styles here, but is not neccesary.
    // The main reason this is a styled component is to wrap the styled icon passed in as a prop.
`

IconButton.defaultProps = {
    size: 24
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired
}