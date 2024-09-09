import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default function ActivityDetails() {
    const {activityStore} = useStore();
    const{selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

    if(!activity) return;
    
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}  />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit'></Button>
                    <Button basic color='grey' content='Cancel' onClick={() => cancelSelectedActivity()}></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}