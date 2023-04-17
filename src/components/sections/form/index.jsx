import React, { useState } from 'react';
import * as S from './styles';
import TextField from '../../micro/textField';

const Form = () => {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [course, setCourse] = useState('');

    const [nameSave, setNameSave] = useState('');
    const [cpfSave, setCpfSave] = useState('');
    const [rgSave, setRgSave] = useState('');
    const [courseSave, setCourseSave] = useState('');

    const handleClick = () => {
        setNameSave(name);
        setCpfSave(cpf);
        setRgSave(rg);
        setCourseSave(course);
        alert('Dados salvos com sucesso!');
    }

    return (
        <S.Container>
            <S.WrapperContent>
            <S.Wrapper>
                <TextField placeholder='Aberlado Alves Brum' onChange={(e)=>{setName(e.target.value)}} children='Digite seu nome:' text='Nome'/>
                <TextField placeholder='183.662.036-54' type='number' onChange={(e)=>{setCpf(e.target.value)}} children='Digite seu CPF:' text='CPF'/>
                <TextField placeholder='11.636.675-8' type='number' onChange={(e)=>{setRg(e.target.value)}} children='Digite seu RG:' text='RG'/>
                <TextField placeholder='Engenharia de Software' onChange={(e)=>{setCourse(e.target.value)}} children='Digite seu Curso:' text='Curso'/>
            </S.Wrapper>
            <S.WrapperPrevious>
                <S.Title>Dados - Prévia</S.Title>
                <S.Text>Nome: {name} </S.Text>
                <S.Text>CPF: {cpf}</S.Text>
                <S.Text>RG: {rg} </S.Text>
                <S.Text>Curso: {course} </S.Text>
                <S.TitleResume>Resumo - Dados Cadastrados</S.TitleResume>
                <S.Text>Nome: {nameSave} </S.Text>
                <S.Text>CPF: {cpfSave}</S.Text>
                <S.Text>RG: {rgSave}</S.Text>
                <S.Text>Curso: {courseSave}</S.Text>
            </S.WrapperPrevious>
            </S.WrapperContent>
            <S.WrapperButton>
             <S.ButtonForm onClick={handleClick} children='Inscrever' />
            </S.WrapperButton>
        </S.Container>
    )
}

export default Form;