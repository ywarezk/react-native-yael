import React from 'react';
import { View, Text, Button} from 'react-native';

export class Hello extends React.Component {
    state = {
        isVisible : true
    }

    componentDidMount() {
        
    }

    toggleVisibility = () => {
        console.log('user pressed my button');

        // this.setState({
        //     isVisible: !this.state.isVisible
        // })

        this.setState((state) => {

            return {
                isVisible: !state.isVisible
            }

        })
    }

    render() {
        const message = this.props.message // {message: '...'}
        // if (...) {
        //     return null`
        // }

        return (
            <>
                <View style={ {flex: 1, justifyContent: 'center', alignItems: 'center'} }>
                    {
                        (() => {
                            if (this.state.isVisible) {
                                return (
                                    <>
                                        <Text style={ {fontSize: 20, color: 'red', backgroundColor: 'blue'} } >{message}</Text>                            
                                    </>
                                )
                            }
                        })()


                        
                    }   

                    {
                        this.state.isVisible && (<Text style={ {fontSize: 20, color: 'red', backgroundColor: 'blue'} } >{message}</Text>    )
                    } 

                    {
                        this.state.isVisible ?  <Text style={ {fontSize: 20, color: 'red', backgroundColor: 'blue'} } >{message}</Text> : null
                    }

                    {
                        !this.state.isVisible ?  null : <Text style={ {fontSize: 20, color: 'red', backgroundColor: 'blue'} } >{message}</Text>
                    }

                    {
                        !this.state.isVisible || (<Text style={ {fontSize: 20, color: 'red', backgroundColor: 'blue'} } >{message}</Text>    )
                    }

                    
                    
                    <Button title="toggle visibility" onPress={this.toggleVisibility} />
                </View>
            </>
        )
    }
}

