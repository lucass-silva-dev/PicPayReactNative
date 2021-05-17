import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import{
    Container,
     Header,
     Title,
     Card,
     CardHeader,
     Avatar,
     Description,
     Bold,
     CardBody,
     UserName,
     CardFooter,
     Details,
     Value,
     Divider,
     Date,
     Actions,
     Option,
     OptionLabel,
    } from './styles';

import avatar from '../../images/avatar.png';
 
export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@victorfey</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Lucas Silva</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 1000,00</Value>

                        <Divider />

                            <Feather name="lock" color="#fff" size={14}/>
                            <Date>há 12 segundos</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14}  color="#fff"/>
                        </Option>
                        <OptionLabel>0</OptionLabel>
                        <Option>

                            <AntDesign name="hearto" size={14}  color="#fff"/>
                        </Option>
                        <OptionLabel>0</OptionLabel>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}