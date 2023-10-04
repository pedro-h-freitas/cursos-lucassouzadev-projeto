import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { PaginaInicial } from '../pages/pagina-inicial/PaginaInicial';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();



    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página Inicial',
            }
        ]);
    }, []);


    return (
        <Routes>
            <Route path="/pagina-inicial" element={<PaginaInicial />} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};
