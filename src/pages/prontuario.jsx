import { ChevronLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function Prontuario() {
  return (
    <div className="mt-20">
      <div className="mx-auto max-w-5xl p-5 bg-opacity-10 relative">
        <Link to="/" className="flex mb-2">
          <ChevronLeft />
          Voltar
        </Link>
        <div className="flex h-[200px] bg-[#f3f4f6] p-5 rounded-md shadow">
          <div className="flex justify-center items-center">
            <img
              src="https://api.sofascore.app/api/v1/player/70988/image"
              className="w-[100px] h-[100px] rounded-full object-cover"
              alt=""
            />
            <div className="ml-5 mt-2">
              <div className="grid grid-cols-3 gap-x-8">
                <div>
                  <div className="text-2xl font-extrabold mb-2">
                    Thibaut Courtois
                  </div>
                  <div>
                    <span className="font-bold">Posição:</span> Goleiro
                  </div>
                  <div className="flex items-center gap-1 ">
                    <span className="font-bold">Nacionalidade:</span>
                    <img
                      src={`https://www.sofascore.com/static/images/flags/be.png`}
                      alt="flag"
                      className="w-4 h-4"
                    />
                  </div>
                  <div>
                    <span className="font-bold">Idade:</span> 32 anos
                  </div>
                  <div>
                    <span className="font-bold">Altura:</span> 2.00m
                  </div>
                </div>

                <div className="mt-10">
                  {/* <div className="text-2xl font-bold">Thibaut Courtois</div> */}
                  <div>
                    <span className="font-bold">Peso:</span> 86kg
                  </div>
                  <div>
                    <span className="font-bold">Pé preferido:</span> Esquerdo
                  </div>
                  <div>
                    <span className="font-bold">Status de Lesão:</span>{" "}
                    <span className="text-green-600">Liberado</span>
                  </div>
                  {/* <div>
                    <span className="font-bold">Altura:</span> 2.00m
                  </div> */}
                </div>

                {/* <div className="mt-8">
                  <div>
                    <span className="font-bold">Posição:</span> Goleiro
                  </div>
                  <div>
                    <span className="font-bold">Nacionalidade:</span> Goleiro
                  </div>
                  <div>
                    <span className="font-bold">Idade:</span> 32 anos
                  </div>
                  <div>
                    <span className="font-bold">Altura:</span> 2.00m
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 bg-[#f3f4f6] p-5 rounded-md shadow">
          <div className="text-lg font-medium">Atendimentos Médicos:</div>

          <table className="table-fixed border-collapse w-full mt-5">
            <thead>
              <tr className="text-left border-b pb-2">
                <th className="border p-2">Data</th>
                <th className="border p-2">Médico</th>
                <th className="border p-2">Medicações</th>
                <th className="border p-2">Observações</th>
              </tr>
            </thead>
            <tbody className="mt-2">
              <tr className="py-2 hover:bg-slate-200 transition-all">
                <td className="border p-2">19/06/2024</td>
                <td className="border p-2">Alisson</td>
                <td className="border p-2">Paracetamol</td>
                <td className="border p-2">*</td>
              </tr>
              <tr className="py-2 hover:bg-slate-200 transition-all">
                <td className="border p-2">19/06/2024</td>
                <td className="border p-2">Alisson</td>
                <td className="border p-2">Paracetamol</td>
                <td className="border p-2">*</td>
              </tr>
              <tr className="py-2 hover:bg-slate-200 transition-all">
                <td className="border p-2">19/06/2024</td>
                <td className="border p-2">Alisson</td>
                <td className="border p-2">Paracetamol</td>
                <td className="border p-2">*</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 bg-[#f3f4f6] p-5 rounded-md shadow">
          <div className="text-lg font-medium">Exames Médicos:</div>

          <table className="table-fixed border-collapse w-full mt-5">
            <thead>
              <tr className="text-left border-b pb-2">
                <th className="border p-2">Data</th>
                <th className="border p-2">Médico</th>
                <th className="border p-2">Tipo do Exame</th>
                <th className="border p-2">Anexo</th>
              </tr>
            </thead>
            <tbody className="mt-2">
              <tr className="py-2 hover:bg-slate-200 transition-all">
                <td className="border p-2">19/06/2024</td>
                <td className="border p-2">Alisson</td>
                <td className="border p-2">Ressonância</td>
                <td className="border p-2">
                  <FileText />
                </td>
              </tr>
              <tr className="py-2 hover:bg-slate-200 transition-all">
                <td className="border p-2">18/06/2024</td>
                <td className="border p-2">Alisson</td>
                <td className="border p-2">Raio-X</td>
                <td className="border p-2">
                  <FileText />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 bg-[#f3f4f6] p-5 rounded-md shadow">
          <div className="text-lg font-medium">Queixas/Dores do Atleta</div>

          <table className="table-fixed border-collapse w-full mt-5">
            <thead>
              <tr className="text-left border-b pb-2">
                <th className="border p-2">Data</th>
                <th className="border p-2">Local da Dor</th>
                <th className="border p-2">Intensidade</th>
                <th className="border p-2">Observações</th>
              </tr>
            </thead>
            <tbody className="mt-2">
              <tr className="py-2 hover:bg-slate-200 transition-all">
                <td className="border p-2">19/06/2024</td>
                <td className="border p-2">Lombar</td>
                <td className="border p-2 text-red-600 font-bold">ALTA</td>
                <td className="border p-2">*</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 bg-[#f3f4f6] p-5 rounded-md shadow">
          <div className="text-lg font-medium">
            Histórico de Lesões do Atleta
          </div>

          <table className="table-auto border-collapse w-full mt-5">
            <thead>
              <tr className="text-left border-b pb-2">
                <th className="border p-2">Data</th>
                <th className="border p-2">Local da Lesão</th>
                <th className="border p-2">Tipo da Lesão</th>
                <th className="border p-2">Tempo de Afastamento</th>
                <th className="border p-2">Observações</th>
              </tr>
            </thead>
            <tbody className="mt-2">
              <tr className="py-2 hover:bg-slate-200 transition-all">
                <td className="border p-2">03/06/2024</td>
                <td className="border p-2">Panturilha</td>
                <td className="border p-2 ">ligamentar</td>
                <td className="border p-2">
                  4 semanas <span className="text-sm">(faltam 2 semanas)</span>
                </td>
                <td className="border p-2">*</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
