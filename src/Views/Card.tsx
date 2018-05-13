import * as React from 'react'
import View, { Props } from '../Primitives/View'
import { color } from '../Configs'

// Internal components
import CardHeader from './CardHeader'

class Card extends React.Component<Props, never>
{

  static CardHeader = CardHeader

  render()
  {
    const {
      backgroundColor,
      children,
      ...restProps,
    } = this.props
    return (
      <View
        backgroundColor={backgroundColor || color.white}
        {...restProps}
      >
        {children}
      </View>
    )
  }
}


export default Card


