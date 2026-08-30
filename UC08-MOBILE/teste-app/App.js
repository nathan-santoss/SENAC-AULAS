import React from 'react';
import Cadastro from './src/pages/Cadastro';

export default function App() {
  // Aqui eu chamo apenas a página principal de cadastro.
  // Com isso o arquivo de entrada do aplicativo fica extremamente limpo e organizado.
  return (
    <Cadastro />
  );
}