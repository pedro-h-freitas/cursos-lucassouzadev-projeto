import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import { PessoasServices } from '../../shared/services/api/pessoas/PessoasServices';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBasePagina } from '../../shared/layouts';
import { useDebounce } from '../../shared/hooks';

export const ListagemDePessoas = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {

    debounce(() => {
      PessoasServices.getAll(1, busca)
        .then((result) => {
          if (result instanceof Error) {
            alert(result.message);
            return;
          }
          console.log(result);
        });
    });

  }, [busca]);

  return (
    <LayoutBasePagina
      titulo="Listagem de pessoas"
      barraDeFerramentas={
        <FerramentasDaListagem 
          mostrarInputBusca
          textoBotaoNovo='Nova'
          textoDaBusca={busca}
          aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
        />
      }
    >
    </LayoutBasePagina>
  );
};
