

import React from 'react';
import { FlatList, Text} from 'react-native';

export default class Todo extends React.Component {
    state = {
        todoTasks: []
    }

    /**
     * fetch the tasks from the server
     * populate the state
     */
    async componentDidMount() {
        setTimeout(() => {
            this.setState({
                todoTasks: [{"id":9797,"title":"dd","description":"dd","group":"dd","when":"2019-08-30T01:50:25.250000Z"},{"id":9798,"title":"hello","description":"world","group":"test","when":"2019-09-07T18:27:32.960000Z"},{"id":9799,"title":"hello","description":"world","group":"test","when":"2019-09-07T18:27:44.927000Z"},{"id":9800,"title":"hello","description":"world","group":"test","when":"2019-09-07T18:32:42.462000Z"},{"id":9801,"title":"hello","description":"world","group":"test","when":"2019-09-07T18:33:18.702000Z"},{"id":9726,"title":"565","description":"new","group":"33","when":"2018-12-06T14:01:00Z"},{"id":9730,"title":"rachel","description":"new","group":"33","when":"2018-12-06T14:01:00Z"},{"id":9773,"title":"start","description":"new task","group":"aaaaaa","when":"2019-03-05T21:00:00Z"},{"id":9781,"title":"sdgas","description":"dfgdf","group":"dgdf","when":"2018-01-01T11:11:00Z"},{"id":9787,"title":"new1","description":"new1","group":"new1","when":"2019-04-17T12:12:00Z"},{"id":9796,"title":"go home","description":"jfhjfgjfj","group":"bla","when":"2019-04-27T00:00:00Z"}]
            });
        }, 1000)
        // try {
        //     const response = await fetch('http://nztodo.herokuapp.com/api/task/?format=json');
        //     const tasks = await response.json();
        //     this.setState({
        //         todoTasks: tasks
        //     })
        // } catch(err) {
        //     console.log(err);
        // }
    }

    render() {
        return (
            <FlatList 
                data={this.state.todoTasks}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                keyExtractor={item => item.id}
            />
        )

    }
}