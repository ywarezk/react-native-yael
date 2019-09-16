

export default function Hello(props) {
    const message = props.message // {message: '...'}
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