import { Header } from "./components/layout/Header";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Conteúdo temporário para testar o header */}
      <main className="pt-20">
        {/* Seções temporárias para testar scroll spy */}
        <section
          id="empresa"
          className="min-h-screen bg-white flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">EMPRESA</h1>
            <p className="text-xl text-gray-600">Sobre a PURIFLOW</p>
          </div>
        </section>

        <section
          id="servicos"
          className="min-h-screen bg-gray-100 flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SERVIÇOS</h1>
            <p className="text-xl text-gray-600">
              Limpeza especializada industrial
            </p>
          </div>
        </section>

        <section
          id="orcamento"
          className="min-h-screen bg-white flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">ORÇAMENTO</h1>
            <p className="text-xl text-gray-600">
              Solicite seu orçamento gratuito
            </p>
          </div>
        </section>

        <section
          id="duvidas"
          className="min-h-screen bg-gray-100 flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">DÚVIDAS</h1>
            <p className="text-xl text-gray-600">Perguntas frequentes</p>
          </div>
        </section>

        <section
          id="contatos"
          className="min-h-screen bg-white flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">CONTATOS</h1>
            <p className="text-xl text-gray-600">Entre em contato conosco</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
