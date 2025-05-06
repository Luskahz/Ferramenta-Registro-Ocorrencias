import { Title, Block } from "../index";

export default function EquipeCard({
  emRota = 8,
  chegaram = 5,
}) {
  return (
    <Block.Full className="flex flex-col border-2 border-[var(--gray-80)] p-4">
      <Title.Sm_L>Status das Equipes</Title.Sm_L>
      <div className="mt-2 grid grid-cols-2 gap-4 text-[var(--gray-60)] text-sm">
        {/* componente: IndicadorSecundario */}
        <div>
          <span className="font-medium">Em rota:</span> {emRota}
        </div>
        {/* componente: IndicadorSecundario */}
        <div>
          <span className="font-medium">Chegaram:</span> {chegaram}
        </div>
      </div>
    </Block.Full>
  );
}