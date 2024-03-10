import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-content items-center">
        <img src="src/assets/logo.svg" alt="logo" />

        <div className="shadow-lg rounded-lg w-4/6 text-left bg-white text-white bg-opacity-20 px-4 py-8 mt-5 backdrop-blur-lg">
          <p className="text-xl md:text-2xl mb-4 ">
            Receba sua Proof-Of-Attandance NFT
          </p>
          <p className="text-sm md:text-base">
            Para receber sua NFT você precisa ter participado do evento e ter
            uma carteira na rede Sepolia.
          </p>

          <p className="py-5 text-sm md:text-base">
            Ainda não tem uma carteira? Acesse o link e crie a sua já:{" "}
            <a className="text-blue-500 hover:underline" href="">
              Clique aqui.
            </a>
          </p>

          <form action="" className="flex flex-col text-left mt-2">
            <label className="font-bold">Nome</label>
            <span className="text-sm mb-2 text-gray-200">
              Esse nome será gravado no NFT para provar sua presença
            </span>
            <input
              className="rounded-md p-2 shadow-md text-black"
              type="text"
              name="nome"
              id=""
              placeholder="None"
            />
            <br />
            <label className="font-bold">Email</label>
            <span className="text-sm mb-2 text-gray-200">
              Email para receber novidades
            </span>
            <input
              className="rounded-md p-2 shadow-md text-black"
              type="email"
              name="email"
              id=""
              placeholder="your.email@email.com"
            />
            <br />
            <label className="font-bold">Wallet</label>
            <span className="text-sm mb-2 text-gray-200">
              Carteira para receber o NFT na rede Sepolia
            </span>
            <input
              className="rounded-md p-2 shadow-md text-black"
              type="text"
              name="wallet"
              id=""
              placeholder="0x00...0000"
            />
            <br />
            <button className="bg-blue-500 rounded-md p-2 text-xl shadow-md">
              Gerar NFT
            </button>
          </form>
        </div>
        <div className="mt-8 ">
          <a href="" className="text-gray-400 text-sm">
            <span className="flex flex-row">
              Todo o código pode ser encontrado aqui:
              <img
                src="src/assets/github.svg"
                alt=""
                className="ml-2"
                width={16}
                height={16}
              />
            </span>
          </a>
        </div>
        <div className="mt-4">
          <a href="" className="text-gray-400 text-sm">
            <span className="flex flex-row">
              Caso tenha alguma dúvida:
              <img
                src="src/assets/wpp.svg"
                alt="wpp"
                width={16}
                height={16}
                className="ml-2"
              />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
