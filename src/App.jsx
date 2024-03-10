import "./App.css";
import logo from "./assets/logo.svg";
import github from "./assets/github.svg";
import wpp from "./assets/wpp.svg";
import Input from "./components/Input";
import Aimg from "./components/Aimg";

function App() {
  return (
    <>
      <div className="flex flex-col justify-content items-center">
        <img src={logo} alt="logo" />

        <div className="shadow-lg rounded-lg w-4/6 text-left bg-white text-white bg-opacity-20 px-4 py-8 mt-5 backdrop-blur-lg">
          <p className="text-2xl mb-4 ">Receba sua Proof-Of-Attandance NFT</p>
          <p className="text-base">
            Para receber sua NFT você precisa ter participado do evento e ter
            uma carteira na rede Sepolia.
          </p>

          <p className="py-5 text-base">
            Ainda não tem uma carteira? Acesse o link e crie a sua já:{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://metamask.io/download/"
            >
              Clique aqui.
            </a>
          </p>

          <form action="" className="flex flex-col text-left mt-2">
            <Input
              className=""
              title="Nome"
              description="Esse nome será gravado no NFT para provar sua presença"
              type="text"
              id="name"
              placeholder="None"
            ></Input>

            <br />

            <Input
              className=""
              title="Email"
              description="Email para receber novidades"
              type="email"
              id="email"
              placeholder="your.email@email.com"
            ></Input>

            <br />

            <Input
              className=""
              title="Wallet"
              description="Carteira para receber o NFT na rede Sepolia"
              type="text"
              id="wallet"
              placeholder="0x00...0000"
            ></Input>

            <br />
            <button className="bg-blue-500 rounded-md p-2 text-xl shadow-md">
              Gerar NFT
            </button>
          </form>
        </div>

        <Aimg
          className="mt-8"
          href="https://github.com/HeitorCand/workBlockchain"
          text="Todo o código pode ser encontrado aqui: "
          src={github}
          alt="github"
        ></Aimg>
        <Aimg
          className="mt-4"
          href="https://chat.whatsapp.com/EoP5wbGPujg8vpG9f6KNWz"
          text="Caso tenha alguma dúvida: "
          src={wpp}
          alt="WhatsApp"
        ></Aimg>
      </div>
    </>
  );
}

export default App;
