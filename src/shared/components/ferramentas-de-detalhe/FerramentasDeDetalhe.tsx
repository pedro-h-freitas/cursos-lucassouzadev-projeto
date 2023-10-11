import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material';
import { FC } from 'react';

interface IFerramentasDeDetalhe {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: FC<IFerramentasDeDetalhe> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar

}) => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      height={theme.spacing(5)}
      component={Paper}
    >

      {mostrarBotaoSalvarCarregando ? (
        <Skeleton width={110} height={60}/>
      ) : mostrarBotaoSalvar  && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >Salvar</Button>
      )}

      {mostrarBotaoSalvarEFecharCarregando ? (
        <Skeleton width={180} height={60}/>
      ) : mostrarBotaoSalvarEFechar && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>}
        >Salvar e voltar</Button>
      )}
      
      {mostrarBotaoApagarCarregando ? (
        <Skeleton width={110} height={60}/>
      ) : mostrarBotaoApagar && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >Apagar</Button>
      )}
      
      {mostrarBotaoNovoCarregando ? (
        <Skeleton width={110} height={60}/>
      ) : mostrarBotaoNovo && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        >{textoBotaoNovo}</Button>
      )}

      <Divider variant='middle' orientation='vertical' />

      {mostrarBotaoVoltarCarregando ? (
        <Skeleton width={110} height={60}/>
      ) : mostrarBotaoVoltar && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        >Voltar</Button>
      )}
    </Box>
  );
};
